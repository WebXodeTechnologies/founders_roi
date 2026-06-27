"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Layers, PenTool, BarChart3, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Layers,
    layerNumber: "Layer 01",
    title: "Platform Optimization",
    desc: "We scale the right channels with surgical precision, utilizing intent-driven technical systems engineered around your core target demographics.",
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#f97316_85%,#fb923c_95%,transparent_100%)]"
  },
  {
    icon: PenTool,
    layerNumber: "Layer 02",
    title: "Creative Optimization",
    desc: "Conversion-focused visual design assets constructed cleanly using native audience psychology, direct-response storytelling, and performance data feedback loop validation.",
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#f59e0b_85%,#fcd34d_95%,transparent_100%)]"
  },
  {
    icon: BarChart3,
    layerNumber: "Layer 03",
    title: "Campaign Optimization",
    desc: "Continuous, daily iterative scaling parameters managed programmatically to safely maximize your commercial ROI, baseline margin profitability, and raw pipeline volume.",
    glow: "bg-[conic-gradient(from_0deg,transparent_60%,#ea580c_85%,#ff7849_95%,transparent_100%)]"
  },
];

export default function GrowthFormula() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section className="relative py-32 px-4 sm:px-8 lg:px-16 bg-bg-primary text-white overflow-hidden select-none border-b border-neutral-900/40">

      {/* ================= BACKGROUND GRADIENT MESH ENGINE ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-orange-500/5 via-transparent to-transparent blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= HEADER BLOCK ================= */}
        <div className="text-center mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl mb-4 shadow-inner">
            <Sparkles size={11} className="animate-pulse" />
            <span>Methodology Framework</span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl leading-[1.15] mb-5">
            The <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">3 Layer</span> Growth Formula
          </h2>

          <p className="text-neutral-400 font-light max-w-xl text-sm sm:text-base leading-relaxed">
            A highly structured scaling blueprint designed to drive consistent, predictable customer flow through bulletproof funnel systems.
          </p>
        </div>

        {/* ================= CARDS LAYOUT ENGINE ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch w-full">
          {steps.map((item, i) => {
            const Icon = item.icon;
            const isHovered = hoveredCard === i;

            return (
              <motion.div
                key={`layer-${i}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 80, damping: 15, delay: i * 0.12 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl bg-neutral-950/20 p-8 sm:p-10 overflow-hidden backdrop-blur-md shadow-2xl flex flex-col justify-between cursor-pointer group h-full border border-neutral-900/40"
              >
                {/* 🌟 LIVE ANIMATED CASING LIGHT TRACK 🌟 */}
                <div className="absolute inset-0 p-[1px] rounded-2xl pointer-events-none z-0">
                  <motion.div
                    animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                    transition={{
                      duration: 5,
                      ease: "linear",
                      repeat: Infinity,
                    }}
                    style={{ originX: "50%", originY: "50%" }}
                    className={`absolute inset-[-100%] ${item.glow} transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                  />
                  {/* Inner Core Shield Mask */}
                  <div className="absolute inset-[1px] bg-[#070707]/95 rounded-[15px] z-1" />
                </div>

                {/* Content Elements forced above background mask stacking contexts */}
                <div className="relative z-10 flex flex-col justify-between h-full space-y-8">

                  <div className="space-y-6">
                    {/* TOP STATUS SUB-HEADER BAR */}
                    <div className="flex items-center justify-between gap-4">
                      {/* Premium Icon Container Node */}
                      <div className={`p-3.5 rounded-xl border transition-all duration-500 ${isHovered
                          ? "bg-linear-to-r from-orange-500 to-amber-500 text-black border-transparent shadow-lg rotate-[-4deg]"
                          : "bg-neutral-900 border-neutral-800 text-orange-400"
                        }`}>
                        <Icon size={20} />
                      </div>
                    </div>
 
                    {/* TEXT INFORMATION AREA */}
                    <div className="space-y-3">
                      <h3 className={`text-xl font-bold tracking-tight transition-colors duration-300 ${isHovered ? 'text-orange-400' : 'text-white'}`}>
                        {item.title}
                      </h3>
                      <p className="text-neutral-400 font-light text-sm leading-relaxed transition-colors duration-300 group-hover:text-neutral-300">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  {/* Fine Bottom Interactive Tracker Bar */}
                  <div className="relative w-full h-[1px] bg-neutral-900 overflow-hidden mt-4">
                    <div className={`absolute inset-0 bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 transition-all duration-500 ease-out ${isHovered ? 'w-full' : 'w-0'}`} />
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