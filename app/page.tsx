// components/Hero.tsx
"use client";
import React from "react";
import { EasiIn } from "@/lib/animationPreset";
import { motion } from "framer-motion";
import { useSlideshow } from "@/lib/slideshow";
import { IconArrowRight } from "@tabler/icons-react";
import { slideComponents } from "@/components/slides";

function Home() {
  const { index, next } = useSlideshow();

  // Get current slide component
  const SlideComponent = slideComponents[index % slideComponents.length];

  return (
    <section>
      <div className="flex mx-auto ml-12">
        <motion.div
          {...EasiIn}
          className="flex flex-col gap-4 justify-center sm:mt-0 items-start text-amber-50"
        >
          {/* Render current slide */}
          <SlideComponent />

          {/* Navigation */}
          <div
            onClick={next}
            className="group flex bg-amber-600 w-24 h-24 rounded-full items-center justify-center p-4 mt-4 cursor-pointer hover:bg-amber-400 duration-300"
          >
            <p>next</p>
            <IconArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;