"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white pt-20 px-6 md:px-16 relative overflow-hidden">
      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 via-transparent to-transparent blur-2xl opacity-40" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12 pb-12 border-b border-white/10 relative z-10">
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            Founders <span className="text-orange-500">ROI</span>
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed">
            We help brands scale with performance-driven marketing systems,
            creative strategies, and data-backed growth.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-orange-500">
                Services
              </Link>
            </li>
            <li>
              <Link href="/process" className="hover:text-orange-500">
                Process
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Meta Ads</li>
            <li className="hover:text-orange-500 cursor-pointer">Google Ads</li>
            <li className="hover:text-orange-500 cursor-pointer">
              Creative Strategy
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              Funnel Optimization
            </li>
          </ul>
        </div>

        {/* CONTACT + SOCIAL */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Get in Touch</h3>

          <p className="text-gray-400 text-sm mb-3">contact@foundersroi.com</p>

          <p className="text-gray-400 text-sm mb-5">+91 98765 43210</p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4">
            {[FaInstagram, FaLinkedin, FaTwitter].map((Icon, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2 }}
                className="p-2 bg-white/5 rounded-full cursor-pointer hover:bg-orange-500 transition"
              >
                <Icon size={16} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="text-center text-gray-500 text-sm py-6 relative z-10">
        © {new Date().getFullYear()} Founders ROI. All rights reserved.
      </div>

      {/* EXTRA GLOW */}
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-orange-500 opacity-20 blur-3xl rounded-full" />
    </footer>
  );
}
