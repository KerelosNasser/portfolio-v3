import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { TypewriterEffect } from "./typewriter-effect";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-amber-500 text-primary-foreground hover:bg-amber-500/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-transparent border-amber-500 hover:bg-amber-500 hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
export function Hero() {
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
            <Button variant="default">Get Started</Button>
            <Button variant="outline">Contact Me</Button>
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
