"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Truck, ArrowRight, Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/landing/ContactModal";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset for floating navbar
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-3 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-5xl rounded-full px-4 sm:px-5 py-2.5 transition-all duration-300 flex items-center justify-between backdrop-blur-2xl backdrop-saturate-150 ${
            isScrolled
              ? "shadow-2xl shadow-black/90 bg-[#0E1528]/80 border border-white/20 scale-[0.99]"
              : "shadow-xl shadow-black/50 bg-[#0E1528]/65 border border-white/15"
          }`}
        >
          {/* Platform Logo / Name */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-full pr-2"
          >
            <div className="relative w-16 h-10 p-0.5 flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-200">
              <img
                src="/LOGO.png"
                alt="SME Fleet & Dispatch OS"
                className="w-full h-full overflow-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = "none";
                }}
              />
            </div>
          </Link>

          {/* Center / Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full px-2 py-1 text-xs">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors font-medium cursor-pointer"
            >
              About
            </a>
            <a
              href="#benefits"
              onClick={(e) => scrollToSection(e, "benefits")}
              className="text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors font-medium cursor-pointer"
            >
              Features
            </a>
            <button
              onClick={() => setContactModalOpen(true)}
              className="text-slate-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/10 transition-colors font-medium cursor-pointer"
            >
              Contact
            </button>
            <div className="w-1 h-1 rounded-full bg-white/20 mx-1"></div>
            <div className="flex items-center gap-1.5 text-slate-300 px-2.5 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-[11px] font-medium text-emerald-300">Live Grid</span>
            </div>
          </nav>

          {/* Right Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2.5">
            <Link href="/login">
              <Button
                variant="ghost"
                size="sm"
                className="rounded-full border border-slate-600 text-slate-300 hover:text-white hover:bg-white/10 text-xs font-semibold px-4 h-9"
              >
                Sign In
              </Button>
            </Link>

            <Link href="/signup">
              <Button
                size="sm"
                className="rounded-full bg-main-white text-[#0E1528] hover:bg-white shadow-lg shadow-blue-500/20 text-xs font-bold px-4 h-9 gap-1.5 hover:scale-[1.02] transition-transform"
              >
                <span>Get Started</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-2">
            <Link href="/signup">
              <Button
                size="sm"
                className="rounded-full bg-main-white text-[#0E1528] hover:bg-white text-xs font-bold px-3 h-8"
              >
                Get Started
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="p-1.5 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Floating Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="pointer-events-auto absolute top-16 left-4 right-4 max-w-sm mx-auto bg-[#0E1528]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 shadow-2xl shadow-black animate-in fade-in slide-in-from-top-3 duration-200 md:hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                <span>Navigation</span>
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>System Online</span>
                </div>
              </div>

              <a
                href="#about"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToSection(e, "about");
                }}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                About Platform
              </a>

              <a
                href="#benefits"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  scrollToSection(e, "benefits");
                }}
                className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                Platform Features
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setContactModalOpen(true);
                }}
                className="w-full text-left block px-3 py-2 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                Contact & Support Form
              </button>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant="outline"
                    className="w-full justify-center rounded-full border-white/20 text-slate-200 hover:text-white hover:bg-white/10 text-xs font-semibold h-10"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Button className="w-full justify-center rounded-full bg-main-white text-[#0E1528] hover:bg-white text-xs font-bold h-10 shadow-lg">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Interactive Contact Form Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </>
  );
}
