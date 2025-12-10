import React from "react";
import Image from "next/image";
import { TypewriterEffect } from "./ui/typewriter-effect";
import { Button } from "./ui/button";
import { IconArrowRight, IconDownload } from "@tabler/icons-react";
import Link from "next/link";

function Hero() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "modern",
    },
    {
      text: "web",
    },
    {
      text: "experiences",
    },
    {
      text: "with",
    },
    {
      text: "Precision.",
      className: "text-amber-400",
    },
  ];
  return (
    <section>
      <div className="flex">
        <div className="flex flex-col text-start ml-12 mx-auto gap-4 justify-center mt-30 sm:mt-0 items-start text-amber-50 ">
          <h1 className="text-5xl font-bold">Hi, I&apos;m Kerolos</h1>
          <p className="text-2xl font-semibold">
            I&apos;m a passionate software developer with a strong background in
            <br />
            web development.
          </p>
          <TypewriterEffect words={words} className="text-2xl font-semibold" />
          <div className="flex gap-4">
            <a href="/resume.pdf" download><Button variant="default">Resume <IconDownload/></Button></a>
            <Link href='/contact'><Button variant="outline">Contact Me</Button></Link>
          </div>
          <div className="flex bg-amber-600 w-20 h-20 rounded-full items-center justify-center p-4 mt-4">
            <IconArrowRight/>
          </div>
        </div>
        <Image
          src="/hero.png"
          alt="hero"
          width={600}
          height={600}
          className="relative top-20 right-20 hidden sm:block"
        />
      </div>
      <div className="flex"></div>
    </section>
  );
}

export default Hero;
