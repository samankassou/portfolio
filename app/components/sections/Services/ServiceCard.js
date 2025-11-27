import { COMMON_CLASSES, cn } from "@/lib/constants/colors";

export default function ServiceCard({ service }) {
  return (
    <div className={cn("flex h-full w-full flex-col rounded-xl border border-white/5 p-6 transition-all hover:shadow-lg sm:p-8 dark:hover:border-white/10", COMMON_CLASSES.CARD_BG)}>
      <div className="mb-[10px]">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-2xl text-white">
          <ion-icon name={service.icon} suppressHydrationWarning></ion-icon>
        </span>
      </div>
      <h3 className="mb-[10px] text-lg font-semibold text-base-content sm:text-xl dark:text-white">
        {service.title}
      </h3>
      <ul className="flex flex-col gap-[10px]">
        {service.items &&
          service.items.map((item, index) => (
            <li
              className="flex items-start gap-2 text-sm text-secondary/60 dark:text-white/60"
              key={index}
            >
              <span className="mt-0.5 text-xs text-secondary/60 dark:text-white/60">
                <ion-icon name="arrow-forward" suppressHydrationWarning></ion-icon>
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
