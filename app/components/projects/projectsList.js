import ProjectItem from "./projectItem";

export default function ProjectsList() {
  let projects = [
    {
      id: 1,
      title: "Google",
      link: "Lead Web Developer",
      coverImg:
        "https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    },
    {
      id: 2,
      title: "Facebook",
      link: "Lead Web Developer",
      coverImg:
        "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    },
    {
      id: 3,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg:
        "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    },
    {
      id: 4,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg:
        "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    },
    {
      id: 5,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg:
        "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    },
    {
      id: 6,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg:
        "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    },
    {
      id: 7,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg:
        "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    },
    {
      id: 8,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg:
        "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
    },
    {
      id: 9,
      title: "Microsoft",
      link: "Lead Web Developer",
      coverImg:
        "https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&h=320&q=80",
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
