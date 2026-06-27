"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import {
  Camera,
  Compass,
  Coins,
  Cpu,
  ArrowUpRight,
  Sparkles
} from "lucide-react";

// Real-Time Animated Counter Component with safe cleanup
function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Parse initial value synchronously during render to avoid cascading useEffect warnings
  const [displayVal, setDisplayVal] = useState(() => {
    const match = value.match(/^(₹)?([\d,.]+)?(X\s\w+|L\+?|k\+?|%)?(\s\w+)?$/i);
    if (!match || !match[2]) {
      return value;
    }
    return `${match[1] || ""}0${match[3] || ""}${match[4] || ""}`;
  });

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^(₹)?([\d,.]+)?(X\s\w+|L\+?|k\+?|%)?(\s\w+)?$/i);
    if (!match || !match[2]) {
      return;
    }

    const prefix = match[1] || "";
    const rawNumStr = match[2].replace(/,/g, "");
    const isFloat = rawNumStr.includes(".");
    const targetNum = parseFloat(rawNumStr);
    const suffix = (match[3] || "") + (match[4] || "");

    let start = 0;
    const duration = 2000; // 2 seconds animation
    const startTime = performance.now();
    let frameId;

    const update = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      // Ease out quad
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

  return <span ref={ref} className="font-mono">{displayVal || value}</span>;
}

// Client Case-Studies Mapped exactly to Niches specified by the user
const comprehensiveServices = [
  {
    id: "photography",
    icon: Camera,
    niche: "Photography",
    client: "Capicure Studio",
    title: "Performance Marketing & Creative Scale",
    subtitle: "Creative acquisition funnel for studios & high-ticket creators.",
    desc: "Specifically engineered for professional photography operations. We replace erratic, generic campaigns with high-impact funnel flows built around clear portfolios. Targeting parameters route qualified leads automatically while keeping cost-per-lead low.",
    deliverables: ["Meta Creative Scaling", "Studio Funnel Architecture", "High-Fidelity Portfolio Ads"],
    metrics: [
      { value: "4,488%", label: "Average ROAS" },
      { value: "₹43.4L+", label: "Pipeline Revenue" },
      { value: "10k+", label: "Leads Generated" }
    ],
    imgSrc: "/services/capicure.png"
  },
  {
    id: "tourism",
    icon: Compass,
    niche: "Travel & Tourism",
    client: "Twinkle Holidays",
    title: "High-Ticket Destination Funnels",
    subtitle: "Automated booking ecosystems for luxury retreats & travel operators.",
    desc: "A custom lead qualification and conversion matrix designed to attract domestic and international travelers. We bypass bargain-seekers to secure high-ticket seasonal bookings automatically.",
    deliverables: ["Luxury Destination Funnels", "Automatic Lead Filters", "CRM Flow Automation"],
    metrics: [
      { value: "5,067%", label: "Peak Campaign ROAS" },
      { value: "₹43.3L", label: "Closed Revenue" },
      { value: "₹39", label: "Avg Cost / Lead" }
    ],
    imgSrc: "/services/twinkle.png"
  },
  {
    id: "d2c",
    icon: Coins,
    niche: "D2C Brand Growth",
    client: "Hi Proteins",
    title: "Velocity Scale & Hyper-Growth",
    subtitle: "Checkout funnel optimization and repeat purchase engines.",
    desc: "Accelerating scaling speed for direct-to-consumer ecommerce. We rebuild cart mechanics, design high-fidelity landing pages, and optimize purchase funnels to multiply order volume and repeat sales.",
    deliverables: ["Cart Friction Audit", "High-Converting Landers", "Retention Email Flows"],
    metrics: [
      { value: "8X Speed", label: "vs Legacy Growth" },
      { value: "19.6k", label: "Completed Orders" },
      { value: "₹88.2L", label: "Gross Revenue" }
    ],
    imgSrc: "/services/Hi protiens.png"
  },
  {
    id: "infrastructure",
    icon: Cpu,
    niche: "Tech Automation",
    client: "Core Systems",
    title: "Technical Systems & Other Industries",
    subtitle: "High-performance database routing & authority styling.",
    desc: "Establishing foundational infrastructure. We craft high-speed databases, secure API layers, and custom corporate design assets that position your enterprise as the definitive market standard.",
    deliverables: ["Scalable DB Architecture", "Corporate Identity Standard", "API Handoff Triggers"],
    metrics: [
      { value: "Top-Tier", label: "Brand Command" },
      { value: "100%", label: "Market Authority" },
      { value: "Custom", label: "Design Systems" }
    ],
    imgSrc: "/services/webxode.png"
  }
];

export default function ServiceShowcaseList() {
  return (
    <section className="w-full text-white py-32 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-t border-neutral-900/60">

      {/* Background blurs */}
      <div className="absolute top-1/4 left-[-10%] w-[600px] h-[600px] bg-orange-500/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[500px] h-[500px] bg-purple-500/2 blur-[150px] rounded-full pointer-events-none" />

      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-size-[4.5rem_4.5rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-36 relative z-10">

        {/* Module Header */}
        <div className="max-w-3xl mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl mb-2 shadow-inner">
            <Sparkles size={11} className="animate-pulse" />
            <span>Niche Operational Case-Studies</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.15]">
            Niche Solutions & <br />
            <span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Scale Deployments</span>
          </h2>
        </div>

        {/* Custom Flash & Shine Animation Styles */}
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes cameraFlash {
            0% { opacity: 0; }
            15% { opacity: 0.65; }
            100% { opacity: 0; }
          }
          .group:hover .flash-overlay {
            animation: cameraFlash 0.5s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
          }
          @keyframes shineSweep {
            0% { transform: translateX(-150%) skewX(-25deg); }
            100% { transform: translateX(150%) skewX(-25deg); }
          }
          .group:hover .shine-overlay {
            animation: shineSweep 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards;
          }
        `}} />

        {comprehensiveServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={service.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-24 items-center w-full"
            >

              {/* IMAGE / METRIC DISPLAY SIDE */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 60, damping: 18 }}
                className={`lg:col-span-6 flex flex-col gap-4 w-full ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
              >
                {/* Clean Borderless Image Card */}
                <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden group shadow-2xl bg-neutral-950/40 flex items-center justify-center">
                  <div className="relative w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    <Image
                      src={encodeURI(service.imgSrc)}
                      alt={service.title}
                      fill
                      unoptimized
                      className="object-contain object-top rounded-2xl"
                      priority={index === 0}
                    />
                  </div>

                  {/* Sweep shine element */}
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent pointer-events-none z-10 shine-overlay" style={{ transform: 'translateX(-150%) skewX(-25deg)' }} />

                  {/* Camera exposure flash effect */}
                  <div className="absolute inset-0 bg-white opacity-0 pointer-events-none z-20 flash-overlay" />
                </div>

                {/* Real-Time Metrics Widget Panel */}
                <div className="grid grid-cols-3 gap-3">
                  {service.metrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="p-4 rounded-xl bg-neutral-900/15 backdrop-blur-md text-center hover:bg-neutral-900/30 transition-colors duration-300 relative group/metric overflow-hidden"
                    >
                      {/* Active glow backing */}
                      <div className="absolute inset-0 bg-linear-to-b from-orange-500/2 to-transparent opacity-0 group-hover/metric:opacity-100 transition-opacity duration-300 pointer-events-none" />

                      <p className="text-lg sm:text-xl font-black bg-linear-to-r from-white to-neutral-400 bg-clip-text text-transparent tracking-tight">
                        <AnimatedCounter value={metric.value} />
                      </p>
                      <p className="text-[9px] text-neutral-500 font-bold uppercase tracking-widest mt-1">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* COPY CONTENT SIDE */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 60, damping: 16 }}
                className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-900/60 text-orange-500 shadow-inner">
                    <service.icon size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-orange-500/80 block">
                      {service.niche}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-neutral-500 block">
                      {service.client}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-3xl sm:text-4xl font-black tracking-tight text-white leading-[1.15]">
                    {service.title}
                  </h3>
                  <h4 className="text-sm font-semibold text-neutral-400 tracking-wide">
                    {service.subtitle}
                  </h4>
                </div>

                <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2">
                  <span className="text-[9px] font-bold text-neutral-500 tracking-wider uppercase block">Scope Deliverables</span>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((pill) => (
                      <span
                        key={pill}
                        className="px-3 py-1.5 rounded-lg bg-neutral-900/30 text-xs font-semibold text-neutral-400 hover:text-white hover:bg-neutral-900/60 transition-colors duration-300 cursor-default"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Explore CTA */}
                <div className="pt-2">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 text-xs font-bold tracking-wide text-neutral-300 hover:text-white hover:bg-neutral-950 transition-all duration-300 group/btn">
                    Explore Case Study
                    <ArrowUpRight size={13} className="text-neutral-500 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>

            </div>
          );
        })}

      </div>
    </section>
  );
}