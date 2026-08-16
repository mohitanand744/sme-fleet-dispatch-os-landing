"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FileSpreadsheet,
  MessageSquare,
  DollarSign,
  Truck,
  Layers,
  Radio,
  CreditCard,
  Building2,
  ShieldCheck,
  CheckCircle2,
  Cpu,
} from "lucide-react";

interface IntegrationItem {
  name: string;
  category: string;
  icon: React.ElementType;
  badgeColor: string;
}

const integrations: IntegrationItem[] = [
  { name: "QuickBooks", category: "Accounting", icon: DollarSign, badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  { name: "DAT One Load Board", category: "Freight Matching", icon: Layers, badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { name: "Telegram Bot", category: "Driver Dispatch", icon: MessageSquare, badgeColor: "bg-sky-500/20 text-sky-300 border-sky-500/30" },
  { name: "Motive (KeepTruckin)", category: "ELD & Telematics", icon: Radio, badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30" },
  { name: "Truckstop.com", category: "Load Board", icon: Truck, badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30" },
  { name: "Samsara", category: "Fleet Telematics", icon: Cpu, badgeColor: "bg-purple-500/20 text-purple-300 border-purple-500/30" },
  { name: "Apex Factoring", category: "Same-Day Capital", icon: CreditCard, badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30" },
  { name: "TriumphPay", category: "Carrier Payments", icon: ShieldCheck, badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30" },
  { name: "WEX Fleet Cards", category: "Fuel & Expenses", icon: CreditCard, badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30" },
  { name: "CH Robinson Navisphere", category: "Broker Portal", icon: Building2, badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30" },
];

export function IntegrationMarquee() {
  // Duplicate for seamless infinite loop
  const marqueeList = [...integrations, ...integrations, ...integrations];

  return (
    <section className="py-10 bg-[#0A0F1E] border-y border-white/10 relative overflow-hidden">
      {/* Subtle edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-r from-[#0A0F1E] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 bg-gradient-to-l from-[#0A0F1E] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">
          Ecosystem Compatibility
        </h3>
        <p className="text-2xl sm:text-3xl font-extrabold text-white">
          Syncs with the tools you already use.
        </p>
      </div>

      {/* Infinite Horizontal Marquee Track */}
      <div className="flex overflow-hidden select-none py-3">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 35,
          }}
          className="flex items-center gap-4 sm:gap-6 shrink-0"
        >
          {marqueeList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-3.5 px-5 py-3 rounded-full bg-[#131D33]/90 border border-white/10 shadow-lg hover:border-blue-400/40 hover:bg-[#182440] transition-colors shrink-0 group cursor-default"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center border ${item.badgeColor}`}
                >
                  <IconComponent className="w-4 h-4 transition-transform group-hover:scale-110" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white tracking-wide">
                    {item.name}
                  </div>
                  <div className="text-[10px] text-slate-400 font-medium">
                    {item.category}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
