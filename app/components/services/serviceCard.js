export default function ServiceCard({ service }) {
  return (
    <div className="flex h-full w-full flex-col rounded-xl border border-white/5 bg-base-100 p-6 transition-all hover:shadow-lg sm:p-8 dark:bg-[#1C1C1C] dark:hover:border-white/10">
      <div className="mb-[10px]">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 text-2xl text-white">
          <ion-icon name={service.icon}></ion-icon>
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
                <ion-icon name="arrow-forward"></ion-icon>
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}
