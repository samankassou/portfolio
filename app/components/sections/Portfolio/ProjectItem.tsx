"use client";

import BrandIcon from "@/app/components/ui/BrandIcon";
import ProjectVisual from "./ProjectVisual";
import Link from "next/link";
import type { Project } from "@/lib/types";
import { motion } from "framer-motion";
import Icon from "@/lib/components/Icon";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="h-full"
    >
      <Link
        href={`/portfolio/${project.id}`}
        className={cn(
          "group flex h-full min-h-[300px] flex-col rounded-2xl border border-secondary/10 p-6 shadow-sm transition-all hover:border-primary/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 dark:border-base-800 dark:focus-visible:ring-offset-black",
          COMMON_CLASSES.CARD_BG,
        )}
        aria-label={`Read case study: ${project.title}`}
      >
        <ProjectVisual project={project} />
        <div className="mb-5 flex items-start justify-between gap-4">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary dark:bg-primary/20">
            {project.category}
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-xl text-base-content transition-transform group-hover:translate-x-1">
            <Icon name="arrow-forward" />
          </span>
        </div>

        <div className="flex flex-1 flex-col">
          <p className={`mb-2 text-sm ${COMMON_CLASSES.TEXT_MUTED}`}>
            {project.link}
          </p>
          <h3 className={`mb-3 text-xl font-semibold ${COMMON_CLASSES.TEXT}`}>
            {project.title}
          </h3>
          <p className={`mb-6 text-sm leading-6 ${COMMON_CLASSES.TEXT_MUTED}`}>
            {project.description}
          </p>

          {project.results && (
            <div className="mb-5 border-l-2 border-primary pl-3">
              <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-base-800 dark:text-base-300">
                Outcome
              </p>
              <p className={`text-sm leading-6 ${COMMON_CLASSES.TEXT}`}>
                {project.results}
              </p>
            </div>
          )}
          {project.role && (
            <p
              className={`mb-4 text-xs font-medium ${COMMON_CLASSES.TEXT_MUTED}`}
            >
              <span className="font-semibold text-base-content dark:text-base-100">
                Role:
              </span>{" "}
              {project.role}
            </p>
          )}

          <div
            className="mt-auto flex flex-wrap gap-2"
            aria-label="Technologies"
          >
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="inline-flex items-center gap-1.5 rounded-md bg-secondary/5 px-2.5 py-1 text-xs font-medium text-secondary/70 dark:bg-white/5 dark:text-base-300"
              >
                <BrandIcon name={technology} />
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
