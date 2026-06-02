"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, User } from "lucide-react";
import { Megaphone, Palette, Cpu } from "lucide-react";

export default function About() {
  return (
    <section className="w-full bg-black text-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-orange-500 opacity-10 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500 opacity-10 blur-[140px] rounded-full" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* ================= LEFT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border border-zinc-800">
            <Image
              src="https://i.pinimg.com/736x/35/47/48/354748471cbad482eccf036d1db1a86c.jpg"
              alt="team working"
              width={600}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>

          {/* EXPERIENCE BADGE */}
          <div className="absolute bottom-6 left-6 bg-black/80 backdrop-blur-lg px-6 py-4 rounded-xl border border-zinc-700">
            <p className="text-orange-500 text-3xl font-bold">10+</p>
            <p className="text-sm text-gray-400">Years of experience</p>
          </div>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-orange-500 uppercase tracking-widest text-sm mb-4">
            About Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            Transforming brands with{" "}
            <span className="text-orange-500">digital growth</span>
          </h2>

          {/* GLASS CARD */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-6 rounded-2xl mb-6">
            <p className="text-gray-300 leading-relaxed">
              We help businesses grow through data-driven marketing, scalable
              systems, and digital transformation strategies. Our approach
              focuses on building sustainable revenue engines instead of
              short-term wins.
            </p>
          </div>

          {/* CTA + PROFILE */}
          <div className="flex items-center gap-6 flex-wrap">
            <button className="flex items-center gap-3 bg-zinc-800 hover:bg-zinc-700 px-6 py-3 rounded-full transition">
              More About
              <span className="bg-orange-500 text-black p-2 rounded-full">
                <ArrowUpRight size={16} />
              </span>
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center">
                <User size={18} />
              </div>
              <div>
                <p className="font-semibold">Sarah Grace</p>
                <p className="text-sm text-gray-400">Marketing Director</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
