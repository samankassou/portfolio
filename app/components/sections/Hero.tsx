"use client";

import { profileData } from "@/lib/data/profile";
import BrandIcon from "@/app/components/ui/BrandIcon";
import Btn from "../ui/Button";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeIn,
  getTransition,
  useReducedMotion,
} from "@/lib/utils/animations";

export default function HeroSection() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      transition={getTransition(reducedMotion, 0.6)}
      className={`hero-wave-bg mb-10 overflow-hidden rounded-2xl md:mb-16 ${COMMON_CLASSES.CARD_BG}`}
    >
      <div className="relative z-10">
        <div className="mx-auto max-w-5xl p-6 sm:p-8 md:px-12 md:py-16">
          <p className="mb-2 text-base font-semibold text-base-content dark:text-base-100">
            {profileData.name}
          </p>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.05 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm"
          >
            Azure DevOps &amp; .NET Engineer
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.1 }}
            className={`mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl ${COMMON_CLASSES.TEXT}`}
          >
            Reliable applications. Built for Azure.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.2 }}
            className="md:text-md mb-6 max-w-2xl text-sm leading-relaxed text-base-800 dark:text-base-300 sm:mb-8"
          >
            I build .NET applications, modernize legacy systems, and deliver
            them on Microsoft Azure.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.3 }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <Btn href="/portfolio/4" label="Explore Azure case study" />
              <a
                href="#contact"
                className="inline-flex min-h-11 items-center rounded-full border border-secondary/15 px-5 py-2 text-sm font-semibold text-base-content transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-base-700 dark:text-base-100"
              >
                Contact me
              </a>
            </div>
            <div className="mt-7 border-t border-secondary/10 pt-5 dark:border-white/10">
              <p className="mb-3 text-xs font-medium text-base-800 dark:text-base-400">
                My core toolkit
              </p>
              <ul
                className="flex flex-wrap gap-x-5 gap-y-3"
                aria-label="Core technologies"
              >
                {["Microsoft Azure", "Azure DevOps", ".NET", "Docker"].map(
                  (name) => (
                    <li
                      key={name}
                      className="flex items-center gap-2 text-xs font-medium text-base-content dark:text-base-100"
                    >
                      <BrandIcon name={name} size={24} />
                      {name}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-base-800 dark:text-base-400">
              <p>Microsoft certified</p>
              <ul
                className="flex flex-wrap gap-4"
                aria-label="Microsoft certifications"
              >
                <li>AZ-400</li>
                <li>AZ-204</li>
                <li>AZ-900</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
