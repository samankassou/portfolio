"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeSwitch from "./themeSwitch";
import MobileMenu from "./mobileMenu";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="mx-4 mb-16 flex items-center justify-between rounded-full bg-base-100 py-3 pl-3 pr-6 xl:hidden dark:bg-[#1C1C1C]">
        <Image
          className="h-10 w-10 rounded-full"
          src="/img/profile_pic_sm.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="Picture of the author"
        />
        <ul className="flex items-center justify-between gap-6">
          <li key="one" className="text-2xl text-primary">
            <ThemeSwitch />
          </li>
          <li key="two" className="text-2xl dark:text-primary">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <ion-icon name="menu" suppressHydrationWarning></ion-icon>
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
