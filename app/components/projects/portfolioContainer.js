"use client";

import { useState } from "react";
import ProjectsList from "./projectsList";

export default function PortfolioContainer() {
  const [selectedCategory, setSelectedCategory] = useState("All categories");

  const categories = [
    "All categories",
    "UI Design",
    "Web Templates",
    "Logos",
    "Branding",
  ];

  return (
    <div>
      {/* Filter Navigation */}
      <nav className="mb-8 md:mb-12">
        <ul className="flex flex-col items-center justify-center gap-4 font-medium text-secondary/60 md:flex-row md:gap-12 dark:text-base-100 dark:text-base-400">
          {categories.map((category) => (
            <li key={category}>
              <button
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 hover:text-primary ${
                  selectedCategory === category ? "text-primary" : ""
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
