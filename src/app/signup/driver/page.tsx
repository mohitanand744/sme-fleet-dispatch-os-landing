"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { User, ArrowLeft, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DriverSignupPage() {
  return (
    <div className="min-h-screen bg-[#0E1528] text-white flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background Logistics Image with Dark Overlays */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      >
        <Image
          src="/hero_section.png"
          alt="Driver Fleet Background"
          fill
          priority
          unoptimized
          className="object-cover object-center select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1528]/90 via-[#0E1528]/80 to-[#0E1528]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-boxes opacity-30" />
      </motion.div>

      {/* Ambient Lighting Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="w-full max-w-lg relative z-10 my-8">
        {/* Prominent Top Center Clickable Logo with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, y: -25, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center mb-7"
        >
          <Link
            href="/"
            className="group flex flex-col items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-3xl p-2 transition-transform"
            title="Antcolos - Home"
          >
            <div className="relative w-44 sm:w-52 h-20 sm:h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
              <Image
                src="/LOGO.png"
                alt="Antcolos"
                width={220}
                height={100}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-blue-300 transition-colors">
              Antcolos
            </span>
          </Link>
        </motion.div>

        {/* Form Container with Scale & Fade-in Mount Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="border border-white/15 shadow-2xl shadow-black/80 rounded-3xl bg-[#131D33]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10"
        >
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 rounded-full">
              Driver Portal
            </span>
          </div>

          <div className="mb-6">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mb-4 shadow-md">
              <User className="w-6 h-6" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Commercial Driver Registration
            </h1>
            <p className="text-slate-300 text-sm mt-1.5 leading-relaxed">
              Accept company invites or register to connect with top-tier carrier fleets and automated dispatch routes.
            </p>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  placeholder="John"
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                  Last Name *
                </label>
                <input
                  type="text"
                  placeholder="Smith"
                  className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="john.smith@driver.com"
                className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                placeholder="+1 (555) 000-0000"
                className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-sm"
              />
            </div>

            <Button className="w-full bg-white text-[#0E1528] hover:bg-slate-100 py-6 rounded-xl text-base font-bold shadow-xl shadow-white/10 mt-4 hover:scale-[1.02] transition-all">
              Create Driver Account
            </Button>

            <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-3 border-t border-white/10">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instant mobile dispatch syncing & document scanner</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
