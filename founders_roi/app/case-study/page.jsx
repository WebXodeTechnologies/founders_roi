"use client";

import React, { useState } from 'react';
import HeroSection from '../components/case-study/HeroSection';
import MetricStrip from '../components/case-study/MetricStrip';
import CaseContentRow from '../components/case-study/CaseContentRow';
import QuoteBlock from '../components/case-study/QuoteBlock';
import { caseStudiesData, categoriesConfig } from '../data/caseStudiesData';

export default function CaseStudyPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const filteredStudies = selectedCategory === 'all'
        ? caseStudiesData
        : caseStudiesData.filter(study => study.categoryKey === selectedCategory);

    return (
        <main className="min-h-screen bg-bg-primary text-text-main selection:bg-orange-500 selection:text-black max-w-7xl mx-auto px-4 sm:px-6 md:px-12">

            {/* Sticky Category Filter Pill Bar */}
            <div className="sticky top-20 z-50 bg-bg-primary/95 backdrop-blur-xl py-2 my-4 shadow-xl border-y border-border-custom/50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Category Pills Container */}
                    <div className="flex items-center justify-start md:justify-center gap-2.5 overflow-x-auto scrollbar-none w-full py-1 px-1">
                        {categoriesConfig.map((cat) => {
                            const IconComponent = cat.icon;
                            const isSelected = selectedCategory === cat.key;
                            return (
                                <button
                                    key={cat.key}
                                    onClick={() => setSelectedCategory(cat.key)}
                                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-mono uppercase tracking-wider font-medium whitespace-nowrap transition-all duration-300 shadow-sm shrink-0 cursor-pointer ${isSelected
                                        ? 'bg-linear-to-r from-orange-500 to-amber-500 text-black shadow-[0_0_20px_rgba(249,115,22,0.35)] scale-105 font-bold'
                                        : 'bg-bg-card text-text-muted border border-border-custom hover:border-orange-500/40 hover:text-white'
                                        }`}
                                >
                                    {IconComponent && <IconComponent className={`w-3.5 h-3.5 ${isSelected ? 'text-black' : 'text-text-muted'}`} />}
                                    <span>{cat.label}</span>
                                </button>
                            );
                        })}
                    </div>

                </div>
            </div>

            {/* Filtered Case Studies List */}
            {filteredStudies.length === 0 ? (
                <div className="py-40 sm:py-60 text-center font-mono text-2xl sm:text-4xl text-text-muted px-4">
                    No case studies found for this category yet.
                </div>
            ) : (
                filteredStudies.map((study, idx) => {
                    return (
                        <div key={study.id} className="py-12 sm:py-20 border-b border-border-custom last:border-b-0">
                            {idx > 0 && (
                                <div className="flex items-center gap-4 pt-4 max-w-7xl mx-auto mb-6 sm:mb-10">
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

        </main>
    );
}