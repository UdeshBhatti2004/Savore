"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Container from "./Container";

export default function Booking() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="booking" className="bg-[#FDFCF7] py-20">
      <Container>

        
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[15vw] md:text-[7vw] font-black uppercase tracking-tighter leading-[0.75] text-black select-none"
          >
            BOOK A <span className="text-red-600 italic">TABLE</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 md:mt-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-6"
          >
            <div className="hidden md:block h-2 w-24 bg-black" />
            <p className="max-w-md font-bold text-base md:text-lg uppercase tracking-tight leading-tight text-stone-800">
              Reserve your seat for an evening shaped by fire and patience.
            </p>
          </motion.div>
        </div>

        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 border-[3px] border-black bg-white shadow-[15px_15px_0px_0px_rgba(220,38,38,1)] overflow-hidden"
        >

          
          <div className="lg:col-span-5 relative min-h-[320px] sm:min-h-[400px] lg:min-h-full bg-black group overflow-hidden border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-black">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80"
              alt="Fire-side dining interior"
              className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
            />

            <div className="absolute inset-0 p-8 sm:p-10 flex flex-col justify-between z-10">
              <div>
                <h3 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none italic">
                  Take Your <br />
                  <span className="text-red-600">Seat</span>.
                </h3>

                <p className="text-white/70 font-bold uppercase text-[10px] tracking-widest mt-4">
                  Limited Availability // Fire-Side Dining
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-[1px] bg-red-600" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                    Open Tues — Sun
                  </p>
                </div>

                <div className="flex items-center gap-4 text-white">
                  <div className="w-10 h-[1px] bg-red-600" />
                  <p className="text-[10px] font-black uppercase tracking-[0.2em]">
                    6:00 PM — 11:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

         
          <div className="lg:col-span-7 p-8 sm:p-10 md:p-12 flex flex-col justify-center">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">
                    Guest Name
                  </label>
                  <input
                    type="text"
                    placeholder="E.G. MATEO RIVERA"
                    className="w-full bg-transparent border-b-2 border-stone-200 focus:border-black outline-none py-2 font-bold uppercase text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">
                    Party Size
                  </label>
                  <select className="w-full bg-transparent border-b-2 border-stone-200 focus:border-black outline-none py-2 font-bold uppercase text-sm cursor-pointer transition-colors">
                    <option>02 PEOPLE</option>
                    <option>04 PEOPLE</option>
                    <option>06 PEOPLE</option>
                    <option>LARGE GROUP (8+)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-transparent border-b-2 border-stone-200 focus:border-black outline-none py-2 font-bold uppercase text-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">
                    Preferred Time
                  </label>
                  <select className="w-full bg-transparent border-b-2 border-stone-200 focus:border-black outline-none py-2 font-bold uppercase text-sm cursor-pointer transition-colors">
                    <option>18:30</option>
                    <option>19:45</option>
                    <option>21:00</option>
                    <option>22:15</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-red-600 mb-2">
                  Notes / Allergies
                </label>
                <input
                  type="text"
                  placeholder="ANY SPECIAL REQUESTS?"
                  className="w-full bg-transparent border-b-2 border-stone-200 focus:border-black outline-none py-2 font-bold uppercase text-sm transition-colors"
                />
              </div>

              <motion.button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-12 py-5 bg-black text-white font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-red-600 transition-colors duration-300"
              >
                Confirm Reservation
                <motion.span
                  animate={{ x: isHovered ? 6 : 0 }}
                  transition={{ repeat: Infinity, duration: 0.6, repeatType: "reverse" }}
                >
                  →
                </motion.span>
              </motion.button>

            </form>
          </div>

        </motion.div>

      </Container>
    </section>
  );
}