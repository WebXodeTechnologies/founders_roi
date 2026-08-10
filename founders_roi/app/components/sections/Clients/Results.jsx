"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useTransform, animate, useMotionTemplate } from "framer-motion";

const stats = [
  { value: 8.0, label: "Revenue Growth", suffix: "X", desc: "Sustained quarterly increase" },
  { value: 50, label: "Acquisition Cost", suffix: "%", desc: "Reduction in ad spend" },
  { value: 3.0, label: "Conversion Rate", suffix: "X", desc: "Optimization overhead" },
];

export default function Results() {
  return (
    <section className="w-full bg-bg-primary text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden border-t border-neutral-900/60">

      {/* AMBIENT MESH GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-150 bg-orange-500/4 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
            Engineered for <span className="bg-linear-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">Exponential Scale</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <MetricCard key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricCard({ stat, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    stat.suffix === "%" ? Math.round(latest) : latest.toFixed(1)
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, stat.value, { duration: 2.5, ease: "easeOut" });
      return () => controls.stop();
    }
  }, [isInView, stat.value, count]);

  // Mouse Tracking for Magnetic Effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      className="group relative p-8 rounded-3xl bg-[#060606] border border-neutral-900 overflow-hidden cursor-crosshair"
    >
      {/* DYNAMIC PERIPHERAL GLOW */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(200px circle at ${mouseX}px ${mouseY}px, rgba(249, 115, 22, 0.15), transparent 80%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div className="text-6xl font-black text-white mb-3">
          <motion.span>{rounded}</motion.span>
          <span className="text-orange-500">{stat.suffix}</span>
        </motion.div>

        <h3 className="text-sm font-bold tracking-widest uppercase text-neutral-300 mb-2">
          {stat.label}
        </h3>

        <p className="text-[11px] text-neutral-600 font-medium tracking-wide uppercase leading-relaxed max-w-40">
          {stat.desc}
        </p>
      </div>

      {/* ACTIVE BORDER PULSE */}
      <div className="absolute inset-0 rounded-3xl border border-neutral-800 transition-all duration-500 group-hover:border-orange-500/50" />
    </motion.div>
  );
}