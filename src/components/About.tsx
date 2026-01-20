"use client";

import {
  motion,
  useScroll,
  useTransform,
  Variants,
  AnimatePresence,
} from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Container from "./Container";

const aboutImages = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % aboutImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
    },
  };

  return (
    <section id="about" ref={sectionRef} className="bg-[#FDFCF7] py-1 sm:py-6 lg:py-10">
      <Container>
        <div className="mb-5">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInLeft}
            className="text-[14vw] sm:text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.95] md:leading-none"
          >
            OUR <span className="text-red-600 italic">ROOTS</span>
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-8 md:mt-6 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
          >
            <div className="hidden md:block h-2 w-24 bg-black" />
            <p className="max-w-md font-bold text-base md:text-lg uppercase tracking-tight leading-tight text-stone-800">
              Where our fire, ingredients, and philosophy come together.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start lg:items-center">
          <div className="lg:col-span-6 space-y-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
              className="space-y-10"
            >
              <motion.h3
                variants={fadeInUp}
                className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter italic leading-tight"
              >
                A modern interpretation of <br />
                <span className="text-red-600">smoke</span> and stone.
              </motion.h3>

              <motion.p
                variants={fadeInUp}
                className="text-base md:text-lg leading-relaxed text-stone-700 max-w-xl font-medium"
              >
                Savoré began as a simple question: How do we honor the fire without
                being consumed by it? Our kitchen is shaped by white oak and
                mesquite coals.{" "}
                <span className="font-bold italic text-black">
                  We don't rush the heat — we respect it.
                </span>
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-black/10"
              >
                <div>
                  <h4 className="font-black text-red-600 uppercase text-[11px] italic tracking-widest">
                    Heritage
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-tight text-stone-600">
                    Every grain is heirloom, protected for generations.
                  </p>
                </div>

                <div>
                  <h4 className="font-black text-red-600 uppercase text-[11px] italic tracking-widest">
                    Technique
                  </h4>
                  <p className="text-sm font-bold uppercase tracking-tight text-stone-600">
                    No gas. No shortcuts. Just stone and coals.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full max-w-[400px] mx-auto lg:max-w-[360px] lg:ml-auto lg:mr-0">
              <motion.div
                animate={{ x: [4, 10, 4], y: [4, 10, 4] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-red-600 -z-10"
              />

              <div className="relative border-[3px] border-black overflow-hidden aspect-[4/5] bg-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={`${aboutImages[activeImage]}?auto=format&fit=crop&w=800&h=1000&q=80`}
                    alt="Savoré heritage"
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1.15 }}
                    exit={{ opacity: 0, scale: 1.15 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </AnimatePresence>

                <div className="absolute -bottom-2 -left-2 sm:-left-1 bg-black text-white p-4 border-2 border-white max-w-[240px] z-20">
                  <p className="font-black uppercase italic text-sm leading-tight">
                    "Fire teaches you patience."
                  </p>
                  <div className="mt-2 h-1 w-8 bg-red-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}