"use client";

import { useEffect, useRef } from "react";
import { COMMON_CLASSES, cn } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";
import type { IconName } from "@/lib/components/Icon";
import { mainNavigation } from "@/lib/data/navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const navItems = mainNavigation;
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keep keyboard focus inside the dialog and return it to the opener on close.
  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key !== "Tab" || !panelRef.current) return;

      const focusableElements = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) return;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      previouslyFocused?.focus();
    };
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
        ref={panelRef}
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-[280px] transform shadow-2xl transition-transform duration-300 ease-in-out xl:hidden",
          COMMON_CLASSES.CARD_BG,
        )}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        {/* Header with close button */}
        <div className="flex items-center justify-between border-b border-secondary/10 px-6 py-5 dark:border-base-800">
          <h2
            id="mobile-menu-title"
            className="text-lg font-semibold text-base-content dark:text-base-100"
          >
            Menu
          </h2>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full text-2xl text-secondary/60 transition-colors hover:bg-secondary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-base-400 dark:hover:bg-white/5 dark:hover:text-primary"
            aria-label="Close menu"
            type="button"
          >
            <Icon name="close" />
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
                    <Icon name={item.icon as IconName} />
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
