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
          <a
            href="mailto:samankassoufoulla@gmail.com"
            className="text-sm font-normal text-secondary text-opacity-60 transition-colors hover:text-primary dark:text-base-400 dark:hover:text-primary"
          >
            samankassoufoulla@gmail.com
          </a>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            LinkedIn:
          </p>
          <a
            href="https://linkedin.com/in/sam-foulla"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-normal text-secondary text-opacity-60 transition-colors hover:text-primary dark:text-base-400 dark:hover:text-primary"
          >
            @sam-foulla
          </a>
        </div>
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm font-normal text-base-content dark:text-base-100">
            Github:
          </p>
          <a
            href="https://github.com/samankassou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-normal text-secondary text-opacity-60 transition-colors hover:text-primary dark:text-base-400 dark:hover:text-primary"
          >
            @samankassou
          </a>
        </div>
      </div>
    </div>
  );
}
