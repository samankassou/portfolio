"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";
import Btn from "@/app/components/ui/Button";
import { projects } from "@/lib/data/projects";
import {
  fadeIn,
  fadeInUp,
  pulse,
  useReducedMotion,
  getTransition,
} from "@/lib/utils/animations";

export default function PortfolioProject() {
  const params = useParams();
  const router = useRouter();
  const reducedMotion = useReducedMotion();

  // Find project by ID from params
  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId);

  // Handle invalid project ID
  const projectTitle = project?.title || "Portfolio Project";
  const projectLink = project?.link || "Project Details";

  return (
    <div
      className={`flex min-h-screen items-center justify-center p-4 ${COMMON_CLASSES.PAGE_BG}`}
    >
      <motion.main
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={getTransition(reducedMotion, 0.6)}
        className={`w-full max-w-xl rounded-2xl p-8 text-center sm:p-12 ${COMMON_CLASSES.CARD_BG}`}
      >
        {/* Animated Icon */}
        <motion.div
          variants={pulse}
          initial="initial"
          animate="animate"
          transition={
            reducedMotion
              ? { duration: 0 }
              : {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
          className="mb-8 flex justify-center"
        >
          <Icon
            name="folder"
            className="text-8xl text-primary"
            aria-label="Coming Soon"
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.1 }}
          className={`mb-4 text-4xl font-bold md:text-5xl ${COMMON_CLASSES.TEXT}`}
        >
          Coming Soon
        </motion.h1>

        {/* Project Title */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.2 }}
          className="mb-3 text-xl font-semibold text-primary md:text-2xl"
        >
          {projectTitle}
        </motion.h2>

        {/* Project Link/Subtitle */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.25 }}
          className={`mb-6 text-sm font-medium md:text-base ${COMMON_CLASSES.TEXT_MUTED}`}
        >
          {projectLink}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.3 }}
          className={`mx-auto mb-8 max-w-md text-base ${COMMON_CLASSES.TEXT_MUTED}`}
        >
          This project case study is currently being prepared. Check back soon
          to see detailed insights, process, and results of this work!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.4 }}
        >
          <Btn
            href="/#portfolio"
            label="View All Projects"
            iconName="arrow-back"
            onClick={(e) => {
              e.preventDefault();
              router.push("/#portfolio");
            }}
          />
        </motion.div>
      </motion.main>
    </div>
  );
}
