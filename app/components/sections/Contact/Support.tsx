import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";

export default function Support() {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 rounded-xl p-6 shadow-sm",
        COMMON_CLASSES.CARD_BG,
      )}
    >
      <div className="mb-4 flex items-center justify-center">
        <span className="flex justify-center rounded-full bg-primary p-2.5 text-center text-xl text-base-content">
          <Icon name="tablet-portrait" />
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
