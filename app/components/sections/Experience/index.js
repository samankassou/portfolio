import ExperienceItem from "./ExperienceItem";

export default function Experience() {
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
    <ul className="grid grid-cols-1 gap-8 divide-y rounded-xl bg-white p-6 shadow-sm md:gap-10 md:p-10 dark:bg-[#1C1C1C]">
      {experience &&
        experience.map((experienceItem) => (
          <li key={experienceItem.id}>
            <ExperienceItem
              key={experienceItem.id}
              experienceItem={experienceItem}
            />
          </li>
        ))}
    </ul>
  );
}
