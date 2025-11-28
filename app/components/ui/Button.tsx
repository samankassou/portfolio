import type { MouseEventHandler } from "react";
import Icon from "@/lib/components/Icon";
import type { IconName } from "@/lib/components/Icon";

interface ButtonProps {
  href?: string;
  label?: string;
  iconName?: IconName;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export default function Btn({
  href = "#",
  label = "Let's Talk",
  iconName = "arrow-forward",
  onClick,
}: ButtonProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="inline-flex items-center justify-between space-x-2 rounded-full bg-primary p-1 text-gray-50"
    >
      <span className="pl-5 pr-2 text-slate-900">{label}</span>
      <span className="flex items-center justify-center rounded-full bg-slate-900 p-2 text-primary">
        <Icon name={iconName} />
      </span>
    </a>
  );
}
