"use client";

import Btn from "../ui/Button";
import Image from "next/image";
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
      className={`hero-wave-bg mb-16 overflow-hidden rounded-2xl ${COMMON_CLASSES.CARD_BG}`}
    >
      <div className="relative z-10 grid items-center md:grid-cols-2">
        <div className="p-6 sm:p-8 md:p-12">
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.05 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary sm:text-sm"
          >
            Azure DevOps Engineer · Azure &amp; .NET Software Engineer
          </motion.p>
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.1 }}
            className={`mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl ${COMMON_CLASSES.TEXT}`}
          >
            I build, deploy, and modernize{" "}
            <span className="text-primary">reliable applications</span> on
            Microsoft Azure.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.2 }}
            className="md:text-md mb-6 max-w-md text-sm leading-relaxed text-secondary/60 dark:text-white/60 sm:mb-8"
          >
            .NET engineering and Azure DevOps experience across application
            analysis, design, development, cloud migration, and deployment.
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
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.12em] text-secondary/55 dark:text-white/50">
              Microsoft certified · AZ-400 · AZ-204 · AZ-900
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            ...getTransition(reducedMotion, 0.8),
            delay: 0.2,
          }}
          className="relative hidden h-[500px] md:block"
        >
          <Image
            src="/img/hero/foulla-picture.png"
            alt="Professional portrait"
            fill
            priority
            className="object-cover object-top"
            sizes="(min-width: 1024px) 500px, 100vw"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
