import Icon from "@/lib/components/Icon";

interface AdvertBtnProps {
  text?: string;
  href?: string;
  bgColor?: string;
  textColor?: string;
  hoverBg?: string;
}

export default function AdvertBtn({
  text = "Order now",
  href = "#",
  bgColor = "bg-secondary",
  textColor = "text-primary",
  hoverBg = "hover:bg-secondary/90",
}: AdvertBtnProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 rounded-lg ${bgColor} px-6 py-3 text-sm font-semibold uppercase ${textColor} transition-all ${hoverBg}`}
    >
      <span>{text}</span>
      <span className="flex items-center justify-center">
        <Icon name="arrow-forward" />
      </span>
    </a>
  );
}
