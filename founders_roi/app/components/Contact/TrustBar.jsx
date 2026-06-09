"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MetaLogo from "@/public/trustbar/logo-1.c3b48e6489b932597212.webp";
import GoogleAdsLogo from "@/public/trustbar/google-ads-logo-png_seeklogo-492830-removebg-preview.png";
import ShopifyLogo from "@/public/trustbar/logo-3.1d2bd6bd998f738a6ad7.webp";
import NextJsLogo from "@/public/trustbar/next-js-logo-png_seeklogo-321806__1_-removebg-preview.png"; 

export default function TrustBar() {
  const trustItems = [
    { name: "Meta Certified", image: MetaLogo },
    { name: "Google Ads Expert", image: GoogleAdsLogo },
    { name: "Shopify Partner", image: ShopifyLogo },
    { name: "Next.js", image: NextJsLogo },
  ];

  return (
    <section className="w-full py-20 bg-zinc-300 max-w-7xl mx-auto">
      <div className="max-w-7xl mx-auto px-6">
        
        <p className="text-center text-xl font-black uppercase tracking-[0.3em] text-black mb-16">
          Authorized Technical Proficiency
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-5 gap-y-10 lg:gap-x-14">
          {trustItems.map((item, i) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group flex flex-col items-center gap-6"
            >
              {/* Image Container: Consistent sizing for professional look */}
              <div className="relative w-60 h-60 flex items-center justify-center opacity-100  transition-all duration-500 ">
                <Image 
                  src={item.image} 
                  alt={item.name} 
                  fill 
                  className="object-contain" 
                />
              </div>
              <span className="text-[15px] font-semibold text-neutral-700 uppercase tracking-widest group-hover:text-orange-500 transition-colors duration-500">
                {item.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}