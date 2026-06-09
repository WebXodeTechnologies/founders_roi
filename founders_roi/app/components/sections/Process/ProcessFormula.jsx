"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, Palette, BarChart3, Sparkles } from "lucide-react";

const formulaCards = [
  {
    icon: Layers,
    title: "Platform Optimization",
    desc: "Scaling the right acquisition channels with surgical precision and intent-driven backend data tracking infrastructures.",
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#f97316_85%,#fb923c_95%,transparent_100%)]"
  },
  {
    icon: Palette,
    title: "Creative Optimization",
    desc: "Conversion-focused sensory design networks engineered cleanly around consumer psychology, narrative storytelling, and performance data.",
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#f59e0b_85%,#fcd34d_95%,transparent_100%)]"
  },
  {
    icon: BarChart3,
    title: "Campaign Optimization",
    desc: "Continuous, automated pipeline tracking metrics focused entirely on bottom-line company unit economics and profit margins.",
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#ea580c_85%,#ff7849_95%,transparent_100%)]"
  },
];

export default function ProcessFormula() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="w-full bg-[#030202] text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none">
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-orange-500/[0.03] blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
        
        {/* LEFT COLUMN: STICKY DESCRIPTOR HEADER */}
        <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner">
            <Sparkles size={11} className="animate-pulse" />
            <span>Operational DNA</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.12]">
            The <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">3 Layer</span> <br />
            Growth Formula
          </h2>
          <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-sm">
            We eliminate speculative guesswork. Our synchronized frameworks guarantee your enterprise engine scales with absolute clarity and systemic predictability.
          </p>
        </div>

        {/* RIGHT COLUMN: HIGH-LEGIBILITY CARDS */}
        <div className="lg:col-span-7 space-y-6 w-full">
          {formulaCards.map((card, i) => {
            const isHovered = hoveredCard === i;
            const Icon = card.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ x: 6 }}
                className="relative rounded-2xl bg-neutral-950/40 p-6 sm:p-8 flex items-start gap-6 overflow-hidden backdrop-blur-md border border-neutral-900 shadow-2xl transition-colors duration-500 cursor-pointer"
              >
                {/* LIVE DYNAMIC ROUNDED BORDER CASING */}
                <div className="absolute inset-0 p-[1px] rounded-2xl pointer-events-none z-0">
                  <motion.div 
                    animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                    transition={{ duration: 5, ease: "linear", repeat: Infinity }}
                    style={{ originX: "50%", originY: "50%" }}
                    className={`absolute inset-[-100%] ${card.glow} transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  />
                  <div className="absolute inset-[1px] bg-[#070707]/95 rounded-[15px] z-1" />
                </div>

                {/* Content Matrix Block */}
                <div className="relative z-10 flex items-start gap-5 w-full">
                  <div className={`p-3.5 rounded-xl border transition-all duration-500 shrink-0 ${
                    isHovered ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black border-transparent shadow-lg rotate-[-4deg]" : "bg-neutral-900 border-neutral-800 text-orange-400"
                  }`}>
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1.5 w-full">
                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isHovered ? 'text-orange-400' : 'text-white'}`}>
                      {card.title}
                    </h3>
                    <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed transition-colors duration-300 group-hover:text-neutral-300">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}