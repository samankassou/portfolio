"use client";

import { useState } from "react";
import ProjectsList from "./ProjectsList";
import { projectCategories } from "@/lib/data/projects";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import type { ProjectCategory } from "@/lib/types";
import { motion } from "framer-motion";

export default function PortfolioContainer() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All categories");

  return (
    <div>
      {/* Filter Navigation */}
      <nav className="mb-8 md:mb-12">
        <ul
          className={`flex flex-col items-center justify-center gap-4 font-medium md:flex-row md:gap-12 ${COMMON_CLASSES.TEXT_MUTED}`}
        >
          {projectCategories.map((category) => (
            <li key={category}>
              <motion.button
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className={`transition-colors duration-300 hover:text-primary ${
                  selectedCategory === category ? "text-primary dark:text-primary" : ""
                }`}
              >
                {category}
              </motion.button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Projects List */}
      <ProjectsList selectedCategory={selectedCategory} />
    </div>
  );
}
