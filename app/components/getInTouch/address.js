export default function Address() {
  return (
    <div className="grid grid-cols-1 gap-3 bg-base-100 shadow-sm p-6 rounded-xl">
      <div className="flex items-center justify-center mb-4">
        <span className="bg-primary text-base-content p-2.5 text-xl flex text-center justify-center rounded-full">
          <ion-icon name="mail"></ion-icon>
        </span>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content">Email:</p>
          <p className="text-secondary text-opacity-60 text-sm font-normal">
            samankassoufoulla@gmail.com
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content">Skype:</p>
          <p className="text-secondary text-opacity-60 text-sm font-normal">
            @foullasamankassou
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content">Telegram:</p>
          <p className="text-secondary text-opacity-60 text-sm font-normal">
            @foullasamankassou
          </p>
        </div>
      </div>
    </div>
  );
}
