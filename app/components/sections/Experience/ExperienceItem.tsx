import { COMMON_CLASSES } from "@/lib/constants/colors";
import type { Experience } from "@/lib/types";

export default function ExperienceItem({
  experienceItem: item,
}: {
  experienceItem: Experience;
}) {
  return (
    <article className="grid gap-5 py-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-8">
      <div className="border-l-2 border-primary pl-4">
        <h3 className={`mb-2 text-lg font-semibold ${COMMON_CLASSES.TEXT}`}>
          {item.company}
        </h3>
        <p className="text-sm text-base-800 dark:text-base-300">
          {item.period}
        </p>
      </div>
      <div className="min-w-0">
        <h4 className={`mb-2 text-lg font-semibold ${COMMON_CLASSES.TEXT}`}>
          {item.role}
        </h4>
        <p className={`mb-4 leading-7 ${COMMON_CLASSES.TEXT_MUTED}`}>
          {item.mission}
        </p>
        <ul
          className={`mb-4 list-disc space-y-2 pl-5 text-sm leading-6 ${COMMON_CLASSES.TEXT}`}
        >
          {item.contributions.map((contribution) => (
            <li key={contribution}>{contribution}</li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2" aria-label="Technologies">
          {item.technologies.map((technology) => (
            <li
              key={technology}
              className="rounded-md bg-secondary/5 px-2.5 py-1 text-xs text-base-800 dark:bg-white/5 dark:text-base-300"
            >
              {technology}
            </li>
          ))}
        </ul>
        <details className="mt-4">
          <summary className="w-fit cursor-pointer rounded py-3 text-sm font-semibold text-primary-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 dark:text-primary">
            More about this role
          </summary>
          <p className={`mt-2 text-sm leading-7 ${COMMON_CLASSES.TEXT_MUTED}`}>
            {item.description.split(" Technologies:")[0]}
          </p>
        </details>
      </div>
    </article>
  );
}
