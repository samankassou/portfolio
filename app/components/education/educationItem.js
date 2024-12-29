export default function EducationItem({ educationItem }) {
  return (
    <div className="grid gap-6 xl:grid-cols-3 2xl:grid-cols-4">
      <div className="col-span-3 xl:col-span-1">
        <h2 className="mb-2 text-left text-lg font-semibold text-base-content">
          {educationItem.school}
        </h2>
        <div className="flex gap-4">
          <p className="text-base-content">{educationItem.role} &nbsp;</p>
          <p className="rounded-md bg-primary-100 px-3 py-1 text-xs font-medium text-primary">
            {educationItem.period}
          </p>
        </div>
      </div>
      <div className="col-span-3 xl:col-span-2 2xl:col-span-3">
        <h3 className="mb-3 text-lg font-medium text-base-content">
          {educationItem.certificate}
        </h3>
        <p className="font-normal leading-6 text-secondary text-opacity-60">
          {educationItem.description}
        </p>
      </div>
    </div>
  );
}
