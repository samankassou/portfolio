export default function ExperienceItem({ experienceItem }) {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 py-4">
      <div className="col-span-3 md:col-span-1 mt-2">
        <h2 className="text-xl font-extrabold text-left leading-6 text-base-content my-3">
          {experienceItem.company}
        </h2>
        <p className="text-xs py-1 px-2 bg-primary-100 text-primary rounded-md inline-block mb-4">
          {experienceItem.period}
        </p>
      </div>
      <div className="col-span-3 md:col-span-2 xl:col-span-3 mb-3">
        <h3 className="text-base-content font-extrabold text-lg font-base leading-6 mb-3">
          {experienceItem.role}
        </h3>
        <p className="text-secondary text-opacity-60 font-normal leading-6">
          {experienceItem.description}
        </p>
      </div>
    </div>
  );
}
