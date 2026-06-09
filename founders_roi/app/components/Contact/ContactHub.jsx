"use client";

import React from "react";
import Image from "next/image";
import { Mail, MessageCircle, ExternalLink, Zap, Clock, ArrowUpRight } from "lucide-react";
import GoogleMeetLogo from "@/public/contact/google-meet-logo-png_seeklogo-406884-removebg-preview.png";
import TeamsLogo from "@/public/contact/microsoft-teams-logo-png_seeklogo-370282-removebg-preview.png";

export default function ContactHub() {
  return (
    <section className="w-full py-32 px-6 bg-[#020202] text-white relative overflow-hidden">
      {/* GLOBAL BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/10 blur-[200px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 relative z-10">
        
        {/* LEFT: DOMINANT CHANNEL HUB */}
        <div className="lg:col-span-8 p-[1px] rounded-[32px] bg-gradient-to-br from-neutral-800 via-orange-500/20 to-transparent">
          <div className="h-full p-16 rounded-[31px] bg-[#060606]/90 backdrop-blur-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black tracking-widest uppercase">
                <Zap size={12} fill="currentColor" /> Direct Access
              </div>
              <h2 className="text-7xl font-black tracking-tighter leading-[0.9] text-white">
                Let&apos;s build <br/> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-600">the future.</span>
              </h2>
              <p className="text-neutral-400 text-xl max-w-lg leading-relaxed">
                High-impact solutions. We architect, you scale.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-16">
              <ChannelCard icon={Mail} title="Email Address" value="hello@foundersroi.com" />
              <ChannelCard icon={MessageCircle} title="Telegram" value="@founders_roi" />
            </div>
          </div>
        </div>

        {/* RIGHT: COMPACT ACTION BAR */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-[#060606] p-10   flex flex-col justify-center gap-6">
            <h3 className="font-bold text-xs uppercase tracking-widest text-neutral-500 mb-2">Book Discovery</h3>
            <PlatformButton image={GoogleMeetLogo} name="Google Meet" />
            <PlatformButton image={TeamsLogo} name="Microsoft Teams" />
          </div>
          
          <div className="p-8 rounded-3xl bg-gradient-to-r from-orange-500/10 to-transparent  flex items-center gap-4">
             <div className="p-3 bg-orange-500/10 rounded-full"><Clock size={18} className="text-orange-500"/></div>
             <div>
               <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest">Operational Status</p>
               <p className="text-white text-sm font-bold">Online & Responding <span className="text-neutral-500 font-normal ml-1">within 24h</span></p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChannelCard({ icon: Icon, title, value }) {
  return (
    <div className="group p-8 rounded-3xl bg-neutral-900/40 border border-neutral-800 hover:border-orange-500/50 transition-all cursor-pointer backdrop-blur-sm">
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-950 flex items-center justify-center mb-6 border border-neutral-800">
        <Icon size={24} className="text-orange-500" />
      </div>
      <p className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">{title}</p>
      <p className="font-bold text-xl mt-1 text-white">{value}</p>
      <ArrowUpRight size={18} className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity text-orange-500 ml-auto" />
    </div>
  );
}

function PlatformButton({ image, name }) {
  return (
    <button className="w-full p-6 rounded-2xl bg-neutral-950  hover:border-orange-500 hover:bg-neutral-900 transition-all group flex items-center gap-4">
      <div className=" rounded-md  flex items-center justify-center p-2">
         <Image src={image} alt={name} width={100} height={200} className=" object-contain" />
      </div>
      <div className="text-left">
        <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest group-hover:text-neutral-400">Book via</p>
        <p className="font-bold text-sm text-white">{name}</p>
      </div>
    </button>
  );
}