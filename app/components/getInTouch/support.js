export default function Support() {
  return (
    <div className="grid grid-cols-1 gap-3 bg-base-100 shadow-sm p-6 rounded-xl">
      <div className="flex items-center justify-center mb-4">
        <span className="bg-primary text-base-content p-2.5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path d="M10.5 18.75a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5h-3Z" />
            <path
              fillRule="evenodd"
              d="M8.625.75A3.375 3.375 0 0 0 5.25 4.125v15.75a3.375 3.375 0 0 0 3.375 3.375h6.75a3.375 3.375 0 0 0 3.375-3.375V4.125A3.375 3.375 0 0 0 15.375.75h-6.75ZM7.5 4.125C7.5 3.504 8.004 3 8.625 3H9.75v.375c0 .621.504 1.125 1.125 1.125h2.25c.621 0 1.125-.504 1.125-1.125V3h1.125c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 0 1 7.5 19.875V4.125Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content">Support:</p>
          <p className="text-secondary text-opacity-60 text-sm font-normal">
            153698745
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content">Office:</p>
          <p className="text-secondary text-opacity-60 text-sm font-normal">
            +237 691 565 877
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content">Personnal:</p>
          <p className="text-secondary text-opacity-60 text-sm font-normal">
            +237 691 565 877
          </p>
        </div>
      </div>
    </div>
  );
}
