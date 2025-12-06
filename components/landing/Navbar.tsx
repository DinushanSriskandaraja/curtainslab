"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#161617]/90 backdrop-blur-md z-50 border-b border-white/10 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#ED4716] flex items-center justify-center">
            <span className="text-black font-bold text-sm">CL</span>
          </div>
          <span className="font-display font-semibold text-white text-lg">
            Curtains Lab
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 hover:text-white transition-colors">
              {link.label}
            </a>
          ))}

          {/* CTA Buttons */}
          <Link
            href="#signup"
            className="ml-4 px-4 py-2 bg-[#ED4716] text-text  rounded-lg hover:bg-[#ff5f30] transition-colors">
            Sign Up
          </Link>
          <Link
            href="#signin"
            className="ml-2 px-4 py-2 border border-[#ED4716] text-[#ED4716] font-semibold rounded-lg hover:bg-[#ED4716]/10 transition-colors">
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#161617]/95 backdrop-blur-md border-t border-white/10">
          <div className="flex flex-col items-center py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white text-base hover:text-[#ED4716] transition-colors"
                onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}

            {/* Mobile CTA Buttons */}
            <Link
              href="#signup"
              className="w-full text-center px-4 py-2 bg-[#ED4716] text-black font-semibold rounded-lg hover:bg-[#ff5f30] transition-colors"
              onClick={() => setIsOpen(false)}>
              Sign Up
            </Link>
            <Link
              href="#signin"
              className="w-full text-center px-4 py-2 border border-[#ED4716] text-[#ED4716] font-semibold rounded-lg hover:bg-[#ED4716]/10 transition-colors"
              onClick={() => setIsOpen(false)}>
              Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
