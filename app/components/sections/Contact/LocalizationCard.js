import { COMMON_CLASSES, cn } from "@/lib/constants/colors";

export default function LocalizationCard() {
  return (
    <div className={cn("grid grid-cols-1 gap-3 rounded-xl p-6 shadow-sm", COMMON_CLASSES.CARD_BG)}>
      <div className="mb-4 flex items-center justify-center">
        <span className="flex justify-center rounded-full bg-primary p-2.5 text-center text-xl text-base-content dark:text-base-100">
          <ion-icon name="map" suppressHydrationWarning></ion-icon>
        </span>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            Country:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            Cameroon
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            City:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            Douala
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            Street:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            Ange Raphaël
          </p>
        </div>
      </div>
    </div>
  );
}
