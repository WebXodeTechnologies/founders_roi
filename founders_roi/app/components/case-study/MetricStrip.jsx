import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function MetricStrip({ metrics }) {
    // Dynamic column span mapping for responsive layouts
    const getGridColumns = (len) => {
        if (len === 4) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-7'; // 4 items + 3 arrows = 7 columns
        if (len === 5) return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-9'; // 5 items + 4 arrows = 9 columns
        return 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-5'; // Default fallback
    };

    return (
        <div className="relative mx-6 md:mx-16 p-px rounded-2xl overflow-hidden group shadow-2xl">
            {/* Animated Spotlight Border Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-orange-500/50 via-amber-500/20 to-orange-500/50 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 blur-[2px]" />

            {/* Inner Dark Card Content */}
            <div className={`relative grid ${getGridColumns(metrics.length)} items-center p-6 sm:p-8 md:px-10 bg-bg-card rounded-2xl text-white gap-6 backdrop-blur-xl border border-border-custom`}>

                {/* Subtle background glow highlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-orange-500/10 blur-3xl pointer-events-none rounded-full" />

                {metrics.map((m, idx) => (
                    <React.Fragment key={idx}>
                        <div className="text-center px-2 relative z-10 space-y-1.5 flex flex-col items-center justify-center">
                            <div className={`font-bold text-2xl sm:text-3xl md:text-4xl tracking-tight transition-transform duration-300 group-hover:scale-105 ${m.isRoas
                                    ? 'text-transparent bg-clip-text bg-linear-to-r from-orange-400 to-amber-400 font-extrabold drop-shadow-[0_0_15px_rgba(249,115,22,0.3)]'
                                    : 'text-white'
                                }`}>
                                {m.num}
                            </div>
                            <div className="text-[10px] sm:text-[11px] tracking-wider text-text-muted uppercase font-mono font-medium text-center">
                                {m.lbl}
                            </div>
                        </div>

                        {idx < metrics.length - 1 && (
                            <div className="hidden lg:flex justify-center text-orange-500/60 relative z-10">
                                <ArrowRight className="w-5 h-5 animate-pulse shrink-0" />
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}