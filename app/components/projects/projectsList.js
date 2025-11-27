import ProjectItem from "./projectItem";

export default function ProjectsList({ selectedCategory = "All categories" }) {
  let projects = [
    {
      id: 1,
      title: "Google",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=1",
      category: "UI Design",
    },
    {
      id: 2,
      title: "Facebook",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=2",
      category: "UI Design",
    },
    {
      id: 3,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=3",
      category: "Web Templates",
    },
    {
      id: 4,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=4",
      category: "Web Templates",
    },
    {
      id: 5,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=5",
      category: "Logos",
    },
    {
      id: 6,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=6",
      category: "Logos",
    },
    {
      id: 7,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=7",
      category: "Branding",
    },
    {
      id: 8,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=8",
      category: "Branding",
    },
  ];

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
