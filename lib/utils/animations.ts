"use client";

import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

// Accessibility: Detect reduced motion preference
export function useReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}

// Helper: Get transition based on reduced motion
export function getTransition(reducedMotion: boolean, duration = 0.5) {
  return reducedMotion
    ? { duration: 0 }
    : { duration, ease: [0, 0, 0.2, 1] as [number, number, number, number] };
}

// Variant: Fade in with subtle slide up
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Variant: Fade in only
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// Variant: Stagger container for lists
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variant: Scale and fade (for cards)
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

// Variant: Pulse animation (for breathing effect)
export const pulse: Variants = {
  initial: { scale: 1, opacity: 0.8 },
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.8, 1, 0.8],
  },
};
