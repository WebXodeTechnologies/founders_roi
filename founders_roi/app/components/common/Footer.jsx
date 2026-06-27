"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const socialIcons = [
    { Icon: FaInstagram, href: "#", label: "Instagram Link" },
    { Icon: FaLinkedin, href: "#", label: "LinkedIn Profile" },
    { Icon: FaTwitter, href: "#", label: "Twitter Feed" }
  ];

  return (
    <footer className="w-full text-white pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none border-t border-neutral-900">

      {/* ================= BACKGROUND GRAPHICS & AMBIENT GLOW ================= */}
      {/* Upward Facing Deep Orange Horizon Light Flare */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-orange-500/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ================= TOP SECTION: CORE BRAND MAP OVERVIEW ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-neutral-900/80">

          {/* COLUMN 1: CORPORATE DECK SYNOPSIS (Weight 5/12 fractions) */}
          <div className="lg:col-span-5 space-y-6">

            {/* ✅ LOGO + PREMIUM TYPOGRAPHY INLINE ROW WRAPPER */}
            <div className="flex items-center gap-4 group/brand">
              <Link href="/" className="flex flex-col items-center justify-center  transition-transform duration-300 hover:scale-[1.01]">

                {/* Fixed Logo Frame Asset Box */}
                <div className="relative w-40 h-40">
                  <Image
                    src="/logo/logo.png"
                    alt="Founders ROI Symbol"
                    width={200}
                    height={200}
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Premium Corporate Brand Identity Text */}
                <span className="text-xl sm:text-2xl lg:text-4xl font-black tracking-tight text-white transition-colors duration-300 ">
                  Founders<span className="bg-linear-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent ml-1" >ROI</span>
                </span>
              </Link>
            </div>

            <p className="text-neutral-400 text-sm font-light leading-relaxed max-w-sm">
              We help brands scale with performance-driven marketing systems,
              premium architecture implementations, and data-backed structural growth mechanics.
            </p>
          </div>

          {/* COLUMN 2: INTERNAL ROUTING GRAPH (Weight 2/12 fractions) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2.5">
              {[
                { name: "Why Founders ROI", path: "/why-us" },
                { name: "Services", path: "/services" },
                { name: "Process", path: "/process" },
                { name: "Clients", path: "/clients" },
                { name: "Case Study", path: "/case-study" },
                { name: "Contact", path: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="inline-flex items-center gap-1 text-sm font-medium text-neutral-400 hover:text-orange-400 transition-colors duration-200 group/link"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="text-neutral-600 opacity-0 -translate-x-1 translate-y-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 group-hover/link:translate-y-0 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICE EXPERTISE DOMAINS (Weight 2/12 fractions) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Services</h3>
            <ul className="space-y-2.5 text-sm font-medium text-neutral-400">
              {["Branding & Identity", "Consulting Systems", "Tech Infrastructure", "Performance Marketing"].map((service) => (
                <li
                  key={service}
                  className="hover:text-orange-400 transition-colors duration-200 cursor-pointer"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: COMMS NODES + INTERACTIVE SOCIAL PANEL (Weight 3/12 fractions) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs text-neutral-500 font-bold uppercase tracking-widest">Get in Touch</h3>
            <div className="space-y-1.5">
              <p className="text-sm font-semibold text-neutral-300 tracking-wide hover:text-orange-400 transition-colors cursor-pointer">
                foundersroi.in@gmail.com
              </p>
              <p className="text-sm font-medium text-neutral-400 tracking-wide">
                +91 87545 82502
              </p>
            </div>

            {/* HIGH-END CAPSULE SOCIAL ARRAY MAP */}
            <div className="flex gap-2.5 pt-2">
              {socialIcons.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 bg-neutral-950/80 border border-neutral-900 rounded-xl text-neutral-400 hover:text-black hover:bg-linear-to-r hover:from-orange-400 hover:to-amber-500 hover:border-transparent transition-all duration-300 shadow-lg cursor-pointer"
                >
                  <social.Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR: SKEUOMORPHIC BRAND ATTRIBUTION ================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-8 text-neutral-500 text-xs font-medium">

          <div>
            © 2026 Founders ROI. All rights reserved.
          </div>

          {/* CO-BRANDED CREDIT FOOTNOTE FOOTER ATTACHMENT */}
          <div className="flex items-center gap-1.5 text-neutral-400">
            <span>Developed with</span>
            <motion.span
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="text-red-500 text-sm inline-block"
            >
              ❤️
            </motion.span>
            <a
              href="https://www.webxode.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white bg-neutral-900/80 border border-neutral-800 rounded-md px-2 py-1 hover:border-orange-500/40 hover:text-orange-400 transition-all duration-300 tracking-wide"
            >
              Webxode Technologies
            </a>
            <span className="text-neutral-600 font-light mx-0.5">|</span>
            <span className="text-neutral-500 text-[11px]">Powered by Founder&apos;s ROI</span>
          </div>
        </div>
      </div>
    </footer>
  );
}