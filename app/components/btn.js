export default function Btn({
  href = "#",
  label = "Let’s Talk",
  iconName = "arrow-forward",
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-between space-x-2 rounded-full bg-primary p-1 text-gray-50"
    >
      <span className="pl-5 pr-2 text-slate-900">{label}</span>
      <span className="flex items-center justify-center rounded-full bg-slate-900 p-2 text-primary">
        <ion-icon name={iconName} suppressHydrationWarning></ion-icon>
      </span>
    </a>
  );
}
