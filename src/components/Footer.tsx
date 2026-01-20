"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Container from "./Container";
import ScrollLink from "./ScrollLink";

export default function Footer() {
  const [time, setTime] = useState("00:00:00");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(
        new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Mexico_City",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-black text-[#FDFCF7] pt-12 pb-8 border-t-[6px] md:border-t-[8px] border-red-600 w-full overflow-hidden">
      <Container>

        {/* TOP CTA */}
        <div className="flex flex-col sm:flex-row justify-between items-start lg:items-end gap-12 mb-16">
          <div className="max-w-3xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-[-0.05em] italic leading-[0.85]"
            >
              LET THE <span className="text-red-600">FIRE</span>
              <br />
              FIND YOU.
            </motion.h2>
          </div>

          {/* BOOK TABLE CTA */}
          <motion.div whileHover={{ scale: 1.05 }} className="relative self-center lg:self-auto mt-4 lg:mt-0">
            <ScrollLink target="booking" className="group block">
              <div className="absolute -inset-3 md:-inset-4 border border-white/10 group-hover:border-red-600 transition-colors rounded-full animate-[spin_8s_linear_infinite]" />
              <div className="bg-red-600 h-20 w-20 md:h-24 md:w-24 rounded-full flex items-center justify-center border-2 border-black group-hover:bg-white transition-all duration-500">
                <span className="text-black font-black text-[9px] md:text-[10px] uppercase tracking-widest text-center leading-tight">
                  Book <br /> Table
                </span>
              </div>
            </ScrollLink>
          </motion.div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-10 py-12 border-y border-white/10">

          {/* Local Time */}
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600 block">
              Local Time
            </span>
            <p className="text-xl md:text-2xl font-mono tracking-tighter">
              {mounted ? time : "00:00:00"}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600 block">
              Navigation
            </span>
            <ul className="text-[11px] md:text-[12px] font-bold uppercase flex flex-col gap-2">
              <li><ScrollLink target="menu" className="hover:text-red-600 transition-colors">The Menu</ScrollLink></li>
              <li><ScrollLink target="about" className="hover:text-red-600 transition-colors">Our Roots</ScrollLink></li>
              <li><ScrollLink target="gallery" className="hover:text-red-600 transition-colors">The Look</ScrollLink></li>
              <li><ScrollLink target="reserve" className="hover:text-red-600 transition-colors">Reservations</ScrollLink></li>
            </ul>
          </div>

          {/* Location */}
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600 block">
              Locate
            </span>
            <p className="text-[11px] md:text-[12px] font-bold uppercase leading-tight max-w-[160px]">
              Calle Ignacio Mariscal 42, Tabacalera, CDMX
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600 block">
              Contact
            </span>
            <div className="flex flex-col gap-2">
              <a
                href="mailto:hello@savore.mx"
                className="text-[11px] md:text-[12px] font-bold uppercase hover:text-red-600 transition-colors truncate"
              >
                hello@savore.mx
              </a>
              <p className="text-[11px] md:text-[12px] font-bold opacity-60">
                +52 55 1234 5678
              </p>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600 block">
              Social
            </span>
            <div className="flex gap-4">
              {["IG", "TW", "FB"].map((platform) => (
                <a key={platform} href="#" className="text-[11px] md:text-[12px] font-bold uppercase hover:text-red-600 transition-colors">
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 sm:col-span-3 xl:col-span-1 mt-4 xl:mt-0 space-y-3">
            <span className="text-[10px] font-black uppercase tracking-widest text-red-600 block">
              Newsletter
            </span>
            <div className="flex border-b border-white/30 pb-1 max-w-sm">
              <input
                type="email"
                placeholder="JOIN THE FIRE"
                className="bg-transparent text-[10px] md:text-[11px] font-black outline-none w-full placeholder:text-white/20 uppercase"
              />
              <button className="text-red-600 hover:translate-x-1 transition-transform px-2">
                →
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 gap-6">
          <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30 italic">
            SAVORÉ GASTRONOMY © 2026
          </p>

          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <div className="h-1.5 w-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]" />
            <p className="text-[9px] font-black uppercase tracking-[0.3em] opacity-50">
              Kitchen Status: <span className="text-white">Live & Active</span>
            </p>
          </div>

          <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-30">
            Design by Udesh Bhatti
          </p>
        </div>

      </Container>
    </footer>
  );
}
