"use client";

import React, { useState } from 'react';
import HeroSection from '../components/case-study/HeroSection';
import MetricStrip from '../components/case-study/MetricStrip';
import CaseContentRow from '../components/case-study/CaseContentRow';
import QuoteBlock from '../components/case-study/QuoteBlock';
import { caseStudiesData } from '../data/caseStudiesData';
import { Camera, CalendarDays, ShoppingBag, Plane, Building2, GraduationCap, LayoutGrid } from 'lucide-react';

const categoriesConfig = [
    { key: 'all', label: 'All Results', icon: LayoutGrid },
    { key: 'wedding', label: 'Wedding & Photography', icon: Camera },
    { key: 'events', label: 'Event Management', icon: CalendarDays },
    { key: 'd2c', label: 'D2C Consumer Brands', icon: ShoppingBag },
    { key: 'travel', label: 'Travel & Holidays', icon: Plane },
    { key: 'hospitality', label: 'Hospitality & Resorts', icon: Building2 },
    { key: 'education', label: 'Education', icon: GraduationCap },
];

export default function CaseStudyPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredStudies = selectedCategory === 'all'
        ? caseStudiesData
        : caseStudiesData.filter(study => study.categoryKey === selectedCategory);

    return (
        <main className="min-h-screen bg-bg-primary text-text-main selection:bg-orange-500 selection:text-black max-w-7xl mx-auto">



            {/* Sticky Category Filter Pill Bar */}
            <div className="sticky top-35 z-40 bg-bg-primary/90 backdrop-blur-xl border-y border-border-custom py-4 px-6 md:px-16 my-4 shadow-2xl">
                <div className="max-w-7xl mx-auto flex items-center gap-6 overflow-x-auto scrollbar-none pb-4">

                    {/* Label Prefix (Fixed on left, won't scroll away) */}
                    <div className="hidden md:flex items-center gap-2.5 shrink-0 pr-6 border-r border-border-custom">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></span>
                        <span className="text-xs font-mono uppercase tracking-widest text-text-muted font-semibold whitespace-nowrap">
                            Filter By Industry:
                        </span>
                    </div>

                    {/* Category Pills Container (Scrollable X-Axis) */}
                    <div className="flex items-center gap-3 overflow-x-auto scrollbar-none w-full md:w-auto py-1 pr-4">
                        {categoriesConfig.map((cat) => {
                            const IconComponent = cat.icon;
                            const isSelected = selectedCategory === cat.key;
                            return (
                                <button
                                    key={cat.key}
                                    onClick={() => setSelectedCategory(cat.key)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 shadow-sm shrink-0 ${isSelected
                                        ? 'bg-linear-to-r from-orange-500 to-amber-500 text-black shadow-[0_0_20px_rgba(249,115,22,0.35)] scale-105 font-bold'
                                        : 'bg-bg-card text-text-muted border border-border-custom hover:border-orange-500/40 hover:text-white'
                                        }`}
                                >
                                    <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-text-muted'}`} />
                                    <span>{cat.label}</span>
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Filtered Case Studies List */}
            {filteredStudies.length === 0 ? (
                <div className="py-24 text-center font-mono text-sm text-text-muted">
                    No case studies found for this category yet.
                </div>
            ) : (
                filteredStudies.map((study, idx) => {
                    return (
                        <div key={study.id} className="py-20 border-b border-border-custom last:border-b-0">
                            {idx > 0 && (
                                <div className="flex items-center gap-4 px-6 md:px-16 pt-8 max-w-7xl mx-auto mb-10">
                                    <div className="h-px bg-border-custom flex-1"></div>
                                    <span className="font-mono text-xs tracking-wider text-text-muted uppercase whitespace-nowrap">
                                        Case Study {study.id}
                                    </span>
                                </div>
                            )}

                            <HeroSection
                                kicker={`Client Result — ${study.industry}`}
                                headline={study.headline}
                                accent={study.accentText}
                                sub={study.subheadline}
                                isCompact={idx > 0}
                            />

                            <MetricStrip metrics={study.metrics} />

                            <CaseContentRow
                                clientName={study.clientName}
                                clientDesc={study.clientDescription}
                                problemTitle={study.problemTitle}
                                problemDesc={study.problemDescription}
                                solutionTitle={study.solutionTitle}
                                pillars={study.pillars}
                                conclusion={study.conclusionNote}
                            />

                            <QuoteBlock
                                title={study.takeawayTitle}
                                subtitle={study.takeawaySub}
                            />
                        </div>
                    );
                })
            )}

            {/* Summary Band */}
        </main>
    );
}