//Interests Section
"use client";
import React from "react";
import { motion } from "framer-motion";
import { EasiIn } from "@/lib/animationPreset";
import {
  IconCode,
  IconBook,
  IconDeviceGamepad2,
  IconMusic,
  IconCamera,
  IconBrain,
} from "@tabler/icons-react";

const interests = [
  { name: "Coding", icon: IconCode, description: "Building cool stuff" },
  { name: "Reading", icon: IconBook, description: "philosophy & self-help books" },
  { name: "Gaming", icon: IconDeviceGamepad2, description: "Strategy games" },
  { name: "Music", icon: IconMusic, description: "Lo-fi & pop" },
  { name: "Photography", icon: IconCamera, description: "Street & Nature" },
  { name: "Micro learning", icon: IconBrain, description: "tech content & tutorials" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Slide4() {

  return (
    <motion.div {...EasiIn} className="w-full sm:px-24 mt-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">Interests</h2>
      <p className="text-amber-400 text-lg mb-6">Beyond the code</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl"
      >
        {interests.map((interest) => (
          <motion.div
            key={interest.name}
            variants={itemVariants}
            className="group flex flex-col items-center text-center p-4 sm:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
          >
            <div className="p-3 rounded-full bg-amber-500/20 group-hover:bg-amber-500/30 transition-colors">
              <interest.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-400" />
            </div>
            <h3 className="mt-3 text-sm sm:text-base font-semibold text-amber-50">
              {interest.name}
            </h3>
            <p className="mt-1 text-xs text-amber-50/60">
              {interest.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
