"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, projectCategories } from "@/lib/data/projects";
import type { ProjectCategory } from "@/lib/types";
import ProjectDiagram from "./ProjectDiagram";

export default function SelectedWork() {
  const [category, setCategory] = useState<ProjectCategory>("All categories");
  const filtered =
    category === "All categories"
      ? projects
      : projects.filter((project) => project.category === category);
  return (
    <div className="selected-work">
      <div
        className="work-filter"
        role="group"
        aria-label="Filter case studies"
      >
        {projectCategories.map((item) => (
          <button
            type="button"
            key={item}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
          >
            {item === "All categories" ? "All work" : item}
            <sup>
              {String(
                item === "All categories"
                  ? projects.length
                  : projects.filter((project) => project.category === item)
                      .length,
              ).padStart(2, "0")}
            </sup>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {filtered.length} case {filtered.length === 1 ? "study" : "studies"}{" "}
        shown
      </p>
      <div
        className={
          category === "All categories"
            ? "work-grid work-grid-featured"
            : "work-grid"
        }
      >
        {filtered.map((project, i) => (
          <Link
            href={`/portfolio/${project.id}`}
            className="work-card"
            key={project.id}
            aria-label={`Read case study: ${project.title}`}
          >
            <ProjectDiagram project={project} />
            <div className="work-card-copy">
              <div className="work-card-meta">
                <span className="eyebrow">{project.category}</span>
                <span className="work-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {category === "All categories" && i === 0 && (
                <div className="featured-outcome">
                  <span className="eyebrow">The outcome</span>
                  <p>{project.results}</p>
                </div>
              )}
              <div className="tech-tags">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <span className="work-read">
                Explore case study <span aria-hidden="true">↗</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
      <p className="work-disclosure">
        <span aria-hidden="true">↳</span> Professional case studies are
        anonymized. Conceptual workflows and open-source product screenshots are
        labeled; Wida screenshots use fictional demo data.
      </p>
    </div>
  );
}
