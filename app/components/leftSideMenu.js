export default function LeftSideMenu() {
  return (
    <div className="hidden h-max w-8/12 divide-y-2 rounded-xl bg-base-100 p-6 xl:grid xl:grid-cols-1 xl:gap-6">
      <div className="grid grid-cols-1 gap-3">
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
      <div>
        <h2>Major Skill</h2>
      </div>
      <div>
        <h2>Extra Skill</h2>
      </div>
      <div>
        {/* button download cv */}
        <a className="flex items-center justify-between rounded-lg bg-primary px-5 py-3 text-base font-medium text-base-content">
          Download My CV <ion-icon name="cloud-download-outline"></ion-icon>
        </a>
      </div>
    </div>
  );
}
