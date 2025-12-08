import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <nav>
      <div className="flex justify-around mt-2">
        <h1 className="text-amber-50 text-3xl font-bold">Kerolos</h1>
        <ul className="flex gap-12 justify-center text-lg font-semibold text-amber-50">
          <li>
            <Link href="/" className="hover:text-amber-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-amber-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-amber-400">
              Contact
            </Link>
          </li>
          <li>
            <a href="/resume.pdf" download 
            className="hover:text-amber-400">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
