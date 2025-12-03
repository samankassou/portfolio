"use client";

import { useState, FormEvent } from "react";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "An error occurred");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("rounded-xl p-6 shadow-sm", COMMON_CLASSES.CARD_BG)}
      id="contact"
    >
      <h3 className="mb-6 text-left text-xl font-bold text-base-content dark:text-base-100">
        Leave a message
      </h3>
      <div className="grid grid-cols-2 gap-5">
        <div className="col-span-2 lg:col-span-1">
          <label
            htmlFor="name"
            className="mb-2 block text-sm font-normal text-base-content dark:text-base-100"
          >
            Name
          </label>
          <input
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={cn(
              "block w-full rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-primary",
              COMMON_CLASSES.INPUT_BG,
              COMMON_CLASSES.TEXT,
            )}
          />
        </div>
        <div className="col-span-2 lg:col-span-1">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-normal text-base-content dark:text-base-100"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={cn(
              "block w-full rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-primary",
              COMMON_CLASSES.INPUT_BG,
              COMMON_CLASSES.TEXT,
            )}
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="subject"
            className="mb-2 block text-sm font-normal leading-5 text-base-content dark:text-base-100"
          >
            Subject
          </label>
          <input
            id="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={cn(
              "block w-full rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-primary",
              COMMON_CLASSES.INPUT_BG,
              COMMON_CLASSES.TEXT,
            )}
          />
        </div>
        <div className="col-span-2">
          <label
            htmlFor="message"
            className="mb-2 block text-sm font-normal leading-5 text-base-content dark:text-base-100"
          >
            Message
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            className={cn(
              "block w-full rounded-lg px-4 py-3 text-sm focus:border-primary focus:ring-primary md:h-44",
              COMMON_CLASSES.INPUT_BG,
              COMMON_CLASSES.TEXT,
            )}
            rows={5}
          ></textarea>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            disabled={status === "loading"}
            className="rounded-lg bg-primary px-5 py-3 font-medium text-base-content transition-colors hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-base-100 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-[#1C1C1C]"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {/* Success Message */}
          {status === "success" && (
            <div className="mt-4 rounded-lg bg-accent/10 p-4 text-accent">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="mt-4 rounded-lg bg-red-500/10 p-4 text-red-500">
              ✗ {errorMessage || "Failed to send message. Please try again."}
            </div>
          )}
        </div>
      </div>
    </form>
  );
}
