"use client";

import { useState } from "react";
import ThemeToggle from "./ui/ThemeToggle";
import { mainNavigation } from "@/lib/data/navigation";
import { COMMON_CLASSES } from "@/lib/constants/colors";

export default function RightSideMenu() {
  const [activeNav, setActiveNav] = useState("home");

  // Use first 6 items for sidebar navigation
  const navItems = mainNavigation.slice(0, 6);

  // Old navItems (kept commented for reference - different from mainNavigation)
  /*const navItems = [
    {
      id: "home",
      icon: "home",
      label: "Home",
      href: "#",
    },
    {
      id: "about",
      icon: "person",
      label: "About",
      href: "#about",
    },
    {
      id: "services",
      icon: "grid",
      label: "Services",
      href: "#services",
    },
    {
      id: "contact",
      icon: "layers",
      label: "Contact",
      href: "#contact",
    },
    {
      id: "resume",
      icon: "document-text",
      label: "Resume",
      href: "#resume",
    },
    {
      id: "chat",
      icon: "chatbubbles",
      label: "Chat",
      href: "#chat",
    },
  ];*/

  return (
    <aside className="hidden w-[88px] xl:block">
      <nav
        className={`sticky top-8 flex flex-col items-center rounded-2xl py-6 ${COMMON_CLASSES.CARD_BG}`}
      >
        {/* Theme Toggle */}
        <ThemeToggle className="mb-6 flex h-10 w-10 items-center justify-center text-2xl text-primary transition-all hover:opacity-80" />

        {/* Navigation Items */}
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item, index) => (
            <li key={item.id} className="flex flex-col items-center">
              {/* Show label only for first item (Home) */}
              {index === 0 && (
                <span className="mb-1.5 text-xs font-medium text-secondary dark:text-white">
                  {item.label}
                </span>
              )}
              <a
                href={item.href}
                onClick={() => setActiveNav(item.id)}
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-all ${
                  activeNav === item.id
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                }`}
                aria-label={item.label}
              >
                <ion-icon name={item.icon} suppressHydrationWarning></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
