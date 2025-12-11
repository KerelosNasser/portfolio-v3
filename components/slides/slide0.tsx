//Hero Section
"use client";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import Link from "next/link";
import { useSlideshow } from "@/lib/slideshow";
import { motion } from "framer-motion";
import { EasiIn } from "@/lib/animationPreset";

export default function Slide0() {
  const { next } = useSlideshow();

  return (
    <>
      <div className="flex items-center justify-center">
        <motion.div
          {...EasiIn}
          className="flex flex-col items-center justify-center gap-8 sm:items-start mt-30 sm:mt-0"
        >
          <h1 className="text-5xl font-bold">Hi, I&#39;m Kerolos</h1>
          <p className="text-2xl font-semibold">
            I&apos;m a Dedicated software developer with a strong background in
            <br />
            web development.
          </p>
          <TypewriterEffect
            words={[
              { text: "Build" },
              { text: "modern" },
              { text: "web" },
              { text: "experiences" },
              { text: "with" },
              { text: "Precision.", className: "text-amber-400" },
            ]}
            className="text-2xl font-semibold"
          />
          <div className="flex gap-4">
            <a href="/resume.pdf" download>
              <Button variant="default">
                Resume <IconDownload />
              </Button>
            </a>
            <Link href="/contact">
              <Button variant="outline">Contact Me</Button>
            </Link>
          </div>
          <div
            onClick={next}
            className="group flex bg-amber-600 w-24 h-24 rounded-full items-center justify-center p-4 mt-4 cursor-pointer hover:bg-amber-400 duration-300"
          >
            <p>next</p>
            <IconArrowRight className="transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </div>
        </motion.div>
        <Image
          src="/hero.png"
          alt="hero"
          width={600}
          height={600}
          priority
          className="relative top-20 left-30 hidden sm:block"
        />
      </div>
    </>
  );
}
