export default function Btn({
  href = "#",
  label = "Let’s Talk",
  iconName = "arrow-round-forward",
  onClick,
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="bg-primary p-1 text-gray-50 rounded-full inline-flex justify-between items-center space-x-2"
    >
      <span className="pl-5 pr-2 text-slate-900">{label}</span>
      <span className="bg-slate-900 p-2 rounded-full flex items-center justify-center text-primary">
        <ion-icon name={iconName}></ion-icon>
      </span>
    </a>
  );
}
