"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { fadeInUp, useReducedMotion, getTransition } from "@/lib/utils/animations";
import { COMMON_CLASSES } from "@/lib/constants/colors";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  const { ref, isInView } = useScrollAnimation();
  const reducedMotion = useReducedMotion();

  const sectionTitleClass =
    "mb-3 text-center text-2xl font-bold leading-8 md:mb-4 md:text-3xl " +
    COMMON_CLASSES.TEXT;
  const sectionSubtitleClass =
    "mx-auto mb-10 max-w-[438px] text-center text-sm leading-6 md:mb-12 " +
    COMMON_CLASSES.TEXT_MUTED;

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={getTransition(reducedMotion, 0.6)}
      className="mb-8"
    >
      <h2 className={sectionTitleClass}>{title}</h2>
      <p className={sectionSubtitleClass}>{subtitle}</p>
    </motion.div>
  );
}
