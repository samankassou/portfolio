"use client";

import { useEffect } from "react";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItemType {
  id: string;
  icon: string;
  label: string;
  href: string;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navItems: NavItemType[] = [
    { id: "home", icon: "home", label: "Home", href: "#" },
    { id: "services", icon: "grid", label: "Services", href: "#services" },
    { id: "education", icon: "school", label: "Education", href: "#education" },
    { id: "experience", icon: "briefcase", label: "Experience", href: "#experience" },
    { id: "portfolio", icon: "folder", label: "Portfolio", href: "#portfolio" },
    { id: "testimonials", icon: "chatbubbles", label: "Testimonials", href: "#testimonials" },
    { id: "blog", icon: "newspaper", label: "Blog", href: "#blog" },
    { id: "contact", icon: "mail", label: "Contact", href: "#contact" },
  ];

  // Handle ESC key press to close menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 xl:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className={cn("fixed right-0 top-0 z-50 h-full w-[280px] transform shadow-2xl transition-transform duration-300 ease-in-out xl:hidden", COMMON_CLASSES.CARD_BG)}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between border-b border-secondary/10 px-6 py-5 dark:border-base-800">
          <h2 className="text-lg font-semibold text-base-content dark:text-base-100">
            Menu
          </h2>
          <button
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-secondary/60 transition-colors hover:bg-secondary/5 hover:text-primary dark:text-base-400 dark:hover:bg-white/5 dark:hover:text-primary"
            aria-label="Close menu"
          >
            <ion-icon name="close" suppressHydrationWarning></ion-icon>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="px-4 py-6">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="flex items-center gap-4 rounded-lg px-4 py-3 text-base font-medium text-secondary/80 transition-all hover:bg-primary/10 hover:text-primary dark:text-base-300 dark:hover:bg-primary/20 dark:hover:text-primary"
                >
                  <span className="text-xl">
                    <ion-icon name={item.icon} suppressHydrationWarning></ion-icon>
                  </span>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}
