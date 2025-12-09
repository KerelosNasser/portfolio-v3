"use client";

import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandFacebook,
  IconLayoutNavbarCollapse,
} from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

// type (optional, but nice for TS)
type SocialItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
  bg: string;
  shadow: string;
};

// 🔥 Your fixed social icons with custom colors + glow
const SOCIAL_ITEMS: SocialItem[] = [
  {
    title: "GitHub",
    icon: <IconBrandGithub size={22} />,
    href: "https://github.com/KerelosNasser",
    bg: "bg-[#181717]",
    shadow: "shadow-[0_0_25px_rgba(24,23,23,0.85)]",
  },
  {
    title: "LinkedIn",
    icon: <IconBrandLinkedin size={22} />,
    href: "https://www.linkedin.com/in/kero-nasser-608298294/",
    bg: "bg-[#0A66C2]",
    shadow: "shadow-[0_0_25px_rgba(10,102,194,0.85)]",
  },
  {
    title: "WhatsApp",
    icon: <IconBrandWhatsapp size={22} />,
    href: "https://wa.me/201211730727",
    bg: "bg-[#25D366]",
    shadow: "shadow-[0_0_25px_rgba(37,211,102,0.85)]",
  },
  {
    title: "Facebook",
    icon: <IconBrandFacebook size={22} />,
    href: "https://www.facebook.com/kero.nasser.329325",
    bg: "bg-[#1877F2]",
    shadow: "shadow-[0_0_25px_rgba(24,119,242,0.85)]",
  },
];

export const FloatingDock = () => {
  return (
    <>
      <FloatingDockDesktop />
      <FloatingDockMobile />
    </>
  );
};

/* ---------------------- MOBILE DOCK ---------------------- */

const FloatingDockMobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative block md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {SOCIAL_ITEMS.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <a
                  href={item.href}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border border-white/40 backdrop-blur-2xl",
                    item.bg,
                    item.shadow,
                  )}
                >
                  {item.icon}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full
                   bg-white/20 border border-white/30 backdrop-blur-2xl"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-900" />
      </button>
    </div>
  );
};

/* ---------------------- DESKTOP DOCK ---------------------- */

const FloatingDockDesktop = () => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto hidden h-16 w-[300px] items-center justify-center gap-4
                 rounded-3xl border border-white/25 bg-transparent px-4 py-2
                 backdrop-blur-2xl shadow-[0_22px_60px_rgba(15,23,42,0.95)] md:flex"
    >
      {SOCIAL_ITEMS.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

/* ---------------------- ICON CONTAINER ---------------------- */

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  bg,
  shadow,
}: SocialItem & { mouseX: MotionValue }) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const wT = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const hT = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const wIconT = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  const hIconT = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  const width = useSpring(wT, { stiffness: 150, damping: 12, mass: 0.1 });
  const height = useSpring(hT, { stiffness: 150, damping: 12, mass: 0.1 });
  const widthIcon = useSpring(wIconT, { stiffness: 150, damping: 12, mass: 0.1 });
  const heightIcon = useSpring(hIconT, { stiffness: 150, damping: 12, mass: 0.1 });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-full border border-white/40 backdrop-blur-2xl",
          bg,
          shadow,
        )}
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-white/30
                         bg-white/70 px-2 py-0.5 text-xs text-neutral-800 backdrop-blur-md"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
