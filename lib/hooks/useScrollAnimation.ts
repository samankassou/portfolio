"use client";

import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function useScrollAnimation(threshold = 0.2) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const isInView = useInView(ref, {
    once: true,
    // Use smaller margin on mobile to prevent sections from staying hidden
    margin: isMobile ? "-20px" : "-100px",
    amount: threshold,
  });

  return { ref, isInView };
}
