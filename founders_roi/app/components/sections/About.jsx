"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Megaphone,
  Cpu,
  Network,
  ShieldCheck,
  Target,
} from "lucide-react";
import Link from "next/link";

export default function About() {
  const values = [
    {
      icon: <Megaphone className="text-orange-400" size={18} />,
      title: "Precise Marketing & Branding",
      desc: "Architecting narrative positions that capture market share, not just temporary clicks.",
    },
    {
      icon: <Cpu className="text-orange-400" size={18} />,
      title: "Sales Automation & Creative Strategy",
      desc: "Replacing repetitive manual pipelines with intelligent workflow engines.",
    },
    {
      icon: <Network className="text-orange-400" size={18} />,
      title: "Scalable Performance Infrastructure",
      desc: "Building internal, secure frameworks to sustain compounding metric growth.",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden  py-24 px-4 sm:px-6 md:px-16">
      {/* ================= PURE GLOW MESH LAYER ================= */}
      <div className="absolute top-0 left-[-10%] z-0 h-[400px] w-[400px] rounded-full bg-orange-600/[0.08] blur-[150px]" />
      <div className="absolute bottom-0 right-[-10%] z-0 h-[400px] w-[400px] rounded-full bg-orange-600/[0.08] blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 gap-16 lg:grid-cols-[0.9fr_1.1fr] items-center">
        {/* ================= LEFT SIDE: PREMIUM IMMERSIVE MEDIA FRAME ================= */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group w-full max-w-xl mx-auto lg:mx-0"
        >
          {/* Back Glowing Shadow Ring */}
          <div className="absolute -inset-2 rounded-[32px] bg-gradient-to-tr from-orange-500/10 to-transparent opacity-60 blur-2xl transition-all duration-500 group-hover:opacity-80" />

          {/* Bezel Frame */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-2 shadow-[0_24px_60px_rgba(0,0,0,0.8)]">
            <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]">
              <Image
                src="https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg"
                alt="Founders ROI Co-Working Execution Team"
                fill
                className="rounded-2xl object-cover filter  contrast-[1.1] transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* FLOAT FLOATING EXPERIENCED BADGE CARD */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            className="absolute bottom-6 left-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/60 p-4 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.5)] group/badge"
          >
            {/* The Icon Container with a subtle inner-glow effect */}
            <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover/badge:border-orange-500/50 transition-colors">
              {/* Animated Pulse Ring inside the icon */}
              <div className="absolute inset-0 rounded-xl bg-orange-500/20 animate-pulse opacity-50" />
              <Target className="text-orange-500 relative z-10" size={24} />
            </div>

            <div>
              <p className="text-xl font-black text-white leading-none">100%</p>
              <p className="text-[11px] text-white/50 mt-1 uppercase tracking-widest font-bold">
                Embedded Execution
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE: HIGH-IMPACT BRAND MANIFESTO ================= */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Micro Mini Header Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-md mb-6">
            <span>Our Philosophy</span>
          </div>

          {/* Requested Core Client Heading */}
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.8rem] xl:text-[3.5rem] leading-[1.15] lg:leading-[1.15]">
            Your In-House <br className="hidden sm:inline" />
            Growth Partner, <br />
            <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">
              Not Another Agency.
            </span>
          </h2>

          {/* VALUE DECONSTRUCTION LIST */}
          <div className="mt-10 w-full space-y-4 text-left">
            {values.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 4 }}
                className="group/item flex gap-4 rounded-2xl border border-white/5 bg-white/[0.01] p-4 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03]"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/5 group-hover/item:border-orange-500/30 group-hover/item:bg-orange-500/10 transition-colors duration-300">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white transition-colors duration-300 group-hover/item:text-orange-400">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/50 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CALL TO ACTION HUB ELEMENT */}
          <div className="mt-10 pt-4 border-t border-white/5 w-full flex justify-center lg:justify-center">
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/why-us"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-[0_4px_30px_rgba(249,115,22,0.3)] transition-all duration-300 hover:shadow-[0_8px_36px_rgba(249,115,22,0.5)]"
              >
                <span>Know More</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
