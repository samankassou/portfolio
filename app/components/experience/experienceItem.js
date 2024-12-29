export default function ExperienceItem({ experienceItem }) {
  return (
    <div className="grid py-4 md:grid-cols-3 xl:grid-cols-4">
      <div className="col-span-3 mt-2 md:col-span-1">
        <h2 className="my-3 text-left text-xl font-extrabold text-base-content">
          {experienceItem.company}
        </h2>
        <p className="mb-4 inline-block rounded-md bg-primary-100 px-2 py-1 text-xs text-primary">
          {experienceItem.period}
        </p>
      </div>
      <div className="col-span-3 mb-3 md:col-span-2 xl:col-span-3">
        <h3 className="font-base mb-3 text-lg font-extrabold text-base-content">
          {experienceItem.role}
        </h3>
        <p className="font-normal text-secondary text-opacity-60">
          {experienceItem.description}
        </p>
      </div>
    </div>
  );
}
