"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layers, Lightbulb, TrendingUp } from "lucide-react";

const insights = [
  {
    icon: Layers,
    boldText: "Most brands don’t fail from lack of effort",
    normalText: "— they fail from a lack of architecture and scalable internal systems.",
    glow: "group-hover:from-orange-500/10"
  },
  {
    icon: TrendingUp,
    boldText: "We go far beyond standard ad spend management",
    normalText: " to engineer holistic, predictable business growth funnels.",
    glow: "group-hover:from-amber-500/10"
  },
  {
    icon: Lightbulb,
    boldText: "Unified strategic execution",
    normalText: " combining clean technical pipelines with deep commercial market psychology.",
    glow: "group-hover:from-purple-500/10"
  }
];

export default function WhyFoundersROIOverview() {
  return (
    <section className="w-full bg-bg-primary text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none">
      
      {/* ================= ATMOSPHERIC DECK BACKDROPS ================= */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/[0.02] blur-[150px] pointer-events-none rounded-full" />
      
      {/* Fine-lined background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start relative z-10">
        
        {/* ================= LEFT SIDE: STICKY BRAND HEADLINE ================= */}
        <div className="lg:col-span-5 lg:sticky lg:top-36 space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-neutral-800 bg-neutral-900/40 px-3.5 py-1 text-[11px] font-bold uppercase tracking-widest text-orange-400 backdrop-blur-md shadow-inner">
            <span>The Hard Truth</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.12]">
            Why Traditional <br />
            Marketing <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Fails You</span>
          </h2>
          
          <p className="text-neutral-500 text-sm max-w-sm font-light leading-relaxed">
            Stop burning resources on disconnected agency campaigns. We optimize the entire ecosystem path.
          </p>
        </div>

        {/* ================= RIGHT SIDE: HIGH-END MANIFESTO CARDS ================= */}
        <div className="lg:col-span-7 space-y-6 w-full">
          {insights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", stiffness: 60, damping: 15, delay: idx * 0.1 }}
              whileHover={{ x: 8 }}
              className="group relative rounded-2xl border border-neutral-900 bg-neutral-950/30 p-6 sm:p-8 flex items-start gap-6 backdrop-blur-md transition-all duration-300 hover:border-neutral-800 hover:bg-neutral-900/20"
            >
              {/* Contextual Color Glow Aura */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl`} />

              {/* Icon Frame Box */}
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-orange-500 group-hover:text-orange-500 group-hover:border-orange-500/20 transition-all duration-300 shrink-0 shadow-md">
                <item.icon size={20} />
              </div>

              {/* Text Block content */}
              <div className="space-y-1">
                <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                  <span className="font-bold text-white group-hover:text-orange-400 transition-colors duration-300">
                    {item.boldText}
                  </span>
                  {item.normalText}
                </p>
              </div>

              {/* Edge Accent Rail Line */}
              <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-transparent group-hover:bg-gradient-to-b group-hover:from-orange-500 group-hover:to-amber-500 transition-all duration-300 rounded-l-2xl" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}