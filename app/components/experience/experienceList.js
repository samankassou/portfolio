import ExperienceItem from "./experienceItem";

export default function ExperienceList() {
  let experience = [
    {
      id: 1,
      company: "Google",
      role: "Lead Web Developer",
      period: "Jan 2016 - Dec 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
        tempor incididunt ut labore et dolore magna aliqua \
        tempor incididunt ut labore et dolore , consectetur adipiscing \
        elit dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      id: 2,
      company: "Facebook",
      role: "Lead Web Developer",
      period: "Jan 2016 - Dec 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \
        eiusmod tempor incididunt ut labore et dolore magna aliqua \
        tempor incididunt ut labore et dolore , consectetur adipiscing \
        elit dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    },
    {
      id: 3,
      company: "Microsoft",
      role: "Lead Web Developer",
      period: "Jan 2016 - Dec 2021",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \
        tempor incididunt ut labore et dolore , consectetur adipiscing \
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod elit.",
    },
  ];

  return (
    <ul className="grid gap-4 bg-white shadow-sm p-5 rounded-md divide-y">
      {experience &&
        experience.map((experienceItem) => (
          <li key={experienceItem.id}>
            <ExperienceItem experienceItem={experienceItem} />
          </li>
        ))}
    </ul>
  );
}
