"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Camera, CalendarDays, ShoppingBag, Plane, Building2, GraduationCap, ArrowRight, Sparkles
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    name: "Wedding & Photography",
    icon: Camera,
    focus: "Visual Storytelling",
    bgImage: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=600",
    gradient: "from-rose-500/30 via-orange-500/15 to-transparent",
    borderConic: "bg-[conic-gradient(from_0deg,transparent_60%,#f43f5e_80%,#f97316_90%,transparent_100%)]",
    glow: "shadow-rose-500/20"
  },
  {
    name: "Event Management",
    icon: CalendarDays,
    focus: "Operational Flow",
    bgImage: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600",
    gradient: "from-orange-500/30 via-amber-500/15 to-transparent",
    borderConic: "bg-[conic-gradient(from_0deg,transparent_60%,#f97316_80%,#eab308_90%,transparent_100%)]",
    glow: "shadow-orange-500/20"
  },
  {
    name: "D2C Consumer Brands",
    icon: ShoppingBag,
    focus: "Market Penetration",
    bgImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600",
    gradient: "from-amber-500/30 via-yellow-500/15 to-transparent",
    borderConic: "bg-[conic-gradient(from_0deg,transparent_60%,#eab308_80%,#f97316_90%,transparent_100%)]",
    glow: "shadow-amber-500/20"
  },
  {
    name: "Travel & Holidays",
    icon: Plane,
    focus: "Experience Design",
    bgImage: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=600",
    gradient: "from-teal-500/30 via-emerald-500/15 to-transparent",
    borderConic: "bg-[conic-gradient(from_0deg,transparent_60%,#14b8a6_80%,#059669_90%,transparent_100%)]",
    glow: "shadow-teal-500/20"
  },
  {
    name: "Hospitality & Resorts",
    icon: Building2,
    focus: "Guest Acquisition",
    bgImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600",
    gradient: "from-blue-500/30 via-cyan-500/15 to-transparent",
    borderConic: "bg-[conic-gradient(from_0deg,transparent_60%,#2563eb_80%,#06b6d4_90%,transparent_100%)]",
    glow: "shadow-blue-500/20"
  },
  {
    name: "Education - Schools & Universities",
    icon: GraduationCap,
    focus: "Enrollment Velocity",
    bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600",
    gradient: "from-purple-500/30 via-fuchsia-500/15 to-transparent",
    borderConic: "bg-[conic-gradient(from_0deg,transparent_60%,#8b5cf6_80%,#d946ef_90%,transparent_100%)]",
    glow: "shadow-purple-500/20"
  },
];

export default function Industries() {
  return (
    <section className="w-full bg-bg-primary text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-t border-neutral-900/60">

      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-1/4 w-125 h-125 bg-orange-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-137.5 h-137.5 bg-purple-500/2 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl mb-24 space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner mb-2">
            <Sparkles size={11} className="animate-pulse" />
            <span>Market Vertical Expertise</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Sector-Specific <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Growth Intelligence</span>
          </h2>
          <p className="text-neutral-400 font-light text-sm sm:text-base max-w-xl leading-relaxed">
            We deploy highly tailored marketing architectures and execution roadmaps customized for the specific commercial constraints of your sector.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((item, i) => (
            <IndustryCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ item, index }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 80, damping: 15, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className={`group relative rounded-3xl p-px bg-transparent transition-all duration-500 cursor-pointer overflow-hidden aspect-4/5 sm:aspect-auto sm:h-95 lg:h-100 flex flex-col justify-between hover:shadow-2xl ${item.glow}`}
    >
      {/* 🌟 ROLLING CONIC NEON BORDER LIGHT ENGINE (DYNAMIC COLORS PER CARD) 🌟 */}
      <div className="absolute inset-0 rounded-3xl overflow-hidden pointer-events-none z-0">
        <div className={`absolute -inset-full animate-spin-border ${item.borderConic} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        <div className="absolute inset-px bg-neutral-950 rounded-[23px] z-1" />
      </div>

      {/* 🌟 PREMIUM IMMERSIVE COLORFUL BACKGROUND IMAGE WITH MULTI-LAYER OVERLAYS 🌟 */}
      <div className="absolute inset-px rounded-[23px] overflow-hidden pointer-events-none z-1">
        <Image
          src={item.bgImage}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover opacity-20 group-hover:opacity-55 brightness-[0.7] group-hover:brightness-[0.9] saturate-110 group-hover:scale-110 transition-all duration-700 ease-out"
        />
        {/* Ambient colored spotlight glow inside card boundary */}
        <div className={`absolute inset-0 bg-linear-to-b ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

        {/* Soft bottom content mask gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/60 to-transparent" />
      </div>

      {/* Card Content Stack */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-between items-start">

        {/* Top block */}
        <div className="space-y-6 w-full">
          <div className="p-3 w-fit rounded-xl border bg-neutral-900/60 border-neutral-800 text-orange-400 group-hover:text-black group-hover:bg-linear-to-r group-hover:from-orange-400 group-hover:to-amber-500 group-hover:border-transparent transition-all duration-500 shadow-md">
            <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-2xl font-black text-white group-hover:text-orange-400 transition-colors duration-300 leading-tight">
            {item.name}
          </h3>
        </div>

        {/* Bottom block wrapped in a Next.js Link */}
        <Link href="/case-study" className="w-full flex items-center justify-between border-t border-neutral-800/60 pt-6 mt-8 cursor-pointer">
          <div className="flex flex-col">
            <span className="text-[9px] uppercase tracking-widest text-neutral-500 font-extrabold mb-0.5">Focus Area</span>
            <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors duration-300">{item.focus}</span>
          </div>
          <div className="p-2.5 rounded-full border border-neutral-800 bg-neutral-900/60 text-neutral-400 group-hover:border-orange-500 group-hover:text-white group-hover:bg-orange-500 transition-all duration-300 shadow-md">
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>

      </div>

    </motion.div>
  );
}