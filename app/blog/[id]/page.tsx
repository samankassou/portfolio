"use client";

import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";
import Btn from "@/app/components/ui/Button";
import { blogs } from "@/lib/data/blogs";
import {
  fadeIn,
  fadeInUp,
  pulse,
  useReducedMotion,
  getTransition,
} from "@/lib/utils/animations";

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const reducedMotion = useReducedMotion();

  // Find blog by ID from params
  const blogId = Number(params.id);
  const blog = blogs.find((b) => b.id === blogId);

  // Handle invalid blog ID
  const blogTitle = blog?.title || "Blog Post";

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
            name="newspaper-outline"
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

        {/* Blog Title */}
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.2 }}
          className="mb-6 text-xl font-semibold text-primary md:text-2xl"
        >
          {blogTitle}
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.3 }}
          className={`mx-auto mb-8 max-w-md text-base ${COMMON_CLASSES.TEXT_MUTED}`}
        >
          This blog post is currently being crafted with care. Check back soon
          for insights and perspectives on software development and technology!
        </motion.p>

        {/* CTA Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ ...getTransition(reducedMotion, 0.6), delay: 0.4 }}
        >
          <Btn
            href="/#blog"
            label="Back to Home"
            iconName="arrow-back"
            onClick={(e) => {
              e.preventDefault();
              router.push("/#blog");
            }}
          />
        </motion.div>
      </motion.main>
    </div>
  );
}
