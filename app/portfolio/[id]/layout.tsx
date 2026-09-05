"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/app/components/layout/Footer";
import MobileMenu from "@/app/components/layout/MobileMenu";
import ScrollToTop from "@/app/components/ui/ScrollToTop";
import ThemeToggle from "@/app/components/ui/ThemeToggle";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";
import type { ReactNode } from "react";

interface PortfolioLayoutProps {
  children: ReactNode;
}

export default function PortfolioLayout({ children }: PortfolioLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b border-secondary/10 bg-base/90 py-3 backdrop-blur-xl dark:border-base-800 dark:bg-black/90">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`flex items-center justify-between rounded-full px-4 py-2 shadow-sm ${COMMON_CLASSES.CARD_BG}`}
            >
              {/* Left: Back + Logo */}
              <div className="flex items-center gap-3">
                <Link
                  href="/#portfolio"
                  className="flex h-11 min-w-11 items-center justify-center gap-2 rounded-full px-1 text-secondary/60 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-base-400 dark:hover:text-primary"
                  aria-label="Back to portfolio"
                >
                  <Icon name="arrow-back" className="text-xl" />
                  <span className="hidden text-sm font-semibold sm:inline">
                    Case studies
                  </span>
                </Link>
                <span className="hidden h-5 w-px bg-secondary/10 dark:bg-base-700 sm:block" />
                <Link
                  href="/"
                  className="flex min-h-11 flex-shrink-0 items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span
                    aria-label="Foulla Samankassou"
                    className="inline-flex size-11 items-center justify-center rounded-full bg-primary/15 text-sm font-bold text-primary-800 dark:text-primary"
                  >
                    FS
                  </span>
                  <span className="hidden text-sm font-semibold text-base-content dark:text-base-100 lg:inline">
                    Foulla SAMANKASSOU
                  </span>
                </Link>
              </div>

              {/* Right: Controls */}
              <ul className="flex items-center justify-between gap-4 sm:gap-6">
                <li className="hidden md:block">
                  <Link
                    href="/#contact"
                    className="text-sm font-semibold text-secondary/70 transition-colors hover:text-primary dark:text-base-300 dark:hover:text-primary"
                  >
                    Contact
                  </Link>
                </li>
                <li className="text-2xl text-primary">
                  <ThemeToggle />
                </li>
                <li className="text-2xl dark:text-primary md:hidden">
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
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 pb-12">{children}</main>

        {/* Footer */}
        <div className="px-4 pb-6 sm:px-6 lg:px-8">
          <Footer />
        </div>

        {/* Mobile Menu */}
        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </>
  );
}
