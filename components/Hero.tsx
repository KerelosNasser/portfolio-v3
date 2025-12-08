import React from "react";
import { TypewriterEffect } from "./ui/typewriter-effect";

function Hero() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-amber-400",
    },
  ];
  return (
    <section className="h-screen w-full">
      <div className="flex flex-col text-start ml-12 mx-auto gap-4 justify-center items-start text-amber-50 mt-40">
        <h1 className="text-5xl font-bold">Hi, I&apos;m Kerolos</h1>
        <p className="text-2xl font-semibold">
          I&apos;m a passionate software developer with a strong background in
          <br />
          web development.f
        </p>
        <TypewriterEffect words={words} className="text-2xl font-semibold" />
      </div>
    </section>
  );
}

export default Hero;
