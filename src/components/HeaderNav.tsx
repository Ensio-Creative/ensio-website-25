"use client";

import React, { useState } from "react";
import Link from "next/link";

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full bg-white sticky top-0 z-50">
      <header className="max-w-7xl mx-auto flex justify-between items-center px-4 py-6">
        <Link href={"/"}>
          <img
            src="/images/ensio-creative-logo-black.svg"
            alt="EnsioCreative Logo"
            className="my-auto"
          />
        </Link>
        {/* Desktop Nav */}
        <nav className="space-x-10 hidden md:flex">
          <Link href="/work" className="hover:underline">
            WORK
          </Link>
          <Link href="/studio" className="hover:underline">
            STUDIO
          </Link>
          <Link href="/contact" className="hover:underline">
            CONTACT
          </Link>
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center space-x-2 text-base font-medium"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          MENU
          <span className="ml-1">
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </span>
        </button>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="flex justify-between items-center p-4">
              <div className="font-bold text-xl">EnsioCreative</div>
              <button
                className="text-base font-medium flex items-center"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                CLOSE
                <span className="ml-2">
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <line x1="6" y1="6" x2="18" y2="18" />
                    <line x1="6" y1="18" x2="18" y2="6" />
                  </svg>
                </span>
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center items-center gap-8">
              <Link
                href="/work"
                className="text-4xl font-normal"
                onClick={() => setMenuOpen(false)}
              >
                WORK
              </Link>
              <Link
                href="/studio"
                className="text-4xl font-normal"
                onClick={() => setMenuOpen(false)}
              >
                STUDIO
              </Link>
              <Link
                href="/contact"
                className="text-4xl font-normal"
                onClick={() => setMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
            <div className="border-t mt-auto">
              <p className="text-center text-gray-400 py-4 text-sm tracking-wide">
                FORGING BRANDS THAT ENDURE
              </p>
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default HeaderNav;
