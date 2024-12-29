export default function ExperienceItem({ experienceItem }) {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 xl:grid-cols-3 2xl:grid-cols-4">
      <div className="col-span-3 mt-2 md:col-span-1">
        <h2 className="mb-2 text-left text-lg font-semibold text-base-content">
          {experienceItem.company}
        </h2>
        <p className="inline rounded-md bg-primary-100 px-3 py-1 text-xs font-medium text-primary">
          {experienceItem.period}
        </p>
      </div>
      <div className="col-span-3 mb-3 md:col-span-2 xl:col-span-3">
        <h3 className="mb-3 text-lg font-medium text-base-content">
          {experienceItem.role}
        </h3>
        <p className="font-normal text-secondary/60">
          {experienceItem.description}
        </p>
      </div>
    </div>
  );
}
