import ExperienceItem from "./ExperienceItem";
import { experience } from "@/lib/data/experience";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";

export default function Experience() {

  return (
    <ul className={cn("grid grid-cols-1 gap-8 divide-y rounded-xl p-6 shadow-sm md:gap-10 md:p-10", COMMON_CLASSES.CARD_BG)}>
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
