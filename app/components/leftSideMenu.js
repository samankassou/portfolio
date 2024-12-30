export default function LeftSideMenu() {
  return (
    <div className="hidden h-max w-8/12 grid-cols-1 divide-x-2 rounded-xl bg-base-100 p-6 xl:grid">
      <div>
        <div>
          <div className="flex justify-between">
            <p className="text-sm font-normal text-base-content">Country:</p>
            <p className="text-sm font-normal text-secondary text-opacity-60">
              Cameroon
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-sm font-normal text-base-content">City:</p>
            <p className="text-sm font-normal text-secondary text-opacity-60">
              Douala
            </p>
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-sm font-normal text-base-content">Street:</p>
            <p className="text-sm font-normal text-secondary text-opacity-60">
              Ange Raphaël
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
