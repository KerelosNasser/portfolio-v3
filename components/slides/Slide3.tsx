//Certifications Section
"use client";
import React from "react";
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
    title: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2024",
    credentialId: "AWS-DEV-XXXXX",
  },
  {
    title: "Google Cloud Professional",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PRO-XXXXX",
  },
  {
    title: "Meta Frontend Developer",
    issuer: "Meta (Coursera)",
    date: "2023",
    credentialId: "META-FE-XXXXX",
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
    <motion.div {...EasiIn} className="w-full px-4 sm:px-0">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">Certifications</h2>
      <p className="text-amber-400 text-lg mb-6">Professional credentials</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl"
      >
        {certifications.map((cert) => (
          <motion.div
            key={cert.title}
            variants={itemVariants}
            className="group p-4 sm:p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300"
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
                <p className="text-xs text-amber-500/70 mt-1 truncate">
                  ID: {cert.credentialId}
                </p>
              </div>
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
