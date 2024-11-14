import ProjectItem from "./projectItem";

export default function ProjectsList() {
  let projects = [
    {
      id: 1,
      title: "Google",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/600x400.png",
    },
    {
      id: 2,
      title: "Facebook",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/600x400.png",
    },
    {
      id: 3,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://placehold.co/600x400.png",
    },
  ];

  return (
    <ul className="grid grid-cols-2 gap-4 xl:grid-cols-4 p-5 rounded-md divide-y">
      {projects &&
        projects.map((project) => (
          <li>
            <ProjectItem project={project} key={project.id} />
          </li>
        ))}
    </ul>
  );
}
