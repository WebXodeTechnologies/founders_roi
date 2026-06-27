"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingDown, Target, ShieldAlert, Rocket, Award, Activity, Cpu } from "lucide-react";

export default function HeroAbout() {
  const problems = [
    {
      icon: <TrendingDown size={18} />,
      title: "Random Marketing Without Systems",
      desc: "Most brands run disconnected campaigns without a clear positioning strategy, resulting in inconsistent leads and unpredictable growth."
    },
    {
      icon: <ShieldAlert size={18} />,
      title: "Weak Brand Positioning",
      desc: "Businesses fail to stand out because they compete on price instead of building authority, trust, and premium perception."
    },
    {
      icon: <Activity size={18} />,
      title: "High Lead Costs & Low Conversion",
      desc: "Brands waste money on poor targeting, weak creatives, and broken sales funnels that fail to convert quality customers."
    },
    {
      icon: <Cpu size={18} />,
      title: "No Scalable Infrastructure",
      desc: "Without automation, CRM systems, and growth processes, businesses struggle to scale operations efficiently."
    }
  ];

  const solutions = [
    {
      icon: <Rocket size={18} />,
      title: "Precise Multi-Layer Marketing",
      desc: "We optimize platforms, creatives, campaigns, and funnels together to create predictable and scalable growth systems."
    },
    {
      icon: <Award size={18} />,
      title: "Premium Brand Positioning",
      desc: "We help brands build authority-driven positioning that increases trust, perceived value, and conversion quality."
    },
    {
      icon: <Target size={18} />,
      title: "Performance Focused Execution",
      desc: "Every strategy is backed by data, conversion psychology, and ROI-focused execution to maximize profitability."
    },
    {
      icon: <Sparkles size={18} />,
      title: "Scalable Growth Infrastructure",
      desc: "From CRM systems to automation and business workflows, we build infrastructure designed for long-term scale."
    }
  ];

  return (
    <section className="relative w-full bg-black py-20 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">

      {/* ================= HIGH-END AMBIENT COLOURED BACKGROUND SPHERES ================= */}
      <div className="absolute top-1/3 left-[-15%] -translate-y-1/2 z-0 h-[600px] w-[600px] rounded-full bg-red-600/3 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-15%] -translate-y-1/2 z-0 h-[600px] w-[600px] rounded-full bg-orange-500/3 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-md mb-4">
            <Sparkles size={12} className="animate-pulse" />
            <span>Ecosystem Analysis</span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1] max-w-4xl">
            Most Brands Don’t Have a <br />
            <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Growth System
            </span>
          </h2>
          <p className="mt-4 text-base text-white/50 max-w-2xl leading-relaxed">
            We combine branding, performance, sales psychology, automation, and positioning to create scalable growth engines.
          </p>
        </div>

        {/* ================= 2-COLUMN PANELS CONTAINER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* ================= LEFT SIDE: THE PROBLEM STATEMENT (RED PANEL OVERLAYS) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="group/panel relative rounded-4xl bg-linear-to-b from-neutral-950 to-black p-6 sm:p-10 transition-all duration-500 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)]"
          >
            {/* 🌟 LIVE ANIMATED BORDER TRACKS 🌟 */}
            <div className="absolute inset-0 rounded-4xl pointer-events-none overflow-hidden">
              {/* Background Rotating Conic Light */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ originX: "50%", originY: "50%" }}
                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_75%,#ef4444_88%,#f97316_98%,transparent_100%)] opacity-20 group-hover/panel:opacity-100 transition-opacity duration-500"
              />
              {/* Solid Content Mask */}
              <div className="absolute inset-px bg-neutral-950 rounded-[31px]" />
            </div>

            {/* Inner Content Wrapper */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold tracking-tight text-white mb-10 flex items-center justify-center gap-3 pb-4 border-b border-white/5 group-hover/panel:border-red-500/20 transition-colors duration-300">
                <ShieldAlert className="text-red-500 shrink-0 group-hover/panel:scale-110 group-hover/panel:rotate-6 transition-all duration-300" size={24} />
                <span>The Problem Statement</span>
              </h3>

              <div className="space-y-4">
                {problems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6, backgroundColor: "rgba(239, 68, 68, 0.03)" }}
                    className="flex gap-5 items-start p-4 rounded-2xl border border-transparent hover:border-red-500/10 group/item transition-all duration-300 cursor-default"
                  >
                    {/* Glowing Iconic Wrapper */}
                    <div className="relative shrink-0 flex h-11 w-11 text-orange-500 items-center justify-center rounded-xl bg-white/5 border border-white/10 group-hover/item:text-red-400 group-hover/item:border-red-500/40 group-hover/item:bg-red-500/10 transition-all duration-300">
                      <div className="absolute inset-0 rounded-xl bg-red-500/0 blur-md opacity-0 group-hover/item:bg-red-500/20 group-hover/item:opacity-100 transition-all duration-300 -z-10" />
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white/70 group-hover/item:text-red-400 tracking-wide transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-white/40 group-hover/item:text-white/80 leading-relaxed font-medium transition-colors duration-200">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT SIDE: HOW FOUNDERS ROI SOLVES IT (ORANGE PANEL OVERLAYS) ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group/panel relative rounded-4xl bg-linear-to-b from-neutral-950 to-black p-6 sm:p-10 transition-all duration-500 shadow-[0_30px_80px_-20px_rgba(249,115,22,0.1)]"
          >
            {/* 🌟 LIVE ANIMATED BORDER TRACKS 🌟 */}
            <div className="absolute inset-0 rounded-4xl pointer-events-none overflow-hidden">
              {/* Background Rotating Conic Light */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Infinity,
                }}
                style={{ originX: "50%", originY: "50%" }}
                className="absolute inset-[-150%] bg-[conic-gradient(from_0deg,transparent_75%,#f97316_88%,#fb923c_98%,transparent_100%)] opacity-20 group-hover/panel:opacity-100 transition-opacity duration-500"
              />
              {/* Solid Content Mask */}
              <div className="absolute inset-px bg-neutral-950 rounded-[31px]" />
            </div>

            {/* Inner Content Wrapper */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold tracking-tight text-white mb-10 flex items-center justify-center gap-3 pb-4 border-b border-white/5 group-hover/panel:border-orange-500/20 transition-colors duration-300">
                <Rocket className="text-orange-500 shrink-0 group-hover/panel:scale-110 group-hover/panel:-rotate-6 transition-all duration-300" size={24} />
                <span>How Founders ROI Solves It</span>
              </h3>

              <div className="space-y-4">
                {solutions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6, backgroundColor: "rgba(249, 115, 22, 0.04)" }}
                    className="flex gap-5 items-start p-4 rounded-2xl border border-transparent hover:border-orange-500/10 group/item transition-all duration-300 cursor-default"
                  >
                    {/* Dynamic Glowing Orange Icon Wrapper */}
                    <div className="relative shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-orange-500 group-hover/item:text-orange-400 group-hover/item:border-orange-500/50 group-hover/item:bg-orange-500/10 transition-all duration-300">
                      <div className="absolute inset-0 rounded-xl bg-orange-500/0 blur-md opacity-0 group-hover/item:bg-orange-500/30 group-hover/item:opacity-100 transition-all duration-300 -z-10" />
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-white/80 group-hover/item:text-orange-400 tracking-wide transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-white/40 group-hover/item:text-white/90 leading-relaxed font-medium transition-colors duration-200">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}