"use client";
import { useEffect, useRef, type ReactNode } from "react";
export default function Reveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let animation: Animation | undefined;
    const stopMotion = () => {
      if (motionPreference.matches) animation?.cancel();
    };
    motionPreference.addEventListener("change", stopMotion);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!motionPreference.matches)
            animation = element.animate(
              [
                { opacity: 0.3, transform: "translateY(24px)" },
                { opacity: 1, transform: "translateY(0)" },
              ],
              { duration: 700, easing: "cubic-bezier(.2,.7,.2,1)" },
            );
          observer.disconnect();
        }
      },
      { threshold: 0.08 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      animation?.cancel();
      motionPreference.removeEventListener("change", stopMotion);
    };
  }, []);
  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
