"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/Container";
import ScrollLink from "@/components/ScrollLink";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const navLinks = [
    { name: "The Menu", target: "menu", id: "01" },
    { name: "Our Roots", target: "about", id: "02" },
    { name: "The Look", target: "gallery", id: "03" },
  ];

  return (
    <header className="w-full bg-[#FDFCF7] border-b-2 md:border-b-[3px] border-black sticky top-0 z-[100]">
      <Container>
        <nav className="flex items-center justify-between h-20 md:h-24">
          
          {/* LEFT: DESKTOP LINKS (Your Original Desktop UI) */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                target={link.target}
                className="text-[11px] font-black uppercase tracking-[0.2em] text-black hover:text-red-600 transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-red-600 transition-all group-hover:w-full" />
              </ScrollLink>
            ))}
          </div>

          {/* LEFT: MOBILE HAMBURGER (Refined Trigger) */}
          <button
            className="lg:hidden flex flex-col gap-1.5 z-[120] relative"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 8 : 0 }}
              className="h-[2px] w-6 bg-black"
            />
            <motion.div
              animate={{ opacity: isOpen ? 0 : 1 }}
              className="h-[2px] w-6 bg-black"
            />
            <motion.div
              animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -8 : 0 }}
              className="h-[2px] w-6 bg-black"
            />
          </button>

          {/* CENTER: LOGO (Your Original Desktop UI) */}
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 text-center group"
          >
            <h1 className="font-black text-2xl md:text-3xl uppercase tracking-tighter italic leading-none">
              Savoré<span className="text-red-600">.</span>
            </h1>
            <span className="hidden md:block text-[8px] font-bold uppercase tracking-[0.4em] mt-1 opacity-60 group-hover:text-red-600 transition-colors">
              Fine Dining
            </span>
          </Link>

          {/* RIGHT: CTA (Your Original Desktop UI) */}
          <div className="flex items-center">
            <ScrollLink
              target="booking"
              className="bg-black text-[#FDFCF7] px-5 py-2.5 md:px-8 md:py-3 text-[10px] md:text-xs font-black uppercase tracking-widest border-2 border-black hover:bg-red-600 hover:border-red-600 transition-all duration-300"
            >
              Book <span className="hidden sm:inline">a Table</span>
            </ScrollLink>
          </div>
        </nav>
      </Container>

      {/* REFINED MINIMALIST MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-[#FDFCF7] z-[110] flex flex-col lg:hidden"
          >
            {/* Minimal Header Branding */}
            <div className="pt-32 px-8 flex justify-between items-end opacity-40">
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">Directory</span>
              <span className="text-[9px] font-black uppercase tracking-[0.3em]">CDMX // 19.43</span>
            </div>

            {/* Links: Clean, Scaled Down, and Smooth */}
            <div className="flex-1 flex flex-col justify-center px-8">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                  >
                    <ScrollLink
                      target={link.target}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-baseline gap-3"
                    >
                      <span className="text-red-600 font-mono text-[10px] font-bold italic">
                        {link.id}
                      </span>
                      <span className="text-4xl font-black uppercase italic tracking-tighter group-hover:text-red-600 transition-colors">
                        {link.name}
                      </span>
                    </ScrollLink>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Minimal Mobile Footer */}
            <div className="p-10 border-t border-black/5 flex justify-between items-center">
              <div className="flex gap-6 text-[10px] font-black uppercase tracking-widest italic">
                <a href="#" className="hover:text-red-600 transition-colors">Instagram</a>
                <a href="#" className="hover:text-red-600 transition-colors">Twitter</a>
              </div>
              <div className="h-2 w-2 bg-red-600 rounded-full animate-pulse" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}