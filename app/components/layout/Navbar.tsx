"use client";

import { useState } from "react";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";

const desktopLinks = [
  { label: "Case Studies", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`mb-6 flex items-center justify-between rounded-full py-2 pl-2 pr-6 xl:hidden ${COMMON_CLASSES.CARD_BG}`}
      >
        <a
          href="#"
          className="flex min-h-11 flex-shrink-0 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          aria-label="Back to top"
        >
          <span
            aria-label="Foulla Samankassou"
            className="inline-flex size-11 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary-800 dark:text-primary"
          >
            FS
          </span>
          <span className="hidden text-sm font-semibold text-base-content dark:text-base-100 sm:block">
            Foulla SAMANKASSOU
          </span>
        </a>
        <ul className="hidden items-center gap-6 lg:flex">
          {desktopLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-secondary/70 transition-colors hover:text-primary dark:text-base-300 dark:hover:text-primary"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex items-center justify-between gap-2 sm:gap-4">
          <li key="theme" className="text-2xl text-primary">
            <ThemeToggle />
          </li>
          <li key="menu" className="text-2xl dark:text-primary lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-secondary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:hover:bg-white/5"
              aria-label="Open menu"
              type="button"
            >
              <Icon name="menu" />
            </button>
          </li>
        </ul>
      </nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
