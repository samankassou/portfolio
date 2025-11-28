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
      className={`hero-wave-bg mb-12 overflow-hidden rounded-2xl ${COMMON_CLASSES.CARD_BG}`}
    >
      <div className="relative z-10 grid items-center md:grid-cols-2">
        <div className="p-6 sm:p-8 md:p-12">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.1 }}
            className={`mb-4 text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl ${COMMON_CLASSES.TEXT}`}
          >
            I build solutions that{" "}
            <span className="text-primary">transform</span> businesses with data
            and AI.
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.2 }}
            className="md:text-md mb-6 max-w-md text-sm leading-relaxed text-secondary/60 dark:text-white/60 sm:mb-8"
          >
            Hi! I'm Foulla, a Software Engineer based in Douala, Cameroon. I
            specialize in Business Intelligence, AI & Automation, Cloud
            Solutions, and Full-Stack Development.
          </motion.p>
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.3 }}
          >
            <Btn href="#contact" label="Let's Talk" />
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
