"use client";
import { useState } from "react";
import Image from "next/image";
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

  const displayText = needsTruncation && !isExpanded
    ? truncateText(testimonial.text, CHAR_LIMIT)
    : testimonial.text;

  return (
    <div className={cn("flex flex-col gap-6 rounded-2xl p-8 h-full", COMMON_CLASSES.CARD_BG)}>
      <div className="flex gap-4 shrink-0 min-h-[4rem]">
        <Image
          className="size-16 flex-none rounded-full object-cover"
          src={testimonial.authorProfilePic}
          width={64}
          height={64}
          alt={testimonial.authorName}
        />
        <div className="flex-auto flex flex-col justify-center">
          <div
            className="text-base font-semibold text-base-content dark:text-base-100 line-clamp-1"
            title={testimonial.authorName}
          >
            {testimonial.authorName}
          </div>
          <div
            className="text-sm text-secondary/60 dark:text-base-400 line-clamp-2"
            title={testimonial.authorRole}
          >
            {testimonial.authorRole}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col min-h-0">
        <div className={cn(
          "transition-all duration-300 overflow-hidden",
          !isExpanded && "max-h-[7.5rem]"
        )}>
          <p className="text-sm leading-relaxed text-secondary/60 dark:text-base-400">
            {displayText}
          </p>
        </div>
        {needsTruncation && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-3 text-sm font-semibold text-primary hover:text-primary/80 transition-all duration-200 hover:underline underline-offset-2 text-left"
            aria-expanded={isExpanded}
          >
            {isExpanded ? "Voir moins" : "Lire plus"}
          </button>
        )}
      </div>
      <div className="flex gap-0.5 text-lg text-primary shrink-0 mt-auto">
        <TestimonialRating rating={testimonial.rating} />
      </div>
    </div>
  );
}
