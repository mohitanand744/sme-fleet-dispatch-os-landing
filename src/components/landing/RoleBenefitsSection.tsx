"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  Headset,
  User,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  BarChart3,
  MessageSquare,
  FileCheck,
  Navigation,
  ArrowRight,
  Layers,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface RoleTabInfo {
  id: string;
  name: string;
  badge: string;
  icon: React.ElementType;
  title: string;
  description: string;
  bullets: { title: string; desc: string }[];
  ctaLink: string;
  ctaText: string;
  mockup: {
    title: string;
    tag: string;
    stats: { label: string; value: string; change: string }[];
    feedItems: { icon: string; text: string; time: string; status: string }[];
  };
}

const tabsData: RoleTabInfo[] = [
  {
    id: "owners",
    name: "Fleet Owners",
    badge: "Executive Fleet Control",
    icon: Truck,
    title: "Complete operational visibility and protected profit margins.",
    description:
      "Keep full oversight over your truck assets, drivers, and fuel burn without getting bogged down in day-to-day administrative chaos.",
    bullets: [
      {
        title: "Multi-Truck Financial Ledgers",
        desc: "Track gross revenue, driver payouts, fuel expenses, and net profit per truck in real time.",
      },
      {
        title: "Automated Compliance & Driver Invites",
        desc: "Seamlessly onboard new drivers, monitor CDL/medical card expirations, and assign equipment.",
      },
      {
        title: "Factoring & QuickBooks Auto-Sync",
        desc: "Eliminate payment disputes with instant invoice packets sent straight to your factoring company.",
      },
    ],
    ctaLink: "/signup/carrier",
    ctaText: "Register as Fleet Owner",
    mockup: {
      title: "Fleet Master Ledger • Apex Transport LLC",
      tag: "Live Fleet Analytics",
      stats: [
        { label: "Weekly Revenue", value: "$48,920.00", change: "+14.2%" },
        { label: "Active Trucks", value: "12 / 12", change: "100% Utilized" },
        { label: "Average RPM", value: "$2.84 / mi", change: "+$0.22" },
      ],
      feedItems: [
        { icon: "🟢", text: "Truck #102 delivered load #8841. Invoice auto-generated.", time: "4m ago", status: "Invoice Ready" },
        { icon: "🔵", text: "Driver Marcus V. accepted Chicago -> Atlanta dispatch.", time: "18m ago", status: "Assigned" },
        { icon: "🟢", text: "Same-day factoring payout confirmed: $14,200.00", time: "1h ago", status: "Settled" },
      ],
    },
  },
  {
    id: "dispatchers",
    name: "Dispatchers",
    badge: "High-Velocity Workspace",
    icon: Headset,
    title: "Book more loads, reduce phone calls, and dispatch in seconds.",
    description:
      "A purpose-built workspace that handles document parsing, rate confirmation extraction, and driver communications automatically.",
    bullets: [
      {
        title: "Live Truck Availability Board",
        desc: "See truck locations, trailer types, remaining HOS, and empty times on a single dynamic screen.",
      },
      {
        title: "Instant OCR Rate Con Parser",
        desc: "Drop PDF rate confirmations into the system to generate digital dispatches in 1.2 seconds.",
      },
      {
        title: "One-Click Load Assignment",
        desc: "Dispatch drivers through Telegram with full load details and pre-calculated deadhead metrics.",
      },
    ],
    ctaLink: "/signup/dispatcher",
    ctaText: "Join as Dispatcher",
    mockup: {
      title: "Active Dispatch Pipeline • Central Desk",
      tag: "Live Load Dispatcher",
      stats: [
        { label: "Loads Booked Today", value: "18 Loads", change: "+4 vs avg" },
        { label: "Avg Dispatch Time", value: "45 Sec", change: "-85% faster" },
        { label: "Unassigned Trucks", value: "0 Trucks", change: "Zero Idle" },
      ],
      feedItems: [
        { icon: "⚡", text: "C.H. Robinson Rate Con parsed (99.8% confidence).", time: "2m ago", status: "Parsed" },
        { icon: "📍", text: "Truck #105 approaching Receiver (15 miles out).", time: "12m ago", status: "In Transit" },
        { icon: "⚡", text: "Rate negotiation assistant recommended $4,400 target.", time: "25m ago", status: "Negotiated" },
      ],
    },
  },
  {
    id: "drivers",
    name: "Drivers",
    badge: "Frictionless Mobile Flow",
    icon: User,
    title: "Zero app clutter. Get load details and submit PODs via Telegram.",
    description:
      "Never fight with a clunky mobile app again. Manage your entire dispatch lifecycle through simple, quick-tap Telegram messages.",
    bullets: [
      {
        title: "App-Free Dispatch via Telegram",
        desc: "Receive pickup addresses, appointment times, and reference numbers in clean mobile cards.",
      },
      {
        title: "Instant One-Tap Check-Calls",
        desc: "Tap 'Arrived at Shipper' or 'Loaded' to automatically notify dispatchers and brokers.",
      },
      {
        title: "Quick Photo Document Scanner",
        desc: "Snap a photo of the signed BOL to immediately trigger your settlement and payroll.",
      },
    ],
    ctaLink: "/signup/driver",
    ctaText: "Register as Driver",
    mockup: {
      title: "Telegram Bot • @SME_Dispatch_Bot",
      tag: "Driver Direct Chat",
      stats: [
        { label: "Current Trip", value: "840 Miles", change: "On Schedule" },
        { label: "Trip Payout", value: "$1,850.00", change: "Direct Deposit" },
        { label: "POD Verification", value: "Instant", change: "Verified" },
      ],
      feedItems: [
        { icon: "📦", text: "New Load: Chicago, IL -> Atlanta, GA (Pickup 08:00)", time: "Just now", status: "Accepted" },
        { icon: "📸", text: "Photo uploaded: BOL_Signed_Stamp.jpg", time: "10m ago", status: "Approved" },
        { icon: "💵", text: "Settlement calculated: $1,850.00 added to payroll.", time: "12m ago", status: "Logged" },
      ],
    },
  },
];

export function RoleBenefitsSection() {
  const [activeTabId, setActiveTabId] = useState<string>("owners");
  const currentTab = tabsData.find((t) => t.id === activeTabId) || tabsData[0];

  return (
    <section id="benefits" className="py-24 md:py-32 bg-[#0E1528] relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-boxes opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Layers className="w-3.5 h-3.5 text-blue-400" />
            <span>Role-Specific Advantages</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built for every gear in your logistics engine.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Tailored tools designed around the exact pain points of Fleet Owners, Dispatch Agencies, and Commercial Drivers.
          </p>
        </div>

        {/* Responsive Tab Navigation Pill Bar */}
        <div className="flex justify-center mb-10 sm:mb-14 px-2">
          <div className="inline-grid grid-cols-3 sm:flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#131D33]/90 border border-white/10 shadow-2xl backdrop-blur-xl w-full max-w-lg sm:w-auto">
            {tabsData.map((tab) => {
              const isActive = activeTabId === tab.id;
              const IconComp = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={`relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-sm font-bold transition-all duration-300 select-none whitespace-nowrap ${
                    isActive ? "text-[#0E1528]" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeRoleTabPill"
                      className="absolute inset-0 bg-white rounded-full shadow-lg"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2">
                    <IconComp className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                    <span>{tab.name}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Tab Content Area with Smooth Crossfade */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTabId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#131D33]/50 border border-white/10 rounded-3xl p-5 sm:p-8 lg:p-12 shadow-2xl backdrop-blur-2xl"
          >
            {/* Left Column: Benefits Bullet List */}
            <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{currentTab.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {currentTab.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {currentTab.description}
              </p>

              {/* Bullets */}
              <div className="space-y-3.5 sm:space-y-4 pt-4 border-t border-white/10">
                {currentTab.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0 mt-0.5">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-0.5">
                        {bullet.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {bullet.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2 sm:pt-4">
                <Link href={currentTab.ctaLink} className="block sm:inline-block">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-white text-[#0E1528] hover:bg-slate-100 font-bold px-7 py-6 rounded-2xl shadow-xl gap-2 group justify-center"
                  >
                    <span>{currentTab.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column: Responsive Dashboard Mockup Card */}
            <div className="lg:col-span-6 w-full">
              <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-gradient-to-b from-[#172547] to-[#0E172D] p-4 sm:p-7 shadow-2xl shadow-black/80 relative overflow-hidden backdrop-blur-2xl">
                {/* Header bar - Responsive wrapping */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-xs sm:text-sm font-bold text-white truncate">
                        {currentTab.mockup.title}
                      </h4>
                      <span className="text-[10px] text-slate-400 font-mono block truncate">
                        Real-time Data Stream
                      </span>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-400/30 px-2.5 py-1 rounded-full uppercase self-start sm:self-auto shrink-0">
                    {currentTab.mockup.tag}
                  </span>
                </div>

                {/* Key Stats Grid - Sizing & Padding Optimized for Mobile */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                  {currentTab.mockup.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      title={`${stat.label}: ${stat.value} (${stat.change})`}
                      className="bg-[#0E1528]/90 border border-white/10 rounded-xl sm:rounded-2xl p-2 sm:p-3.5 text-center min-w-0 cursor-default hover:border-blue-400/40 transition-colors"
                    >
                      <div
                        title={stat.label}
                        className="text-[9px] sm:text-[10px] text-slate-400 font-medium truncate"
                      >
                        {stat.label}
                      </div>
                      <div
                        title={stat.value}
                        className="text-[11px] sm:text-sm md:text-base font-extrabold text-white mt-0.5 truncate tracking-tight"
                      >
                        {stat.value}
                      </div>
                      <div
                        title={stat.change}
                        className="text-[8px] sm:text-[9px] text-emerald-400 font-semibold mt-0.5 truncate"
                      >
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Live Activity Feed - Overflow proof */}
                <div className="space-y-2 sm:space-y-2.5 bg-[#0B1222] border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                  <div className="text-[10px] sm:text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1.5">
                    Live Operational Activity
                  </div>

                  {currentTab.mockup.feedItems.map((item, fIdx) => (
                    <div
                      key={fIdx}
                      title={item.text}
                      className="flex items-center justify-between gap-2 text-xs bg-white/5 border border-white/5 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-xl min-w-0 cursor-default hover:bg-white/10 transition-colors"
                    >
                      <div className="flex items-center gap-2 truncate min-w-0">
                        <span className="shrink-0 text-xs">{item.icon}</span>
                        <span className="text-slate-200 truncate text-[11px] sm:text-xs">
                          {item.text}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="text-[9px] sm:text-[10px] text-slate-400 font-mono hidden md:inline">
                          {item.time}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-semibold text-blue-300 bg-blue-500/20 px-1.5 sm:px-2 py-0.5 rounded-md whitespace-nowrap">
                          {item.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
