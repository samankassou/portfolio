export default function EducationItem({ educationItem }) {
  return (
    <div className="grid grid-cols-1 gap-6 pt-8 xl:grid-cols-3 2xl:grid-cols-4">
      <div className="col-span-3 xl:col-span-1">
        <h2 className="mb-2 text-left text-lg font-semibold text-base-content dark:text-base-100">
          {educationItem.school}
        </h2>
        <div className="flex gap-4">
          <p className="text-base-content dark:text-base-100">
            {educationItem.role} &nbsp;
          </p>
          <p className="rounded-md bg-primary-100 px-3 py-1 text-xs font-medium text-primary">
            {educationItem.period}
          </p>
        </div>
      </div>
      <div className="col-span-3 xl:col-span-2 2xl:col-span-3">
        <h3 className="mb-3 text-lg font-medium text-base-content dark:text-base-100">
          {educationItem.certificate}
        </h3>
        <p className="font-normal text-secondary/60 dark:text-base-400">
          {educationItem.description}
        </p>
      </div>
    </div>
  );
}
