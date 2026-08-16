"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Truck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BottomCTA() {
  return (
    <section className="py-20 md:py-28 bg-[#0E1528] relative overflow-hidden flex justify-center px-4 sm:px-6 lg:px-8">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-blue-500/20 blur-3xl rounded-full pointer-events-none -z-10" />

      {/* Main 85-90% Width Centered Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-6xl rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-[#1E2B4B] via-[#4C5E74]/40 to-[#101930] border border-white/20 p-8 sm:p-12 md:p-16 text-center relative overflow-hidden shadow-2xl shadow-black/90 backdrop-blur-2xl"
      >
        {/* Subtle grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-boxes opacity-25 pointer-events-none" />

        {/* Decorative corner glows */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          {/* Feature Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-blue-200 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span>Launch Your Unified Fleet OS Today</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
            Ready to automate the busywork?
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
            Join the OS that scales with your fleet. Stop wrestling with PDFs, spreadsheets, and driver check-calls today.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="#roles" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-[#0E1528] hover:bg-slate-100 shadow-2xl shadow-white/20 text-base font-bold px-9 py-7 rounded-2xl group flex items-center justify-center gap-2 hover:scale-[1.03] transition-all"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5 text-[#0E1528] transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/login" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/30 hover:border-white text-white bg-white/5 hover:bg-white/10 backdrop-blur-md text-base font-semibold px-8 py-7 rounded-2xl justify-center"
              >
                Sign In to Account
              </Button>
            </Link>
          </div>

          {/* Trust points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>2-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>SOC2 & FMCSA compliant</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
