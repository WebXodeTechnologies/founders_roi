"use client";

import React from "react";
import { ArrowRight, MapPin, Clock, Globe } from "lucide-react";

export default function ContactFooter() {
  return (
    <footer className="w-full py-20 bg-[#020202] border-t border-neutral-900 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
        
        {/* LEFT SIDE: OPERATIONAL HUB */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-3xl font-black text-white mb-4">Founders_ROI</h2>
            <p className="text-neutral-500 max-w-sm">
              Engineering high-growth infrastructure for ventures that scale. 
              Always building, always optimizing.
            </p>
          </div>

          <div className="space-y-4">
            <OperationalItem icon={Globe} label="Operational Base" value="Global / IST" />
            <OperationalItem icon={Clock} label="Response Time" value="Typically < 2 Hours" />
            <OperationalItem icon={MapPin} label="Status" value="Accepting New Projects" />
          </div>
        </div>

        {/* RIGHT SIDE: COMPACT FORM BUILDER */}
        <div className="lg:col-span-7 bg-[#060606] p-8 rounded-3xl border border-neutral-900">
          <h4 className="text-lg font-bold text-white mb-6">Quick Inquiry</h4>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none transition"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none transition"
            />
            <textarea 
              placeholder="Message" 
              className="md:col-span-2 bg-neutral-900 border border-neutral-800 rounded-xl p-3 text-sm focus:border-orange-500 outline-none transition h-24"
            />
            <button className="md:col-span-2 bg-orange-500 text-black font-bold text-sm py-3 rounded-xl hover:bg-white transition flex items-center justify-center gap-2">
              Send Inquiry <ArrowRight size={14} />
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

function OperationalItem({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 text-sm">
      <div className="p-2 bg-neutral-900 rounded-lg text-orange-500">
        <Icon size={16} />
      </div>
      <div>
        <p className="text-[10px] uppercase font-bold text-neutral-600 tracking-widest">{label}</p>
        <p className="text-neutral-300 font-semibold">{value}</p>
      </div>
    </div>
  );
}