"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Link from "next/link";

// 1. Counter Helper Component
function Counter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  const spring = useSpring(0, { duration: 3, bounce: 0 });
  const display = useTransform(spring, (latest) => 
    `${latest % 1 === 0 ? Math.round(latest) : latest.toFixed(1)}${suffix}`
  );

  useEffect(() => {
    if (isInView) spring.set(numericValue);
  }, [isInView, spring, numericValue]);

  return (
    <div ref={ref} className="text-center group">
      <motion.p className="text-2xl sm:text-4xl font-black text-white mb-2">
        {display}
      </motion.p>
      <p className="text-[10px] text-white/40 uppercase tracking-widest font-semibold group-hover:text-orange-500 transition-colors duration-300">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const words = ["Branding", "Consulting", "Sales Systems", "Tech Infrastructure"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedText === fullWord) {
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
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black py-24 px-6">
      
      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay loop muted playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-60 select-none mix-blend-screen"
          style={{ pointerEvents: "none" }}
        >
          <source src="/bg-vdo/1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black" />
        <div className="absolute top-1/2 right-[-10%] -z-10 h-150 w-150 lg:h-187.5 lg:w-187.5 -translate-y-1/2 rounded-full bg-orange-600/15 blur-[140px]" />
      </div>

      {/* SINGLE COLUMN CONTAINER */}
      <div className="w-full max-w-4xl relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-md mb-8">
            <Sparkles size={12} className="animate-pulse" />
            <span>Growth Engineering • Scale Ecosystem</span>
          </div>

          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-8">
            We Build NxtGen <br />
            <span className="relative inline-block bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent min-h-[1.2em]">
              {displayedText}
              <span className="absolute -right-2 top-[5%] inline-block w-1 h-[85%] bg-orange-500 animate-[pulse_0.8s_infinite]" />
            </span> <br />
            For Modern Brands.
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed mb-12">
            Founders ROI helps businesses dominate through precise marketing, branding, sales systems, automation, creative strategy, business development, and scalable performance infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-20">
            <Link href="/contact" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-[0_4px_30px_rgba(249,115,22,0.3)] transition-all hover:scale-105">
              Build Your Idea <ArrowUpRight size={18} />
            </Link>
            <Link href="/why-us" className="w-full sm:w-auto flex items-center justify-center rounded-full border border-white/10 bg-transparent px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/5">
              Our Strategy
            </Link>
          </div>

          {/* LIVE METRICS */}
          <div className="border-t border-white/10 pt-12 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-3xl">
            <Counter value="8X" label="Revenue Growth" />
            <Counter value="6000%" label="ROAS Delivered" />
            <Counter value="100M" label="Views Generated" />
            <Counter value="3.3 CR" label="Revenue Generated" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}