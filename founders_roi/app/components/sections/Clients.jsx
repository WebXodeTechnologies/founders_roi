"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { Sparkles } from "lucide-react";

const row1 = [
  { name: "Aliens Photography", logo: "/clientImages/AlienPhotography.png" },
  { name: "Candier Photography", logo: "/clientImages/CandierPhotography.png" },
  { name: "Capicture", logo: "/clientImages/capicture.jpg" },
  { name: "Carnival", logo: "/clientImages/carnival.png" },
  { name: "Chikmangalur Vibes", logo: "/clientImages/chikmangalurVibes.jpg" },
  { name: "EWS Logo", logo: "/clientImages/EWS logo.png" },
  { name: "Fresh Frames", logo: "/clientImages/freshframes.in.jpg" },
  { name: "Leo Photography", logo: "/clientImages/LeoPhotogrpahy.jpg" },
];

const row2 = [
  { name: "Hi Proteins", logo: "/clientImages/Hiprotein.png" },
  { name: "House of Memories", logo: "/clientImages/HouseofMemories.jpeg" },
  { name: "L & H", logo: "/clientImages/L&H.png" },
  { name: "Lexa Holidays", logo: "/clientImages/Lexa Holidays.jpeg" },
  { name: "S4C", logo: "/clientImages/S4C.png" },
  { name: "Splash Eventia", logo: "/clientImages/SplashEventia.jpg" },
  { name: "TH", logo: "/clientImages/TH.png" },
  { name: "Triberry Studios", logo: "/clientImages/triberrystudioslogo.png" },
];

const loopRow1 = [...row1, ...row1, ...row1];
const loopRow2 = [...row2, ...row2, ...row2];

export default function ClientsCarousel() {
  const [isHoveredRow1, setIsHoveredRow1] = useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = useState(false);

  return (
    <section className="relative w-full py-28 px-4 overflow-hidden select-none bg-black">
      {/* Background Structural Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-125 rounded-full bg-linear-to-tr from-orange-500/5 via-transparent to-transparent blur-[180px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl mb-4 shadow-inner"
          >
            <Sparkles size={11} className="animate-pulse" />
            <span>Proven Track Record</span>
          </motion.div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15]">
            Brands We’ve <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Delivered For</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-400 max-w-lg font-light leading-relaxed">
    Powering fast-scaling startups and enterprises with high-impact, predictable growth systems.
  </p>
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="relative w-full flex flex-col gap-10 py-20">
          <div className="relative flex overflow-hidden cursor-pointer" onMouseEnter={() => setIsHoveredRow1(true)} onMouseLeave={() => setIsHoveredRow1(false)}>
            <motion.div className="flex gap-10 shrink-0 pr-8" animate={{ x: ["0%", "-33.33%"] }} transition={{ duration: isHoveredRow1 ? 90 : 32, ease: "linear", repeat: Infinity }}>
              {loopRow1.map((client, i) => <LargeInteractiveLogoCard key={`track1-${i}`} client={client} />)}
            </motion.div>
          </div>

          <div className="relative flex w-full overflow-hidden cursor-pointer" onMouseEnter={() => setIsHoveredRow2(true)} onMouseLeave={() => setIsHoveredRow2(false)}>
            <motion.div className="flex gap-10 shrink-0 pr-8 min-w-full" animate={{ x: ["-33.33%", "0%"] }} transition={{ duration: isHoveredRow2 ? 95 : 35, ease: "linear", repeat: Infinity }}>
              {loopRow2.map((client, i) => <LargeInteractiveLogoCard key={`track2-${i}`} client={client} />)}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LargeInteractiveLogoCard({ client }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-12, 12]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  return (
    <motion.div
      className="w-70.5 h-60 sm:w-[350px] sm:h-50  [perspective:1000px]"
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="group relative w-full h-full flex items-center justify-center rounded-[2rem] border border-white/10 bg-neutral-900/40 backdrop-blur-md p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-orange-500/30">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]" />
        
        <div className="relative w-full h-full flex items-center justify-center p-2">
          <Image
            src={encodeURI(client.logo)}
            alt={client.name}
            fill
            className="object-contain p-4  group-hover:opacity-100 transition-all duration-500"
            sizes="(max-width: 768px) 280px, 320px"
          />
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent group-hover:via-orange-500/50 transition-all duration-500" />
      </div>
    </motion.div>
  );
}