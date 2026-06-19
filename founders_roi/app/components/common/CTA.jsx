"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight, Calendar } from "lucide-react";
import React from "react";

export default function CTA() {
  return (
    <section className="w-full bg-[#030202] text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none">
      
      {/* ================= BACKGROUND GRAPHICS & MESH LAYERS ================= */}
      {/* Radial Focal Ambient Glow Behind Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] rounded-full bg-gradient-to-tr from-orange-500/10 via-purple-500/[0.03] to-transparent blur-[140px] pointer-events-none" />
      
      {/* Architectural Subtle Grid Overlay Map */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_40%,transparent_100%)] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* ================= MAIN INTERACTIVE LUXURY CORE BOARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          /* Removed static borders to let the dynamic conic track shine */
          className="relative w-full rounded-3xl bg-neutral-950/20 p-8 sm:p-12 md:p-20 text-center overflow-hidden backdrop-blur-md shadow-2xl shadow-black/80 group"
        >
          
          {/* 🌟 LIVE ANIMATED BORDER TRACKS 🌟 */}
          {/* Conic Gradient Light Engine */}
          <div className="absolute inset-0 p-[1px] rounded-3xl pointer-events-none z-0">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{
                duration: 6, // Velocity of the border crawl cycle
                ease: "linear",
                repeat: Infinity,
              }}
              style={{ originX: "50%", originY: "50%" }}
              className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_60%,#f97316_85%,#fb923c_95%,transparent_100%)] opacity-70 group-hover:opacity-100 group-hover:duration-300 transition-opacity"
            />
            {/* Inside Content Mask to prevent inner spillover */}
            <div className="absolute inset-[1px] bg-[#050505]/95 rounded-[23px] z-1" />
          </div>

          {/* Core Layout Containers forced above the background masking stack */}
          <div className="relative z-10">
            
            {/* Subtle Ambient Radial Card Spotlight Aura */}
            <div className="absolute inset-0 bg-radial-gradient from-orange-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            {/* BADGE ACCENT */}
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl mb-6 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>Let&apos;s Build Your Engine</span>
            </div>

            {/* HEADLINE BLOCK */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-[1.12] mb-6 max-w-3xl mx-auto">
              Ready to Scale Your Brand <br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                With Proven Systems?
              </span>
            </h2>

            {/* DESCRIPTION SUB-TEXT */}
            <p className="text-neutral-400 text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              We help brands build predictable growth systems using bulletproof strategy, 
              premium creative design execution, and robust technical infrastructure. 
              Let&apos;s unlock your commercial potential.
            </p>

            {/* MAGNETIC CALL TO ACTION BUTTON INTERFACE */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <MagneticButton href="/contact" />
            </div>
            
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* ================= HIGH-END MAGNETIC BUTTON COMPONENT ================= */
function MagneticButton({ href }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 15 });
  const springY = useSpring(y, { stiffness: 120, damping: 15 });

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
        className="relative inline-flex items-center gap-3 px-10 py-4.5 text-sm font-extrabold uppercase tracking-widest rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-black shadow-xl shadow-orange-950/20 group overflow-hidden w-full sm:w-auto justify-center"
      >
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none" />
        <div className="absolute -left-full top-0 h-full w-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:animate-[shine_0.9s_ease-in-out] pointer-events-none" />
  
        <span className="relative z-10">Get Started Now</span>
        <ArrowUpRight size={16} className="text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </motion.a>
  );
}