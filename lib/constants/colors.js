import { clsx } from "clsx";

/**
 * Reusable class combinations based on tailwind.config.js
 * These constants eliminate hardcoded dark mode colors throughout the app
 */
export const COMMON_CLASSES = {
  CARD_BG: "bg-base-100 dark:bg-[#1C1C1C]",
  PAGE_BG: "bg-base dark:bg-[#000000]",
  INPUT_BG: "bg-base-200 dark:bg-[#131313]",
  TEXT: "text-base-content dark:text-base-100",
  TEXT_MUTED: "text-secondary/60 dark:text-base-400",
  DIVIDER: "divide-secondary/10 dark:divide-base-800",
};

/**
 * Re-export clsx for convenience
 * Usage: cn("base-class", condition && "conditional-class")
 */
export { clsx as cn };
