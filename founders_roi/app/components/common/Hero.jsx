"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const words = ["Branding", "Consulting", "Sales Systems", "Tech Infrastructure"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // High-performance custom Typewriter layout effect loop
  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];

    // Determine pacing metrics based on current action state
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === fullWord) {
      // Pause at full word visibility state
      timer = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayedText === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? fullWord.substring(0, displayedText.length - 1)
            : fullWord.substring(0, displayedText.length + 1)
        );
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black pt-32 pb-20 md:pt-28 lg:pt-24">

      {/* ================= BACKGROUND VIDEO & THEMATIC GLOWS ================= */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60 select-none mix-blend-screen"
          poster="/video-fallback.jpg"
          style={{ pointerEvents: "none" }}
        >
          <source src="/bg-vdo/1.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black" />
        <div className="absolute inset-0 bg-linear-to-r from-black via-transparent to-black" />

        {/* Orange Backdrop Aura Glow Mapping */}
        <div className="absolute top-1/2 right-[-10%] -z-10 h-150 w-150 lg:h-187.5 lg:w-187.5 -translate-y-1/2 rounded-full bg-orange-600/15 blur-[140px] lg:blur-[180px]" />
      </div>

      {/* ================= ASYMMETRICAL 2-COLUMN GRID ================= */}
      <div className="w-full max-w-7xl px-4 sm:px-4 grid grid-cols-1 gap-4 items-center  lg:grid-cols-2 relative z-10 ">

        {/* LEFT COLUMN: BRAND CONTENT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="z-10 text-center lg:text-left flex flex-col items-center lg:items-start"
        >
          {/* Glass Status Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-md mb-6">
            <Sparkles size={12} className="animate-pulse" />
            <span>Growth Engineering • Scale Ecosystem</span>
          </div>

          {/* New Interactive Typewriter Main Headline */}
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.8rem] xl:text-[4.4rem] leading-[1.15] lg:leading-[1.15] min-h-48 sm:min-h-60 lg:min-h-0">
            We Build NxtGen <br />
            <span className="relative inline-block bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent min-h-[1.2em]">
              {displayedText}
              {/* Blinking Ticker Cursor Segment */}
              <span className="absolute -right-1 top-[5%] inline-block w-0.75 h-[85%] bg-orange-500 animate-[pulse_0.8s_infinite]" />
            </span> <br />
            For Modern Brands.
          </h1>

          {/* Core Copy Target Description */}
          <p className="mt-6 max-w-xl text-sm sm:text-base text-white/60 leading-relaxed">
            Founders ROI helps businesses dominate through precise marketing, branding, sales systems, automation, creative strategy, business development, and scalable performance infrastructure.
          </p>

          {/* Action Callouts */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
            {/* PRIMARY CTA LINK */}
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-7 py-3.5 text-base font-bold text-white shadow-[0_4px_30px_rgba(249,115,22,0.3)] transition-all duration-300 hover:shadow-[0_8px_36px_rgba(249,115,22,0.5)]"
              >
                <span>Build Your Idea</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>

            {/* SECONDARY STRATEGY LINK */}
            <motion.div
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto rounded-full transition-colors duration-300"
            >
              <Link
                href="/why-us"
                className="flex w-full items-center justify-center rounded-full border border-white/10 bg-transparent px-7 py-3.5 text-base font-semibold text-white backdrop-blur-sm"
              >
                Our Strategy
              </Link>
            </motion.div>
          </div>
          {/* Quick Metrics Component Block */}
          <div className="mt-12 border-t border-white/10 pt-8 grid grid-cols-3 gap-4 w-full max-w-md text-left">

            {/* METRIC CARD 1: REVENUE GROWTH */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group/stat relative p-2 rounded-xl transition-all duration-300"
            >
              {/* Underglow on card hover */}
              <div className="absolute inset-0 bg-linear-to-b from-orange-500/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 rounded-xl" />

              <div className="relative z-10">
                <p className="text-xl font-black text-white/80 group-hover/stat:text-white sm:text-2xl md:text-3xl transition-colors duration-300">
                  8X
                </p>
                <p className="text-[10px] text-white/40 group-hover/stat:text-orange-400 mt-1 uppercase tracking-widest font-semibold transition-colors duration-300">
                  Revenue Growth
                </p>
              </div>
            </motion.div>

            {/* METRIC CARD 2: ROAS DELIVERED */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group/stat relative p-2 rounded-xl transition-all duration-300"
            >
              {/* Underglow on card hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 rounded-xl" />

              <div className="relative z-10">
                <p className="text-xl font-black text-white/80 group-hover/stat:text-white sm:text-2xl md:text-3xl transition-colors duration-300">
                  6000%
                </p>
                <p className="text-[10px] text-white/40 group-hover/stat:text-orange-400 mt-1 uppercase tracking-widest font-semibold transition-colors duration-300">
                  ROAS Delivered
                </p>
              </div>
            </motion.div>

            {/* METRIC CARD 3: VIEWS GENERATED */}
            <motion.div
              whileHover={{ y: -4 }}
              className="group/stat relative p-2 rounded-xl transition-all duration-300"
            >
              {/* Underglow on card hover */}
              <div className="absolute inset-0 bg-linear-to-b from-orange-500/5 to-transparent opacity-0 group-hover/stat:opacity-100 transition-opacity duration-300 rounded-xl" />

              <div className="relative z-10">
                <p className="text-xl font-black text-white/80 group-hover/stat:text-white sm:text-2xl md:text-3xl transition-colors duration-300">
                  100M
                </p>
                <p className="text-[10px] text-white/40 group-hover/stat:text-orange-400 mt-1 uppercase tracking-widest font-semibold transition-colors duration-300">
                  Views Generated
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* RIGHT COLUMN: LARGE RESPONSIVE GRAPHIC CANVAS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="relative w-full flex items-center justify-center lg:justify-start group z-10 lg:pl-4"
        >
          <div className="absolute -inset-4 rounded-[40px] bg-linear-to-tr from-orange-500/20 to-amber-500/0 opacity-70 blur-3xl transition-all duration-500 group-hover:opacity-90 group-hover:blur-[45px]" />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-xl lg:max-w-none lg:w-[115%] xl:w-[122%]"
          >
            <div className="relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/15 bg-zinc-950/40 p-2 backdrop-blur-xl shadow-[0_30px_80px_-15px_rgba(0,0,0,0.9)] transition-all duration-500 group-hover:border-orange-500/40">
              <div className="relative w-full h-auto">
                <Image
                  src="/hero/hero.png"
                  alt="Founders ROI Enterprise Business Growth Matrix Dashboard"
                  width={1400}
                  height={1050}
                  priority
                  className="w-full h-full rounded-md object-cover shadow-[0_0_40px_rgba(0,0,0,0.8)]"
                  sizes="(max-w-1024px) 100vw, 60vw"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}