import React from 'react';
import Navbar from '../../components/case-study/Navbar';
import HeroSection from '../../components/case-study/HeroSection';
import MetricStrip from '../../components/case-study/MetricStrip';
import CaseContentRow from '../../components/case-study/CaseContentRow';
import QuoteBlock from '../../components/case-study/QuoteBlock';
import { caseStudiesData } from '../../data/caseStudiesData';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return caseStudiesData.map((study) => ({
        id: study.id,
    }));
}

export default async function SingleCaseStudyPage({ params }) {
    const { id } = await params;
    const study = caseStudiesData.find((s) => s.id === id);

    if (!study) {
        notFound();
    }

    return (
        <main className="min-h-screen  text-[#141311] selection:bg-[#E8536E] selection:text-white pt-4">


            <div className="pb-16 pt-6">
                <HeroSection
                    kicker={`Client Result — ${study.industry}`}
                    headline={study.headline}
                    accent={study.accentText}
                    sub={study.subheadline}
                    isCompact={false}
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
        </main>
    );
}