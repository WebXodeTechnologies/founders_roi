"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Palette, 
  Megaphone, 
  TrendingUp, 
  Globe, 
  Smartphone, 
  Code2, 
  Sparkles, 
  ArrowRight 
} from "lucide-react";

const capabilities = [
  {
    phase: "01",
    category: "Growth Suite",
    title: "Premium Branding",
    desc: "We build authoritative brand identities, corporate positioning, and design systems engineered to command premium pricing and create deep consumer trust.",
    icon: Palette,
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#f97316_85%,#fb923c_95%,transparent_100%)]",
    bgHover: "hover:bg-orange-950/[0.03]"
  },
  {
    phase: "02",
    category: "Growth Suite",
    title: "Performance Marketing",
    desc: "Data-driven client acquisition campaigns across search and social channels, engineered entirely around unit economics, margins, and profitable ROAS.",
    icon: Megaphone,
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#f59e0b_85%,#fcd34d_95%,transparent_100%)]",
    bgHover: "hover:bg-amber-950/[0.03]"
  },
  {
    phase: "03",
    category: "Growth Suite",
    title: "Sales Funnel Systems",
    desc: "We convert qualified traffic into predictable revenue pipelines through custom qualification routing, automated booking loops, and CRM tracking infrastructure.",
    icon: TrendingUp,
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#6366f1_85%,#818cf8_95%,transparent_100%)]",
    bgHover: "hover:bg-indigo-950/[0.03]"
  },
  {
    phase: "04",
    category: "Engineering Suite",
    title: "Enterprise Web Architecture",
    desc: "Blazing-fast, modern web platforms built with Next.js, optimized for perfect SEO performance, core web vitals, and scalable conversion mechanics.",
    icon: Globe,
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#06b6d4_85%,#22d3ee_95%,transparent_100%)]",
    bgHover: "hover:bg-cyan-950/[0.03]"
  },
  {
    phase: "05",
    category: "Engineering Suite",
    title: "Mobile App Ecosystems",
    desc: "Premium, cross-platform mobile application development delivering native performance, smooth gesture tracking, and clean offline caching layers.",
    icon: Smartphone,
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#3b82f6_85%,#60a5fa_95%,transparent_100%)]",
    bgHover: "hover:bg-blue-950/[0.03]"
  },
  {
    phase: "06",
    category: "Engineering Suite",
    title: "Custom Web Applications",
    desc: "Tailored software architecture, secure database infrastructure, and automated background API tasks built cleanly to power unique brand operational workflows.",
    icon: Code2,
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#ef4444_85%,#f87171_95%,transparent_100%)]",
    bgHover: "hover:bg-red-950/[0.03]"
  }
];

export default function SixCardsServicesOverview() {
  // Global sequential tracking states
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const phaseDuration = 4500; // 4.5 seconds per card transition interval

  useEffect(() => {
    // Only cycle the automatic sequence if the user is not hovering over the grid
    if (hoveredIndex !== null) return;

    const interval = setInterval(() => {
      setActiveCardIndex((prev) => (prev + 1) % capabilities.length);
    }, phaseDuration);

    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
    <section className="w-full bg-[#030202] text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-t border-neutral-900/60">
      
      {/* ================= BACKGROUND GRAPHICS & BLURS ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-tr from-orange-500/[0.02] via-purple-500/[0.01] to-transparent blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* HEADER BLOCK */}
        <div className="max-w-3xl mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner">
            <Sparkles size={11} className="animate-pulse" />
            <span>Operational Architecture</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Our Core Capabilities <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Engineered to Scale</span>
          </h2>
        </div>

        {/* ================= 6-CARD GRID MATRIX SYSTEM ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch w-full">
          {capabilities.map((node, i) => {
            // Determine active tracking states
            const isUserHoveringAny = hoveredIndex !== null;
            const isCurrentlyHovered = hoveredIndex === i;
            const isAutoActive = activeCardIndex === i && !isUserHoveringAny;
            const isEffectivelyLive = isCurrentlyHovered || isAutoActive;

            const IconComponent = node.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15, delay: i * 0.05 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                // ✅ SCALE & TILT ANIMATION TRANSITIONS VIA FRAMER MOTION USING STATE BOOLEANS
                animate={{
                  scale: isCurrentlyHovered ? 1.02 : 1,
                  y: isCurrentlyHovered ? -5 : 0
                }}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between overflow-hidden backdrop-blur-md transition-all duration-500 h-full group cursor-pointer border ${
                  isCurrentlyHovered 
                    ? "border-neutral-700 shadow-2xl z-20" 
                    : isAutoActive 
                    ? "border-neutral-800 bg-neutral-900/10" 
                    : isUserHoveringAny 
                    ? "border-neutral-950 bg-neutral-950/20 opacity-30 scale-[0.99]" 
                    : "border-neutral-900 bg-[#060606]/40"
                } ${node.bgHover}`}
              >
                {/* 🌟 LIVE ANIMATED CASING LIGHT TRACK 🌟 */}
                <div className="absolute inset-0 p-[1px] rounded-2xl pointer-events-none z-0">
                  <motion.div 
                    animate={isEffectivelyLive ? { rotate: 360 } : { rotate: 0 }}
                    transition={isEffectivelyLive ? {
                      duration: 5,
                      ease: "linear",
                      repeat: Infinity,
                    } : { duration: 0 }}
                    style={{ originX: "50%", originY: "50%" }}
                    className={`absolute inset-[-100%] ${node.glow} transition-opacity duration-500 ${isEffectivelyLive ? 'opacity-100' : 'opacity-0'}`}
                  />
                  {/* Inner Content Mask */}
                  <div className="absolute inset-[1px] bg-[#070707]/95 rounded-[15px] z-1" />
                </div>

                {/* Content Elements */}
                <div className="space-y-6 relative z-10">
                  
                  {/* CARD ACCENT SUB-BAR */}
                  <div className="flex items-center justify-between border-b border-neutral-900/60 pb-4">
                    <span className="text-xs font-bold text-neutral-600 uppercase tracking-widest font-mono">
                      {node.phase}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-neutral-900 border transition-all duration-300 ${
                      isEffectivelyLive ? 'text-orange-400 border-orange-500/10' : 'border-neutral-800/80 text-neutral-400'
                    }`}>
                      {node.category}
                    </span>
                  </div>

                  {/* ICON & TITLE BLOCK */}
                  <div className="space-y-4">
                    <div className={`p-3 rounded-xl border w-fit transition-all duration-500 ${
                      isEffectivelyLive 
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-black border-transparent shadow-lg rotate-[-4deg]" 
                        : "bg-neutral-900 border-neutral-800 text-orange-400"
                    }`}>
                      <IconComponent size={20} />
                    </div>

                    <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${
                      isEffectivelyLive ? 'text-orange-400' : 'text-white'
                    }`}>
                      {node.title}
                    </h3>
                  </div>

                  {/* TEXT DESCRIPTION */}
                  <p className={`font-light text-sm leading-relaxed min-h-[72px] transition-colors duration-300 ${
                    isEffectivelyLive ? 'text-neutral-200' : 'text-neutral-400'
                  }`}>
                    {node.desc}
                  </p>

                </div>

                {/* BOTTOM ACTION RAIL INTERFACE */}
                <div className="relative pt-6 flex items-center justify-between w-full border-t border-neutral-900/60 mt-8 z-10">
                  <span className={`text-xs font-bold tracking-wider transition-colors duration-300 ${
                    isEffectivelyLive ? 'text-neutral-200' : 'text-neutral-500'
                  }`}>
                    Explore Capability
                  </span>
                  <motion.div 
                    animate={isEffectivelyLive ? { x: 4, scale: 1.05 } : { x: 0, scale: 1 }}
                    className={`p-2 rounded-full transition-colors duration-300 ${
                      isEffectivelyLive ? 'bg-orange-500 text-black' : 'bg-neutral-900 text-neutral-500'
                    }`}
                  >
                    <ArrowRight size={12} />
                  </motion.div>
                </div>

                {/* Linear Progress Sync Track */}
                <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-900 overflow-hidden z-10">
                  <div className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 transition-all ease-out ${
                    isAutoActive ? 'w-full duration-[4500ms]' : isCurrentlyHovered ? 'w-full duration-500' : 'w-0 duration-300'
                  }`} />
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}