//Projects Section
"use client";
import React from "react";
import { motion } from "framer-motion";
import { EasiIn } from "@/lib/animationPreset";
import {
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";

const projects = [
  {
    title: "Driving School V2",
    description:
      "Comprehensive driving school platform for scheduling and student management.",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/KerelosNasser/eg-driving-school",
    live: "https://eg-driving-school-hn6w4kfc2-kerelosnassers-projects.vercel.app",
  },
  {
    title: "Driving School V1",
    description:
      "Admin dashboard for managing driving school operations and instructors.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/KerelosNasser/driving-school",
    live: "https://driving-school-sage.vercel.app/",
  },
  {
    title: "Signalist",
    description: "Real-time stock market tracking and analysis application.",
    tech: ["Next.js", "React", "API Integration"],
    github: "https://github.com/KerelosNasser/signalist",
    live: "#",
  },
  {
    title: "Calendly Clone",
    description: "Scheduling automation tool for efficient meeting management.",
    tech: ["React", "Node.js", "Full Stack"],
    github: "https://github.com/KerelosNasser/calendly-clone",
    live: "https://calendly-clone-lbswnr408-kerelosnassers-projects.vercel.app/",
  },
  {
    title: "SaaS App",
    description:
      "Multi-tenant SaaS application foundation with authentication and billing.",
    tech: ["Next.js", "Stripe", "Tailwind CSS", "Vapi SDK"],
    github: "https://github.com/KerelosNasser/saas-app",
    live: "https://saas-kfv2i2be3-kerelosnassers-projects.vercel.app",
  },
  {
    title: "Advanced E-Commerce",
    description:
      "Feature-rich online shopping platform with cart and checkout functionalities.",
    tech: ["Next.js", "Redux", "Payment Gateway"],
    github: "https://github.com/KerelosNasser/advanced_e_commerce",
    live: "https://advanced-e-commerce-onjduf60v-kerelosnassers-projects.vercel.app",
  },
  {
    title: "Portfolio",
    description: "Personal portfolio website showcasing projects and skills.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/KerelosNasser/Portfolio",
    live: "https://portfolio-3f65rerd0-kerelosnassers-projects.vercel.app",
  },
  {
    title: "Little Lemon Restaurant",
    description:
      "Restaurant website with reservation table feature (Meta Frontend Capstone).",
    tech: ["React", "UI/UX Design"],
    github:
      "https://github.com/KerelosNasser/little-lemon-meta-frontend-capstone-main",
    live: "https://little-lemon-meta-frontend-capstone-main-pdgdpebwt.vercel.app",
  },
  {
    title: "Environment Dashboard",
    description:
      "Interactive dashboard for monitoring environmental data and metrics.",
    tech: ["React", "D3.js", "Chart.js"],
    github: "https://github.com/KerelosNasser/Enviroment-Dashboard",
    live: "https://enviroment-dashboard-9ll1nxi7s-kerelosnassers-projects.vercel.app",
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
  return (
    <motion.div {...EasiIn} className="w-full px-2 sm:px-12">
      <h2 className="text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
      <p className="text-amber-400 text-lg mb-6">What I&apos;ve built</p>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-full"
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-50/60 hover:text-amber-400 transition-colors"
                >
                  <IconBrandGithub className="w-5 h-5" />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
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
    </motion.div>
  );
}
