"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Truck,
  ArrowLeft,
  ArrowRight,
  Shield,
  Building2,
  MapPin,
  UserCheck,
  CheckCircle2,
  Lock,
  Mail,
  Phone,
  Check,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CarrierSignupPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Company Info
    companyName: "",
    usdot: "",
    mcNumber: "",
    fleetSize: "6 - 20 Trucks",
    companyPhone: "",
    equipmentType: "Dry Van & Reefer",

    // Step 2: Address
    streetAddress: "",
    suite: "",
    city: "",
    state: "TX",
    zipCode: "",
    country: "United States",

    // Step 3: Admin Details
    adminFirstName: "",
    adminLastName: "",
    adminPhone: "",
    adminEmail: "",
    password: "",
    confirmPassword: "",
    agreeTerms: true,
  });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsSuccess(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const stepLabels = [
    { num: 1, label: "Company", icon: Building2 },
    { num: 2, label: "Address", icon: MapPin },
    { num: 3, label: "Admin", icon: UserCheck },
  ];

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
          alt="Carrier Fleet Background"
          fill
          priority
          unoptimized
          className="object-cover object-center select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1528]/90 via-[#0E1528]/80 to-[#0E1528]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-boxes opacity-30" />
      </motion.div>

      {/* Ambient Lighting Orbs */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none -z-10"
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

        {/* 3-Step Wizard Container */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="border border-white/15 shadow-2xl shadow-black/80 rounded-3xl bg-[#131D33]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10"
        >
          {/* Header & Back Link */}
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-400 bg-blue-500/15 border border-blue-400/30 px-3 py-1 rounded-full">
              Carrier Workspace
            </span>
          </div>

          {/* Stepper Progress Bar */}
          {!isSuccess && (
            <div className="mb-8">
              <div className="flex items-center justify-between relative">
                {/* Connecting background bar */}
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-white/10 z-0" />
                {/* Active progress bar fill */}
                <motion.div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-500 z-0 transition-all duration-300"
                  style={{ width: `${((currentStep - 1) / (stepLabels.length - 1)) * 100}%` }}
                />

                {stepLabels.map((s) => {
                  const isCompleted = currentStep > s.num;
                  const isCurrent = currentStep === s.num;
                  const IconComp = s.icon;

                  return (
                    <div key={s.num} className="relative z-10 flex flex-col items-center gap-1.5">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${isCompleted
                          ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                          : isCurrent
                            ? "bg-white text-[#0E1528] ring-4 ring-blue-500/30 font-extrabold"
                            : "bg-[#0E1528] text-slate-400 border border-white/20"
                          }`}
                      >
                        {isCompleted ? <Check className="w-4 h-4" /> : s.num}
                      </div>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider ${isCurrent ? "text-blue-300" : isCompleted ? "text-slate-300" : "text-slate-500"
                          }`}
                      >
                        {s.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {isSuccess ? (
            /* Registration Complete */
            <div className="text-center py-6 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Carrier Workspace Initialized!
                </h2>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Welcome aboard, <span className="font-semibold text-white">{formData.adminFirstName || "Admin"}</span>. Your fleet workspace for <span className="font-semibold text-white">{formData.companyName || "your company"}</span> is ready.
                </p>
              </div>

              <div className="bg-[#0E1528] border border-white/10 rounded-2xl p-4 text-left space-y-2 text-xs font-mono text-slate-300 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Legal Entity:</span>
                  <span className="text-white font-bold">{formData.companyName || "Carrier LLC"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">USDOT / MC:</span>
                  <span className="text-blue-400">{formData.usdot || "DOT# Pending"} / {formData.mcNumber || "MC# Pending"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Yard Address:</span>
                  <span className="text-white">{formData.city || "City"}, {formData.state || "TX"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Admin Login:</span>
                  <span className="text-emerald-400">{formData.adminEmail || "admin@carrier.com"}</span>
                </div>
              </div>

              <div className="pt-3">
                <Link href="/login">
                  <Button className="w-full bg-white text-[#0E1528] hover:bg-slate-100 py-6 rounded-xl text-base font-bold shadow-xl shadow-white/10">
                    Sign In to Carrier OS Portal
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleNext}>
              <AnimatePresence mode="wait">
                {/* STEP 1: Company Profile & Operating Authority */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="mb-4">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                        Step 1: Company & Authority
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        Enter your carrier legal credentials and operating fleet capacity.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company / Legal Entity Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Freight Logistics LLC"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          USDOT Number *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="USDOT-XXXXXXX"
                          value={formData.usdot}
                          onChange={(e) => setFormData({ ...formData, usdot: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          MC / FF Number *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="MC-XXXXXX"
                          value={formData.mcNumber}
                          onChange={(e) => setFormData({ ...formData, mcNumber: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Fleet Size
                        </label>
                        <select
                          value={formData.fleetSize}
                          onChange={(e) => setFormData({ ...formData, fleetSize: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        >
                          <option>1 - 5 Trucks (Owner-Operator Fleet)</option>
                          <option>6 - 20 Trucks (Regional Fleet)</option>
                          <option>21 - 50 Trucks (Mid-Sized Carrier)</option>
                          <option>50+ Trucks (Enterprise Carrier)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Equipment Type
                        </label>
                        <select
                          value={formData.equipmentType}
                          onChange={(e) => setFormData({ ...formData, equipmentType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        >
                          <option>Dry Van & Reefer</option>
                          <option>Flatbed / Stepdeck</option>
                          <option>Box Truck / Hotshot</option>
                          <option>Tanker & Hazmat</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Company Dispatch Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={formData.companyPhone}
                        onChange={(e) => setFormData({ ...formData, companyPhone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 2: Registered Business & Yard Address */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="mb-4">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                        Step 2: Business & Yard Address
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        Required for FMCSA registry verification, rate confirmations, and billing packets.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Address Line 1 *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="10440 Logistics Blvd"
                        value={formData.streetAddress}
                        onChange={(e) => setFormData({ ...formData, streetAddress: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Address Line 2 (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Suite 300 / Bay 4"
                        value={formData.suite}
                        onChange={(e) => setFormData({ ...formData, suite: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          City *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Dallas"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          State *
                        </label>
                        <select
                          value={formData.state}
                          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl border border-white/15 bg-[#0E1528] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                        >
                          <option value="TX">Texas (TX)</option>
                          <option value="IL">Illinois (IL)</option>
                          <option value="CA">California (CA)</option>
                          <option value="FL">Florida (FL)</option>
                          <option value="GA">Georgia (GA)</option>
                          <option value="OH">Ohio (OH)</option>
                          <option value="NC">North Carolina (NC)</option>
                          <option value="PA">Pennsylvania (PA)</option>
                          <option value="Other">Other State</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          ZIP Code *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="75201"
                          value={formData.zipCode}
                          onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                          className="w-full px-3.5 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Country
                      </label>
                      <input
                        type="text"
                        disabled
                        value="United States"
                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-[#0A0F1E] text-slate-400 text-sm cursor-not-allowed"
                      />
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Primary Admin Account Credentials */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="mb-4">
                      <h2 className="text-xl sm:text-2xl font-extrabold text-white">
                        Step 3: Primary Admin Account
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        Create the Administrator login credentials to manage your fleet workspace.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Admin First Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Marcus"
                          value={formData.adminFirstName}
                          onChange={(e) => setFormData({ ...formData, adminFirstName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                          Admin Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Vance"
                          value={formData.adminLastName}
                          onChange={(e) => setFormData({ ...formData, adminLastName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Admin Official Work Email (Login ID) *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="email"
                          required
                          placeholder="marcus.v@apexlogistics.com"
                          value={formData.adminEmail}
                          onChange={(e) => setFormData({ ...formData, adminEmail: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        ADMIN MOBILE PHONE *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                        <input
                          type="tel"
                          required
                          placeholder="+1 (555) 234-5678"
                          value={formData.adminPhone}
                          onChange={(e) => setFormData({ ...formData, adminPhone: e.target.value })}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                        />
                      </div>
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
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="w-full pl-10 pr-11 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
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
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between gap-3">
                {currentStep > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleBack}
                    className="border-white/20 text-slate-300 hover:text-white hover:bg-white/10 px-5 py-6 rounded-xl text-sm font-semibold flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </Button>
                ) : (
                  <div />
                )}

                <Button
                  type="submit"
                  className="bg-white text-[#0E1528] hover:bg-slate-100 px-7 py-6 rounded-xl text-sm font-bold shadow-xl shadow-white/10 hover:scale-[1.02] transition-all flex items-center gap-2 ml-auto"
                >
                  <span>
                    {currentStep === 1
                      ? "Next: Business Address"
                      : currentStep === 2
                        ? "Next: Admin Details"
                        : "Complete Carrier Registration"}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#0E1528]" />
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-4">
                <Shield className="w-3.5 h-3.5 text-blue-400" />
                <span>FMCSA Registry & 256-bit encrypted data verification</span>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
