import { COMMON_CLASSES } from "@/lib/constants/colors";
import type { Language } from "@/lib/types";

interface LanguagesSectionProps {
  languages: Language[];
}

export default function LanguagesSection({
  languages,
}: LanguagesSectionProps) {
  return (
    <div className="px-8 py-6">
      <h3 className="mb-5 text-base font-bold text-base-content dark:text-base-100">
        Languages
      </h3>
      <ul className="space-y-3">
        {languages.map((language) => (
          <li key={language.id} className="flex items-center justify-between">
            <span
              className={`text-sm font-normal ${COMMON_CLASSES.TEXT}`}
            >
              {language.name}
            </span>
            <span className="rounded-md bg-primary/15 px-2 py-0.5 text-xs font-medium text-primary dark:bg-primary/20 dark:text-primary-100">
              {language.proficiency}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
