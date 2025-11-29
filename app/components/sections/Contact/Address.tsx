import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";

export default function Address() {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 rounded-xl p-6 shadow-sm",
        COMMON_CLASSES.CARD_BG,
      )}
    >
      <div className="mb-4 flex items-center justify-center">
        <span className="flex justify-center rounded-full bg-primary p-2.5 text-center text-xl text-base-content">
          <Icon name="mail" />
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
            LinkedIn:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            @sam-foulla
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            Github:
          </p>
          <p className="text-sm font-normal text-secondary text-opacity-60 dark:text-base-400">
            @samankassou
          </p>
        </div>
      </div>
    </div>
  );
}
