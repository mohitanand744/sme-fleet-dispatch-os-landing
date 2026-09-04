"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  MousePointerClick,
  MessageSquare,
  Receipt,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  UploadCloud,
  Cpu,
  Send,
  DollarSign,
  Clock,
  ShieldCheck,
  Check,
  Zap,
  TrendingUp,
  FileCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface StepItem {
  id: number;
  stepNum: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  icon: React.ElementType;
  mockup: {
    type: "ocr" | "dispatch" | "telegram" | "accounting";
    badgeText: string;
    title: string;
    metrics: { label: string; val: string; sub?: string }[];
    details: string[];
  };
}

const stepsData: StepItem[] = [
  {
    id: 1,
    stepNum: "01",
    badge: "Document Ingestion",
    title: "AI Data Entry",
    subtitle: "Upload PDF Rate Cons in seconds",
    description:
      "Drop any broker rate confirmation (PDF, scan, or email). Our logistics OCR engine instantly extracts pickup, delivery, weight, commodity, and agreed rates with 99.8% accuracy.",
    highlights: [
      "Auto-extracts 25+ fields from unstructured broker PDFs",
      "Real-time validation against broker MC numbers & credit scores",
      "Eliminates 15+ minutes of manual retyping on every single load",
    ],
    icon: FileText,
    mockup: {
      type: "ocr",
      badgeText: "AI Parser v2.4 • 99.8% Confidence",
      title: "Rate_Confirmation_CH_Robinson_#88419.pdf",
      metrics: [
        { label: "Gross Rate", val: "$4,250.00", sub: "Extracted in 1.2s" },
        { label: "Route Distance", val: "740 Miles", sub: "$5.74 / mi" },
        { label: "Verification", val: "A+ Verified", sub: "FMCSA Active" },
      ],
      details: [
        "Origin: Chicago, IL (08/18 08:00 CST)",
        "Destination: Atlanta, GA (08/19 14:00 EST)",
        "Weight: 42,500 lbs • Reefer (34°F continuous)",
        "Broker: C.H. Robinson • Credit Score: 98 (Tier 1)",
      ],
    },
  },
  {
    id: 2,
    stepNum: "02",
    badge: "Smart Allocation",
    title: "One-Click Dispatch",
    subtitle: "Human approval with intelligent truck matching",
    description:
      "Review the parsed load summary and match it to your best available truck and driver with a single tap. The system prevents deadhead miles and logs Hours of Service (HOS) constraints.",
    highlights: [
      "Automated route & deadhead calculation per truck",
      "Live Hours of Service (HOS) & driver compatibility checking",
      "Generates digital dispatch orders with one tap",
    ],
    icon: MousePointerClick,
    mockup: {
      type: "dispatch",
      badgeText: "Optimizer • 14 mi Deadhead",
      title: "Active Dispatch Order #DSP-4092",
      metrics: [
        { label: "Assigned Truck", val: "Truck #104", sub: "Volvo VNL 860" },
        { label: "Driver Assigned", val: "Marcus Vance", sub: "9.5 hrs HOS remaining" },
        { label: "Net Margin", val: "$1,420.00", sub: "33.4% Profit" },
      ],
      details: [
        "Status: Ready for Driver Telegram Dispatch",
        "Estimated Fuel Burn: $780.00 (I-65 South Route)",
        "Driver Hours of Service: 9.5 Drive Hours Left",
        "Target Delivery Window: On-Time Guaranteed",
      ],
    },
  },
  {
    id: 3,
    stepNum: "03",
    badge: "Telegram Bot Sync",
    title: "Telegram Driver Updates",
    subtitle: "Real-time dispatch directly through Telegram",
    description:
      "Drivers receive complete load packets, tap 'Loaded / Arrived' buttons, and submit signed photo PODs directly through Telegram chats.",
    highlights: [
      "Instant Telegram bot assignment & one-tap load acceptance",
      "One-tap location check-ins & timestamped GPS logging",
      "Instant camera scanning for BOL & Proof of Delivery (POD)",
    ],
    icon: MessageSquare,
    mockup: {
      type: "telegram",
      badgeText: "Telegram Bot • Live Session",
      title: "Chat: @Antcolos_Dispatch_Bot • Driver #104",
      metrics: [
        { label: "Driver Status", val: "At Receiver", sub: "Atlanta Facility" },
        { label: "BOL Upload", val: "Stamped & Synced", sub: "100% Legible" },
        { label: "Check-Calls", val: "Automated", sub: "Zero Phone Calls" },
      ],
      details: [
        "🤖 Bot: New Load Assigned: Chicago -> Atlanta ($4,250)",
        "👤 Driver: [Tapped: ACCEPTED DISPATCH]",
        "👤 Driver: [Sent Photo: Signed_BOL_Stamp.jpg]",
        "🤖 Bot: POD Verified! Receiver departure logged at 14:15 EST.",
      ],
    },
  },
  {
    id: 4,
    stepNum: "04",
    badge: "Instant Liquidity",
    title: "Automated Accounting",
    subtitle: "Instant 'Invoice Ready' status upon delivery",
    description:
      "The exact second the driver uploads the stamped POD, the OS bundles the Rate Con, BOL, and lumper receipts into a compliant invoice packet ready for your factoring company or QuickBooks.",
    highlights: [
      "Auto-generates PDF invoice with attached POD & Rate Con",
      "Direct API sync to Factoring Companies & QuickBooks",
      "Reduces Days Sales Outstanding (DSO) by 65%",
    ],
    icon: Receipt,
    mockup: {
      type: "accounting",
      badgeText: "Factoring Ready • Same-Day ACH",
      title: "Invoice #INV-2026-8819 • CH Robinson",
      metrics: [
        { label: "Invoice Amount", val: "$4,250.00", sub: "Load #88419" },
        { label: "Net Factoring", val: "$4,122.50", sub: "Same-Day Deposit" },
        { label: "Packet Status", val: "Verified Clean", sub: "All Docs Attached" },
      ],
      details: [
        "✔ Rate Confirmation Verified ($4,250.00)",
        "✔ Clean Delivery Stamp (BOL) Attached",
        "✔ Broker E-Billing Packet Sent Automatically",
        "✔ Synced to QuickBooks & Carrier Ledger",
      ],
    },
  },
];

export function HowItWorksSection() {
  const [activeStepId, setActiveStepId] = useState<number>(1);
  const currentStep = stepsData.find((s) => s.id === activeStepId) || stepsData[0];

  const handleNext = () => {
    setActiveStepId((prev) => (prev < 4 ? prev + 1 : 1));
  };

  const handlePrev = () => {
    setActiveStepId((prev) => (prev > 1 ? prev - 1 : 4));
  };

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0E1528] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-boxes opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>End-to-End Automation Pipeline</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            How It Works in 4 Simple Steps
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            From the minute a load is booked to the second your bank account is credited, every operational bottleneck is automated.
          </p>
        </div>

        {/* 1. Modern Interactive Step Navigator (Horizontal Timeline Bar) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {stepsData.map((step) => {
            const isActive = activeStepId === step.id;
            const IconComp = step.icon;

            return (
              <button
                key={step.id}
                onClick={() => setActiveStepId(step.id)}
                className={`relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl text-left transition-all duration-300 border flex flex-col justify-between overflow-hidden group select-none ${
                  isActive
                    ? "bg-[#162344] border-blue-500/60 shadow-xl shadow-blue-500/15 scale-[1.02]"
                    : "bg-[#131D33]/70 border-white/10 hover:border-white/25 hover:bg-[#131D33]/95"
                }`}
              >
                {/* Active Indicator Top Glow Line */}
                {isActive && (
                  <motion.div
                    layoutId="activeStepLine"
                    className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-500"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}

                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/30"
                        : "bg-[#0E1528] text-slate-400 border border-white/10 group-hover:text-white"
                    }`}
                  >
                    <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span
                    className={`font-mono text-xs sm:text-sm font-extrabold ${
                      isActive ? "text-blue-400" : "text-slate-500"
                    }`}
                  >
                    {step.stepNum}
                  </span>
                </div>

                <div>
                  <div className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 mb-0.5">
                    {step.badge}
                  </div>
                  <div
                    className={`text-sm sm:text-base font-bold transition-colors truncate ${
                      isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {step.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* 2. Interactive Studio Showcase (Two-Column Masterpiece Card) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-3xl sm:rounded-[36px] border border-white/15 bg-gradient-to-b from-[#131E38] via-[#10182E] to-[#0D1426] p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/80 backdrop-blur-2xl relative overflow-hidden"
          >
            {/* Top decorative glow */}
            <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Detailed Step Explanation & Action Controls */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
                    Step {currentStep.stepNum} of 04
                  </span>
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
                    {currentStep.badge}
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                    {currentStep.title}
                  </h3>
                  <p className="text-sm sm:text-base font-medium text-blue-300 mt-1">
                    {currentStep.subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {currentStep.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  {currentStep.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-blue-300" />
                      </div>
                      <span className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action & Step Switch Buttons */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <Link href="/signup">
                    <Button
                      size="default"
                      className="rounded-xl bg-white text-[#0E1528] hover:bg-slate-100 font-bold text-xs sm:text-sm px-6 h-12 shadow-lg gap-2 group"
                    >
                      <span>Get Started with Antcolos</span>
                      <ArrowRight className="w-4 h-4 text-[#0E1528] transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handlePrev}
                      className="rounded-xl border-white/20 text-slate-300 hover:text-white hover:bg-white/10 h-12 w-12"
                      title="Previous Step"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={handleNext}
                      className="rounded-xl border-white/20 text-slate-300 hover:text-white hover:bg-white/10 h-12 w-12"
                      title="Next Step"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Fidelity Interactive Dashboard Preview */}
              <div className="lg:col-span-6">
                <div className="rounded-2xl sm:rounded-3xl border border-white/15 bg-[#090F1E] p-5 sm:p-7 shadow-2xl shadow-black relative overflow-hidden">
                  {/* Mockup OS Header */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <span className="text-[11px] sm:text-xs font-mono text-slate-400 truncate max-w-[180px] sm:max-w-xs">
                        {currentStep.mockup.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-bold text-blue-300 bg-blue-500/20 border border-blue-400/30 px-2.5 py-1 rounded-full uppercase truncate">
                      {currentStep.mockup.badgeText}
                    </span>
                  </div>

                  {/* 3 Metric Summary Cards */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-5">
                    {currentStep.mockup.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        title={`${m.label}: ${m.val} ${m.sub ? `(${m.sub})` : ""}`}
                        className="bg-[#121B30] border border-white/10 rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 text-left min-w-0 cursor-default hover:border-blue-400/40 transition-colors"
                      >
                        <div
                          title={m.label}
                          className="text-[9px] sm:text-[10px] text-slate-400 uppercase font-semibold truncate"
                        >
                          {m.label}
                        </div>
                        <div
                          title={m.val}
                          className="text-xs sm:text-sm md:text-base font-extrabold text-white mt-0.5 truncate tracking-tight"
                        >
                          {m.val}
                        </div>
                        {m.sub && (
                          <div
                            title={m.sub}
                            className="text-[8px] sm:text-[9px] text-emerald-400 font-medium truncate mt-0.5"
                          >
                            {m.sub}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Terminal Execution Logs */}
                  <div className="bg-[#060A14] border border-white/10 rounded-xl sm:rounded-2xl p-3.5 sm:p-5 space-y-2">
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 pb-2 border-b border-white/10">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Live Execution Stream</span>
                      </div>
                      <span className="text-emerald-400 font-mono text-[10px]">
                        ● Status: OK
                      </span>
                    </div>

                    {currentStep.mockup.details.map((detail, dIdx) => (
                      <div
                        key={dIdx}
                        title={detail}
                        className="text-xs font-mono text-slate-300 flex items-start gap-2 bg-white/5 px-3 py-2 rounded-lg cursor-default hover:bg-white/10 transition-colors min-w-0"
                      >
                        <span className="text-blue-400 shrink-0">›</span>
                        <span className="truncate">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
