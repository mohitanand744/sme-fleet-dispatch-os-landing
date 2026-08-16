"use client";

import React from "react";
import { motion, type Variants } from "framer-motion";
import {
  XCircle,
  CheckCircle2,
  FileSpreadsheet,
  Zap,
  PhoneOff,
  MessageSquare,
  Clock,
  DollarSign,
  AlertTriangle,
  Sparkles,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

export function BentoGridSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-[#0E1528] relative overflow-hidden">
      {/* Background Glows & Grid */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-boxes opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
            <span>Legacy Dispatch vs. SME OS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Stop running your multimillion-dollar fleet on spreadsheets.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Manual data entry, missing paperwork, and late invoices cost the average trucking company $45,000+ each year in operational leaks.
          </p>
        </div>

        {/* 3x2 Asymmetrical Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {/* Card 1: Before (Pain) - Manual Data Entry */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-red-500/25 bg-gradient-to-b from-red-950/20 to-red-950/10 p-7 flex flex-col justify-between backdrop-blur-xl relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-500/15 border border-red-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>The Old Way</span>
                </span>
                <FileSpreadsheet className="w-6 h-6 text-red-400/60" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 line-through decoration-red-400/80 decoration-2">
                Typing 20+ fields manually
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Dispatchers spend 15–20 minutes retyping addresses, rates, and reference numbers from broker PDFs into spreadsheets. One typo leads to misrouted trucks.
              </p>
            </div>

            <div className="pt-4 border-t border-red-500/20 text-xs font-mono text-red-300 flex items-center gap-2">
              <span>✕ 15+ hrs wasted / week</span>
            </div>
          </motion.div>

          {/* Card 2: After (Relief) - Large Span: AI OCR Data Extraction */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="md:col-span-2 rounded-3xl border border-blue-500/40 bg-gradient-to-b from-[#162344] to-[#111A30] p-7 flex flex-col justify-between shadow-xl shadow-blue-500/10 backdrop-blur-xl relative overflow-hidden"
          >
            {/* Top decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-300 bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  <span>SME OS Relief</span>
                </span>
                <Zap className="w-6 h-6 text-blue-400" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
                AI OCR Data Extraction in 1.2 Seconds
              </h3>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 max-w-xl">
                Simply upload any broker Rate Confirmation PDF. Our AI engine extracts stops, weights, commodities, and agreed rates with instant human-in-the-loop review.
              </p>

              {/* Visual mini-indicator */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#0E1528]/90 border border-white/10 rounded-2xl p-3.5">
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase font-medium">Extraction Speed</div>
                  <div className="text-sm font-bold text-emerald-400">1.2 Seconds</div>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase font-medium">Field Accuracy</div>
                  <div className="text-sm font-bold text-white">99.8% Guaranteed</div>
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 uppercase font-medium">Broker Verification</div>
                  <div className="text-sm font-bold text-blue-400">Automated MC Sync</div>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10 text-xs font-semibold text-blue-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>90% reduction in dispatch paperwork time</span>
            </div>
          </motion.div>

          {/* Card 3: After (Relief) - Instant Telegram Updates */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-[#131D33]/90 hover:border-blue-400/40 p-7 flex flex-col justify-between backdrop-blur-xl transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/15 border border-emerald-400/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>SME OS Relief</span>
                </span>
                <MessageSquare className="w-6 h-6 text-emerald-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Instant Telegram POD Uploads
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Drivers snap stamped BOL photos directly inside Telegram. The OS auto-verifies legibility and attaches the document to the load file.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-emerald-300 flex items-center gap-2">
              <span>✔ No driver app downloads required</span>
            </div>
          </motion.div>

          {/* Card 4: Before (Pain) - Driver Phone Tag */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-red-500/25 bg-gradient-to-b from-red-950/20 to-red-950/10 p-7 flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-red-400 bg-red-500/15 border border-red-500/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>The Old Way</span>
                </span>
                <PhoneOff className="w-6 h-6 text-red-400/60" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 line-through decoration-red-400/80 decoration-2">
                Chasing drivers for PODs
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Calling drivers repeatedly on the road, waiting days for blurry photos via SMS, and dealing with lost delivery receipts.
              </p>
            </div>

            <div className="pt-4 border-t border-red-500/20 text-xs font-mono text-red-300 flex items-center gap-2">
              <span>✕ 3–5 days average delay per invoice</span>
            </div>
          </motion.div>

          {/* Card 5: After (Relief) - Real-Time Factoring Automation */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-[#141E38] to-[#10182C] p-7 flex flex-col justify-between backdrop-blur-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-300 bg-indigo-500/20 border border-indigo-400/30 px-2.5 py-1 rounded-full flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-indigo-400" />
                  <span>SME OS Relief</span>
                </span>
                <DollarSign className="w-6 h-6 text-indigo-400" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                Same-Day Factoring Automation
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Instantly generates clean invoice packets and transmits directly to your factoring company or QuickBooks the moment the truck unloads.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 text-xs font-mono text-indigo-300 flex items-center gap-2">
              <span>✔ Same-day cash flow settlements</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
