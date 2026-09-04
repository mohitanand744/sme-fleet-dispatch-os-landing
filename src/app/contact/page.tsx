"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Mail,
  User,
  Building2,
  Phone,
  MessageSquare,
  Send,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    role: "Carrier Company",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0E1528] text-white flex flex-col justify-center items-center p-4 sm:p-6 relative overflow-hidden">
      {/* Background Logistics Image with Dark Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src="/hero_section.png"
          alt="Logistics Background"
          fill
          priority
          unoptimized
          className="object-cover object-center opacity-25 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E1528]/90 via-[#0E1528]/80 to-[#0E1528]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]" />
        <div className="absolute inset-0 bg-grid-boxes opacity-30" />
      </div>

      {/* Ambient Lighting Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="w-full max-w-xl relative z-10 my-8">
        {/* Prominent Top Center Clickable Logo */}
        <div className="flex flex-col items-center justify-center mb-7">
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
        </div>

        <div className="border border-white/15 shadow-2xl shadow-black/80 rounded-3xl bg-[#131D33]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Home</span>
            </Link>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-400 bg-blue-500/15 border border-blue-400/30 px-3 py-1 rounded-full">
              Direct Contact
            </span>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Message Dispatched!
                </h2>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <span className="font-semibold text-white">{formData.name || "there"}</span>. An Antcolos solutions specialist will contact you within 15 minutes.
                </p>
              </div>

              <div className="pt-4">
                <Link href="/">
                  <Button className="bg-white text-[#0E1528] hover:bg-slate-100 font-bold px-8 py-6 rounded-2xl shadow-xl">
                    Return to Homepage
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Connect with Solutions Team
                </h1>
                <p className="text-slate-300 text-sm mt-1.5 leading-relaxed">
                  Discuss your fleet automation needs, custom TMS integrations, or platform migration with our product team.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        placeholder="Marcus Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      <input
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Operation Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                      className="w-full px-3.5 py-3 rounded-xl border border-white/15 bg-[#0E1528] text-white focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm"
                    >
                      <option>Carrier Company (Fleet Owner)</option>
                      <option>Dispatching Agency</option>
                      <option>Independent Dispatcher</option>
                      <option>Commercial Driver</option>
                      <option>Freight Brokerage / Shipper</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                    How Can We Help You?
                  </label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <textarea
                      rows={3}
                      required
                      placeholder="Tell us about your fleet size, software bottlenecks, or custom integration needs..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full pl-10 pr-3.5 py-3 rounded-xl border border-white/15 bg-[#0E1528]/90 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm transition-all resize-none"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-[#0E1528] hover:bg-slate-100 py-6 rounded-xl text-base font-bold shadow-xl shadow-white/10 mt-2 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4 text-[#0E1528]" />
                </Button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-3 border-t border-white/10">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>256-bit encrypted communication channel</span>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
