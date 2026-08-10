import React from 'react';

export default function HeroSection({ kicker, headline, accent, sub, isCompact = false }) {
    return (
        <section className={`px-6 md:px-16 max-w-7xl mx-auto ${isCompact ? 'py-8' : 'pt-16 pb-12'}`}>
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-mono font-semibold tracking-widest uppercase mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                <span>{kicker}</span>
            </div>

            {/* Headline with Orange/Amber Accent Gradient */}
            <h1 className={`font-bold tracking-tight text-white leading-[1.08] ${isCompact ? 'text-[clamp(28px,3.4vw,40px)]' : 'text-[clamp(32px,4.2vw,50px)]'}`}>
                {headline}{' '}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-orange-500 to-amber-400 drop-shadow-sm">
                    {accent}
                </span>
            </h1>

            {/* Subtitle description */}
            <p className="mt-5 text-base md:text-lg text-text-muted max-w-3xl leading-relaxed font-normal">
                {sub}
            </p>
        </section>
    );
}