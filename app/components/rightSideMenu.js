"use client";

import { useState, useEffect } from "react";

export default function RightSideMenu() {
  const [activeNav, setActiveNav] = useState("home");
  const [theme, setTheme] = useState("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    let newTheme;
    if (theme === "system") {
      newTheme = "dark";
    } else if (theme === "dark") {
      newTheme = "light";
    } else {
      newTheme = "system";
    }

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (newTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  };

  const getThemeIcon = () => {
    if (theme === "light") return "sunny-outline";
    if (theme === "dark") return "moon-outline";
    return "contrast-outline";
  };

  const navItems = [
    {
      id: "home",
      icon: "home",
      label: "Home",
      href: "#",
    },
    {
      id: "about",
      icon: "person",
      label: "About",
      href: "#about",
    },
    {
      id: "services",
      icon: "grid",
      label: "Services",
      href: "#services",
    },
    {
      id: "contact",
      icon: "layers",
      label: "Contact",
      href: "#contact",
    },
    {
      id: "resume",
      icon: "document-text",
      label: "Resume",
      href: "#resume",
    },
    {
      id: "chat",
      icon: "chatbubbles",
      label: "Chat",
      href: "#chat",
    },
  ];

  return (
    <aside className="hidden w-[88px] xl:block">
      <nav className="sticky top-8 flex flex-col items-center rounded-2xl bg-white py-6 dark:bg-[#1C1C1C]">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="mb-6 flex h-10 w-10 items-center justify-center text-2xl text-primary transition-all hover:opacity-80"
          aria-label="Toggle theme"
        >
          <ion-icon name={getThemeIcon()}></ion-icon>
        </button>

        {/* Navigation Items */}
        <ul className="flex flex-col items-center gap-6">
          {navItems.map((item, index) => (
            <li key={item.id} className="flex flex-col items-center">
              {/* Show label only for first item (Home) */}
              {index === 0 && (
                <span className="mb-1.5 text-xs font-medium text-secondary dark:text-white">
                  {item.label}
                </span>
              )}
              <a
                href={item.href}
                onClick={() => setActiveNav(item.id)}
                className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-all ${
                  activeNav === item.id
                    ? "bg-primary text-white"
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300"
                }`}
                aria-label={item.label}
              >
                <ion-icon name={item.icon}></ion-icon>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
