export default function EducationItem({ educationItem }) {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 py-4">
      <div className="col-span-3 md:col-span-1 my-2">
        <h2 className="text-lg font-semibold text-left leading-6 text-base-content my-3">
          {educationItem.school}
        </h2>
        <div className="flex gap-4">
          <p className="text-base-content">{educationItem.role} &nbsp;</p>
          <p className="text-xs font-medium py-1 px-2 bg-primary-100 text-primary rounded-md">
            {educationItem.period}
          </p>
        </div>
      </div>
      <div className="col-span-3 md:col-span-2 xl:col-span-3 my-3">
        <h3 className="text-base-content font-medium text-lg mb-3">
          {educationItem.certificate}
        </h3>
        <p className="text-secondary text-opacity-60 font-normal leading-6">
          {educationItem.description}
        </p>
      </div>
    </div>
  );
}
