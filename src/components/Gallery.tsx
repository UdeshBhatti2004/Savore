"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Container from "./Container";

const galleryItems = [
  { src: "https://images.unsplash.com/photo-1550547660-d9450f859349", label: "Signature Taco", rotate: "-rotate-2" },
  { src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe", label: "Kitchen Culture", rotate: "rotate-2" },
  { src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", label: "Open Fire", rotate: "-rotate-1" },
  { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836", label: "Fresh Plates", rotate: "rotate-1" },
  { src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1", label: "Ingredients", rotate: "-rotate-2" },
  { src: "https://images.unsplash.com/photo-1529042410759-befb1204b468", label: "Restaurant Mood", rotate: "rotate-1" },
];

export default function Gallery() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="gallery" className="bg-[#FDFCF7]">
      {!mounted ? (
        <div className="relative h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-black border-t-red-600 rounded-full animate-spin mx-auto mb-4" />
            <p className="font-black text-sm uppercase tracking-widest">
              Loading Gallery...
            </p>
          </div>
        </div>
      ) : (
        <GalleryContent />
      )}
    </section>
  );
}

function GalleryContent() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollEnd, setScrollEnd] = useState("-47%");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const updateScrollEnd = () => {
      if (window.innerWidth < 640) setScrollEnd("-85%");
      else if (window.innerWidth < 768) setScrollEnd("-75%");
      else if (window.innerWidth < 1024) setScrollEnd("-55%");
      else if (window.innerWidth < 1280) setScrollEnd("-35%");
      else setScrollEnd("-47%");
    };

    updateScrollEnd();
    window.addEventListener("resize", updateScrollEnd);
    return () => window.removeEventListener("resize", updateScrollEnd);
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], ["0%", scrollEnd]);
  const smoothX = useSpring(x, { stiffness: 50, damping: 30 });

  return (
    <main className="bg-[#FDFCF7]">
      
      <section ref={containerRef} className="relative h-[300vh]">
        <div className="sticky top-0 h-screen flex flex-col overflow-x-hidden">

          
          <div className="pt-6 sm:pt-8 md:pt-12 lg:pt-16 pb-4 sm:pb-6 md:pb-8">
            <Container>
              <motion.h2
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-[15vw] sm:text-[12vw] md:text-[7vw] font-black uppercase tracking-tighter leading-[0.75] text-black select-none"
              >
                THE <span className="text-red-600 italic">LOOK</span>
              </motion.h2>

              <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col md:flex-row md:items-center gap-3 sm:gap-4 md:gap-6">
                <div className="hidden md:block h-2 w-24 bg-black" />
                <p className="max-w-md font-bold text-sm sm:text-base md:text-lg uppercase tracking-tight leading-tight text-stone-800">
                  Inside our kitchen, our plates, and the fire.
                </p>
              </div>
            </Container>
          </div>

          
          <div className="flex-1 flex items-center min-h-0 relative overflow-visible mt-4 sm:mt-6 md:mt-8">
            <motion.div
              style={{ x: smoothX }}
              className="flex gap-6 sm:gap-8 md:gap-12 pl-12 sm:pl-16 md:pl-24 lg:pl-32 pr-4 sm:pr-6 md:pr-12"
            >
              {galleryItems.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -10, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`relative flex-shrink-0 w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[360px] max-h-[calc(100vh-240px)] sm:max-h-[calc(100vh-260px)] md:max-h-[calc(100vh-280px)] aspect-[3/4] bg-white border-[3px] border-black p-3 sm:p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] ${item.rotate} flex flex-col`}
                >
                  <div className="relative flex-1 overflow-hidden bg-stone-100">
                    <img
                      src={`${item.src}?auto=format&fit=crop&w=1000&q=85`}
                      alt={item.label}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 text-[8px] sm:text-[9px] font-black uppercase italic border-2 border-black">
                      SAVORÉ
                    </div>
                  </div>

                  <div className="h-14 sm:h-16 flex flex-col justify-center shrink-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-black uppercase tracking-tighter italic text-base sm:text-lg md:text-xl truncate pr-2">
                        {item.label}
                      </h3>
                      <span className="font-black text-stone-300 text-xs sm:text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="h-[2px] w-full bg-black/5 mt-1.5" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          
          <div className="h-10 mt-5 sm:h-12 md:h-16 flex-shrink-0">
            <Container className="h-full flex items-center justify-between opacity-40">
              <span className="font-black text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest whitespace-nowrap">
                SCROLL TO EXPLORE
              </span>
              <span className="font-black text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-widest whitespace-nowrap">
                {galleryItems.length} SHOTS
              </span>
            </Container>
          </div>

        </div>
      </section>

      
      <div className="bg-black py-10 overflow-hidden border-y-[4px] border-black">
        <motion.div
          animate={{ x: "-50%" }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap"
        >
          {[...Array(10)].map((_, i) => (
            <span
              key={i}
              className="text-white text-6xl md:text-8xl font-black uppercase italic tracking-tighter mx-10"
            >
              Savoré <span className="text-red-600">Culture</span> — Fire • Flavor • Heritage —
            </span>
          ))}
        </motion.div>
      </div>

      
      <section className="py-24 bg-[#FDFCF7]">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
                BORN FROM <span className="text-red-600 italic">SMOKE.</span>
              </h2>

              <div className="h-2 w-32 bg-black mb-8" />

              <p className="text-xl md:text-2xl font-bold leading-tight text-stone-800 uppercase tracking-tight">
                Our gallery isn't just about food. It's about the grit, the heat,
                and the precision that happens before the plate ever hits your table.
              </p>
            </div>

            <div className="flex flex-col justify-end space-y-8">
              <div className="border-l-4 border-black pl-6">
                <h4 className="font-black text-red-600 uppercase mb-2 italic">
                  01. The Source
                </h4>
                <p className="font-bold text-stone-600 uppercase text-sm leading-relaxed">
                  We partner directly with heritage farmers in Oaxaca and Jalisco to bring ancestral ingredients into a modern light.
                </p>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h4 className="font-black text-red-600 uppercase mb-2 italic">
                  02. The Fire
                </h4>
                <p className="font-bold text-stone-600 uppercase text-sm leading-relaxed">
                  No gas. No electric. We cook exclusively over white oak and mesquite coals.
                </p>
              </div>

              <div className="border-l-4 border-black pl-6">
                <h4 className="font-black text-red-600 uppercase italic">
                  03. The Plate
                </h4>
                <p className="font-bold text-stone-600 uppercase text-sm leading-relaxed">
                  Visual art meets culinary tradition. Every dish is a story told in texture and heat.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
