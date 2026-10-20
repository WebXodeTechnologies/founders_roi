"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Calendar } from "lucide-react";

export default function Cta() {
  return (
    <section className="w-full py-32 px-4 sm:px-8 relative overflow-hidden bg-bg-primary">
      {/* BACKGROUND MESH GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-225 h-125 bg-orange-500/3 blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* PREMIUM BADGE */}
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/50 px-4 py-1.5 text-xs font-semibold tracking-widest text-orange-400 uppercase mb-8 backdrop-blur">
          <Sparkles size={11} />
          <span>Strategic Alignment</span>
        </div>

        {/* HEADLINE: Crisp, Authoritative, Action-Oriented */}
        <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tight leading-[1.1] text-white">
          Ready to achieve <br />
          <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
            market dominance?
          </span>
        </h2>

        {/* SUB-HEADLINE: Focus on "Operational Excellence" */}
        <p className="text-neutral-400 text-base md:text-lg mb-12 max-w-xl mx-auto leading-relaxed">
          Unlock your brand’s true potential. We engineer high-velocity growth
          systems that translate complex market signals into sustainable,
          predictable revenue.
        </p>

        {/* LIQUID GOLD CTA BUTTON */}
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="group relative inline-flex items-center gap-3 px-10 py-4 bg-neutral-900 text-white font-bold uppercase tracking-widest rounded-full border border-neutral-700 hover:border-orange-500/50 transition-all duration-300 overflow-hidden"
        >
          <div className="absolute inset-0 bg-linear-to-r from-orange-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <span className="relative z-10">Request Executive Briefing</span>
          <div className="relative z-10 p-1 rounded-full bg-black/20 group-hover:bg-white/20 transition-colors">
            <ArrowRight size={16} />
          </div>
        </motion.a>

        {/* TRUST FOOTER: Focus on "Consultative Approach" */}
        <div className="mt-12 flex items-center justify-center gap-6 text-[10px] uppercase tracking-widest text-neutral-600 font-bold">
          <div className="flex items-center gap-2">
            <Calendar size={12} className="text-orange-500" />
            <span>Consultative Audit</span>
          </div>
          <div className="w-1 h-1 rounded-full bg-neutral-800" />
          <span>Capital Efficient</span>
        </div>
      </div>
    </section>
  );
}
