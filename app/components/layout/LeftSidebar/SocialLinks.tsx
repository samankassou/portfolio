"use client";

import type { SocialLink } from "@/lib/types";
import Icon from "@/lib/components/Icon";
import type { IconName } from "@/lib/components/Icon";

interface SocialLinksProps {
  links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="px-8 py-6">
      <div className="flex items-center justify-center gap-5">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-secondary/40 transition-all hover:text-primary dark:text-base-400 dark:hover:text-primary"
            aria-label={link.label}
          >
            <Icon name={link.icon as IconName} />
          </a>
        ))}
      </div>
    </div>
  );
}
