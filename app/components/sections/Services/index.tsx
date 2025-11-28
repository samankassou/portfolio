"use client";

import ServiceCard from "./ServiceCard";
import AdvertCard from "./AdvertCard";
import { services } from "@/lib/data/services";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/lib/hooks/useScrollAnimation";
import { staggerContainer, scaleIn } from "@/lib/utils/animations";

export default function Services() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.ul
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3"
    >
      {services &&
        services.map((service) => (
          <motion.li key={service.id} variants={scaleIn}>
            <ServiceCard service={service} />
          </motion.li>
        ))}
      <motion.li variants={scaleIn}>
        <AdvertCard />
      </motion.li>
    </motion.ul>
  );
}
