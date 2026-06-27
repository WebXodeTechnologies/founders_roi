"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  TrendingUp,
  BarChart3,
  HeartHandshake,
  Award,
  MousePointerClick,
  WandSparkles
} from "lucide-react";

const valueProps = [
  {
    icon: Target,
    title: "Branding & Positioning",
    desc: "We define your authority and position your brand to command premium pricing.",
    glow: "group-hover:from-orange-500/10"
  },
  {
    icon: TrendingUp,
    title: "Growth Consulting",
    desc: "Direct advisory on unit economics, budget allocation, and scaling channels.",
    glow: "group-hover:from-amber-500/10"
  },
  {
    icon: BarChart3,
    title: "Core Marketing & Sales",
    desc: "Integrated campaigns and pipeline engines built to generate qualified cash flow.",
    glow: "group-hover:from-purple-500/10"
  },
  {
    icon: Award,
    title: "Business Scaling",
    desc: "Deploying systematic frameworks to unlock next-level revenue growth.",
    glow: "group-hover:from-red-500/10"
  },
  {
    icon: HeartHandshake,
    title: "Tech Infrastructure",
    desc: "Custom automation, clean databases, and CRM integrations that speed up operations.",
    glow: "group-hover:from-blue-500/10"
  }
];

const graphStages = [
  {
    name: "Foundation & Audit",
    roi: "3.4x",
    brands: "70+",
    roiSub: "Return on Spend",
    brandsSub: "Active Pipelines",
    path: "M 0 95 Q 60 90 100 80 T 200 60 T 300 40",
    dots: [
      { left: "33%", bottom: "20%" },
      { left: "66%", bottom: "40%" },
      { right: "0%", top: "40%" }
    ],
    logs: [
      "TECH SYSTEM AUDITED",
      "BRAND POSITIONING FIXED",
      "CRM INTEGRATION DONE"
    ]
  },
  {
    name: "Velocity & Scale",
    roi: "4.8x",
    brands: "120+",
    roiSub: "Average Portfolio Yield",
    brandsSub: "Active Pipelines",
    path: "M 0 95 Q 60 85 100 65 T 200 45 T 300 5",
    dots: [
      { left: "33%", bottom: "35%" },
      { left: "66%", bottom: "55%" },
      { right: "0%", top: "5%" }
    ],
    logs: [
      "MARKETING CAMPAIGNS LIVE",
      "SALES FUNNEL OPTIMIZED",
      "CONSULTING ROADMAP ACTIVE"
    ]
  },
  {
    name: "Enterprise Expansion",
    roi: "7.6x",
    brands: "250+",
    roiSub: "Peak Portfolio Yield",
    brandsSub: "Active Pipelines",
    path: "M 0 95 Q 40 50 100 30 T 200 15 T 300 0",
    dots: [
      { left: "33%", bottom: "70%" },
      { left: "66%", bottom: "85%" },
      { right: "0%", top: "0%" }
    ],
    logs: [
      "HYPER-SCALE ENGAGED",
      "INFRASTRUCTURE SECURED",
      "RECURRING REVENUE LOCKED"
    ]
  }
];

export default function AboutComponent() {
  const [stageIndex, setStageIndex] = useState(1); // Default to stage 1 (Velocity & Scale)
  const currentStage = graphStages[stageIndex];

  const handleGraphCycle = () => {
    setStageIndex((prev) => (prev + 1) % graphStages.length);
  };

  return (
    <section className="w-full bg-bg-primary text-white py-20 sm:py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none">

      {/* ================= BACKGROUND MESH & GLOWS ================= */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-orange-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/2 blur-[150px] rounded-full pointer-events-none" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-16 items-stretch relative z-10">

        {/* ================= LEFT COLUMN: PREMIUM EQUAL-HEIGHT MOCK CONSOLE ================= */}
        <div className="w-full flex">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="group relative w-full rounded-3xl bg-neutral-900/40 border border-neutral-900/80 p-5 sm:p-8 overflow-hidden backdrop-blur-md shadow-2xl flex flex-col justify-between min-h-[460px] sm:min-h-[520px] lg:min-h-0 lg:h-full"
          >
            {/* Conic rotating border glow */}
            <div className="absolute inset-0 p-px rounded-3xl pointer-events-none z-0">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 8,
                  ease: "linear",
                  repeat: Infinity,
                }}
                className="absolute -inset-full bg-[conic-gradient(from_0deg,transparent_60%,#f97316_85%,#fb923c_95%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
              />
              <div className="absolute inset-px bg-neutral-950 rounded-[23px] z-1" />
            </div>

            {/* Inner Content Stack */}
            <div className="relative z-10 space-y-5 sm:space-y-6 flex flex-col justify-between h-full">

              {/* Header Status Bar */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>
                  <span className="text-[11px] font-bold text-neutral-400 uppercase tracking-widest">Growth Engine Active</span>
                </div>
                <div className="px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-orange-400">
                  <WandSparkles size={11} className="animate-pulse" />
                </div>
              </div>

              {/* Main Core Metrics Section */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="rounded-2xl border border-white/5 bg-neutral-900/50 p-4">
                  <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold">Client Return</span>
                  <motion.span
                    key={currentStage.roi}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl font-black text-white mt-1 block"
                  >
                    {currentStage.roi}
                  </motion.span>
                  <span className="text-[10px] text-orange-400 font-semibold mt-0.5 block">{currentStage.roiSub}</span>
                </div>
                <div className="rounded-2xl border border-white/5 bg-neutral-900/50 p-4">
                  <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold">Scale Index</span>
                  <motion.span
                    key={currentStage.brands}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl font-black text-white mt-1 block"
                  >
                    {currentStage.brands}
                  </motion.span>
                  <span className="text-[10px] text-orange-400 font-semibold mt-0.5 block">{currentStage.brandsSub}</span>
                </div>
              </div>

              {/* Animated & Clickable Growth Chart Line */}
              <motion.div
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={handleGraphCycle}
                className="rounded-2xl border border-white/5 bg-neutral-900/40 hover:border-orange-500/30 p-4 sm:p-5 space-y-4 flex-1 flex flex-col justify-between cursor-pointer transition-all duration-300 relative group/chart overflow-hidden"
              >
                {/* Micro glow sweep on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent -translate-x-full group-hover/chart:animate-[shine_1.2s_ease-in-out] pointer-events-none" />

                <div className="flex justify-between items-center relative z-10">
                  <div className="space-y-1">
                    <span className="text-[9px] text-neutral-500 uppercase tracking-widest font-bold block">Engine State</span>
                    <motion.span
                      key={currentStage.name}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-[11px] sm:text-xs font-bold text-white block"
                    >
                      {currentStage.name}
                    </motion.span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-neutral-950/80 border border-white/5 text-[9px] text-orange-400 font-extrabold uppercase tracking-wider group-hover/chart:text-white transition-colors duration-300">
                    <MousePointerClick size={10} className="animate-bounce" />
                    <span>Cycle velocity</span>
                  </div>
                </div>

                {/* SVG Graph Visualization */}
                <div className="w-full h-20 sm:h-24 relative mt-2 flex items-end z-10">
                  <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#f97316" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Ambient Glow Fill underneath line */}
                    <motion.path
                      animate={{ d: currentStage.path }}
                      transition={{ type: "spring", stiffness: 120, damping: 14 }}
                      fill="url(#chartGlow)"
                      strokeWidth="0"
                      className="transition-all duration-500"
                    />

                    {/* Main Line path */}
                    <motion.path
                      animate={{ d: currentStage.path }}
                      transition={{ type: "spring", stiffness: 120, damping: 14 }}
                      fill="none"
                      stroke="#f97316"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Dynamic performance dots linked to currentStage configs */}
                  <motion.div
                    animate={currentStage.dots[0]}
                    transition={{ type: "spring", stiffness: 100, damping: 14 }}
                    className="absolute h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"
                  />
                  <motion.div
                    animate={currentStage.dots[1]}
                    transition={{ type: "spring", stiffness: 100, damping: 14 }}
                    className="absolute h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"
                  />
                  <motion.div
                    animate={currentStage.dots[2]}
                    transition={{ type: "spring", stiffness: 100, damping: 14 }}
                    className="absolute h-2 w-2 rounded-full bg-orange-400 shadow-[0_0_8px_#fb923c] animate-pulse"
                  />
                </div>
              </motion.div>

              {/* Status logs dossier */}
              <div className="rounded-2xl border border-white/5 bg-neutral-950/60 p-4 space-y-2">
                <div className="flex items-center justify-between text-[9px] font-bold text-neutral-500 uppercase tracking-widest">
                  <span>Engine Dossier Logs</span>
                  <span>Verified</span>
                </div>
                <div className="space-y-1 text-[11px] font-mono text-neutral-400">
                  {currentStage.logs.map((log, index) => (
                    <motion.div
                      key={`${stageIndex}-${index}`}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <span className="text-orange-500">✔</span>
                      <span>{log}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Certified Partner Logos Bar - Wrapped flexbox prevents squishing on laptop screens */}
              <div className="flex flex-wrap items-center justify-around gap-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-1.5 opacity-65 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/platforms/icons8-meta-188.png"
                    alt="Meta Partner"
                    width={18}
                    height={18}
                    className="object-contain filter brightness-100"
                  />
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-neutral-400">
                    Meta Ads Partner
                  </span>
                </div>
                <div className="flex items-center gap-1.5 opacity-65 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/platforms/icons8-google-ads-144.png"
                    alt="Google Partner"
                    width={18}
                    height={18}
                    className="object-contain filter brightness-100"
                  />
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-neutral-400">
                    Google Partner
                  </span>
                </div>
                <div className="flex items-center gap-1.5 opacity-65 hover:opacity-100 transition-opacity duration-300">
                  <Image
                    src="/platforms/icons8-shopify-144.png"
                    alt="Shopify Expert"
                    width={18}
                    height={18}
                    className="object-contain filter brightness-100"
                  />
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-neutral-400">
                    Shopify Expert
                  </span>
                </div>
              </div>

            </div>

          </motion.div>
        </div>

        {/* ================= RIGHT COLUMN: PHILOSOPHY & DETAILED FEATURE STACK ================= */}
        <div className="space-y-8 w-full flex flex-col justify-between">

          {/* Header section */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner">
              <Sparkles size={11} className="animate-pulse" />
              <span>The Strategic Advantage</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.12]">
              Why Founders Choose Us <br />
              <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                for Growth & Scale
              </span>
            </h2>

            <p className="text-neutral-400 font-light leading-relaxed text-sm sm:text-base">
              We align branding, consulting, marketing, sales, and tech infrastructure into one unified system. We help you scale commercial operations cleanly and increase profit margins.
            </p>
          </div>

          {/* Interactive Feature Lists - grid-cols-1 on laptop (xl:grid-cols-2) prevents card squishing */}
          <div className="space-y-4">
            <p className="text-xs font-bold text-neutral-500 tracking-widest uppercase pl-1">
              Why clients work with us
            </p>

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {valueProps.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, delay: idx * 0.05 }}
                    whileHover={{ x: 6 }}
                    className={`group relative rounded-2xl border border-neutral-900/60 bg-neutral-950/20 p-5 flex items-start gap-5 backdrop-blur-md transition-all duration-300 hover:border-orange-500/20 hover:bg-neutral-900/25 cursor-default ${idx === 4 ? "xl:col-span-2" : ""
                      }`}
                  >
                    {/* Glowing effect inside */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

                    {/* Icon container */}
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-orange-500 group-hover:text-orange-400 group-hover:border-orange-500/30 group-hover:bg-orange-500/10 transition-all duration-300 shrink-0 shadow-md">
                      <Icon size={18} />
                    </div>

                    {/* Text block */}
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white tracking-wide group-hover:text-orange-400 transition-colors duration-250">
                        {item.title}
                      </h4>
                      <p className="text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed font-medium">
                        {item.desc}
                      </p>
                    </div>

                    {/* Active accent vertical line on the left side */}
                    <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-transparent group-hover:bg-linear-to-b group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300 rounded-l-2xl" />
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}