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
  IconBrandGit,
  IconBrandDocker,
  IconBrandTailwind,
  IconBrandGithub,
} from "@tabler/icons-react";

const SvgIcon = (src: string) => {
  const Icon = ({ className }: { className?: string }) => (
    <span
      className={`block bg-current ${className}`}
      style={{
        mask: `url(${src}) no-repeat center / contain`,
        WebkitMask: `url(${src}) no-repeat center / contain`,
      }}
    />
  );
  Icon.displayName = `SvgIcon(${src})`;
  return Icon;
};

const skillGroups = [
  {
    title: "Frontend & Languages",
    categories: ["frontend", "language"],
  },
  {
    title: "Backend, Database & Auth",
    categories: ["backend", "database", "auth"],
  },
  {
    title: "DevOps & Cloud",
    categories: ["devops"],
  },
  {
    title: "Tools & Services",
    categories: ["tools", "ai", "automation", "services", "config"],
  },
];

const skills = [
  // Frontend Frameworks
  { name: "React", icon: IconBrandReact, color: "text-cyan-400", category: "frontend" },
  { name: "Next.js", icon: IconBrandNextjs, color: "text-white", category: "frontend" },
  { name: "Tailwind", icon: IconBrandTailwind, color: "text-teal-400", category: "frontend" },

  // Languages
  { name: "TypeScript", icon: IconBrandTypescript, color: "text-blue-400", category: "language" },

  // Backend/Runtime
  { name: "Node.js", icon: IconBrandNodejs, color: "text-green-500", category: "backend" },
  { name: "GraphQL", icon: SvgIcon("/Icons/graphql.svg"), color: "text-pink-600", category: "backend" },

  // Databases & ORMs
  { name: "Supabase", icon: SvgIcon("/Icons/supabase.svg"), color: "text-green-500", category: "database" },
  { name: "Drizzle", icon: SvgIcon("/Icons/drizzle.svg"), color: "text-yellow-500", category: "database" },
  { name: "Firebase", icon: SvgIcon("/Icons/firebase.svg"), color: "text-orange-500", category: "database" },

  // Authentication
  { name: "Better Auth", icon: SvgIcon("/Icons/betterauth.svg"), color: "text-blue-600", category: "auth" },
  { name: "Clerk", icon: SvgIcon("/Icons/clerk.svg"), color: "text-purple-500", category: "auth" },

  // DevOps & Cloud
  { name: "Docker", icon: IconBrandDocker, color: "text-blue-500", category: "devops" },
  { name: "Vercel", icon: SvgIcon("/Icons/vercel.svg"), color: "text-white", category: "devops" },
  { name: "Google Cloud", icon: SvgIcon("/Icons/googlecloud.svg"), color: "text-blue-400", category: "devops" },

  // Version Control & Tools
  { name: "Git", icon: IconBrandGit, color: "text-orange-500", category: "tools" },
  { name: "Github", icon: IconBrandGithub, color: "text-white", category: "tools" },
  { name: "Cursor", icon: SvgIcon("/Icons/cursor.svg"), color: "text-black", category: "tools" },
  { name: "WebStorm", icon: SvgIcon("/Icons/webstorm.svg"), color: "text-yellow-400", category: "tools" },
  { name: "CodeRabbit", icon: SvgIcon("/Icons/coderabbit.svg"), color: "text-orange-500", category: "tools" },

  // AI & Services
  { name: "Claude", icon: SvgIcon("/Icons/claude.svg"), color: "text-orange-700", category: "ai" },
  { name: "n8n", icon: SvgIcon("/Icons/n8n.svg"), color: "text-red-500", category: "automation" },
  { name: "Resend", icon: SvgIcon("/Icons/resend.svg"), color: "text-white", category: "services" },
  { name: "Dotenv", icon: SvgIcon("/Icons/dotenv.svg"), color: "text-yellow-500", category: "config" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// --- 4. Main Component ---
export default function Slide1() {
  const {} = useSlideshow();

  return (
    <motion.div {...EasiIn} className="w-full px-4 mt-20 sm:px-10 max-w-7xl mx-auto">
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold mb-2 text-white">
          Skills & Technologies
        </h2>
        <p className="text-amber-400 text-lg">The stack I use to build</p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-10" // Adds vertical spacing between categories
      >
        {skillGroups.map((group) => {
          // Filter skills for this specific group
          const groupSkills = skills.filter((skill) =>
            group.categories.includes(skill.category)
          );

          if (groupSkills.length === 0) return null;

          return (
            <motion.div key={group.title} variants={itemVariants} className="w-full">
              <h3 className="text-xl font-semibold text-white/80 mb-4 border-b border-white/10 pb-2">
                {group.title}
              </h3>
              
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 sm:gap-4">
                {groupSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="group flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-amber-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <skill.icon
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${skill.color} transition-transform duration-300`}
                    />
                    <span className="mt-2 text-xs sm:text-sm font-medium text-amber-50 text-center">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}