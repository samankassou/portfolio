"use client";

import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import { mainNavigation } from "@/lib/data/navigation";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import type { NavItem } from "@/lib/types";
import Icon from "@/lib/components/Icon";
import type { IconName } from "@/lib/components/Icon";

export default function RightSideMenu() {
  const [activeNav, setActiveNav] = useState("home");

  // Use all navigation items for sidebar navigation
  const navItems = mainNavigation;

  return (
    <aside className="hidden w-[88px] xl:block">
      <nav
        className={`sticky top-8 flex min-h-[900px] flex-col items-center rounded-2xl py-8 ${COMMON_CLASSES.CARD_BG}`}
      >
        {/* Theme Toggle */}
        <ThemeToggle className="mb-8 flex h-10 w-10 items-center justify-center text-2xl text-primary transition-all hover:opacity-80" />

        {/* Navigation Items */}
        <ul className="flex flex-1 flex-col items-center justify-center gap-4">
          {navItems.map((item: NavItem, index: number) => (
            <li
              key={item.id}
              className="group relative flex flex-col items-center"
            >
              <a
                href={item.href}
                onClick={() => setActiveNav(item.id)}
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-all ${
                  activeNav === item.id
                    ? "bg-primary text-base-content"
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                }`}
                aria-label={item.label}
              >
                <Icon name={item.icon as IconName} />
              </a>
              {/* Tooltip */}
              <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-gray-800">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
