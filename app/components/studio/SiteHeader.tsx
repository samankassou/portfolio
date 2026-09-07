"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ThemeToggle from "../ui/ThemeToggle";
const links = [
  { href: "/#portfolio", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#experience", label: "Experience" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="studio-header">
        <div className="studio-wrap header-inner">
          <Link
            className="studio-logo"
            href="/"
            aria-label="Foulla Samankassou — home"
          >
            foulla<span aria-hidden="true">✳</span>
          </Link>
          <span className="header-name">
            Foulla Samankassou
            <br />
            <span>Engineer. Builder. Problem solver.</span>
          </span>
          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="header-controls">
            <Link href="/#contact" className="header-contact">
              Let’s talk <span aria-hidden="true">↗</span>
            </Link>
            <ThemeToggle />
            <button
              ref={menuButton}
              className="studio-menu-toggle"
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="studio-mobile-nav"
              aria-label={open ? "Close navigation" : "Open navigation"}
            >
              <span aria-hidden="true">{open ? "−" : "+"}</span>
            </button>
          </div>
        </div>
        <nav
          id="studio-mobile-nav"
          className="studio-mobile-nav"
          hidden={!open}
          aria-label="Mobile navigation"
        >
          {[
            ...links,
            { href: "/#capabilities", label: "Capabilities" },
            { href: "/blog", label: "Writing" },
            { href: "/#contact", label: "Contact" },
          ].map((link, i) => (
            <Link
              key={link.href}
              onClick={() => setOpen(false)}
              href={link.href}
            >
              <span className="eyebrow">0{i + 1}</span>
              {link.label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
