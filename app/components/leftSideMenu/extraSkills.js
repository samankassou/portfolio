export default function ExtraSkills({ skills }) {
  return (
    <div className="px-8 py-6">
      <h3 className="mb-5 text-base font-bold text-base-content dark:text-base-100">
        Extra Skill
      </h3>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span
            key={skill.id}
            className="rounded-md bg-base-200 px-3 py-2 text-xs font-normal text-secondary/70 transition-all hover:bg-primary hover:text-white dark:bg-base-800 dark:text-base-400 dark:hover:bg-primary"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
