"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Lock,
  Mail,
  ShieldCheck,
  Eye,
  EyeOff,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function LoginContent() {
  const searchParams = useSearchParams();
  const isVerifiedParam = searchParams.get("verified") === "true";
  const emailParam = searchParams.get("email") || "";

  const [email, setEmail] = useState(emailParam);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showVerifiedModal, setShowVerifiedModal] = useState(isVerifiedParam);

  useEffect(() => {
    if (emailParam) {
      setEmail(emailParam);
    }
    if (isVerifiedParam) {
      setShowVerifiedModal(true);
    }
  }, [emailParam, isVerifiedParam]);

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
          alt="Logistics Background"
          fill
          priority
          unoptimized
          className="object-cover object-center select-none"
        />
        {/* Multi-layered dark vignette & gradient blends */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1528]/90 via-[#0E1528]/80 to-[#0E1528]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-boxes opacity-30" />
      </motion.div>

      {/* Ambient Lighting Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="w-full max-w-md relative z-10 my-8">
        {/* Prominent Top Center Clickable Logo */}
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

        {/* Verified Notification Banner (if verified param present) */}
        {isVerifiedParam && !showVerifiedModal && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-3.5 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center gap-3 text-emerald-300 text-xs font-medium"
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Email verified successfully. Sign in below to continue.</span>
          </motion.div>
        )}

        {/* Form Container with Scale & Fade-in Mount Animation */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="border border-white/15 shadow-2xl shadow-black/80 rounded-3xl bg-[#131D33]/90 backdrop-blur-2xl p-6 sm:p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-400/30 px-2.5 py-0.5 rounded-full uppercase">
              Secure Portal
            </span>
          </div>

          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Sign In to Your Workspace
            </h1>
            <p className="text-slate-300 text-sm mt-1.5 leading-relaxed">
              Enter your credentials to access your live dispatch operations.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                Work Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Password
                </label>
                <a href="#" className="text-xs text-blue-400 hover:text-blue-300 hover:underline font-medium">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-11 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors p-1"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button className="w-full bg-white text-[#0E1528] hover:bg-slate-100 py-6 rounded-xl text-base font-bold shadow-xl shadow-white/10 mt-2 hover:scale-[1.02] transition-all">
              Sign In
            </Button>

            <div className="text-center text-xs text-slate-400 pt-4 border-t border-white/10 flex flex-col gap-2">
              <div>
                Don&apos;t have an account yet?{" "}
                <Link href="/signup" className="text-blue-400 font-bold hover:underline">
                  Create an account
                </Link>
              </div>
              <div className="flex items-center justify-center gap-1.5 text-slate-500 text-[11px] pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>256-bit Encrypted Session</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Verified Email Confirmation Modal Popup */}
      <AnimatePresence>
        {showVerifiedModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowVerifiedModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
              className="relative w-full max-w-md bg-[#131D33] border border-emerald-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-emerald-950/50 text-center z-10 overflow-hidden"
            >
              {/* Top ambient glow */}
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setShowVerifiedModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Success Badge */}
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/50 flex items-center justify-center mx-auto mb-4 text-emerald-400 shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-9 h-9 animate-in zoom-in-50 duration-300" />
              </div>

              <span className="inline-flex items-center gap-1.5 text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-500/15 border border-emerald-400/30 px-3 py-1 rounded-full mb-3">
                <Sparkles className="w-3 h-3" />
                <span>Verification Complete</span>
              </span>

              <h2 className="text-2xl font-extrabold text-white mb-2">
                Email Verified Successfully!
              </h2>

              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Your email address{" "}
                <span className="font-semibold text-white">
                  {email || "your account"}
                </span>{" "}
                is confirmed. Sign in below to continue directly to your workspace and complete your role setup.
              </p>

              <Button
                onClick={() => setShowVerifiedModal(false)}
                className="w-full bg-emerald-400 hover:bg-emerald-300 text-[#0E1528] py-6 rounded-xl text-base font-bold shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>Continue Sign In</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0E1528] flex items-center justify-center text-white">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500" />
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  );
}
