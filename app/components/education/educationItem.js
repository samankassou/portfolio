export default function EducationItem({ educationItem }) {
  return (
    <div className="grid md:grid-cols-3 xl:grid-cols-4 py-4">
      <div className="col-span-3 md:col-span-1 my-2">
        <h2 className="text-xl font-extrabold text-left leading-6 text-black my-3">
          {educationItem.school}
        </h2>
        <p className="text-black">
          Student &nbsp;
          <span className="text-xs py-1 px-2 bg-indigo-100 text-indigo-700 rounded-md">
            Jan 2016 - Dec 2021
          </span>
        </p>
      </div>
      <div className="col-span-3 md:col-span-2 xl:col-span-3 my-3">
        <h3 className="text-black text-lg font-base leading-6 mb-3">
          Certificate of training
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
