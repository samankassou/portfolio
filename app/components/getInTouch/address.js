export default function Address() {
  return (
    <div className="grid grid-cols-1 gap-3 bg-base-100 shadow-sm p-6 rounded-xl">
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content">Email:</p>
          <p className="text-secondary text-opacity-60 text-sm font-normal">
            Cameroon
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content">Skype:</p>
          <p className="text-secondary text-opacity-60 text-sm font-normal">
            Douala
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content">Telegram:</p>
          <p className="text-secondary text-opacity-60 text-sm font-normal">
            Ange Raphaël
          </p>
        </div>
      </div>
    </div>
  );
}
