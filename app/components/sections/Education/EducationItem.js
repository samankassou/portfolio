import { COMMON_CLASSES, cn } from "@/lib/constants/colors";

export default function EducationItem({ educationItem }) {
  return (
    <div className={cn("rounded-xl border-2 border-cyan-400/50 p-6 shadow-sm md:p-8 dark:border-cyan-400/30", COMMON_CLASSES.CARD_BG)}>
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 2xl:grid-cols-4">
        <div className="col-span-3 xl:col-span-1">
          <h2 className="mb-2 text-left text-base font-medium text-secondary dark:text-white">
            {educationItem.school}
          </h2>
          <div className="flex items-center gap-2 whitespace-nowrap">
            <p className="text-xs text-secondary dark:text-white">
              {educationItem.role}
            </p>
            <p className="rounded bg-primary px-2 py-0.5 text-[10px] font-medium leading-tight text-white">
              {educationItem.period}
            </p>
          </div>
        </div>
        <div className="col-span-3 xl:col-span-2 2xl:col-span-3">
          <h3 className="mb-3 text-base font-medium text-secondary dark:text-white">
            {educationItem.certificate}
          </h3>
          <p className="text-sm leading-relaxed text-secondary/70 dark:text-gray-400">
            {educationItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}
