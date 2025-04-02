"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import Logo from "../../../public/logo.png";
import { navLinks } from "@/app/data";
import Navbar from "./navbar";
import ButtonCard from "../ui/button";

export default function Header({ scrollToSection }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />

      {/* Main Navigation */}
      <header
        className={`sticky common-padding top-0 z-50 bg-white border-b ${
          isScrolled ? "shadow-md" : "shadow-sm"
        } transition-shadow`}
      >
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex gap-1 items-center">
            <div className="sm:size-[50px] size-[36px] relative">
              <Image
                src={Logo}
                alt="Stay in Digital Logo"
                priority
                fill
                className="mr-2  object-contain"
              />
            </div>

            <span className="text-[#0a4d8c] font-bold text-sm sm:text-xl">
              Stay in Digital
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-700 hover:text-blue-600"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <ButtonCard onClick={() => scrollToSection("contact")} />
        </div>
      </header>
    </>
  );
}
