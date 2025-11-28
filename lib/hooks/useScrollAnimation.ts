"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(threshold = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
    amount: threshold,
  });

  return { ref, isInView };
}
