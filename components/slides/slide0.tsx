"use client";
import Image from "next/image";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
import { IconDownload } from "@tabler/icons-react";
import Link from "next/link";

export default function Slide0() {
  return (
    <>
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-8 sm:items-start mt-30 sm:mt-0">
      <h1 className="text-5xl font-bold">Hi, I&#39;m Kerolos</h1>
      <p className="text-2xl font-semibold">
        I&apos;m a passionate software developer with a strong background in
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
</div>
      <Image
        src="/hero.png"
        alt="hero"
        width={600}
        height={600}
        className="relative top-20 left-30 hidden sm:block"
      />
      </div>
    </>
  );
}