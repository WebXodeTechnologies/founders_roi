"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { 
  Milestone, 
  FileText, 
  PhoneCall, 
  Compass, 
  Play, 
  Cpu, 
  Megaphone, 
  Activity, 
  TrendingUp, 
  Handshake 
} from "lucide-react";

const corporateMilestones = [
  { 
    step: "01", 
    title: "Corporate Enquiry", 
    context: "Initial verification process where we ingest and secure your baseline brand assets, target parameter documentations, and historical ad spend logs safely.",
    icon: FileText
  },
  { 
    step: "02", 
    title: "Discovery Audit Call", 
    context: "A comprehensive strategy session dedicated completely to reverse-engineering leaking funnels and isolating your exact points of structural operational drag.",
    icon: PhoneCall
  },
  { 
    step: "03", 
    title: "Brand Strategy Architecture", 
    context: "Our senior strategists formulate a premium positioning playbook, optimizing your core unit economics to ensure your brand commands maximum authority.",
    icon: Compass
  },
  { 
    step: "04", 
    title: "Project Ingestion Kickoff", 
    context: "Establish centralized communication channels, introduce your dedicated team, and map out immediate production sprint deliverables.",
    icon: Play
  },
  { 
    step: "05", 
    title: "Infrastructure Deployment", 
    context: "Engineering team constructs high-speed, secure frontend layers, sets up server parameters, and deploys airtight data-tracking webhook nodes.",
    icon: Cpu
  },
  { 
    step: "06", 
    title: "Multi-Platform Execution", 
    context: "We take your campaign funnels live across scalable channels using advanced intent-driven targeting matrices designed to acquire high-value clients.",
    icon: Megaphone
  },
  { 
    step: "07", 
    title: "Funnel Conversion Optimization", 
    context: "Continuous user-behavior recording, heatmap translation, and rigorous algorithmic optimization to drive maximum efficiency from your acquisition capital.",
    icon: Activity
  },
  { 
    step: "08", 
    title: "Velocity Scaling Loop", 
    context: "We aggressively allocate ad budgets into highly profitable, validated vectors to expand your pipeline volume safely without breaking conversion metrics.",
    icon: TrendingUp
  },
  { 
    step: "09", 
    title: "Long-Term Strategic Partnering", 
    context: "Transition into a continuous growth infrastructure alignment. We scale backend capabilities to maintain your market-leader status indefinitely.",
    icon: Handshake
  }
];

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleYSpring = useSpring(scrollYProgress, { stiffness: 160, damping: 26 });

  useEffect(() => {
    if (hoveredIndex !== null) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % corporateMilestones.length);
    }, 4500); 

    return () => clearInterval(interval);
  }, [hoveredIndex]);

  return (
    <section 
      ref={containerRef}
      className="w-full bg-[#030202] text-white py-36 px-4 sm:px-8 lg:px-16 relative overflow-hidden select-none border-t border-neutral-900/60"
    >
      
      {/* ================= 🌟 PREMIUM SAAS RADIAL GLOW MESH LAYER 🌟 ================= */}
      {/* Upper Right Warm Brand Flare Orb */}
      <div className="absolute top-[10%] -right-40 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-br from-orange-500/[0.04] to-amber-600/0 blur-[130px] pointer-events-none z-0" />
      
      {/* Deep Center Concentrated Spotlight Flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#f97316]/[0.015] blur-[160px] pointer-events-none z-0" />
      
      {/* Lower Left Deep Structural Soft Accent Orb */}
      <div className="absolute bottom-[10%] -left-40 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] rounded-full bg-gradient-to-tr from-purple-500/[0.015] via-orange-500/[0.01] to-transparent blur-[140px] pointer-events-none z-0" />
      
      {/* Fine Geometric Grid Matrix Overlay to create high-tech depth over the gradients */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#141414_1px,transparent_1px),linear-gradient(to_bottom,#141414_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] opacity-35 pointer-events-none z-0" />

      {/* ================= HEADER ================= */}
      <div className="max-w-4xl mx-auto text-center mb-40 flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold tracking-wider text-orange-400 uppercase backdrop-blur-xl mb-4 shadow-inner">
          <Milestone size={11} />
          <span>Execution Roadmap</span>
        </div>
        <h2 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.15]">
          From <span className="bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent">Enquiry to Enterprise Scale</span>
        </h2>
      </div>

      {/* TIMELINE CONTAINER MATRIX */}
      <div className="relative max-w-6xl mx-auto w-full z-10">
        
        {/* PROGRESS RAIL */}
        <div className="absolute left-6 sm:left-1/2 top-6 bottom-6 w-[2px] -translate-x-1/2 z-0 hidden sm:block">
          <div className="absolute inset-0 bg-neutral-900 rounded-full" />
          <motion.div 
            style={{ scaleY: scaleYSpring }}
            className="absolute inset-0 bg-gradient-to-b from-orange-500 via-amber-500 to-orange-600 rounded-full origin-top shadow-[0_0_20px_rgba(249,115,22,0.6)]"
          />
        </div>

        <div className="absolute left-6 top-6 bottom-6 w-[1px] bg-neutral-900 -translate-x-1/2 z-0 sm:hidden">
          <motion.div 
            style={{ scaleY: scaleYSpring }}
            className="absolute inset-0 bg-orange-500 rounded-full origin-top"
          />
        </div>

        <div className="space-y-20 relative z-10 w-full">
          {corporateMilestones.map((node, idx) => {
            const isEven = idx % 2 === 0;
            const isCurrentlyHovered = hoveredIndex === idx;
            const isAutoActive = activeStep === idx && hoveredIndex === null;
            const isLive = isCurrentlyHovered || isAutoActive;

            const IconComponent = node.icon;

            return (
              <div 
                key={idx} 
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`flex flex-col sm:flex-row items-start sm:items-center w-full relative group/row ${
                  isEven ? "sm:flex-row-reverse" : ""
                }`}
              >
                
                {/* CARD MODULE WRAPPER */}
                <div className="w-full sm:w-1/2 pl-16 sm:pl-0 sm:px-10 lg:px-16">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ type: "spring", stiffness: 90, damping: 16 }}
                    animate={{
                      scale: isCurrentlyHovered ? 1.02 : 1,
                      x: isCurrentlyHovered ? (isEven ? -6 : 6) : 0
                    }}
                    className={`relative rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between overflow-hidden backdrop-blur-md transition-all duration-500 cursor-pointer border ${
                      isCurrentlyHovered 
                        ? "border-neutral-700 shadow-black/90 z-20 bg-neutral-900/30" 
                        : isAutoActive 
                        ? "border-neutral-800 bg-neutral-900/10" 
                        : hoveredIndex !== null 
                        ? "border-neutral-950 bg-neutral-950/20 opacity-20 scale-[0.99]" 
                        : "border-neutral-900 bg-[#060606]/30"
                    }`}
                  >
                    {/* CONIC GRADIENT CARD BORDER LIGHT */}
                    <div className="absolute inset-0 p-[1px] rounded-2xl pointer-events-none z-0">
                      <motion.div 
                        animate={isLive ? { rotate: 360 } : { rotate: 0 }}
                        transition={isLive ? { duration: 6, ease: "linear", repeat: Infinity } : { duration: 0 }}
                        style={{ originX: "50%", originY: "50%" }}
                        className={`absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_60%,#f97316_85%,#fb923c_95%,transparent_100%)] transition-opacity duration-500 ${isLive ? 'opacity-100' : 'opacity-0'}`}
                      />
                      <div className="absolute inset-[1px] bg-[#070707]/95 rounded-[15px] z-1" />
                    </div>

                    {/* Content Block */}
                    <div className="space-y-3 lg:space-y-4 relative z-10">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border transition-all duration-500 ${
                          isLive ? "bg-orange-500/10 border-orange-500/20 text-orange-400 scale-105" : "bg-neutral-900 border-neutral-800 text-neutral-500"
                        }`}>
                          <IconComponent size={18} />
                        </div>
                        <span className={`text-[11px] font-bold uppercase tracking-widest transition-colors duration-300 ${isLive ? 'text-orange-400' : 'text-neutral-500'}`}>
                          Phase {node.step}
                        </span>
                      </div>
                      
                      <h3 className={`text-xl lg:text-2xl font-black tracking-tight transition-colors duration-500 ${isLive ? 'text-orange-400' : 'text-white'}`}>
                        {node.title}
                      </h3>
                      
                      <p className={`font-light text-sm lg:text-base leading-relaxed transition-colors duration-500 ${isLive ? 'text-neutral-200' : 'text-neutral-400'}`}>
                        {node.context}
                      </p>
                    </div>

                    {/* Micro-Progress Underline Bar */}
                    <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-neutral-900 overflow-hidden z-10">
                      <div className={`absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 transition-all ease-out ${
                        isAutoActive ? 'w-full duration-[4500ms]' : isCurrentlyHovered ? 'w-full duration-300' : 'w-0 duration-300'
                      }`} />
                    </div>

                  </motion.div>
                </div>

                {/* CENTRAL KNOB */}
                <div className="absolute left-6 sm:left-1/2 top-8 sm:top-auto -translate-x-1/2 z-20">
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center font-mono text-sm font-black shadow-2xl transition-all duration-500 ${
                    isLive 
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 border-transparent text-black scale-110 rotate-[6deg] shadow-[0_0_15px_rgba(249,115,22,0.4)]" 
                      : "bg-[#050505] border-neutral-800 text-neutral-500"
                  }`}>
                    {node.step}
                  </div>
                  
                  {isLive && (
                    <span className="absolute inset-0 rounded-xl border border-orange-500/50 animate-[ping_1.5s_infinite_ease-in-out] pointer-events-none scale-105 z-10" />
                  )}
                </div>
                <div className="w-full sm:w-1/2 hidden sm:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}