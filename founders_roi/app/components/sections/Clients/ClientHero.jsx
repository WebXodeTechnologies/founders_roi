"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, ArrowRight } from "lucide-react";

const marqueeRowOne = [
  { name: "Aliens Photography", logo: "/clientImages/AlienPhotography.png" },
  { name: "Candier Photography", logo: "/clientImages/CandierPhotography.png" },
  { name: "Capicture", logo: "/clientImages/Capicture.jpg" },
  { name: "Carnival", logo: "/clientImages/carnival-logo.png" },
  { name: "Chikmangalur Vibes", logo: "/clientImages/chikmangalurVibes.jpg" },
  { name: "EWS Logo", logo: "/clientImages/EWS logo.png" },
  { name: "Fresh Frames", logo: "/clientImages/freshframes.in.jpg" },
  { name: "Leo Photography", logo: "/clientImages/LeoPhotogrpahy.jpg" },
];

const marqueeRowTwo = [
  { name: "Hi Proteins", logo: "/clientimagebgremoved/Hiprotein-removebg-preview.png" },
  { name: "House of Memories", logo: "/clientImages/HouseofMemories.jpeg" },
  { name: "L & H", logo: "/clientimagebgremoved/L_H-removebg-preview.png" },
  { name: "Lexa Holidays", logo: "/clientImages/Lexa Holidays.jpeg" },
  { name: "S4C", logo: "/clientImages/S4C.png" },
  { name: "Splash Eventia", logo: "/clientImages/SplashEventia.jpg" },
  { name: "TH", logo: "/clientImages/TH.png" },
  { name: "Triberry Studios", logo: "/clientImages/triberrystudioslogo.png" },
  { name: "Kamarajar College of Nursing", logo: "/clientImages/KSAnursing.jpeg" },
  { name: "Kamarajar College of Pharmacy", logo: "/clientImages/KSA.jpeg" },
  { name: "Webxode Technologies", logo: "/clientImages/webxodelogocropped-removebg-preview.png" },
];



export default function ClientHero() {
  return (
    <section className="w-full bg-bg-primary text-white pt-36 pb-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-b border-neutral-900/60 max-w-7xl mx-auto">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-linear-to-b from-orange-500/5 via-transparent to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[4.5rem_4.5rem] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto text-center relative z-10 flex flex-col items-center space-y-8 mb-24">

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner"
        >
          <Sparkles size={11} />
          <span>Proven Track Record</span>
        </motion.div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] max-w-4xl mx-auto">
          Trusted by <br />
          <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            Ambitious Growing Brands
          </span>
        </h1>

        <p className="text-neutral-400 font-light text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
          We partner with industry leaders to engineer robust technical workflows, premium authority market assets, and high-velocity acquisition systems.
        </p>

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-4">
          <a href="/contact" className="relative inline-flex items-center gap-3 px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-xl bg-linear-to-r from-orange-500 to-amber-500 text-black shadow-xl group overflow-hidden">
            <span>Initiate Partnerships</span>
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>

      {/* MARQUEE SYSTEM */}
      <div className="relative w-full overflow-hidden flex flex-col gap-6 mt-12 z-10 max-w-360 mx-auto py-10 bg-neutral-950/5 backdrop-blur-3xl rounded-3xl border border-neutral-900/50">

        {/* ROW 1: LEFT */}
        <div className="flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 28, repeat: Infinity }}
            className="flex gap-6 pr-6 min-w-max"
          >
            {[...marqueeRowOne, ...marqueeRowOne].map((brand, idx) => (
              <div key={`r1-${idx}`} className="relative h-20 w-44 rounded-2xl bg-neutral-900/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 group overflow-hidden border border-neutral-900/40 hover:border-orange-500/20 shadow-md">
                <div className="relative w-32 h-12 transition-all duration-300 group-hover:scale-[1.04] flex items-center justify-center">
                  <Image
                    src={encodeURI(brand.logo)}
                    alt={brand.name}
                    fill
                    sizes="128px"
                    className="object-contain filter brightness-100 contrast-100"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ROW 2: RIGHT */}
        <div className="flex w-full overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 28, repeat: Infinity }}
            className="flex gap-6 pr-6 min-w-max"
          >
            {[...marqueeRowTwo, ...marqueeRowTwo].map((brand, idx) => (
              <div key={`r2-${idx}`} className="relative h-20 w-44 rounded-2xl bg-neutral-900/30 backdrop-blur-md flex items-center justify-center transition-all duration-300 group overflow-hidden border border-neutral-900/40 hover:border-orange-500/20 shadow-md">
                <div className="relative w-32 h-12 transition-all duration-300 group-hover:scale-[1.04] flex items-center justify-center">
                  <Image
                    src={encodeURI(brand.logo)}
                    alt={brand.name}
                    fill
                    sizes="128px"
                    className="object-contain filter brightness-100 contrast-100"
                    unoptimized
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}