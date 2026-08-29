import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-[#080D1A] text-slate-300 border-t border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Company Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-[#131D33] border border-white/15 flex items-center justify-center text-white shadow-md">
                <Image
                  src="/LOGO.png"
                  alt="SME Fleet & Dispatch OS"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                SME Fleet & Dispatch OS
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              The unified operating system purpose-built for freight carriers, dispatch agencies, independent agents, and commercial drivers.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SOC2 Compliant & Carrier Verified Ecosystem</span>
            </div>
          </div>

          {/* Quick Onboarding Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Sign Up Gateways
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/signup?role=carrier" className="text-slate-400 hover:text-white transition-colors hover:underline">
                  Carrier Company Registration
                </Link>
              </li>
              <li>
                <Link href="/signup?role=dispatch-company" className="text-slate-400 hover:text-white transition-colors hover:underline">
                  Dispatching Agency Registration
                </Link>
              </li>
              <li>
                <Link href="/signup?role=dispatcher" className="text-slate-400 hover:text-white transition-colors hover:underline">
                  Independent Dispatcher Registration
                </Link>
              </li>
              <li>
                <Link href="/signup?role=driver" className="text-slate-400 hover:text-white transition-colors hover:underline">
                  Commercial Driver Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Platform & Legal */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/login" className="text-slate-400 hover:text-white transition-colors hover:underline">
                  Account Sign In
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors hover:underline">
                  Help & Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} SME Fleet & Dispatch OS. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span>Engineered for mission-critical logistics operations</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
