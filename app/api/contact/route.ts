import { NextResponse } from "next/server";
import { Resend } from "resend";

const FIELD_LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 5_000,
} as const;

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
}

function isContactPayload(value: unknown): value is ContactPayload {
  if (!value || typeof value !== "object") return false;

  const payload = value as Record<string, unknown>;
  return (
    typeof payload.name === "string" &&
    typeof payload.email === "string" &&
    typeof payload.subject === "string" &&
    typeof payload.message === "string" &&
    (payload.website === undefined || typeof payload.website === "string")
  );
}

function escapeHtml(value: string): string {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        "'": "&#39;",
        '"': "&quot;",
      })[character] ?? character,
  );
}

function isRateLimited(request: Request): boolean {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const clientId =
    request.headers.get("x-real-ip") ??
    forwardedFor?.split(",")[0]?.trim() ??
    "unknown";
  const now = Date.now();
  const recentRequests = (requestLog.get(clientId) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) return true;

  requestLog.set(clientId, [...recentRequests, now]);
  return false;
}

export async function POST(request: Request) {
  try {
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 415 },
      );
    }

    if (isRateLimited(request)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(RATE_LIMIT_WINDOW_MS / 1_000) },
        },
      );
    }

    const body: unknown = await request.json();

    if (!isContactPayload(body)) {
      return NextResponse.json(
        { error: "Invalid request payload" },
        { status: 400 },
      );
    }

    // Hidden honeypot field: bots see a success response and do not retry.
    if (body.website) {
      return NextResponse.json({ message: "Message sent successfully!" });
    }

    const payload = {
      name: body.name.trim(),
      email: body.email.trim(),
      subject: body.subject.trim(),
      message: body.message.trim(),
    };

    if (Object.values(payload).some((value) => value.length === 0)) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 },
      );
    }

    const oversizedField = Object.entries(FIELD_LIMITS).find(
      ([field, maxLength]) =>
        payload[field as keyof typeof payload].length > maxLength,
    );
    if (oversizedField) {
      return NextResponse.json(
        { error: `${oversizedField[0]} is too long` },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(payload.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    if (!apiKey || !contactEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL");
      return NextResponse.json(
        { error: "The contact form is temporarily unavailable." },
        { status: 503 },
      );
    }

    const resend = new Resend(apiKey);
    const safe = {
      name: escapeHtml(payload.name),
      email: escapeHtml(payload.email),
      subject: escapeHtml(payload.subject),
      message: escapeHtml(payload.message).replace(/\n/g, "<br>"),
    };
    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ??
        "Portfolio Contact <portfolio@samankassou.com>",
      to: contactEmail,
      replyTo: payload.email,
      subject: `Portfolio Contact: ${payload.subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Subject:</strong> ${safe.subject}</p>
        <hr />
        <p><strong>Message:</strong></p>
        <p>${safe.message}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send message. Please try again later." },
        { status: 502 },
      );
    }

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}
