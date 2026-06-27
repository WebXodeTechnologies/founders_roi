"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ButtonCTA = ({
  text = "Know More",
  href = "/why-us",
  showArrow = true,
  className = "",
  showBorder = true,
}) => {
  return (
    <div
      className={
        showBorder
          ? `mt-10 pt-4 border-t border-white/5 w-full flex justify-center ${className}`
          : `w-full flex justify-center ${className}`
      }
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full sm:w-auto"
      >
        <Link
          href={href}
          className="group flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-orange-500 to-amber-500 px-8 py-4 text-base font-bold text-white shadow-[0_4px_30px_rgba(249,115,22,0.3)] transition-all duration-300 hover:shadow-[0_8px_36px_rgba(249,115,22,0.5)]"
        >
          <span>{text}</span>
          {showArrow && (
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          )}
        </Link>
      </motion.div>
    </div>
  );
};

export default ButtonCTA;