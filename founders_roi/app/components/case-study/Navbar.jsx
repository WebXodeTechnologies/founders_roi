'use client'
import React from 'react';
import Link from 'next/link';

export default function Navbar({ activeCategory = 'all', onSelectCategory }) {
    const categories = [
        { id: 'all', label: 'All Results' },
        { id: 'wedding', label: 'Wedding & Events' },
        { id: 'd2c', label: 'D2C Brands' },
        { id: 'travel', label: 'Travel & Tourism' },
    ];

    return (
        <header className="sticky top-20 z-50">
            {/* Top Brand Bar */}
            <div className="flex items-center justify-between px-6 md:px-16 py-4">
                <Link href="/" className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D1C]"></span>
                    <span className="font-bold text-base tracking-tight text-[#141311]">FOUNDERS ROI</span>
                </Link>
                <Link
                    href="/clients"
                    className="text-xs font-mono text-[#514D45] hover:text-[#141311] transition-colors"
                >
                    ← Back to Clients
                </Link>
            </div>

            {/* Filter Pills Bar */}
            <div className="px-6 md:px-16 py-3 border-t border-[#E2DDD3]/60 flex items-center gap-2 overflow-x-auto scrollbar-none">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8A8578] mr-2 shrink-0">
                    Filter:
                </span>
                {categories.map((cat) => {
                    const isActive = activeCategory === cat.id;
                    return (
                        <button
                            key={cat.id}
                            onClick={() => onSelectCategory && onSelectCategory(cat.id)}
                            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase font-medium whitespace-nowrap transition-all ${isActive
                                ? 'bg-[#141311] text-[#FBF9F6] shadow-sm'
                                : 'bg-[#E2DDD3]/40 text-[#514D45] hover:bg-[#E2DDD3]'
                                }`}
                        >
                            {cat.label}
                        </button>
                    );
                })}
            </div>
        </header>
    );
}