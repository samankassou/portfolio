export default function Address() {
  return (
    <div className="grid grid-cols-1 gap-3 rounded-xl bg-base-100 p-6 shadow-sm dark:bg-[#1C1C1C]">
      <div className="mb-4 flex items-center justify-center">
        <span className="flex justify-center rounded-full bg-primary p-2.5 text-center text-xl text-base-content dark:text-base-100">
          <ion-icon name="mail" suppressHydrationWarning></ion-icon>
        </span>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            Email:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            samankassoufoulla@gmail.com
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            Skype:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            @foullasamankassou
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            Telegram:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            @foullasamankassou
          </p>
        </div>
      </div>
    </div>
  );
}
