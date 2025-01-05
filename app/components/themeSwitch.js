"use client";

import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    } else if (localStorage.getItem("theme") === "light") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  }, []);

  function toggleDarkMode() {
    if (theme === "system") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else if (theme === "light") {
      setTheme("system");
      localStorage.removeItem("theme");
      applySystemTheme();
    }
  }

  function applySystemTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div>
      <button onClick={toggleDarkMode}>
        {theme === "system" ? (
          <ion-icon name="desktop-outline"></ion-icon>
        ) : null}

        {theme === "dark" ? (
          <ion-icon name="color-fill-outline"></ion-icon>
        ) : null}
        {theme === "light" ? <ion-icon name="sunny"></ion-icon> : null}
      </button>
    </div>
  );
}
