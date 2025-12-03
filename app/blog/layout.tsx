"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/app/components/layout/Footer";
import MobileMenu from "@/app/components/layout/MobileMenu";
import ScrollToTop from "@/app/components/ui/ScrollToTop";
import ThemeToggle from "@/app/components/ui/ThemeToggle";
import ChristmasToggle from "@/app/components/ui/ChristmasToggle";
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
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <header className="sticky top-0 z-50 bg-base/95 dark:bg-[#000000]/95 backdrop-blur-sm border-b border-secondary/10 dark:border-base-800">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex items-center justify-between py-3 rounded-full ${COMMON_CLASSES.CARD_BG} px-4`}>
              {/* Left: Back + Logo */}
              <div className="flex items-center gap-3">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-secondary/60 hover:text-secondary dark:text-base-400 dark:hover:text-base-100 transition-colors"
                  aria-label="Back to home"
                >
                  <Icon name="arrow-back" className="text-xl" />
                </Link>
                <Link href="/" className="flex-shrink-0">
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
                <li className="text-2xl text-primary">
                  <ChristmasToggle />
                </li>
                <li className="text-2xl dark:text-primary">
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    aria-label="Open menu"
                  >
                    <Icon name="menu" />
                  </button>
                </li>
              </ul>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 pb-12">
          {children}
        </main>

        {/* Footer */}
        <div className="px-4 sm:px-6 lg:px-8 pb-6">
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
