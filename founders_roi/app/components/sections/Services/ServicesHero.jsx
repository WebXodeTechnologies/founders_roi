"use client";

import React from "react";
import { motion } from "framer-motion";
import { Megaphone, TrendingUp, Palette, Code, Briefcase, Sparkles } from "lucide-react";

const services = [
  { icon: Megaphone, title: "Marketing" },
  { icon: TrendingUp, title: "Sales Systems" },
  { icon: Palette, title: "Premium Branding" },
  { icon: Code, title: "Tech Infrastructure" },
  { icon: Briefcase, title: "Business Expansion" }
];

export default function ServicesHero() {
  return (
    <section className="w-full bg-[#030202] text-white pt-36 pb-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none">
      {/* Ambient Top Light Flares */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-orange-500/[0.05] via-transparent to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner">
            <Sparkles size={11} className="animate-pulse" />
            <span>Capability Deck</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1]">
            Build a <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Growth Engine</span>, <br />
            Not Just Campaigns.
          </h1>

          <p className="text-neutral-400 font-light text-base sm:text-lg leading-relaxed max-w-2xl">
            Most businesses chase short-term, volatile wins. We design integrated structural ecosystems that turn marketing, sales, branding, and technical workflows into a single predictable revenue machine.
          </p>
        </div>

        {/* RIGHT COLUMN: PREVIEW HUB GRID */}
        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
          {services.map((item, i) => (
            <div 
              key={i} 
              className={`rounded-2xl border border-neutral-900 bg-neutral-950/40 p-5 backdrop-blur-sm flex flex-col justify-between transition-colors duration-300 hover:border-orange-500/20 group ${i === 4 ? 'sm:col-span-2' : ''}`}
            >
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-orange-400 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500 group-hover:text-black group-hover:border-transparent transition-all duration-300 w-fit mb-4">
                <item.icon size={18} />
              </div>
              <span className="text-sm font-bold text-neutral-300 tracking-wide group-hover:text-white transition-colors">
                {item.title}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}