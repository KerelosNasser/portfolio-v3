//Skills Section
"use client";
import React from "react";
import { motion } from "framer-motion";
import { EasiIn } from "@/lib/animationPreset";
import { useSlideshow } from "@/lib/slideshow";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandGit,
  IconBrandDocker,
  IconBrandTailwind,
  IconDatabase,
  IconArrowRight,
} from "@tabler/icons-react";

const skills = [
  { name: "React", icon: IconBrandReact, color: "text-cyan-400" },
  { name: "Next.js", icon: IconBrandNextjs, color: "text-white" },
  { name: "TypeScript", icon: IconBrandTypescript, color: "text-blue-400" },
  { name: "Node.js", icon: IconBrandNodejs, color: "text-green-500" },
  { name: "Python", icon: IconBrandPython, color: "text-yellow-400" },
  { name: "Git", icon: IconBrandGit, color: "text-orange-500" },
  { name: "Docker", icon: IconBrandDocker, color: "text-blue-500" },
  { name: "Tailwind", icon: IconBrandTailwind, color: "text-teal-400" },
  { name: "Databases", icon: IconDatabase, color: "text-amber-400" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Slide1() {
  const { next } = useSlideshow();

  return (
    <motion.div {...EasiIn} className="w-full px-4 sm:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">
        Skills & Technologies
      </h2>
      <p className="text-amber-400 text-lg mb-6">What I work with</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 max-w-3xl"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
          >
            <skill.icon
              className={`w-8 h-8 sm:w-10 sm:h-10 ${skill.color} group-hover:scale-110 transition-transform duration-300`}
            />
            <span className="mt-2 text-xs sm:text-sm font-medium text-amber-50">
              {skill.name}
            </span>
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
