"use client";

import { useState } from "react";
import ProjectsList from "./ProjectsList";
import { projectCategories } from "@/lib/data/projects";
import { COMMON_CLASSES } from "@/lib/constants/colors";

export default function PortfolioContainer() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  return (
    <div>
      {/* Filter Navigation */}
      <nav className="mb-8 md:mb-12">
        <ul
          className={`flex flex-col items-center justify-center gap-4 font-medium md:flex-row md:gap-12 ${COMMON_CLASSES.TEXT_MUTED}`}
        >
          {projectCategories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 hover:text-primary ${
                  selectedCategory === category ? "text-primary dark:text-primary" : ""
                }`}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Projects List */}
      <ProjectsList selectedCategory={selectedCategory} />
    </div>
  );
}
