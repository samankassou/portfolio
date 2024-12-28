import ProjectItem from "./projectItem";

export default function ProjectsList() {
  let projects = [
    {
      id: 1,
      title: "Google",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=1",
    },
    {
      id: 2,
      title: "Facebook",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=2",
    },
    {
      id: 3,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=3",
    },
    {
      id: 4,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=4",
    },
    {
      id: 5,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=5",
    },
    {
      id: 6,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=6",
    },
    {
      id: 7,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=7",
    },
    {
      id: 8,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg: "https://picsum.photos/400/400?random=8",
    },
  ];

  return (
    <ul className="grid grid-cols-2 gap-3 xl:grid-cols-3">
      {projects &&
        projects.map((project) => (
          <li key={project.id}>
            <ProjectItem project={project} />
          </li>
        ))}
    </ul>
  );
}
