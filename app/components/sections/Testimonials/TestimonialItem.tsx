"use client";
import { useState } from "react";
import TestimonialRating from "./TestimonialRating";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import type { Testimonial } from "@/lib/types";

interface TestimonialItemProps {
  testimonial: Testimonial;
}

const CHAR_LIMIT = 180;

// Truncate at word boundary
function truncateText(text: string, limit: number): string {
  if (text.length <= limit) return text;

  const truncated = text.slice(0, limit);
  const lastSpace = truncated.lastIndexOf(" ");

  return truncated.slice(0, lastSpace) + "...";
}

export default function TestimonialItem({ testimonial }: TestimonialItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const needsTruncation = testimonial.text.length > CHAR_LIMIT;

  const displayText =
    needsTruncation && !isExpanded
      ? truncateText(testimonial.text, CHAR_LIMIT)
      : testimonial.text;

  const initials = testimonial.authorName
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className={cn(
        "flex h-full flex-col gap-6 rounded-2xl p-8",
        COMMON_CLASSES.CARD_BG,
      )}
    >
      <div className="flex min-h-[4rem] shrink-0 gap-4">
        <div
          className="flex size-16 flex-none items-center justify-center rounded-full bg-primary/15 text-lg font-bold text-primary"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="flex flex-auto flex-col justify-center">
          <div
            className="line-clamp-1 text-base font-semibold text-base-content dark:text-base-100"
            title={testimonial.authorName}
          >
            {testimonial.authorName}
          </div>
          <div
            className="line-clamp-2 text-sm text-secondary/60 dark:text-base-400"
            title={testimonial.authorRole}
          >
            {testimonial.authorRole}
          </div>
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col">
        <div
          className={cn(
            "overflow-hidden transition-all duration-300",
            !isExpanded && "max-h-[7.5rem]",
          )}
        >
          <p className="text-sm leading-relaxed text-secondary/60 dark:text-base-400">
            {displayText}
          </p>
        </div>
        {needsTruncation && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-left text-sm font-semibold text-primary underline-offset-2 transition-all duration-200 hover:text-primary/80 hover:underline"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>
      <div className="mt-auto flex shrink-0 gap-0.5 text-lg text-primary">
        <TestimonialRating rating={testimonial.rating} />
      </div>
    </div>
  );
}
