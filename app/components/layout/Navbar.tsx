"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { COMMON_CLASSES } from "@/lib/constants/colors";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`mb-16 flex items-center justify-between rounded-full py-3 pl-3 pr-6 xl:hidden ${COMMON_CLASSES.CARD_BG}`}
      >
        <Image
          className="h-10 w-10 rounded-full"
          src="/img/profile/profile_pic_sm.jpg"
          width="0"
          height="0"
          sizes="100vw"
          alt="Picture of the author"
        />
        <ul className="flex items-center justify-between gap-6">
          <li key="one" className="text-2xl text-primary">
            <ThemeToggle />
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
