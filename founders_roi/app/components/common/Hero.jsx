"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ButtonCTA from "../ui/ButtonCTA";

// 1. Sleek Minimalist Counter Component
function Counter({ value, label, align = "center" }) {
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

  const displayValue = count % 1 === 0 ? Math.round(count) : count.toFixed(1);

  const alignmentClasses = {
    left: "text-left items-start",
    right: "text-right items-end",
    center: "text-center items-center",
  }[align];

  return (
    <div
      ref={ref}
      onMouseEnter={startAnimation}
      className={`group relative flex flex-col justify-center ${alignmentClasses} cursor-pointer p-4 transition-all duration-300 hover:scale-105`}
    >
      <p className="text-3xl sm:text-4xl lg:text-5xl font-black bg-linear-to-r from-white via-white to-neutral-400 bg-clip-text text-transparent tracking-tight group-hover:from-orange-400 group-hover:to-amber-500 transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.05)] group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.15)]">
        {displayValue}
        {suffix}
      </p>
      <p className="text-[9px] sm:text-[10px] text-white/40 uppercase tracking-[0.2em] font-bold group-hover:text-white/80 transition-colors duration-300 mt-1">
        {label}
      </p>
    </div>
  );
}

export default function Hero() {
  // Typing dynamic word setup
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

  // Parallax mouse position state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / 35;
      const y = (e.clientY - window.innerHeight / 2) / 35;
      setMousePos({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-cycling pill carousel data
  const pillMessages = useMemo(
    () => [
      "One stop All business development solutions",
      "Partnering with Google & Meta for maximum performance scaling.",
      "Engineered for 10x ROAS with zero budget wastage.",
      "Proprietary AI attribution modeling for clear ROI tracking.",
    ],
    [],
  );
  const [activePillIndex, setActivePillIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillIndex((prev) => (prev + 1) % pillMessages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [pillMessages]);

  // Fluctuating server ping telemetry
  const [pingVal, setPingVal] = useState(14);
  useEffect(() => {
    const interval = setInterval(() => {
      setPingVal((prev) => {
        const change = Math.floor(Math.random() * 5) - 2; // -2 to +2
        const next = prev + change;
        return Math.max(10, Math.min(25, next));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
          <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="/bg-vdo/pexels-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black" />

        {/* PARALLAX CENTER GLOW SPHERE */}
        <div
          style={{
            transform: `translate3d(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px, 0)`,
            transition: "transform 0.2s ease-out",
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-orange-600/10 blur-[100px] sm:blur-[150px] pointer-events-none -z-10"
        />
      </div>

      {/* OVERLAPPING CONSOLE CIRCLES WITH PARALLAX */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden lg:block overflow-hidden">
        {/* Outer concentric circles (slower parallax movement) */}
        <div
          style={{
            transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.4}px, 0)`,
            transition: "transform 0.2s ease-out",
          }}
          className="absolute inset-0"
        >
          {/* Left Outer Circle */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[-10%] xl:left-[-5%] w-[650px] h-[650px] rounded-full border border-white/5 shadow-[inset_0_0_40px_rgba(255,255,255,0.01)]" />
          {/* Right Outer Circle */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[-10%] xl:right-[-5%] w-[650px] h-[650px] rounded-full border border-white/5 shadow-[inset_0_0_40px_rgba(255,255,255,0.01)]" />
        </div>

        {/* Inner concentric circles (faster parallax movement) */}
        <div
          style={{
            transform: `translate3d(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px, 0)`,
            transition: "transform 0.2s ease-out",
          }}
          className="absolute inset-0"
        >
          {/* Left Inner Circle */}
          <div className="absolute top-1/2 -translate-y-1/2 left-[5%] xl:left-[10%] w-[550px] h-[550px] rounded-full border border-white/5 shadow-[inset_0_0_30px_rgba(255,255,255,0.01)]" />
          {/* Right Inner Circle */}
          <div className="absolute top-1/2 -translate-y-1/2 right-[5%] xl:right-[10%] w-[550px] h-[550px] rounded-full border border-white/5 shadow-[inset_0_0_30px_rgba(255,255,255,0.01)]" />

          {/* Center Glow Outline Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-orange-500/10 bg-radial-to-b from-orange-500/5 to-transparent shadow-[0_0_60px_rgba(249,115,22,0.02),inset_0_0_50px_rgba(249,115,22,0.02)] backdrop-blur-[1px]" />
        </div>
      </div>

      {/* MASTER CONTAINER */}
      <div className="w-full max-w-7xl relative z-10 flex flex-col gap-12 sm:gap-16 lg:gap-20">

        {/* UPPER GRID CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[55vh] lg:min-h-[60vh]">

          {/* LEFT METRICS COLUMN (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex flex-col gap-8 col-span-3 items-end pr-8 xl:pr-16 relative"
          >
            <Counter value="8X" label="Revenue Growth" align="right" />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="w-px h-16 bg-linear-to-b from-transparent via-white/10 to-transparent origin-center my-2"
            />
            <Counter value="6000%" label="ROAS Delivered" align="right" />

            {/* Left Console Navigation Cue */}
            <div className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-black/40 text-white/20 hover:text-white/60 hover:border-white/20 transition-all duration-300 cursor-pointer select-none">
              <span className="text-xs">←</span>
            </div>
          </motion.div>

          {/* CENTER TEXT ZONE */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center col-span-12 lg:col-span-6 px-4"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/60 px-4 py-1.5 text-[10px] sm:text-[11px] font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-md mb-6 shadow-inner">
              <Sparkles size={12} className="text-orange-400 shrink-0 animate-pulse" />
              <span>Growth Engineering • Scale Ecosystem</span>
            </div>

            {/* Heading */}
            <h1 className="text-[34px] font-black tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] mb-6">
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
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
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

          {/* RIGHT METRICS COLUMN (Desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="hidden lg:flex flex-col gap-8 col-span-3 items-start pl-8 xl:pl-16 relative"
          >
            <Counter value="125+" label="Campaigns Scaled" align="left" />
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: "easeInOut" }}
              className="w-px h-16 bg-linear-to-b from-transparent via-white/10 to-transparent origin-center my-2"
            />
            <Counter value="3.3 CR" label="Revenue Generated" align="left" />

            {/* Right Console Navigation Cue */}
            <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/5 flex items-center justify-center bg-black/40 text-white/20 hover:text-white/60 hover:border-white/20 transition-all duration-300 cursor-pointer select-none">
              <span className="text-xs">→</span>
            </div>
          </motion.div>

        </div>

        {/* MOBILE & TABLET METRICS ROW (Hidden on Desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="lg:hidden w-full border-t border-white/5 pt-6"
        >
          <div className="grid grid-cols-2 gap-4 sm:gap-6 w-full">
            <Counter value="8X" label="Revenue Growth" align="center" />
            <Counter value="6000%" label="ROAS Delivered" align="center" />
            <Counter value="125+" label="Campaigns Scaled" align="center" />
            <Counter value="3.3 CR" label="Revenue Generated" align="center" />
          </div>
        </motion.div>

        {/* BOTTOM SECTION: BENTO PILLS ROW */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="w-full flex flex-col md:flex-row items-center justify-center gap-4 border-t border-white/10 pt-8"
        >
          {/* Bento Pill 1: High Contrast Orange Card with Index selectors & Auto-Cycling Text */}
          <div className="group/pill relative flex flex-col sm:flex-row items-center gap-4 bg-linear-to-r from-orange-500 to-amber-500 text-black px-6 py-4 sm:py-3.5 rounded-2xl sm:rounded-full w-full md:w-[480px] min-h-[72px] sm:min-h-[58px] shadow-[0_10px_35px_rgba(249,115,22,0.15)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.25)] transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-1.5 shrink-0">
              {pillMessages.map((_, idx) => (
                <span
                  key={idx}
                  className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all duration-300 ${activePillIndex === idx
                    ? "bg-black text-orange-400 border-black"
                    : "bg-black/5 border-black/10"
                    }`}
                >
                  {idx + 1}
                </span>
              ))}
            </div>

            {/* Smooth text transition container */}
            <div className="flex-1 overflow-hidden min-h-[36px] sm:min-h-[24px] flex items-center text-center sm:text-left">
              <AnimatePresence mode="wait">
                <motion.p
                  key={activePillIndex}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs font-black tracking-tight leading-snug w-full"
                >
                  {pillMessages[activePillIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

            <span className="text-sm font-bold group-hover/pill:translate-x-1 group-hover/pill:-translate-y-1 transition-transform duration-300 shrink-0">↗</span>
          </div>

          {/* Bento Pill 2: Facepile Social Proof Card */}
          <div className="group/facepile relative flex items-center justify-center gap-4 bg-neutral-950/40 backdrop-blur-md border border-white/5 hover:border-white/10 px-6 py-4 sm:py-3.5 rounded-2xl sm:rounded-full w-full md:w-auto min-h-[72px] sm:min-h-[58px] transition-all duration-300 cursor-pointer">
            {/* Facepile avatars */}
            <div className="flex -space-x-2.5 shrink-0">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-neutral-900 bg-neutral-800">
                <Image src="/clientImages/AlienPhotography.png" alt="Client 1" width={24} height={24} className="object-cover h-full w-full" />
              </div>
              <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-neutral-900 bg-neutral-800">
                <Image src="/clientImages/CandierPhotography.png" alt="Client 2" width={24} height={24} className="object-cover h-full w-full" />
              </div>
              <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-neutral-900 bg-neutral-800">
                <Image src="/clientImages/Carnival.png" alt="Client 3" width={24} height={24} className="object-cover h-full w-full" />
              </div>
              <div className="relative w-6 h-6 rounded-full overflow-hidden border-2 border-neutral-900 bg-neutral-800">
                <Image src="/clientImages/EWS.png" alt="Client 4" width={24} height={24} className="object-cover h-full w-full" />
              </div>
            </div>
            <p className="text-[11px] font-bold tracking-wider text-neutral-300 uppercase shrink-0">
              Trusted by 100+ Founders
            </p>
            <span className="text-xs text-neutral-500 group-hover/facepile:text-white transition-colors duration-300 shrink-0">↗</span>
          </div>

          {/* Bento Pill 3: Live Pulse Telemetry */}
          <div className="flex items-center gap-3 bg-neutral-950/40 backdrop-blur-md border border-white/5 px-6 py-4 sm:py-3.5 rounded-2xl sm:rounded-full text-[11px] font-bold tracking-wider text-neutral-400 uppercase w-full md:w-auto min-h-[72px] sm:min-h-[58px] justify-center select-none shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Growth Systems Online • Ping: {pingVal}ms</span>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
