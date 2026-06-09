"use client";

import React from "react";
import { motion } from "framer-motion";
import { BarChart3, TrendingUp, Users2, Activity } from "lucide-react";

const metrics = [
  { icon: TrendingUp, title: "Revenue Growth Volume", value: "+420%", label: "Validated Annual Lift" },
  { icon: Activity, title: "Conversion Ratio Lift", value: "+280%", label: "Funnel Pipeline Delta" },
  { icon: Users2, title: "Audience Expansion Matrix", value: "12M+", label: "Verified Gross Impressions" }
];

export default function ProcessCaseStudy() {
  return (
    <section className="w-full bg-[#030202] text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-t border-neutral-900/60">
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[400px] bg-purple-500/[0.02] blur-[150px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner">
            <BarChart3 size={11} />
            <span>Proof of Execution</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.12]">
            Engineering Scalable <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Growth Systems</span>
          </h2>

          <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-md">
            We transform disjointed, underperforming marketing channels into a single high-performance revenue engine combining empirical unit data with precise platform infrastructure targeting.
          </p>
        </div>

        {/* RIGHT COLUMN: PREMIUM METRIC BADGE GRID */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch w-full">
          {metrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 100, damping: 16, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl border border-neutral-900 bg-neutral-950/40 p-6 flex flex-col justify-between backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-orange-500/20 group"
            >
              <div className="space-y-4">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-400 w-fit transition-colors group-hover:text-orange-400">
                  <item.icon size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-[10px] text-neutral-600 font-medium font-mono mt-0.5">{item.label}</p>
                </div>
              </div>

              <div className="text-4xl sm:text-5xl font-black tracking-tight bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent mt-8 group-hover:scale-[1.02] transition-transform duration-300 origin-left">
                {item.value}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}