import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import type { Education } from "@/lib/types";

interface EducationItemProps {
  educationItem: Education;
}

export default function EducationItem({ educationItem }: EducationItemProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-secondary/10 p-6 shadow-sm dark:border-base-800 md:p-8",
        COMMON_CLASSES.CARD_BG,
      )}
    >
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="col-span-3 xl:col-span-1">
          <h2
            className={`mb-2 text-left text-base font-medium ${COMMON_CLASSES.TEXT}`}
          >
            {educationItem.school}
          </h2>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <p className={`text-xs ${COMMON_CLASSES.TEXT_MUTED}`}>
              {educationItem.role}
            </p>
            <p className="rounded bg-primary/15 px-2 py-0.5 text-[10px] font-medium leading-tight text-primary dark:bg-primary/20">
              {educationItem.period}
            </p>
          </div>
        </div>
        <div className="col-span-3 xl:col-span-2 2xl:col-span-3">
          <h3 className={`mb-3 text-base font-medium ${COMMON_CLASSES.TEXT}`}>
            {educationItem.certificate}
          </h3>
          <p className={`text-sm leading-relaxed ${COMMON_CLASSES.TEXT_MUTED}`}>
            {educationItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}
