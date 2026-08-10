import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react'; 

export default function QuoteBlock({ title, subtitle }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.01 }}
            className="relative mx-6 md:mx-16 my-12 p-8 md:p-12 rounded-2xl bg-bg-card shadow-2xl overflow-hidden group cursor-pointer border border-border-custom"
        >
            {/* Sequential Linear Rolling Border Animation Container */}
            <div className="absolute inset-0 rounded-2xl p-[1.5px] pointer-events-none overflow-hidden">
                <div className="absolute -inset-full animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,transparent_270deg,#f97316_315deg,#fbbf24_360deg)] opacity-75 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Inner Background Mask to prevent fill leakage */}
            <div className="absolute inset-px rounded-2xl bg-bg-card z-0" />

            {/* Ambient Glow Effect */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-br from-orange-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none group-hover:from-orange-500/20 transition-all duration-500 z-0" />

            {/* Left Accent Bar */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-orange-500 to-amber-500 shadow-[0_0_15px_rgba(249,115,22,0.5)] animate-pulse z-10" />

            <div className="relative z-10 space-y-4">
                {/* Eyebrow Label with Pulse Dot & Icon */}
                <div className="inline-flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                    </span>
                    <span className="font-mono text-xs tracking-widest text-orange-400 uppercase font-semibold">
                        The Takeaway
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400 ml-1 opacity-75 group-hover:rotate-12 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="font-bold text-2xl md:text-3xl text-white leading-snug max-w-3xl tracking-tight">
                    {title}
                </h3>

                {/* Subtitle */}
                {subtitle && (
                    <p className="text-sm md:text-base text-text-muted font-normal max-w-3xl leading-relaxed">
                        {subtitle}
                    </p>
                )}
            </div>
        </motion.div>
    );
}