"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Logs } from "lucide-react";
import Logo from "@/public/logo/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Why ROI", path: "/why-us" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-center px-4 py-4 lg:px-6 lg:py-6">
      <nav className="w-full max-w-7xl flex items-center justify-between bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(255,255,255,0.05)] rounded-2xl px-4 lg:px-6 h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-20 h-20  overflow-hidden rounded-xl">
            <Image src={Logo} alt="Logo" fill className="object-cover" />
          </div>
          <div className="flex flex-col text-white">
            <span className="text-lg lg:text-xl font-bold tracking-wider">
              FOUNDERS ROI
            </span>
            <span className="hidden lg:block text-xs font-semibold text-indigo-200/70">
              Building Brands beyond Sales
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="px-3 py-2 rounded-lg text-sm lg:text-base font-medium text-white/80 hover:text-white hover:bg-white/10 transition-all"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-all"
          >
            Get Started
            <ArrowRight
              size={14}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Logs size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full mt-2 w-full max-w-7xl border border-white/10 bg-black/80 backdrop-blur-xl rounded-2xl p-4 flex flex-col gap-2 md:hidden"
          >
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium p-4 text-white hover:bg-white/10 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
