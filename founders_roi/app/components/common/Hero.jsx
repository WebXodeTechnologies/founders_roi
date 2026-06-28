"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import heroimg from "@/public/hero/ref1.png";
import Image from "next/image";
import ButtonCTA from "../ui/ButtonCTA";

// 1. Counter Helper Component
function Counter({ value, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);
  const animationRef = useRef(null);

  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
  const suffix = value.replace(/[0-9.]/g, "");

  const startAnimation = useCallback(() => {
    if (animationRef.current) {
      window.cancelAnimationFrame(animationRef.current);
    }

    let startTimestamp = null;
    const duration = 2000; // Animation duration in milliseconds

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Easing function: easeOutQuad
      const easeProgress = progress * (2 - progress);
      setCount(easeProgress * numericValue);

      if (progress < 1) {
        animationRef.current = window.requestAnimationFrame(step);
      } else {
        setCount(numericValue);
      }
    };

    animationRef.current = window.requestAnimationFrame(step);
  }, [numericValue]);

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isInView, startAnimation]);

  // Format decimal values dynamically
  const displayValue = count % 1 === 0 ? Math.round(count) : count.toFixed(1);

  return (
    <div
      ref={ref}
      onMouseEnter={startAnimation}
      className="group relative flex flex-col justify-center items-center p-3 sm:p-5 lg:p-6 rounded-2xl text-center shadow-xl overflow-hidden cursor-pointer"
    >
      {/* 🌟 LIVE ANIMATED BORDER TRACKS 🌟 */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden">
        {/* Background Rotating Conic Light */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            duration: 6,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ originX: "50%", originY: "50%" }}
          className="absolute inset-[-200%] bg-[conic-gradient(from_0deg,transparent_75%,#f97316_88%,#fb923c_98%,transparent_100%)] opacity-30 group-hover:opacity-100 transition-opacity duration-500"
        />
        {/* Solid Content Mask overlaying the light - strictly exposing the 1px border track */}
        <div className="absolute inset-px bg-bg-card group-hover:bg-[#121212] transition-colors duration-300 rounded-[15px]" />
      </div>

      <p className="relative z-10 text-xl sm:text-3xl lg:text-4xl font-black bg-linear-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent mb-1.5 tracking-tight group-hover:from-orange-400 group-hover:to-amber-500 transition-all duration-300">
        {displayValue}{suffix}
      </p>
      <p className="relative z-10 text-[8px] sm:text-[10px] text-white/40 uppercase tracking-[0.15em] font-bold group-hover:text-white/70 transition-colors duration-300">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  const words = useMemo(
    () => [
      "Branding",
      "Consulting",
      "Sales Systems",
      "Marketing",
      "Website Development",
      "Tech Infrastructure",
    ],
    [],
  );
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    if (!isDeleting && displayedText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === "") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? fullWord.substring(0, displayedText.length - 1)
            : fullWord.substring(0, displayedText.length + 1),
        );
      }, typingSpeed);
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words]);

  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden pt-25 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20 px-4 sm:px-6 lg:px-8">
      {/* BLINKING CURSOR STYLE */}
      <style jsx global>{`
        @keyframes blink {
          50% {
            opacity: 0;
          }
        }
        .typing-cursor {
          animation: blink 0.8s step-end infinite;
        }
      `}</style>

      {/* BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-50 select-none mix-blend-screen"
        >
          <source src="/bg-vdo/1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black" />
        <div className="absolute top-1/3 lg:top-1/2 right-1/2 lg:right-[-10%] -z-10 h-[280px] w-[280px] sm:h-[500px] sm:w-[500px] lg:h-[750px] lg:w-[750px] -translate-y-1/2 translate-x-1/2 lg:translate-x-0 rounded-full bg-orange-600/10 blur-[70px] sm:blur-[120px]" />
      </div>

      {/* MASTER CONTAINER */}
      <div className="w-full max-w-7xl relative z-10 flex flex-col gap-12 sm:gap-16 lg:gap-20">
        {/* UPPER CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* LEFT COLUMN: TEXT CONTEXT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:col-span-7"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-md mb-4 shadow-inner">
              <Sparkles size={12} className="text-orange-400 shrink-0" />
              <span>Growth Engineering • Scale Ecosystem</span>
            </div>

            {/* Heading */}
            <h1 className="text-[32px] font-black tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.15] sm:leading-[1.1] mb-5">
              We Build NxtGen <br />
              <span className="relative inline-block bg-linear-to-r from-orange-400 via-amber-500 to-orange-500 bg-clip-text text-transparent min-h-[1.2em] pb-1">
                {displayedText}
                <span className="absolute -right-1.5 top-[10%] inline-block w-[3px] h-[80%] bg-orange-500 typing-cursor" />
              </span>{" "}
              <br />
              For Modern Brands.
            </h1>

            {/* Description */}
            <p className="max-w-xl text-sm sm:text-base text-neutral-400 leading-relaxed mb-8 px-1 sm:px-0">
              Founders ROI helps businesses dominate through precise marketing,
              branding, sales systems, automation, creative strategy, business
              development, and scalable performance infrastructure.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto">
              <ButtonCTA
                href="/contact"
                text="Build Your Idea"
                showArrow={true}
                showBorder={false}
                className="mt-0 pt-0 w-full sm:w-auto!"
              />
              <Link
                href="/why-us"
                className="w-full sm:w-auto flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-sm sm:text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/10 active:scale-95"
              >
                Our Strategy
              </Link>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: HERO IMAGE REF PANEL */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="relative w-full h-[280px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden border border-white/5 bg-neutral-950/20 backdrop-blur-sm shadow-[0_20px_50px_rgba(0,0,0,0.6)] group lg:col-span-5"
          >
            <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black/40 z-10" />
            <Image
              src={heroimg}
              alt="Founders ROI Infrastructure Reference"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 500px"
              priority
              className="object-contain p-2 sm:p-4 drop-shadow-[0_10px_30px_rgba(249,115,22,0.12)] transition-transform duration-700 group-hover:scale-[1.015]"
            />
          </motion.div>
        </div>

        {/* BOTTOM SECTION: METRICS BENTO GRID */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full border-t border-white/10 pt-4 sm:pt-5"
        >
          {/* Changed grid-cols-1 to grid-cols-2 on small mobile devices so it stays structured beautifully */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 w-full">
            <Counter value="8X" label="Revenue Growth" />
            <Counter value="6000%" label="ROAS Delivered" />
            <Counter value="125+" label="Campaigns Scaled" />
            <Counter value="3.3 CR" label="Revenue Generated" />
          </div>
        </motion.div>
      </div >
    </section >
  );
}
