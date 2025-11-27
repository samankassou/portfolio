export default function Support() {
  return (
    <div className="grid grid-cols-1 gap-3 rounded-xl bg-base-100 p-6 shadow-sm dark:bg-[#1C1C1C]">
      <div className="mb-4 flex items-center justify-center">
        <span className="flex justify-center rounded-full bg-primary p-2.5 text-center text-xl text-base-content dark:text-base-100">
          <ion-icon name="tablet-portrait" suppressHydrationWarning></ion-icon>
        </span>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            Support:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            153698745
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            Office:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            +237 691 565 877
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            Personnal:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            +237 691 565 877
          </p>
        </div>
      </div>
    </div>
  );
}
