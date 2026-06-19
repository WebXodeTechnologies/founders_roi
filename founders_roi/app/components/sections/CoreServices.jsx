"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Palette,
  LineChart,
  Cpu,
  Smartphone,
  Globe,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export default function CoreServices() {
  const services = [
    {
      icon: <Megaphone size={22} />,
      title: "Precise Marketing",
      desc: "Data-driven multi-channel digital performance marketing strategies that generate consistent leads and predictable pipelines.",
    },
    {
      icon: <Palette size={22} />,
      title: "Branding & Positioning",
      desc: "Build authority-driven enterprise brand architectures that increase trust, market share, and premium perception.",
    },
    {
      icon: <LineChart size={22} />,
      title: "Core Sales",
      desc: "Optimized, turnkey high-converting conversion systems designed to systematically turn traffic into premium assets.",
    },
    {
      icon: <Cpu size={22} />,
      title: "Automation Systems",
      desc: "Streamline chaotic operational pipelines with scalable, autonomous background logic workflows.",
    },
    {
      icon: <Smartphone size={22} />,
      title: "App Development",
      desc: "Modern native mobile interfaces engineered from scratch for optimal rendering speeds and horizontal system scaling.",
    },
    {
      icon: <Globe size={22} />,
      title: "Web Solutions",
      desc: "Ultra-fast, fully responsive SEO-optimized web systems leveraging contemporary modern client-rendering framework stacks.",
    },
  ];

  return (
    <section className="relative w-full bg-black py-24 px-4 sm:px-6 md:px-16 overflow-hidden">
      
      {/* ================= BACKGROUND HIGH-CONTRAST DUST AURA ================= */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-0 h-[600px] w-[800px] rounded-full bg-orange-600/[0.03] blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* ================= SECTION HEADER ================= */}
        <div className="text-center mb-20 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-md mb-4">
            <Sparkles size={12} className="animate-pulse" />
            <span>Capabilities Matrix</span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.1]">
            What We <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Offer</span>
          </h2>

          <p className="mt-4 text-base text-white/50 max-w-2xl leading-relaxed px-4">
            We provide end-to-end infrastructure combining marketing, branding, technology, and automation to scale your business efficiency.
          </p>
        </div>

        {/* ================= PRESET BENTO INTERACTIVE MATRIX GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-3xl border border-white/5 bg-gradient-to-b from-neutral-950 to-black p-8 transition-all duration-500 hover:border-orange-500/30 shadow-[0_30px_70px_-20px_rgba(0,0,0,0.95)] overflow-hidden"
            >
              {/* Dynamic Flash Glow (Hidden natively, blooms aggressively on wrapper element hover) */}
              <div className="absolute inset-0 bg-radial-gradient from-orange-500/[0.08] via-orange-500/[0.01] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none -z-10 blur-xl scale-110" />

              <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                
                {/* ICON & LINK ROW LAYOUT */}
                <div className="flex items-center justify-between w-full">
                  {/* Neon Glow Boxed Icon Container */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-orange-500 group-hover:text-orange-400 group-hover:border-orange-500/40 group-hover:bg-orange-500/10 transition-all duration-300 shadow-md">
                    {/* Deep inner aura flash overlay backing */}
                    <div className="absolute inset-0 rounded-xl bg-orange-500/0 blur-md opacity-0 group-hover:bg-orange-500/30 group-hover:opacity-100 transition-all duration-300 -z-10" />
                    {service.icon}
                  </div>

                  {/* Tiny floating vector arrow linking up on hover */}
                 
                </div>

                {/* CONTENT LAYER */}
                <div className="mt-2">
                  <h3 className="text-xl font-bold text-white/90 group-hover:text-white tracking-wide transition-colors duration-200">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/40 group-hover:text-white/70 leading-relaxed font-medium transition-colors duration-300">
                    {service.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}