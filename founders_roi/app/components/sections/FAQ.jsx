"use client";

import React, { useState, useMemo } from "react";
import {
  ChevronDown,
  HelpCircle,
  Search,
  Sparkles,
  MessageCircle,
} from "lucide-react";

const faqData = [
  {
    question:
      "What makes Founders ROI different from a traditional digital marketing agency?",
    answer:
      "Unlike traditional agencies fixated on clicks and vanity metrics, Founders ROI operates as an embedded growth partner aligning performance marketing, CRO, branding, and custom sales tech with bottom-line revenue. We don't just generate surface traffic; we engineer scalable, automated client acquisition systems built for predictable, compounding business growth.",
  },
  {
    question:
      "Which advertising platforms do you specialize in, and how do you improve ROAS?",
    answer:
      "We manage paid campaigns across Google Ads (Search, Performance Max, YouTube), Meta Ads (Facebook & Instagram), LinkedIn, and quick-commerce channels. By integrating Meta Conversions API (CAPI), server-side tracking, continuous creative testing, and funnel optimization, we eliminate ad waste and maximize Return on Ad Spend (ROAS).",
  },
  {
    question:
      "How do you lower high cost-per-lead (CPL) and fix poor lead quality?",
    answer:
      "We eliminate low-quality inquiries by designing multi-step lead qualification funnels and targeting high-intent buyer profiles rather than broad clicks. Combined with CRM integration and automated WhatsApp, SMS, and email follow-ups, we reduce response times to minutes and convert more inquiries into paying clients.",
  },
  {
    question:
      "Does Founders ROI build websites and mobile applications, or only manage marketing campaigns?",
    answer:
      "Yes, we engineer full-stack digital infrastructure including custom web development, high-converting landing pages, Shopify e-commerce stores, and native mobile apps (iOS & Android). Every build integrates technical SEO, sub-second load speeds, intuitive UI/UX, and conversion optimization to ensure ad traffic seamlessly converts into revenue.",
  },
  {
    question:
      "What is the minimum investment or advertising budget required to work with Founders ROI?",
    answer:
      "Our investment structures are customized around your business stage, acquisition goals, unit economics, and required tech scope rather than rigid packages. We audit metrics like CAC, AOV, and LTV during an initial consultation to outline a sustainable, high-ROI budget tailored to your margins.",
  },
  {
    question:
      "How quickly can we expect measurable results and revenue growth?",
    answer:
      "Paid campaigns on Google and Meta typically generate initial qualified inquiries within 7 to 14 days of launch. However, engineering a predictable, high-ROAS growth engine through creative iteration, landing page testing, and sales pipeline optimization matures over 30 to 90 days.",
  },
  {
    question: "Where is Founders ROI based, and which industries do you serve?",
    answer:
      "We operate dedicated hubs across Chennai, Coimbatore, Salem, and Namakkal, serving brands across Tamil Nadu, pan-India, and global markets. Our proven track record covers D2C & e-commerce, photography studios, healthcare & pharmacy, higher education, travel/hospitality, and B2B tech enterprises.",
  },
  {
    question:
      "How does Founders ROI measure success beyond clicks, impressions, and leads?",
    answer:
      "We evaluate performance through real commercial metrics: Cost per Qualified Lead (CPQL), Customer Acquisition Cost (CAC), pipeline velocity, customer lifetime value (LTV), and net attributed revenue. By bridging ad data with CRM and sales outcomes, we provide complete visibility into bottom-line profitability and true marketing ROI.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter FAQ items dynamically based on search input
  const filteredFaq = useMemo(() => {
    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [searchQuery]);

  return (
    <section className="relative bg-black text-white py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-neutral-900">
      {/* Luxurious ambient gold lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-125 bg-linear-to-r from-amber-600/10 via-amber-400/5 to-amber-700/10 blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-12 left-10 w-87.5 h-87.5 bg-amber-500/5 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle geometric dot grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] bg-size-[24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-linear-to-r from-amber-500/10 via-amber-400/15 to-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-6 shadow-[0_0_25px_rgba(245,158,11,0.15)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            Expert Insights & Clarifications
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-200 via-amber-400 to-amber-600">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed mb-10">
            Everything you need to know about our revenue-first architecture,
            performance marketing models, and tech integration.
          </p>

          {/* Interactive Live Search Bar */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-neutral-400">
              <Search className="w-4 h-4 text-amber-500/70" />
            </div>
            <input
              type="text"
              placeholder="Search questions (e.g. ROAS, CPL, budgets, timeline)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20 transition-all shadow-inner backdrop-blur-md"
            />
          </div>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {filteredFaq.length === 0 ? (
            <div className="text-center py-16 bg-neutral-900/40 rounded-2xl border border-neutral-800">
              <HelpCircle className="w-10 h-10 text-amber-500/40 mx-auto mb-3" />
              <p className="text-gray-400 text-base">
                No matching questions found for &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 text-xs font-semibold text-amber-400 underline hover:text-amber-300 cursor-pointer"
              >
                Clear search
              </button>
            </div>
          ) : (
            filteredFaq.map((item) => {
              // Find original index for numbering badge
              const originalIndex = faqData.findIndex(
                (q) => q.question === item.question,
              );
              const isOpen = openIndex === originalIndex;

              return (
                <div
                  key={originalIndex}
                  className={`group transition-all duration-300 rounded-2xl border backdrop-blur-xl overflow-hidden ${
                    isOpen
                      ? "bg-linear-to-b from-neutral-900/95 to-[#0e0e0e] border-amber-500/40 shadow-[0_8px_40px_rgba(245,158,11,0.08)]"
                      : "bg-[#0c0c0c]/80 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/60"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(originalIndex)}
                    className="w-full flex items-center justify-between p-6 sm:p-7 text-left focus:outline-none cursor-pointer"
                  >
                    <div className="flex items-start sm:items-center gap-4 pr-4">
                      <span
                        className={`font-mono text-xs sm:text-sm px-2.5 py-1 rounded-lg transition-colors ${
                          isOpen
                            ? "bg-amber-500 text-black font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                            : "bg-neutral-900 text-neutral-400 border border-neutral-800 group-hover:border-neutral-700 group-hover:text-amber-400"
                        }`}
                      >
                        0{originalIndex + 1}
                      </span>
                      <span
                        className={`text-base sm:text-lg font-medium transition-colors duration-200 ${
                          isOpen
                            ? "text-amber-200"
                            : "text-white group-hover:text-amber-100"
                        }`}
                      >
                        {item.question}
                      </span>
                    </div>

                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 shrink-0 ${
                        isOpen
                          ? "bg-amber-500 text-black rotate-180 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                          : "bg-neutral-900 text-neutral-400 border border-neutral-800 group-hover:border-neutral-700 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  <div
                    className={`transition-all duration-300 ease-in-out grid ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 pb-7 px-6 sm:px-7"
                        : "grid-rows-[0fr] opacity-0 px-6 sm:px-7"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed border-t border-neutral-800/80 pt-5 font-normal">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Premium Bottom Help Card */}
        <div className="mt-16 relative p-8 sm:p-10 rounded-3xl bg-linear-to-r from-neutral-900/80 via-neutral-900/50 to-neutral-950 border border-amber-500/20 backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
          {/* Ambient light inside banner */}
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-amber-500/10 blur-[80px] pointer-events-none" />

          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 shadow-lg">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                Have a custom question about your growth metrics?
              </h4>
              <p className="text-sm text-gray-400">
                Speak directly with our senior growth architects for a
                customized breakdown.
              </p>
            </div>
          </div>

          <a
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 rounded-xl font-bold text-black bg-linear-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 transition-all duration-300 shadow-[0_4px_25px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.5)] cursor-pointer text-sm tracking-wide uppercase shrink-0"
          >
            Book Strategy Call
          </a>
        </div>
      </div>
    </section>
  );
}
