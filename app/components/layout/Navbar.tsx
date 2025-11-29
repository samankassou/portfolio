"use client";

import { useState } from "react";
import Image from "next/image";
import ThemeToggle from "../ui/ThemeToggle";
import MobileMenu from "./MobileMenu";
import { COMMON_CLASSES } from "@/lib/constants/colors";
import Icon from "@/lib/components/Icon";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav
        className={`mb-16 flex items-center justify-between rounded-full py-2 pl-2 pr-6 xl:hidden ${COMMON_CLASSES.CARD_BG}`}
      >
        <div className="flex-shrink-0">
          <Image
            className="h-10 w-10 rounded-full object-cover sm:h-14 sm:w-14"
            src="/img/profile/profile_pic_sm.webp"
            width={64}
            height={64}
            sizes="(max-width: 640px) 56px, 64px"
            priority
            alt="Picture of the author"
          />
        </div>
        <ul className="flex items-center justify-between gap-6">
          <li key="one" className="text-2xl text-primary">
            <ThemeToggle />
          </li>
          <li key="two" className="text-2xl dark:text-primary">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
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
