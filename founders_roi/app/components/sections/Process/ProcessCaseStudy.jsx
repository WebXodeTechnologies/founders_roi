"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BarChart3, TrendingUp, Users2, Activity } from "lucide-react";

// Real-Time Animated Counter Component
function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const [displayVal, setDisplayVal] = useState(() => {
    const match = value.match(/^([+-])?([\d,.]+)?(\s?\w+\+?|%)?$/i);
    if (!match || !match[2]) {
      return value;
    }
    return `${match[1] || ""}0${match[3] || ""}`;
  });

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^([+-])?([\d,.]+)?(\s?\w+\+?|%)?$/i);
    if (!match || !match[2]) {
      return;
    }

    const prefix = match[1] || "";
    const rawNumStr = match[2].replace(/,/g, "");
    const isFloat = rawNumStr.includes(".");
    const targetNum = parseFloat(rawNumStr);
    const suffix = match[3] || "";

    let start = 0;
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    let frameId;

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const ease = progress * (2 - progress);
      const current = start + ease * (targetNum - start);

      let formattedNum = "";
      if (isFloat) {
        formattedNum = current.toFixed(1);
      } else {
        formattedNum = Math.floor(current).toLocaleString();
      }

      setDisplayVal(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(update);
      }
    };

    frameId = requestAnimationFrame(update);
    return () => {
      if (frameId) cancelAnimationFrame(frameId);
    };
  }, [value, isInView]);

  return <span ref={ref} style={{ fontFamily: "var(--font-sora)" }} className="tabular-nums">{displayVal || value}</span>;
}

const metrics = [
  { icon: TrendingUp, title: "Revenue Growth Volume", value: "+428%", label: "Validated Annual Lift" },
  { icon: Activity, title: "Conversion Ratio Lift", value: "+333%", label: "Funnel Pipeline Delta" },
  { icon: Users2, title: "New Audience Expansion", value: "25M+", label: "Verified Gross Impressions" }
];

export default function ProcessCaseStudy() {
  return (
    <section className="w-full bg-bg-primary text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-t border-neutral-900/60">
      <div className="absolute bottom-0 right-1/4 w-[700px] h-[400px] bg-purple-50/2 blur-[150px] pointer-events-none rounded-full" />

      {/* Inject Conic Border Rotation Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes borderRotate {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
        .animate-border-rotate {
          animation: borderRotate 4s linear infinite;
        }
      `}} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">

        {/* LEFT COLUMN */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl shadow-inner">
            <BarChart3 size={11} />
            <span>Proof of Execution</span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.12]">
            Engineering Scalable <br />
            <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Growth Systems</span>
          </h2>

          <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed max-w-md">
            We transform disjointed, underperforming marketing channels into a single high-performance revenue engine combining empirical unit data with precise platform infrastructure targeting.
          </p>
        </div>

        {/* RIGHT COLUMN: PREMIUM METRIC BADGE GRID */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch w-full">
          {metrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 100, damping: 16, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative rounded-2xl bg-neutral-950/20 p-6 flex flex-col justify-between backdrop-blur-md shadow-2xl transition-all duration-500 overflow-hidden group border border-neutral-900/60 hover:border-transparent"
            >

              {/* Rotating border animation container */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none z-0">
                <div className="absolute top-1/2 left-1/2 w-[280%] aspect-square -translate-x-1/2 -translate-y-1/2 bg-[conic-gradient(from_0deg,transparent_60%,#f97316_85%,#fb923c_95%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0 animate-border-rotate" />
                <div className="absolute inset-px bg-neutral-950 rounded-[15px] z-1" />
              </div>

              {/* Ambient backlight glow on hover */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10" />

              {/* Card content container above rotating background layers */}
              <div className="relative z-10 space-y-4">
                <div className="p-2.5 rounded-lg bg-neutral-900/50 border border-neutral-800 text-neutral-400 w-fit transition-colors group-hover:text-orange-400">
                  <item.icon size={16} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider">{item.title}</h3>
                  <p className="text-[10px] text-neutral-600 font-medium font-mono mt-0.5">{item.label}</p>
                </div>
              </div>

              <div className="relative z-10 text-4xl sm:text-5xl font-black tracking-tight bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent mt-8 group-hover:scale-[1.02] transition-transform duration-300 origin-left">
                <AnimatedCounter value={item.value} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}