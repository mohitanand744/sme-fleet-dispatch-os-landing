"use client";

import React from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import {
  Truck,
  Building2,
  Headset,
  User,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface RoleCardData {
  id: string;
  title: string;
  roleBadge: string;
  tag: {
    label: string;
    badgeStyle: string;
  };
  icon: React.ElementType;
  description: string;
  features: string[];
  href: string;
  ctaText: string;
}

const roleOptions: RoleCardData[] = [
  {
    id: "carrier",
    title: "Carrier Company",
    roleBadge: "Fleet Owners",
    tag: {
      label: "Fleet Command",
      badgeStyle: "bg-blue-500/20 text-blue-300 border-blue-400/35",
    },
    icon: Truck,
    description: "Register your fleet, manage trucks, and invite your drivers.",
    features: [
      "Manage unlimited trucks & trailers",
      "Driver onboarding & compliance tracking",
      "Direct integration with dispatch agencies",
    ],
    href: "/signup/carrier",
    ctaText: "Sign Up as Carrier",
  },
  {
    id: "dispatch-company",
    title: "Dispatching Agency",
    roleBadge: "Agencies & Brokerages",
    tag: {
      label: "Multi-Agent Desk",
      badgeStyle: "bg-indigo-500/20 text-indigo-300 border-indigo-400/35",
    },
    icon: Building2,
    description: "Manage multiple dispatchers and connect with carrier fleets.",
    features: [
      "Multi-agent dispatcher workspaces",
      "Carrier fleet matching & rate negotiation",
      "Automated invoicing & commission splits",
    ],
    href: "/signup/dispatch-company",
    ctaText: "Register Agency",
  },
  {
    id: "dispatcher",
    title: "Dispatcher",
    roleBadge: "Independent / Agent",
    tag: {
      label: "High-Velocity Seat",
      badgeStyle: "bg-sky-500/20 text-sky-300 border-sky-400/35",
    },
    icon: Headset,
    description: "Join a company or operate independently to find available trucks.",
    features: [
      "Access real-time load board streams",
      "Direct carrier messaging & check-calls",
      "Flexible independent or team profiles",
    ],
    href: "/signup/dispatcher",
    ctaText: "Join as Dispatcher",
  },
  {
    id: "driver",
    title: "Driver",
    roleBadge: "Commercial Operators",
    tag: {
      label: "Telegram Driver Bot",
      badgeStyle: "bg-emerald-500/20 text-emerald-300 border-emerald-400/35",
    },
    icon: User,
    description: "Accept company invites or register to find new fleet opportunities.",
    features: [
      "Mobile dispatch route & document sync",
      "Fast proof-of-delivery uploads",
      "Direct payroll & settlement visibility",
    ],
    href: "/signup/driver",
    ctaText: "Register as Driver",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function RoleSelector() {
  return (
    <section id="roles" className="py-24 md:py-32 bg-[#0E1528] relative overflow-hidden">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-0 right-10 w-96 h-96 bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-boxes opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
            <span>Dedicated Onboarding Gateways</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
            Select Your Role to Get Started
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed"
          >
            Choose the workspace that fits your operations. Each portal is customized with tailored workflows, permissions, and dispatch tools.
          </motion.p>
        </div>

        {/* 4-Card Responsive Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6"
        >
          {roleOptions.map((role) => {
            const IconComponent = role.icon;
            return (
              <motion.div
                key={role.id}
                variants={cardVariants}
                whileHover={{
                  scale: 1.04,
                  transition: { duration: 0.25, ease: "easeOut" },
                }}
                className="h-full flex"
              >
                <div className="relative flex flex-col justify-between w-full h-full rounded-3xl border border-white/10 bg-[#131D33]/90 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 hover:border-blue-400/50 hover:bg-[#17233E] transition-all duration-300 overflow-hidden group p-6 backdrop-blur-xl">
                  {/* Top-Right Dedicated Role Tag */}
                  <div className="absolute top-5 right-5">
                    <span
                      className={`inline-flex items-center gap-1 text-[10px] uppercase font-extrabold tracking-wider py-1 px-3 rounded-full border backdrop-blur-md ${role.tag.badgeStyle}`}
                    >
                      <Sparkles className="w-2.5 h-2.5 opacity-80" />
                      <span>{role.tag.label}</span>
                    </span>
                  </div>

                  <div>
                    {/* Icon container */}
                    <div className="w-14 h-14 rounded-2xl bg-blue-500/15 border border-blue-400/25 flex items-center justify-center text-blue-300 mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-500 transition-all duration-300 shadow-inner">
                      <IconComponent className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
                    </div>

                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                      {role.roleBadge}
                    </div>

                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">
                      {role.title}
                    </h3>

                    <p className="text-slate-300 mt-2 text-sm leading-relaxed min-h-[44px]">
                      {role.description}
                    </p>

                    {/* Features list */}
                    <div className="pt-4 mt-4 border-t border-white/10 space-y-2.5">
                      {role.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Footer Button */}
                  <div className="pt-6 mt-4">
                    <Link href={role.href} className="w-full block">
                      <Button
                        className="w-full bg-[#E9F0F8] text-[#0E1528] hover:bg-white text-sm font-bold py-6 rounded-2xl transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25 flex items-center justify-center gap-2"
                      >
                        <span>{role.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
