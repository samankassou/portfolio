import EducationItem from "./EducationItem";
import { education } from "@/lib/data/education";

export default function Education() {

  return (
    <ul className="grid grid-cols-1 gap-6 md:gap-8">
      {education &&
        education.map((educationItem) => (
          <li key={educationItem.id}>
            <EducationItem
              key={educationItem.id}
              educationItem={educationItem}
            />
          </li>
        ))}
    </ul>
  );
}
