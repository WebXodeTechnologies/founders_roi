"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X, Logs } from "lucide-react";
import Logo from "@/public/logo/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const pathname = usePathname();

  const navItems = [
    { name: "Why Founders ROI", path: "/why-us" },
    { name: "Services", path: "/services" },
    { name: "Process", path: "/process" },
    { name: "Clients", path: "/clients" },
    { name: "Contact", path: "/contact" },
  ];

  // Track window scroll to morph the navbar shape and background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile navigation drawer is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 px-4 lg:px-8 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <nav 
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-6 transition-all duration-300 border backdrop-blur-[12px] ${
            scrolled 
              ? "h-20 max-w-5xl bg-zinc-950/60 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
              : "h-30 bg-zinc-950/30 border-white/5 shadow-none"
          }`}
        >
          <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />
          {/* BRAND LOGO AREA */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image
                src={Logo}
                alt="Founders ROI"
                width={100}
                height={100}
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-widest text-white md:text-base">
                FOUNDERS ROI
              </span>
              <span className="hidden text-[10px] tracking-wider text-zinc-400 lg:block">
                Building Brands Beyond Sales
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV ITEMS (lg screens and above) */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative rounded-full px-4 py-2 text-md font-semibold transition-colors duration-200 ${
                    isActive ? "text-white" : "text-zinc-500 hover:text-white"
                  }`}
                >
                  {hoveredIndex === index && (
                    <motion.span
                      layoutId="navHoverBg"
                      className="absolute inset-0 z-0 rounded-full bg-white/5"
                      transition={{ type: "spring", stiffness: 350, damping: 27 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden lg:flex">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_24px_rgba(249,115,22,0.5)] active:scale-[0.98]"
            >
              <span>Get Started</span>
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* HAMBURGER TRIGGER (Triggers on md, sm screens automatically) */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle Menu"
          >
            <Logs size={20} />
          </button>
        </nav>
      </header>

      {/* MOBILE & TABLET DRAWER OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[90] bg-black/80 backdrop-blur-lg"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Sliding Content */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-[100] flex flex-col bg-zinc-950 px-6 py-6"
            >
              {/* Top Row */}
              <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <div className="flex items-center gap-3">
                  <div className="relative h-9 w-9">
                    <Image src={Logo} alt="Logo" fill className="object-contain" />
                  </div>
                  <span className="text-base font-bold tracking-wider text-white">
                    FOUNDERS ROI
                  </span>
                </div>

                <button 
                  onClick={() => setIsOpen(false)} 
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Navigation Links inside Drawer */}
              <div className="flex flex-1 flex-col justify-center space-y-4 gap-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block text-3xl font-bold tracking-tight text-zinc-300 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Bottom CTAs */}
              <div className="mt-auto space-y-6 pb-8">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 py-4 font-semibold text-white shadow-[0_4px_24px_rgba(249,115,22,0.3)]"
                >
                  <span>Get Started</span>
                  <ArrowRight size={18} />
                </Link>
                <div className="flex justify-between text-xs text-zinc-500">
                  <span>Marketing • Branding • Tech</span>
                  <span>© 2026</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}