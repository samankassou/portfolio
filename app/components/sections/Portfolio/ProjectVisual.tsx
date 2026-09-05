import Image from "next/image";
import type { Project } from "@/lib/types";

const flows: Record<Project["category"], [string, string, string]> = {
  "Cloud & DevOps": ["Applications", "Azure DevOps", "Azure"],
  "Web Applications": ["Operations", "Application", "Workflows"],
  "AI & Automation": ["Documents", "AI assistance", "Human review"],
  "BI & Data": ["Reports", "Data model", "Dashboards"],
};

/** Set coverImg and coverAlt in project data to replace the conceptual visual. */
export default function ProjectVisual({ project }: { project: Project }) {
  return (
    <figure className="mb-6 overflow-hidden rounded-xl border border-secondary/10 bg-base-200 dark:border-base-700 dark:bg-black/30">
      {project.coverImg ? (
        <div className="relative aspect-[16/9]">
          <Image
            src={project.coverImg}
            alt={project.coverAlt || project.title}
            fill
            sizes="(max-width: 704px) 100vw, 50vw"
            className="object-contain"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/9] flex-col justify-center gap-5 bg-gradient-to-br from-primary/15 via-transparent to-primary/5 px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-base-800 dark:text-base-300">
            {project.category}
          </p>
          <ol
            className="flex items-stretch gap-2"
            aria-label="Illustrative workflow"
          >
            {flows[project.category].map((step, index) => (
              <li
                key={step}
                className="relative flex min-w-0 flex-1 flex-col justify-center rounded-lg border border-primary/30 bg-base-100 p-2 text-center dark:bg-[#1C1C1C] sm:p-3"
              >
                <span className="mb-2 text-xs font-semibold text-primary-800 dark:text-primary">
                  0{index + 1}
                </span>
                <span className="break-words text-xs font-medium text-base-content dark:text-base-100">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
      <figcaption className="border-t border-secondary/10 px-4 py-2 text-xs text-base-800 dark:border-base-700 dark:text-base-400">
        {project.coverImg
          ? project.coverCaption || "Project overview"
          : "Concept illustration · project visual coming soon"}
      </figcaption>
    </figure>
  );
}
