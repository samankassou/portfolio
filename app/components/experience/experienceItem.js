export default function ExperienceItem({ experienceItem }) {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 py-4">
      <div className="col-span-3 md:col-span-1 mt-2">
        <h2 className="text-xl font-extrabold text-left leading-6 text-slate-900 my-3">
          {experienceItem.company}
        </h2>
        <p className="text-xs py-1 px-2 bg-indigo-100 text-indigo-700 rounded-md inline-block mb-4">
          {experienceItem.period}
        </p>
        <p className="text-slate-900 font-medium">
          {experienceItem.role} <br />
        </p>
      </div>
      <div className="col-span-3 md:col-span-2 xl:col-span-3 mb-3">
        <h3 className="text-slate-900 text-lg font-base leading-6 mb-3">
          {experienceItem.certificate}
        </h3>
        <p>{experienceItem.description}</p>
      </div>
    </div>
  );
}
