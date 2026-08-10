import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Target, UserCheck } from 'lucide-react';

export default function CaseContentRow({ clientName, clientDesc, problemTitle, problemDesc, solutionTitle, pillars, conclusion }) {
    return (
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 space-y-12">

            {/* Client Row */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 pt-10 border-t border-border-custom items-start"
            >
                <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-orange-500 uppercase pt-1">
                    <UserCheck className="w-4 h-4 text-orange-500" />
                    <span>Client Profile</span>
                </div>
                <div className="p-6 rounded-2xl bg-bg-card border border-border-custom shadow-lg hover:border-orange-500/30 transition-colors">
                    <h3 className="font-bold text-xl text-white mb-2.5 tracking-tight">{clientName}</h3>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed">{clientDesc}</p>
                </div>
            </motion.div>

            {/* Problem Row */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 pt-10 border-t border-border-custom items-start"
            >
                <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-amber-500 uppercase pt-1">
                    <Target className="w-4 h-4 text-amber-500" />
                    <span>The Challenge</span>
                </div>
                <div className="p-6 rounded-2xl bg-bg-card border border-border-custom shadow-lg hover:border-amber-500/30 transition-colors">
                    <h3 className="font-bold text-xl text-white mb-2.5 tracking-tight">{problemTitle}</h3>
                    <p className="text-sm md:text-base text-text-muted leading-relaxed">{problemDesc}</p>
                </div>
            </motion.div>

            {/* Solution Row */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8 pt-10 border-t border-border-custom items-start"
            >
                <div className="flex items-center gap-2 font-mono text-xs tracking-wider text-orange-400 uppercase pt-1">
                    <Layers className="w-4 h-4 text-orange-400" />
                    <span>Strategic Execution</span>
                </div>
                <div className="space-y-6">
                    <h3 className="font-bold text-2xl text-white tracking-tight">{solutionTitle}</h3>

                    <div className="grid gap-4">
                        {pillars.map((p, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -15 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: idx * 0.08 }}
                                className="flex gap-4 items-start p-4 rounded-xl bg-bg-card border border-border-custom hover:border-orange-500/40 transition-all group"
                            >
                                <span className="font-mono text-xs font-bold text-black bg-linear-to-r from-orange-500 to-amber-500 px-2.5 py-1 rounded-md shrink-0 shadow-sm mt-0.5">
                                    {p.n}
                                </span>
                                <div className="text-sm md:text-base text-text-muted leading-relaxed">
                                    <strong className="text-white font-semibold group-hover:text-orange-400 transition-colors">{p.title}</strong>
                                    {p.description ? <span className="text-text-muted"> — {p.description}</span> : ''}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {conclusion && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="p-5 rounded-xl bg-linear-to-r from-orange-500/10 via-amber-500/5 to-transparent border-l-2 border-orange-500 mt-6"
                        >
                            <p className="text-sm md:text-base text-white font-medium leading-relaxed">{conclusion}</p>
                        </motion.div>
                    )}
                </div>
            </motion.div>

        </div>
    );
}