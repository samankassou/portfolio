"use client";

import { useChristmasMode } from "@/app/components/providers/ChristmasProvider";
import { useReducedMotion } from "@/lib/utils/animations";
import { motion } from "framer-motion";

interface ChristmasOrnamentProps {
  size?: number;
  className?: string;
}

export default function ChristmasOrnament({ size = 24, className = "" }: ChristmasOrnamentProps) {
  const { christmasMode } = useChristmasMode();
  const reducedMotion = useReducedMotion();

  if (christmasMode !== 'enabled') return null;

  return (
    <motion.div
      animate={reducedMotion ? undefined : { rotate: [-2, 2, -2] }}
      transition={reducedMotion ? undefined : { duration: 3, repeat: Infinity }}
      className={`christmas-ornament ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="14" r="8" className="ornament-ball" />
        <rect x="10" y="4" width="4" height="4" rx="1" className="ornament-cap" />
        <line x1="12" y1="4" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    </motion.div>
  );
}
