"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/layout/Footer";
import MobileMenu from "@/app/components/layout/MobileMenu";
import ScrollToTop from "@/app/components/ui/ScrollToTop";
import ThemeToggle from "@/app/components/ui/ThemeToggle";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";
import type { ReactNode } from "react";

interface BlogLayoutProps {
  children: ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-50 border-b border-secondary/10 bg-base/95 backdrop-blur-sm dark:border-base-800 dark:bg-[#000000]/95">
          <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div
              className={`flex items-center justify-between rounded-full py-3 ${COMMON_CLASSES.CARD_BG} px-4`}
            >
              {/* Left: Back + Logo */}
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="flex h-11 w-11 items-center justify-center rounded-full text-secondary/60 transition-colors hover:bg-secondary/5 hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary dark:text-base-400 dark:hover:bg-white/5 dark:hover:text-base-100"
                  aria-label="Back to home"
                >
                  <Icon name="arrow-back" className="text-xl" />
                </Link>
                <Link
                  href="/"
                  className="flex min-h-11 min-w-11 flex-shrink-0 items-center justify-center rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <Image
                    className="h-10 w-10 rounded-full object-cover"
                    src="/img/profile/profile_pic_sm.webp"
                    width={40}
                    height={40}
                    alt="Profile"
                  />
                </Link>
              </div>

              {/* Right: Controls */}
              <ul className="flex items-center justify-between gap-4 sm:gap-6">
                <li className="text-2xl text-primary">
                  <ThemeToggle />
                </li>
                <li className="text-2xl dark:text-primary">
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
