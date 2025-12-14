//Certifications Section
"use client";
import { motion } from "framer-motion";
import { EasiIn } from "@/lib/animationPreset";
import { useSlideshow } from "@/lib/slideshow";
import {
  IconCertificate,
  IconArrowRight,
  IconCalendar,
} from "@tabler/icons-react";

const certifications = [
  {
    title: "CIB internships",
    issuer: "CIB",
    date: "2025",
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta (Coursera)",
    date: "2024",
  },
  {
    title: "Business Development",
    issuer: "National Bank of Egypt",
    date: "2024",
  },
  {
    title: "Soft Skills",
    issuer: "NBE",
    date: "2023",
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export default function Slide3() {
  const { next } = useSlideshow();

  return (
    <motion.div {...EasiIn} className="w-full mt-10">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">Certifications</h2>
      <p className="text-amber-400 text-lg mb-6">Professional credentials</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-full mx-auto overflow-hidden"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={itemVariants}
            className="group p-4 sm:p-12 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/20">
                <IconCertificate className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-amber-50 group-hover:text-amber-400 transition-colors truncate">
                  {cert.title}
                </h3>
                <p className="text-sm text-amber-50/70 mt-1">{cert.issuer}</p>
                <div className="flex items-center gap-1 mt-2 text-xs text-amber-50/50">
                  <IconCalendar className="w-3 h-3" />
                  <span>{cert.date}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
