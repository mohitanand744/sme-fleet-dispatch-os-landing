"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  Headset,
  User,
  ShieldCheck,
  Building2,
  Lock,
  Mail,
  Phone,
  ArrowRight,
  CheckCircle2,
  Send,
  Eye,
  EyeOff,
  Sparkles,
  ArrowLeft,
  KeyRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";

function InviteContent() {
  const searchParams = useSearchParams();

  // URL query params configured when Admin generates invite
  const role = (searchParams.get("role") === "driver" ? "driver" : "dispatcher") as "dispatcher" | "driver";
  const isDispatcher = role === "dispatcher";

  const company = searchParams.get("company") || "Apex Freight Logistics LLC";
  const inviter = searchParams.get("inviter") || "Marcus Vance (Fleet Admin)";
  const firstName = searchParams.get("firstName") || (isDispatcher ? "Jane" : "John");
  const lastName = searchParams.get("lastName") || (isDispatcher ? "Doe" : "Smith");
  const email = searchParams.get("email") || (isDispatcher ? "jane.doe@apexlogistics.com" : "john.smith@gmail.com");
  const phone = searchParams.get("phone") || "+1 (555) 345-6789";
  const telegram = searchParams.get("telegram") || "@john_smith_trucking";
  const unit = searchParams.get("unit") || (isDispatcher ? "Midwest Regional Dispatch Desk" : "Power Unit: Truck #104 (Cascadia 2024)");

  // Only password state is editable by user
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAccepted(true);
  };

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
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1528]/90 via-[#0E1528]/80 to-[#0E1528]" />
        <div
          className={`absolute inset-0 transition-colors duration-700 ${
            isDispatcher
              ? "bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_70%)]"
              : "bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15),transparent_70%)]"
          }`}
        />
        <div className="absolute inset-0 bg-grid-boxes opacity-30" />
      </motion.div>

      {/* Ambient Lighting Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none -z-10 transition-colors duration-700 ${
          isDispatcher ? "bg-sky-600/20" : "bg-emerald-600/20"
        }`}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="w-full max-w-xl relative z-10 my-8">
        {/* Prominent Top Center Clickable Logo */}
        <motion.div
          initial={{ opacity: 0, y: -25, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center justify-center mb-6"
        >
          <Link
            href="/"
            className="group flex flex-col items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-3xl p-2 transition-transform"
            title="SME Fleet & Dispatch OS - Home"
          >
            <div className="relative w-44 sm:w-52 h-20 sm:h-24 flex items-center justify-center group-hover:scale-105 transition-transform duration-200 drop-shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
              <Image
                src="/LOGO.png"
                alt="SME Fleet & Dispatch OS"
                width={220}
                height={100}
                priority
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 group-hover:text-blue-300 transition-colors">
              SME Fleet & Dispatch OS
            </span>
          </Link>
        </motion.div>

        {/* Main Invite Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="border border-white/15 shadow-2xl shadow-black/80 rounded-3xl bg-[#131D33]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span
              className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                isDispatcher
                  ? "text-sky-400 bg-sky-500/15 border-sky-400/30"
                  : "text-emerald-400 bg-emerald-500/15 border-emerald-400/30"
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>{isDispatcher ? "Dispatcher Workspace Invite" : "Driver Fleet Invite"}</span>
            </span>
          </div>

          {/* Inviting Company Context Card */}
          <div className="bg-[#0A0F1E]/90 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                  isDispatcher
                    ? "bg-sky-500/15 border-sky-400/30 text-sky-400"
                    : "bg-emerald-500/15 border-emerald-400/30 text-emerald-400"
                }`}
              >
                {isDispatcher ? <Headset className="w-6 h-6" /> : <User className="w-6 h-6" />}
              </div>
              <div className="space-y-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    Official Invitation From
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <ShieldCheck className="w-3 h-3" />
                    Verified Fleet
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white truncate">
                  {company}
                </h3>
                <p className="text-xs text-slate-300">
                  {inviter} • <span className="text-slate-400">{unit}</span>
                </p>
              </div>
            </div>
          </div>

          {isAccepted ? (
            /* Invite Accepted Screen */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-6 space-y-5"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-xl border ${
                  isDispatcher
                    ? "bg-sky-500/20 border-sky-400/40 text-sky-400"
                    : "bg-emerald-500/20 border-emerald-400/40 text-emerald-400"
                }`}
              >
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {isDispatcher ? "Workspace Linked Successfully!" : "Telegram Dispatch Connected!"}
                </h2>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Welcome to the fleet team, <span className="font-semibold text-white">{firstName} {lastName}</span>! Your credentials have been activated under <span className="font-semibold text-white">{company}</span>.
                </p>
              </div>

              {/* Status summary */}
              <div className="bg-[#0E1528] border border-white/10 rounded-2xl p-4 text-left space-y-2 text-xs font-mono text-slate-300 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Fleet Account:</span>
                  <span className="text-white font-bold">{company}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Role Authority:</span>
                  <span className={isDispatcher ? "text-sky-400 font-bold" : "text-emerald-400 font-bold"}>
                    {isDispatcher ? "Active Dispatcher Desk" : "Authorized Fleet Driver"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Login Username:</span>
                  <span className="text-white font-bold">{email}</span>
                </div>
                {!isDispatcher && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Telegram Bot Handle:</span>
                    <span className="text-emerald-400 font-bold">@SME_Dispatch_Bot</span>
                  </div>
                )}
              </div>

              <div className="pt-3 space-y-3">
                {isDispatcher ? (
                  <Link href="/login" className="block w-full">
                    <Button className="w-full bg-white text-[#0E1528] hover:bg-slate-100 py-6 rounded-xl text-base font-bold shadow-xl shadow-white/10">
                      Enter Dispatcher Dashboard
                    </Button>
                  </Link>
                ) : (
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full"
                  >
                    <Button className="w-full bg-emerald-400 text-[#0E1528] hover:bg-emerald-300 py-6 rounded-xl text-base font-bold shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2">
                      <Send className="w-4 h-4" />
                      <span>Open @SME_Dispatch_Bot in Telegram</span>
                    </Button>
                  </a>
                )}
              </div>
            </motion.div>
          ) : (
            /* Invite Password Creation Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="mb-3">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {isDispatcher ? "Activate Your Dispatcher Seat" : "Set Your Driver Password"}
                </h1>
                <p className="text-slate-300 text-sm mt-1.5 leading-relaxed">
                  Your profile details were pre-configured by your fleet administrator. Please create a secure password to complete activation.
                </p>
              </div>

              {/* Pre-filled & Disabled Info Section */}
              <div className="space-y-3 p-4 rounded-2xl bg-[#0A0F1E]/60 border border-white/10">
                <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                  <span className="text-slate-400 font-medium">Pre-filled Administrator Records</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified by Admin
                  </span>
                </div>

                {/* Pre-filled Name Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      disabled
                      value={firstName}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0E1528]/80 text-slate-300 text-sm cursor-not-allowed select-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      disabled
                      value={lastName}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-[#0E1528]/80 text-slate-300 text-sm cursor-not-allowed select-none"
                    />
                  </div>
                </div>

                {/* Pre-filled Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Invited Work Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        disabled
                        value={email}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-white/10 bg-[#0E1528]/80 text-slate-300 text-sm cursor-not-allowed select-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        disabled
                        value={phone}
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-white/10 bg-[#0E1528]/80 text-slate-300 text-sm cursor-not-allowed select-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Pre-filled Telegram Handle for Drivers */}
                {!isDispatcher && (
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1">
                      Telegram Username (Connected for Dispatch Bot)
                    </label>
                    <div className="relative">
                      <Send className="w-4 h-4 text-emerald-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        disabled
                        value={telegram}
                        className="w-full pl-9 pr-24 py-2.5 rounded-xl border border-white/10 bg-[#0E1528]/80 text-emerald-300 font-mono text-sm cursor-not-allowed select-none"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-400/30 px-2 py-0.5 rounded-full">
                        Bot Linked
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Editable Password & Confirm Password */}
              <div className="pt-2">
                <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white mb-2.5">
                  <KeyRound className={`w-3.5 h-3.5 ${isDispatcher ? "text-sky-400" : "text-emerald-400"}`} />
                  <span>Create Account Password</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full pl-10 pr-11 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 text-sm transition-all ${
                          isDispatcher ? "focus:ring-sky-400" : "focus:ring-emerald-400"
                        }`}
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
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Confirm Password *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        placeholder="••••••••••••"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full pl-10 pr-11 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 text-sm transition-all ${
                          isDispatcher ? "focus:ring-sky-400" : "focus:ring-emerald-400"
                        }`}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-200 transition-colors p-1"
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <Button
                type="submit"
                className={`w-full py-6 rounded-xl text-base font-bold shadow-xl mt-4 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 ${
                  isDispatcher
                    ? "bg-white text-[#0E1528] hover:bg-slate-100 shadow-white/10"
                    : "bg-emerald-400 text-[#0E1528] hover:bg-emerald-300 shadow-emerald-500/20"
                }`}
              >
                <span>{isDispatcher ? "Activate Account & Join Dispatch Desk" : "Activate Account & Connect Telegram"}</span>
                <ArrowRight className="w-4 h-4" />
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-3 border-t border-white/10">
                <ShieldCheck className={`w-3.5 h-3.5 ${isDispatcher ? "text-sky-400" : "text-emerald-400"}`} />
                <span>Authorized invite link with 256-bit encryption</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default function InvitePage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0E1528] flex items-center justify-center text-white">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500" />
        </div>
      }
    >
      <InviteContent />
    </Suspense>
  );
}
