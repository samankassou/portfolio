import ExperienceItem from "./ExperienceItem";
import { experience } from "@/lib/data/experience";

export default function Experience() {

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
