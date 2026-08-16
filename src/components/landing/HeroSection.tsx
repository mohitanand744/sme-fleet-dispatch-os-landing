"use client";

import React from "react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Sparkles, ArrowDown, ShieldCheck, Zap, Layers } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const headlineWords = [
    "The",
    "Operating",
    "System",
    "for",
    "Modern",
    "Fleets",
    "&",
    "Dispatchers.",
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const subheadlineVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.7,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.05,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden flex items-center bg-[#0E1528]">
      {/* Dark Ambient Background Glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-30 pointer-events-none z-0" />

      {/* Hero Background Image with Seamless Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero_section.png"
          alt="SME Fleet & Dispatch Operating System"
          fill
          priority
          unoptimized
          className="object-cover object-right sm:object-[82%_center] lg:object-right opacity-80 select-none"
        />
        {/* Hero Text Area Right-Side Faded Gradient Background */}
        <div className="absolute inset-y-0 left-0 w-full md:w-[72%] lg:w-[62%] bg-gradient-to-r from-[#0E1528] via-[#0E1528]/50 via-50% via-[#0E1528]/40 via-80% to-transparent pointer-events-none" />
        {/* Additional feathered ambient overlay for smooth blend into background artwork */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E1528]/80 via-[#0E1528]/40 via-40% to-transparent pointer-events-none" />
        {/* Bottom fade into the role selection section */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0E1528] via-[#0E1528]/80 to-transparent pointer-events-none" />
        {/* Top fade under the navbar */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0E1528]/80 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-2xl lg:max-w-3xl text-left">
          {/* Top Feature Pill */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/15 shadow-inner mb-6 backdrop-blur-xl"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse shadow-sm shadow-blue-400"></span>
            <Sparkles className="w-4 h-4 text-blue-300" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wide">
              Next-Generation Logistics Infrastructure
            </span>
          </motion.div>

          {/* Headline with Staggered Framer-Motion Text Reveal in Dark Theme */}
          <motion.h1
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold tracking-tight text-white leading-[1.12] mb-6 text-left"
          >
            {headlineWords.map((word, index) => {
              const isHighlight =
                word === "Modern" || word === "Fleets" || word === "Dispatchers.";
              return (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className={`inline-block mr-[0.28em] ${isHighlight
                      ? "text-transparent bg-gradient-to-r from-white via-main-light to-blue-300 bg-clip-text drop-shadow-[0_4px_16px_rgba(213,226,235,0.25)]"
                      : "text-white"
                    }`}
                >
                  {word}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* Subheadline with Bright Readable Contrast */}
          <motion.p
            variants={subheadlineVariants}
            initial="hidden"
            animate="visible"
            className="text-lg sm:text-xl md:text-2xl text-slate-300 font-normal leading-relaxed mb-10 text-left max-w-2xl"
          >
            Connect your entire logistics operation. Sign up below to join as a{" "}
            <span className="font-semibold text-white underline decoration-blue-400/60 underline-offset-4">
              Carrier
            </span>
            ,{" "}
            <span className="font-semibold text-white underline decoration-blue-400/60 underline-offset-4">
              Dispatch Company
            </span>
            , or{" "}
            <span className="font-semibold text-white underline decoration-blue-400/60 underline-offset-4">
              Individual Professional
            </span>
            .
          </motion.p>

          {/* CTA Buttons - High Contrast Pop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 mb-14"
          >
            <Link href="#roles">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-[#0E1528] hover:bg-slate-100 shadow-xl shadow-white/10 text-base font-bold px-8 py-6 rounded-2xl group justify-center hover:scale-[1.02] transition-all"
              >
                <span>Choose Your Account Type</span>
                <ArrowDown className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform text-[#0E1528]" />
              </Button>
            </Link>
            <Link href="/login">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-white/20 hover:border-white/50 text-white bg-white/5 hover:bg-white/10 backdrop-blur-md text-base font-semibold px-8 py-6 rounded-2xl justify-center transition-all"
              >
                Sign In to Portal
              </Button>
            </Link>
          </motion.div>

          {/* Micro Feature Pillars - Dark Glass Cards */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl pt-6 border-t border-white/10"
          >
            <div className="flex items-center justify-start gap-3 text-xs sm:text-sm font-medium text-slate-300 bg-[#131D33]/60 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-md">
              <div className="w-7 h-7 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-300 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <span>Instant Load Matching</span>
            </div>
            <div className="flex items-center justify-start gap-3 text-xs sm:text-sm font-medium text-slate-300 bg-[#131D33]/60 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-md">
              <div className="w-7 h-7 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <span>Multi-Tenant Fleet OS</span>
            </div>
            <div className="flex items-center justify-start gap-3 text-xs sm:text-sm font-medium text-slate-300 bg-[#131D33]/60 border border-white/10 rounded-xl px-3.5 py-2.5 backdrop-blur-md">
              <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Verified Compliance</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
