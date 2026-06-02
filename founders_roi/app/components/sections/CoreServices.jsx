"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  Palette,
  LineChart,
  Cpu,
  Smartphone,
  Globe,
} from "lucide-react";

const services = [
  {
    icon: <Megaphone size={28} />,
    title: "Performance Marketing",
    desc: "Data-driven campaigns that generate leads and revenue growth.",
  },
  {
    icon: <Palette size={28} />,
    title: "Branding & Positioning",
    desc: "Build a strong identity that differentiates your business.",
  },
  {
    icon: <LineChart size={28} />,
    title: "Sales Funnels",
    desc: "High-converting funnels designed to turn visitors into customers.",
  },
  {
    icon: <Cpu size={28} />,
    title: "Automation Systems",
    desc: "Streamline operations with scalable and automated workflows.",
  },
  {
    icon: <Smartphone size={28} />,
    title: "App Development",
    desc: "Modern mobile apps designed for performance and scalability.",
  },
  {
    icon: <Globe size={28} />,
    title: "Web Development",
    desc: "Fast, responsive, and SEO-friendly web applications.",
  },
];

const CoreServices = () => {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-3">
            Core Services
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            What We <span className="text-orange-500">Offer</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            We provide end-to-end solutions combining marketing, branding,
            technology, and automation to help businesses scale faster.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl hover:border-orange-500/40 transition duration-300"
            >
              {/* GLOW EFFECT */}
              <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-10 blur-2xl transition" />

              <div className="relative z-10 flex flex-col gap-4">
                <div className="w-fit p-3 rounded-full bg-orange-500/10 text-orange-500">
                  {service.icon}
                </div>

                <h3 className="text-lg font-semibold">{service.title}</h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
