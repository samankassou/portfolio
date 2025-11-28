"use client";

import Image from "next/image";
import type { Project } from "@/lib/types";
import { motion } from "framer-motion";
import Icon from "@/lib/components/Icon";

interface ProjectItemProps {
  project: Project;
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group h-fit"
    >
      <div className="relative overflow-hidden rounded-xl">
        <Image
          className="mx-auto h-auto max-w-full cursor-pointer"
          src={project.coverImg}
          width={400}
          height={400}
          alt={project.title}
        />
        <div className="absolute -bottom-10 flex h-full w-full items-center justify-center bg-primary/60 text-[32px] opacity-0 transition-all duration-300 group-hover:bottom-0 group-hover:opacity-100">
          <a href="#" target="_blank">
            <motion.span
              whileHover={{ rotate: 90, scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="inline-block"
            >
              <Icon name="add-outline" />
            </motion.span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
