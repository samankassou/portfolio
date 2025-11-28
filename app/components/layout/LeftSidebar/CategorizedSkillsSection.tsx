import { COMMON_CLASSES } from "@/lib/constants/colors";
import type { SkillCategory } from "@/lib/types";

interface CategorizedSkillsSectionProps {
  skillCategories: SkillCategory[];
}

export default function CategorizedSkillsSection({
  skillCategories,
}: CategorizedSkillsSectionProps) {
  return (
    <div className="px-8 py-6">
      <h3 className="mb-5 text-base font-bold text-base-content dark:text-base-100">
        Skills
      </h3>
      <div className="space-y-5">
        {skillCategories.map((category) => (
          <div key={category.id}>
            <h4
              className={`mb-3 text-sm font-semibold ${COMMON_CLASSES.TEXT}`}
            >
              {category.category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill.id}
                  className="rounded-md bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary/20 dark:bg-primary/15 dark:text-primary-100 dark:hover:bg-primary/25"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
