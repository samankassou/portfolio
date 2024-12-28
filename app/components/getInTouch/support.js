export default function Support() {
  return (
    <div className="grid grid-cols-1 gap-3 bg-base-100 shadow-sm p-6 rounded-xl">
      <div className="flex items-center justify-center mb-4">
        <span className="bg-primary text-base-content p-2.5 text-xl flex text-center justify-center rounded-full">
          <ion-icon name="tablet-portrait"></ion-icon>
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
