"use client";
import React from "react";
import { useSlideshow } from "@/lib/slideshow";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion } from "framer-motion";

export default function SlideNavigation() {
  const { index, next, prev } = useSlideshow();

  const isFirst = index % 1000 === 0; // or (index % slideCount === 0) if you pass slideCount somewhere

  return (
    <>
      {/* FIRST SLIDE: single next button in custom position */}
      {isFirst ? (
        <motion.button
          onClick={next}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next slide"
          className="fixed z-50 p-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white
                     right-8 bottom-12 /* customize these to place the button where you want */"
        >
          <IconArrowRight size={20} />
        </motion.button>
      ) : (
        /* OTHER SLIDES: left + right side overlay navigation */
        <>
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
            className="fixed left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white"
          >
            <IconArrowLeft size={24} />
          </motion.button>

          <motion.button
            onClick={next}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-amber-600 hover:bg-amber-500 text-white"
          >
            <IconArrowRight size={24} />
          </motion.button>
        </>
      )}
    </>
  );
}