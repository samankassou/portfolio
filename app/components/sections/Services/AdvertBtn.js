export default function AdvertBtn({
  text = "Order now",
  href = "#",
  bgColor = "bg-secondary",
  textColor = "text-white",
  hoverBg = "hover:bg-secondary/90",
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-lg ${bgColor} px-6 py-3 text-sm font-semibold uppercase ${textColor} transition-all ${hoverBg}`}
    >
      <span>{text}</span>
      <span className="flex items-center justify-center">
        <ion-icon name="arrow-forward" suppressHydrationWarning></ion-icon>
      </span>
    </a>
  );
}
