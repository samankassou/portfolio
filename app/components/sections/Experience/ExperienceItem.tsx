import { COMMON_CLASSES } from "@/lib/constants/colors";
import type { Experience } from "@/lib/types";

interface ExperienceItemProps {
  experienceItem: Experience;
}

export default function ExperienceItem({
  experienceItem,
}: ExperienceItemProps) {
  return (
    <div className="pt-8">
      {/* Mobile: Vertical stacked layout with left border */}
      <div className="lg:hidden">
        <div className="border-l-4 border-primary pl-4">
          <h2
            className={`mb-2 text-left text-lg font-semibold ${COMMON_CLASSES.TEXT}`}
          >
            {experienceItem.company}
          </h2>
          <p className="mb-4 inline-block rounded-md bg-primary/15 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20">
            {experienceItem.period}
          </p>
        </div>
        <h3 className={`mb-3 mt-6 text-lg font-medium ${COMMON_CLASSES.TEXT}`}>
          {experienceItem.role}
        </h3>
        <p className={`font-normal ${COMMON_CLASSES.TEXT_MUTED}`}>
          {experienceItem.description}
        </p>
      </div>

      {/* Desktop: Horizontal grid layout */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="col-span-1 mt-2">
          <h2
            className={`mb-2 text-left text-lg font-semibold ${COMMON_CLASSES.TEXT}`}
          >
            {experienceItem.company}
          </h2>
          <p className="inline rounded-md bg-primary/15 px-3 py-1 text-xs font-medium text-primary dark:bg-primary/20">
            {experienceItem.period}
          </p>
        </div>
        <div className="col-span-2 mb-3 xl:col-span-3">
          <h3 className={`mb-3 text-lg font-medium ${COMMON_CLASSES.TEXT}`}>
            {experienceItem.role}
          </h3>
          <p className={`font-normal ${COMMON_CLASSES.TEXT_MUTED}`}>
            {experienceItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}
