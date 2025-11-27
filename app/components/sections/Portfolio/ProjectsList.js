import ProjectItem from "./ProjectItem";
import { projects } from "@/lib/data/projects";

export default function ProjectsList({ selectedCategory = "All categories" }) {

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
    <ul className="grid grid-cols-2 gap-3 md:gap-6 xl:grid-cols-3">
      {filteredProjects.map((project) => (
        <li key={project.id}>
          <ProjectItem key={project.id} project={project} />
        </li>
      ))}
    </ul>
  );
}
