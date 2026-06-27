"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingDown,
  Crown,
  DollarSign,
  Workflow,
  Layers,
  BarChart3,
  Cpu,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  Zap
} from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Random Marketing",
    desc: "Disconnected campaigns running without positioning logic lead to bleeding budgets and highly inconsistent growth patterns.",
    tag: "Budget Leak"
  },
  {
    icon: Crown,
    title: "Weak Branding",
    desc: "Competing constantly on bottom-tier price structures instead of authority reduces market trust and erodes transaction margins.",
    tag: "Low Margins"
  },
  {
    icon: DollarSign,
    title: "High Acquisition Costs",
    desc: "Poor demographic targeting criteria and porous, leaky conversion funnels waste critical ad spend allocation.",
    tag: "High CAC"
  },
  {
    icon: Workflow,
    title: "Manual Operations",
    desc: "A total lack of system automation and structured CRM routing caps your growth potential and traps you in manual overhead.",
    tag: "Ceiling Limit"
  },
];

const solutions = [
  {
    icon: Layers,
    title: "Layered Marketing Infrastructure",
    desc: "We deploy deeply integrated, cross-channel marketing systems engineered to deliver highly predictable growth scaling.",
    tag: "Predictable ROI"
  },
  {
    icon: Crown,
    title: "Premium Position Placement",
    desc: "Authority-driven brand positioning mechanics that maximize audience trust metrics, command premium pricing, and accelerate conversions.",
    tag: "Price Authority"
  },
  {
    icon: BarChart3,
    title: "Data-Backed ROI Execution",
    desc: "Granular, performance-tracked strategy sequences engineered completely around underlying unit economics and profitability.",
    tag: "Scale Margins"
  },
  {
    icon: Cpu,
    title: "Automated Tech-Stack Workflows",
    desc: "Robust architectural pipelines and autonomous trigger workflows optimized to convert modern enterprise accounts at scale.",
    tag: "High Efficiency"
  },
];

export default function ProblemSolution() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="relative py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-bg-primary text-white overflow-hidden select-none border-b border-neutral-900/40">
      
      {/* ================= BACKGROUND GRADIENT MESH ENGINE ================= */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-red-500/3 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-orange-500/3 blur-[160px] rounded-full pointer-events-none" />
      
      {/* Fine grid lines backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* ================= HEADER ENGINE ================= */}
        <div className="text-center mb-20 sm:mb-24 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl mb-4 shadow-inner">
            <Sparkles size={11} className="animate-pulse" />
            <span>System Transformation</span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl leading-[1.15] mb-5">
            From <span className="text-red-500 relative inline-block">Chaos</span> to{" "}
            <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Predictable Scale</span>
          </h2>

          <p className="text-neutral-400 font-light max-w-xl text-sm sm:text-base leading-relaxed">
            We systematically diagnose broken, fragmented marketing setups and engineer high-performance growth architecture.
          </p>
        </div>

        {/* ================= SPLIT TRANSFORMATION MATRIX ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch relative">
          
          {/* ================= THE PROBLEMS COLUMN ================= */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-neutral-900/80 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-red-950/40 border border-red-900/20 text-red-500">
                  <ShieldAlert size={16} />
                </div>
                <h3 className="text-sm font-bold tracking-widest text-red-500 uppercase">
                  The Core Bottlenecks
                </h3>
              </div>
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest hidden sm:inline">
                Leaking Capital
              </span>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-between gap-4">
              {problems.map((item, i) => {
                const Icon = item.icon;
                const isActive = hoveredIndex === i;
                const isAnyActive = hoveredIndex !== null;

                return (
                  <motion.div
                    key={`prob-${i}`}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className={`relative rounded-2xl border p-5 sm:p-6 transition-all duration-500 backdrop-blur-md flex flex-col justify-between gap-4 cursor-pointer overflow-hidden flex-1 ${
                      isActive
                        ? "border-red-500/30 bg-red-950/5 shadow-[0_0_30px_rgba(239,68,68,0.05)]"
                        : isAnyActive
                        ? "border-neutral-900/40 bg-transparent opacity-30 scale-[0.99] filter blur-[0.5px]"
                        : "border-neutral-900 bg-neutral-950/20 shadow-md"
                    }`}
                  >
                    {/* Visual glowing border accent */}
                    <div className={`absolute top-0 bottom-0 left-0 w-[2px] transition-all duration-500 ${isActive ? 'bg-red-500' : 'bg-transparent'}`} />

                    <div className="flex items-start gap-4">
                      {/* Icon Block */}
                      <div className={`p-3 rounded-xl border transition-all duration-500 shrink-0 ${
                        isActive 
                          ? "bg-red-500 text-black border-transparent shadow-lg shadow-red-950/40 rotate-[-4deg]" 
                          : "bg-neutral-900 border-neutral-800 text-neutral-400"
                      }`}>
                        <Icon size={20} className={`${isActive ? 'animate-pulse' : ''}`} />
                      </div>

                      {/* Text info */}
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2">
                          <h4 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${isActive ? 'text-red-400' : 'text-white'}`}>
                            {item.title}
                          </h4>
                          <span className={`text-[9px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider transition-all duration-300 ${isActive ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-neutral-900 text-neutral-500'}`}>
                            {item.tag}
                          </span>
                        </div>
                        <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed transition-colors duration-300 group-hover:text-neutral-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ================= THE SOLUTIONS COLUMN ================= */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="flex items-center justify-between border-b border-neutral-900/80 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-orange-950/40 border border-orange-900/20 text-orange-500">
                  <Zap size={16} className="animate-pulse" />
                </div>
                <h3 className="text-sm font-bold tracking-widest text-orange-500 uppercase">
                  The Growth Architecture
                </h3>
              </div>
              <span className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest hidden sm:inline">
                Symmetric Systems
              </span>
            </div>

            <div className="space-y-4 flex-1 flex flex-col justify-between gap-4">
              {solutions.map((item, i) => {
                const Icon = item.icon;
                const isActive = hoveredIndex === i;
                const isAnyActive = hoveredIndex !== null;

                return (
                  <motion.div
                    key={`sol-${i}`}
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{ x: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className={`relative rounded-2xl border p-5 sm:p-6 transition-all duration-500 backdrop-blur-md flex flex-col justify-between gap-4 cursor-pointer overflow-hidden flex-1 ${
                      isActive
                        ? "border-orange-500/30 bg-orange-950/5 shadow-[0_0_30px_rgba(249,115,22,0.05)]"
                        : isAnyActive
                        ? "border-neutral-900/40 bg-transparent opacity-30 scale-[0.99] filter blur-[0.5px]"
                        : "border-neutral-900 bg-neutral-950/20 shadow-md"
                    }`}
                  >
                    {/* Visual glowing border accent */}
                    <div className={`absolute top-0 bottom-0 left-0 w-[2px] transition-all duration-500 ${isActive ? 'bg-linear-to-b from-orange-500 to-amber-500' : 'bg-transparent'}`} />

                    <div className="flex items-start gap-4">
                      {/* Icon Block */}
                      <div className={`p-3 rounded-xl border transition-all duration-500 shrink-0 ${
                        isActive 
                          ? "bg-linear-to-r from-orange-500 to-amber-500 text-black border-transparent shadow-lg shadow-orange-950/40 rotate-[4deg]" 
                          : "bg-neutral-900 border-neutral-800 text-neutral-400"
                      }`}>
                        <Icon size={20} className={`${isActive ? 'rotate-[12deg]' : ''}`} />
                      </div>

                      {/* Text info */}
                      <div className="space-y-1.5 w-full">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <h4 className={`text-base sm:text-lg font-bold transition-colors duration-300 ${isActive ? 'text-orange-400' : 'text-white'}`}>
                              {item.title}
                            </h4>
                            <span className={`text-[9px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider transition-all duration-300 ${isActive ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' : 'bg-neutral-900 text-neutral-500'}`}>
                              {item.tag}
                            </span>
                          </div>
                          {isActive && (
                            <motion.div
                              initial={{ opacity: 0, x: -5 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="text-orange-400 shrink-0 hidden sm:block"
                            >
                              <ArrowRight size={16} />
                            </motion.div>
                          )}
                        </div>
                        <p className="text-neutral-400 font-light text-xs sm:text-sm leading-relaxed transition-colors duration-300 group-hover:text-neutral-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
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