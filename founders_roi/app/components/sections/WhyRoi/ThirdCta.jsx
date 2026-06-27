"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Zap, Activity, Sparkles } from "lucide-react";

export default function ThirdCta() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="w-full bg-bg-primary text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-t border-neutral-900/60">
      
      {/* ================= BACKGROUND GRAPHICS & MESH LAYERS ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-linear-to-br from-orange-500/10 via-purple-500/2 to-transparent blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* ================= MAIN COMMAND CARD WRAPPER ================= */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative w-full rounded-3xl bg-neutral-950/30 p-8 sm:p-12 md:p-16 text-center overflow-hidden backdrop-blur-md shadow-2xl shadow-black/80 group border border-neutral-900/40"
        >
          
          {/* 🌟 LIVE PERIMETER LIGHT RAIL ENGINE 🌟 */}
          <div className="absolute inset-0 p-[1px] rounded-3xl pointer-events-none z-0">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{
                duration: 6.5,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ originX: "50%", originY: "50%" }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_60%,#f97316_85%,#fb923c_95%,transparent_100%)] opacity-40 group-hover:opacity-100 transition-opacity duration-500"
            />
            {/* Inside Mask */}
            <div className="absolute inset-[1px] bg-[#070707]/95 rounded-[23px] z-1" />
          </div>

          {/* Core Content Layout Elements Forced Above Border Stacking Contexts */}
          <div className="relative z-10 space-y-8 flex flex-col items-center">
            
            {/* BADGE ACCENT */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner">
              <Sparkles size={11} className="animate-pulse" />
              <span>Final Architectural Step</span>
            </div>

            {/* HEADLINE */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.15] max-w-2xl mx-auto">
              Build Systems. <br />
              <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Scale Predictably.</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-neutral-400 text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
              Stop guessing your conversion pathways. Secure your dedicated system infrastructure alignment map and deploy predictable commercial revenue funnels.
            </p>

            {/* ================= STRUCTURAL SYSTEM DELIVERABLE CONNECTIONS ================= */}
            <div className="flex flex-wrap items-center justify-center gap-3 w-full max-w-xl pt-2 pb-6">
              {[
                { icon: Activity, text: "System Audit" },
                { icon: Zap, text: "Funnel Blueprint" },
                { icon: ShieldCheck, text: "Scale Roadmap" }
              ].map((item, index) => (
                <div
                  key={index}
                  className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-500 ${
                    isHovered 
                      ? "border-orange-500/20 bg-orange-500/2 text-orange-400" 
                      : "border-neutral-800 bg-neutral-900/40 text-neutral-500"
                  }`}
                >
                  <item.icon size={13} className={`transition-transform duration-500 ${isHovered ? 'rotate-[6deg] scale-105' : ''}`} />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>

            {/* MAGNETIC CTA LINK INTERFACE */}
            <div className="w-full sm:w-auto flex justify-center">
              <MagneticCtaButton href="/contact" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

/* ================= HIGH-END MAGNETIC INTERACTIVE BUTTON ================= */
function MagneticCtaButton({ href }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 130, damping: 16 });
  const springY = useSpring(y, { stiffness: 130, damping: 16 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const clientX = e.clientX - rect.left - width / 2;
    const clientY = e.clientY - rect.top - height / 2;

    x.set(clientX * 0.35);
    y.set(clientY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 220, damping: 16 }}
      className="relative inline-flex items-center gap-3 px-10 py-4 text-sm font-extrabold uppercase tracking-widest rounded-xl bg-linear-to-r from-orange-500 via-amber-500 to-orange-600 text-black shadow-xl shadow-orange-950/20 group overflow-hidden w-full sm:w-auto justify-center"
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none" />
      <div className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shine_0.9s_ease-in-out] pointer-events-none" />

      <span className="relative z-10">Get Started Now</span>
      <ArrowUpRight size={16} className="text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}