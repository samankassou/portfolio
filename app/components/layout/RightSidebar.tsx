"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import ChristmasToggle from "../ui/ChristmasToggle";
import { mainNavigation } from "@/lib/data/navigation";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import type { NavItem } from "@/lib/types";
import Icon from "@/lib/components/Icon";
import type { IconName } from "@/lib/components/Icon";

export default function RightSideMenu() {
  const [activeNav, setActiveNav] = useState("home");

  // Use all navigation items for sidebar navigation
  const navItems = mainNavigation;

  // Track active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .map((item) => {
          // Skip "#" alone (home link) or non-hash hrefs
          if (!item.href.startsWith("#") || item.href === "#") {
            return { id: item.id, element: null };
          }
          const element = document.querySelector(item.href);
          return { id: item.id, element };
        })
        .filter((section) => section.element);

      // Find the section that's currently in view
      const currentSection = sections.find((section) => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        // Consider a section active if it's in the top half of the viewport
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveNav(currentSection.id);
      } else if (window.scrollY < 100) {
        // If we're at the top of the page, set home as active
        setActiveNav("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <aside className="hidden xl:block">
      <nav
        className={`fixed right-[max(2rem,calc((100vw-1600px)/2))] top-8 flex h-[calc(100vh-4rem)] w-[88px] flex-col items-center rounded-2xl py-8 ${COMMON_CLASSES.CARD_BG}`}
      >
        {/* Theme Toggle */}
        <div className="group relative mb-4 flex flex-col items-center">
          <ThemeToggle className="flex h-10 w-10 items-center justify-center text-2xl text-primary transition-all hover:opacity-80" />
          <span className="pointer-events-none absolute bottom-full mb-3 whitespace-nowrap rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-gray-800">
            Toggle Theme
          </span>
        </div>

        {/* Christmas Toggle */}
        <div className="group relative mb-8 flex flex-col items-center">
          <ChristmasToggle className="flex h-10 w-10 items-center justify-center text-2xl text-primary transition-all hover:opacity-80" />
          <span className="pointer-events-none absolute bottom-full mb-3 whitespace-nowrap rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-gray-800">
            Toggle Celebration
          </span>
        </div>

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
              <span className="pointer-events-none absolute bottom-full mb-3 whitespace-nowrap rounded-lg bg-secondary px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-gray-800">
                {item.label}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
