"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Container from "./Container";

const menuCategories = [
  {
    title: "Starters",
    description:
      "Fire-roasted corn, house salsas, fresh chips, and small plates to start strong.",
    emoji: "🌽",
    color: "bg-amber-400",
  },
  {
    title: "Mains",
    description:
      "Signature tacos, open-fire grilled meats, and plates built around bold heat.",
    emoji: "🌮",
    color: "bg-red-600",
  },
  {
    title: "Drinks",
    description:
      "House margaritas, seasonal cocktails, and zero-proof refreshers.",
    emoji: "🍹",
    color: "bg-blue-400",
  },
];

export default function Menu() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const paginate = (direction: number) => {
    setIndex(
      (prev) => (prev + direction + menuCategories.length) % menuCategories.length
    );
  };

  if (!mounted) return null;

  return (
    <section id="menu" className="w-full bg-[#FDFCF7] overflow-x-hidden py-20">
      <Container>

        {/* HEADER */}
        <div className="mb-10 md:mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[15vw] md:text-[7vw] font-black uppercase tracking-tighter leading-[0.75] text-black select-none"
          >
            THE <span className="text-red-600 italic">MENU</span>
          </motion.h2>

          <div className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
            <div className="hidden md:block h-2 w-24 bg-black" />
            <p className="max-w-md font-bold text-base md:text-lg uppercase tracking-tight leading-tight text-stone-800">
              Built around open fire, bold seasoning, and plates made to be shared.
            </p>
          </div>
        </div>

        {/* MOBILE + TABLET CAROUSEL */}
        <div className="lg:hidden relative flex items-center justify-center py-6 md:py-4 md:-mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.9, rotate: 3 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) paginate(1);
                if (info.offset.x > 50) paginate(-1);
              }}
              className="
                w-full max-w-[580px] md:max-w-[800px]
                bg-white border-[4px] border-black
                p-8 md:p-10
                shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                cursor-grab active:cursor-grabbing
              "
            >
              {/* STICKER */}
              <div
                className={`absolute -top-10 -right-1 w-24 h-24 ${menuCategories[index].color}
                border-[4px] border-black flex items-center justify-center text-5xl
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]`}
              >
                {menuCategories[index].emoji}
              </div>

              <h3 className="text-4xl md:text-5xl font-black uppercase italic mb-6 tracking-tighter">
                {menuCategories[index].title}
              </h3>

              <p className="text-stone-700 text-lg md:text-xl font-bold leading-tight mb-12">
                {menuCategories[index].description}
              </p>

              <div className="flex justify-between items-center pt-4 border-t-4 border-black font-black uppercase text-xs tracking-widest">
                <span>SWIPE →</span>
                <span>
                  {index + 1} / {menuCategories.length}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden lg:grid grid-cols-3 gap-8 xl:gap-12">
          {menuCategories.map((category, i) => (
            <motion.div
              key={category.title}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? -2 : 2 }}
              className="relative bg-white border-[4px] border-black p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:shadow-[16px_16px_0px_0px_#E31837] transition-all cursor-pointer group"
            >
              <div
                className={`absolute -top-10 -right-6 w-24 h-24 ${category.color}
                border-[4px] border-black flex items-center justify-center text-5xl
                shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                group-hover:scale-110 transition-transform`}
              >
                {category.emoji}
              </div>

              <h3 className="text-5xl xl:text-6xl font-black uppercase italic mb-6 tracking-tighter leading-none">
                {category.title}
              </h3>

              <p className="text-stone-800 text-xl xl:text-2xl font-bold leading-tight">
                {category.description}
              </p>

              <div className="mt-12 flex items-center gap-4 font-black uppercase tracking-widest text-sm group-hover:text-red-600 transition-colors">
                <span className="h-[2px] w-8 bg-current" />
                EXPLORE
              </div>
            </motion.div>
          ))}
        </div>

      </Container>
    </section>
  );
}