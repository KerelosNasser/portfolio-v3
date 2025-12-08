"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex justify-around mt-2 items-center">
        <h1 className="text-amber-50 text-3xl font-bold hover:text-amber-400 duration-300">Kerolos Nasser</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-12 justify-center text-lg font-semibold text-amber-50">
          <li>
            <Link href="/" className="hover:text-amber-400  duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-amber-400 duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-amber-400 duration-300">
              Contact
            </Link>
          </li>
          <li>
            <a href="/resume.pdf" download className="hover:text-amber-400 duration-300">
              Resume
            </a>
          </li>
        </ul>

        {/* Burger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-amber-50 block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-amber-50 block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-amber-50 block"
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden flex ml-8 flex-col gap-4 mt-4 text-lg font-semibold text-amber-50 overflow-hidden"
          >
            <li>
              <Link
                href="/"
                className="hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                href="/resume.pdf"
                download
                className="hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                Resume
              </a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
