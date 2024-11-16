import ProjectItem from "./projectItem";

export default function ProjectsList() {
  let projects = [
    {
      id: 1,
      title: "Google",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/400x400.png",
    },
    {
      id: 2,
      title: "Facebook",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/400x400.png",
    },
    {
      id: 3,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/400x400.png",
    },
    {
      id: 4,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/400x400.png",
    },
    {
      id: 5,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/400x400.png",
    },
    {
      id: 6,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/400x400.png",
    },
    {
      id: 7,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/400x400.png",
    },
    {
      id: 8,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/400x400.png",
    },
    {
      id: 9,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/400x400.png",
    },
  ];

  return (
    <ul className="grid grid-cols-2 gap-4 xl:grid-cols-3">
      {projects &&
        projects.map((project) => (
          <li key={project.id}>
            <ProjectItem project={project} />
          </li>
        ))}
    </ul>
  );
}
