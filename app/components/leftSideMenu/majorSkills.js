export default function MajorSkills({ skills }) {
  return (
    <div className="px-8 py-6">
      <h3 className="mb-5 text-base font-bold text-base-content dark:text-base-100">
        Major Skill
      </h3>
      <ul className="space-y-5">
        {skills.map((skill) => (
          <li key={skill.id}>
            {/* Skill Name and Percentage */}
            <div className="mb-2.5 flex items-center justify-between">
              <span className="text-sm font-normal text-base-content dark:text-base-100">
                {skill.name}
              </span>
              <span className="text-sm font-normal text-secondary/50 dark:text-base-400">
                {skill.percentage}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-base-200 dark:bg-base-800">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
