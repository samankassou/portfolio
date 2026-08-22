"use client";

import { useState } from "react";
import ProjectsList from "./ProjectsList";
import { projectCategories } from "@/lib/data/projects";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import type { ProjectCategory } from "@/lib/types";
import { motion } from "framer-motion";

export default function PortfolioContainer() {
  const [selectedCategory, setSelectedCategory] =
    useState<ProjectCategory>("All categories");

  return (
    <div>
      {/* Filter Navigation */}
      <nav className="mb-8 md:mb-12">
        <ul
          className={`flex flex-wrap items-center justify-center gap-2 font-medium md:gap-3 ${COMMON_CLASSES.TEXT_MUTED}`}
        >
          {projectCategories.map((category) => (
            <li key={category}>
              <motion.button
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                aria-pressed={selectedCategory === category}
                className={`rounded-full border px-4 py-2 text-sm transition-colors duration-300 hover:border-primary hover:text-primary ${
                  selectedCategory === category
                    ? "border-primary bg-primary/10 text-primary dark:text-primary"
                    : "border-secondary/10 dark:border-base-800"
                }`}
              >
                {category}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>

      <p
        className={`mb-3 text-center text-xs md:hidden ${COMMON_CLASSES.TEXT_MUTED}`}
      >
        Swipe to explore the case studies.
      </p>

      {/* Projects List */}
      <ProjectsList selectedCategory={selectedCategory} />
    </div>
  );
}
