import Container from "./Container";
import ScrollLink from "./ScrollLink";

export default function Hero() {
  return (
    /* ===== FULL-BLEED HERO WRAPPER ===== */
    <section id="home" className="relative min-h-screen pt-24 bg-[#FDFCF7] overflow-hidden flex items-center">

      {/* ===== BACKGROUND WATERMARK ===== */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <h2 className="font-display text-[40vw] sm:text-[28vw] lg:text-[20vw] uppercase leading-none">
          Savoré
        </h2>
      </div>

      {/* ===== CONTENT ===== */}
      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <div className="space-y-8 text-center lg:text-left">

            {/* Badge */}
            <div className="inline-block mx-auto lg:mx-0 bg-amber-400 border-2 border-black px-4 py-1 rotate-[-2deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="font-display uppercase tracking-tighter text-xs sm:text-sm">
                Bold Flavors. Open Fire. Real Ingredients.
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-9xl uppercase tracking-tighter leading-[0.9] text-black">
              FLAVOR <br />
              <span className="text-red-600 italic">DONE RIGHT.</span>
            </h1>

            {/* Description */}
            <p className="max-w-md mx-auto lg:mx-0 font-body text-base sm:text-lg text-stone-700 leading-tight">
              A modern restaurant built on fire-grilled recipes, house-made
              sauces, and ingredients prepared fresh every single day.
            </p>

            {/* CTAs */}

<div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">

  <ScrollLink target="menu">
    <span className="bg-red-600 text-white border-2 border-black px-6 sm:px-8 py-3 sm:py-4 font-display uppercase italic tracking-wider shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block">
      View the Menu
    </span>
  </ScrollLink>

  <ScrollLink target="gallery">
    <span className="bg-white text-black border-2 border-black px-6 sm:px-8 py-3 sm:py-4 font-display uppercase italic tracking-wider shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:bg-stone-50 transition-all inline-block">
      Our Kitchen
    </span>
  </ScrollLink>

</div>

          </div>

          {/* ================= RIGHT VISUAL ================= */}
          <div className="relative h-[420px] sm:h-[480px] md:h-[540px] lg:h-[600px] flex items-center justify-center">

            {/* Main Polaroid */}
            <div className="relative z-20 w-56 sm:w-64 md:w-72 lg:w-80 p-4 bg-white border-2 border-black shadow-xl rotate-[-3deg] hover:rotate-0 transition-transform duration-500">
              <div className="aspect-[4/5] bg-stone-200 overflow-hidden border border-black/10">
                <img
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
                  alt="Chef preparing food in the restaurant kitchen"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="mt-3 font-display text-center uppercase italic text-sm">
                Cooked over open fire.
              </p>
            </div>

            {/* Secondary Polaroid */}
            <div className="absolute z-10 w-44 sm:w-52 md:w-60 p-3 bg-white border-2 border-black shadow-xl rotate-[6deg] translate-x-24 -translate-y-12 hover:rotate-0 transition-transform duration-500">
              <div className="aspect-square bg-stone-200 overflow-hidden border border-black/10">
                <img
                  src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80"
                  alt="Signature dishes served fresh"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Sticker */}
            <div className="absolute bottom-4 sm:bottom-8 right-2 sm:right-6 z-30 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-display uppercase italic text-[10px] sm:text-xs rotate-[-8deg] lg:rotate-[-12deg] shadow-[4px_4px_0px_0px_#dc2626]">
              House Made. Every Day.
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}