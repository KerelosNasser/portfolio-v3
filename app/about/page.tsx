import React from "react";

function About() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-12">
      <div className="max-w-3xl text-center">
        <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-amber-400 bg-amber-400/10 rounded-full border border-amber-400/20">
          About Me
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-amber-50 mb-6">
          Hi, I&apos;m <span className="text-amber-400">Kerolos</span>
        </h1>

        <p className="text-lg md:text-xl text-amber-50/80 leading-relaxed mb-6">
          A passionate full-stack developer specializing in building modern web
          applications. I love turning ideas into reality through clean,
          efficient code and intuitive user experiences.
        </p>

        <p className="text-base md:text-lg text-amber-50/60 leading-relaxed">
          With expertise in React, Next.js, TypeScript, and Node.js, I focus on
          creating scalable solutions that make a real impact. When I&apos;m not
          coding, you&apos;ll find me exploring new technologies and learning
          something new.
        </p>
      </div>
    </section>
  );
}

export default About;
