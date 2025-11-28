"use client";

import ProjectItem from "./ProjectItem";
import { projects } from "@/lib/data/projects";
import type { ProjectCategory } from "@/lib/types";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { staggerContainer, scaleIn, useReducedMotion, getTransition } from "@/lib/utils/animations";

interface ProjectsListProps {
  selectedCategory?: ProjectCategory;
}

export default function ProjectsList({ selectedCategory = "All categories" }: ProjectsListProps) {
  const { ref, isInView } = useScrollAnimation();
  const reducedMotion = useReducedMotion();

  // Filter projects based on selected category
  const filteredProjects =
    selectedCategory === "All categories"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Empty state handling
  if (filteredProjects.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-lg text-secondary/60 dark:text-base-400">
          No projects found in this category.
        </p>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.ul
        key={selectedCategory}
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        exit={{ opacity: 0 }}
        transition={getTransition(reducedMotion, 0.5)}
        className="grid grid-cols-2 gap-3 md:gap-6 xl:grid-cols-3"
      >
        {filteredProjects.map((project) => (
          <motion.li key={project.id} variants={scaleIn}>
            <ProjectItem project={project} />
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
}
