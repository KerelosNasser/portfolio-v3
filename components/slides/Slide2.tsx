//Projects Section
"use client";
import React from "react";
import { motion } from "framer-motion";
import { EasiIn } from "@/lib/animationPreset";
import { useSlideshow } from "@/lib/slideshow";
import {
  IconBrandGithub,
  IconExternalLink,
  IconArrowRight,
} from "@tabler/icons-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack online store with payment integration and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Management App",
    description:
      "Real-time collaborative task manager with drag-and-drop functionality.",
    tech: ["React", "Node.js", "Socket.io"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern portfolio with smooth animations and interactive slideshows.",
    tech: ["Next.js", "Framer Motion", "Tailwind"],
    github: "#",
    live: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 },
};

export default function Slide2() {
  const { next } = useSlideshow();

  return (
    <motion.div {...EasiIn} className="w-full px-4 sm:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
      <p className="text-amber-400 text-lg mb-6">What I&apos;ve built</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-4 max-w-2xl"
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={itemVariants}
            className="group p-4 sm:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <h3 className="text-lg sm:text-xl font-semibold text-amber-50 group-hover:text-amber-400 transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  className="text-amber-50/60 hover:text-amber-400 transition-colors"
                >
                  <IconBrandGithub className="w-5 h-5" />
                </a>
                <a
                  href={project.live}
                  className="text-amber-50/60 hover:text-amber-400 transition-colors"
                >
                  <IconExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
            <p className="text-sm sm:text-base text-amber-50/70 mt-2">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-1 text-xs rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div
        onClick={next}
        className="group flex bg-amber-600 w-20 h-20 sm:w-24 sm:h-24 rounded-full items-center justify-center p-4 mt-6 cursor-pointer hover:bg-amber-400 transition-colors duration-300"
      >
        <p className="text-sm sm:text-base">next</p>
        <IconArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
      </div>
    </motion.div>
  );
}
