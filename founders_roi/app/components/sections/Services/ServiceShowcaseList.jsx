"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart3, ChevronRight, Megaphone, TrendingUp, Palette, Code, Briefcase } from "lucide-react";

const comprehensiveServices = [
  {
    id: "marketing",
    icon: Megaphone,
    title: "Performance Marketing",
    subtitle: "Intent-driven conversion pipelines tracking underlying unit economics.",
    desc: "We skip vanity impressions. Your acquisition funnel is engineered around quantitative performance metrics across Meta, Google, and programmatics to pull high-value enterprise accounts.",
    deliverables: ["Meta Ad Architecture", "Google Search Optimization", "Retargeting Matrices"],
    resultMetric: "4.2x Average ROAS",
    imgSrc: "/clientImages/aliens.png" // Swap to your showcase preview renders safely
  },
  {
    id: "sales",
    icon: TrendingUp,
    title: "High-Ticket Sales Systems",
    subtitle: "Automated pipelines designed to remove conversion drag points.",
    desc: "Turn incoming traffic into structured pipeline volume. We design technical funnel handoffs, custom qualification parameters, and CRM tracking loops that optimize calendar bookings.",
    deliverables: ["CRM Routing Architecture", "Lead Qualification Scripts", "Vetted Funnel Playbooks"],
    resultMetric: "+38% Close Velocity",
    imgSrc: "/clientImages/capicture.jpg"
  },
  {
    id: "branding",
    icon: Palette,
    title: "Premium Authority Branding",
    subtitle: "Command luxury pricing by establishing uncontested market trust.",
    desc: "Stop competing down in price wars. We build high-impact brand identities, corporate positions, and design systems that transform your company from a basic alternative into a category choice.",
    deliverables: ["Market Positioning Frameworks", "High-End Corporate Design Rules", "Asset Layout Toolkits"],
    resultMetric: "Premium Price Command",
    imgSrc: "/clientImages/candier.png"
  },
  {
    id: "technology",
    icon: Code,
    title: "Scalable Tech & Infrastructure",
    subtitle: "Clean Next.js architectures and robust database routing.",
    desc: "Automate manual bottlenecks. We prototype and deploy fast frontend user experiences, secure web platforms, and automated webhook connections built to process data reliably at scale.",
    deliverables: ["Next.js Production Setups", "Webhook & API Orchestration", "Predictable Scale Codebase"],
    resultMetric: "99.9% Pipeline Automation",
    imgSrc: "/clientImages/carnival.png"
  }
];

export default function ServiceShowcaseList() {
  return (
    <section className="w-full bg-[#030202] text-white py-24 px-4 sm:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-32">
        
        {comprehensiveServices.map((service, index) => {
          const isEven = index % 2 === 0;

          return (
            <div 
              key={service.id} 
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full"
            >
              {/* IMAGE ELEMENT COLUMN */}
              {/* Utilizes Next.js order modifiers to flip positioning smoothly on alternating rows */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 60, damping: 16 }}
                className={`lg:col-span-6 relative rounded-3xl border border-neutral-900 bg-neutral-950/20 p-4 aspect-[4/3] group overflow-hidden ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
              >
                {/* Visual Glow Spotlight Backing */}
                <div className="absolute inset-0 bg-radial-gradient from-orange-500/[0.04] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Simulated Bento Showcase Shell Container */}
                <div className="relative w-full h-full rounded-2xl bg-[#090909] border border-neutral-900 overflow-hidden flex items-center justify-center p-8">
                  <div className="relative w-36 h-36 opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105">
                    <Image
                      src={encodeURI(service.imgSrc)}
                      alt={`${service.title} verification schematic image`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Absolute Proof Floating Ribbon Metric Badge */}
                  <div className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-xl border border-neutral-800 bg-black px-4 py-2 text-xs font-bold tracking-wide text-orange-400 shadow-xl shadow-black/60">
                    <BarChart3 size={12} />
                    <span>{service.resultMetric}</span>
                  </div>
                </div>
              </motion.div>

              {/* INFORMATION COPY COLUMN */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <div className="flex items-center gap-3 text-orange-400">
                  <div className="p-2.5 rounded-lg bg-orange-500/10 border border-orange-500/20">
                    <service.icon size={18} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">System Segment 0{index + 1}</span>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">{service.title}</h2>
                  <h3 className="text-base font-semibold text-orange-400/90">{service.subtitle}</h3>
                </div>

                <p className="text-neutral-400 font-light text-sm sm:text-base leading-relaxed">
                  {service.desc}
                </p>

                {/* DELIVERABLE MICRO BADGES */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.deliverables.map((pill) => (
                    <span 
                      key={pill} 
                      className="px-3 py-1.5 rounded-lg border border-neutral-900 bg-neutral-950/60 text-xs font-medium text-neutral-400 transition-colors hover:border-neutral-800 hover:text-neutral-200 cursor-default"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          );
        })}

      </div>
    </section>
  );
}