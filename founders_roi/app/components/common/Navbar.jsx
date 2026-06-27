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
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          scrolled ? "py-2.5" : "py-4"
        } ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <nav 
          className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 sm:px-6 transition-all duration-300 border backdrop-blur-[12px] ${
            scrolled 
              ? "h-14 max-w-5xl bg-zinc-950/80 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)]" 
              : "h-16 bg-zinc-950/40 border-white/5 shadow-none"
          }`}
        >
          <div className="absolute inset-0 rounded-full border border-white/5 pointer-events-none" />
          
          {/* BRAND LOGO AREA */}
          <Link href="/" className="flex items-center gap-2.5 group relative z-10">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={Logo}
                alt="Founders ROI"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-sm sm:text-base font-extrabold tracking-wider text-white leading-none">
                FOUNDERS ROI
              </span>
              <span className="hidden text-[9px] tracking-widest text-zinc-400 lg:block mt-1">
                Building Brands Beyond Sales
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV ITEMS (lg screens and above) */}
          <div className="hidden items-center gap-1.5 lg:flex">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs sm:text-sm font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
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
          <div className="hidden lg:flex relative z-10">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-1.5 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-xs font-bold text-white shadow-[0_4px_16px_rgba(249,115,22,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_6px_20px_rgba(249,115,22,0.4)] active:scale-[0.98]"
            >
              <span>Book A Call</span>
              <ArrowRight
                size={13}
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* HAMBURGER TRIGGER (Triggers on md, sm screens automatically) */}
          <button
            onClick={() => setIsOpen(true)}
            className="relative z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle Menu"
          >
            <Logs size={18} />
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
              <div className="relative z-50 flex items-center justify-between border-b border-white/5 pb-5">
                <div className="flex items-center gap-2.5">
                  <div className="relative h-8 w-8">
                    <Image src={Logo} alt="Logo" fill className="object-contain" />
                  </div>
                  <span className="text-base font-extrabold tracking-wider text-white">
                    FOUNDERS ROI
                  </span>
                </div>

                <button 
                  onClick={() => setIsOpen(false)} 
                  className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white cursor-pointer hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links inside Drawer */}
              <div className="flex flex-1 flex-col justify-center space-y-6 px-4">
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
                      className="block text-2xl font-bold tracking-tight text-zinc-300 transition-colors hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Drawer Bottom CTAs */}
              <div className="mt-auto space-y-6 pb-6 px-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(249,115,22,0.25)]"
                >
                  <span>Book a Call</span>
                  <ArrowRight size={16} />
                </Link>
                <div className="flex justify-between text-[11px] text-zinc-500">
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