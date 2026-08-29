import React from "react";
import { Navbar } from "@/components/landing/Navbar";
import { HeroSection } from "@/components/landing/HeroSection";
import { IntegrationMarquee } from "@/components/landing/IntegrationMarquee";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { BentoGridSection } from "@/components/landing/BentoGridSection";
import { RoleBenefitsSection } from "@/components/landing/RoleBenefitsSection";
import { BottomCTA } from "@/components/landing/BottomCTA";
import { Footer } from "@/components/landing/Footer";

export const metadata = {
  title: "SME Fleet & Dispatch OS - The Operating System for Fleets & Dispatchers",
  description:
    "Connect your entire logistics operation. AI rate con parser, one-click dispatch, Telegram driver updates, and automated accounting.",
};

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0E1528] text-white selection:bg-blue-500/30 selection:text-blue-200">
      {/* 1. Floating Rounded-Full Navbar */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 2. Hero Section with Background Image, Left-Aligned Text & CTA */}
        <HeroSection />

        {/* 3. Integration Marquee (Infinite Tools Compatibility Band) */}
        <IntegrationMarquee />

        {/* 4. How It Works Flow (4 Steps with Sticky Interactive Visualizer) */}
        <HowItWorksSection />

        {/* 5. Pain vs. Relief Bento Grid (Legacy Spreadsheets vs. Modern OS) */}
        <BentoGridSection />

        {/* 6. Role-Specific Benefits Tabs (Fleet Owners, Dispatchers, Drivers) */}
        <RoleBenefitsSection />

        {/* 7. Bottom CTA Banner (80% Centered Padded Glass Container) */}
        <BottomCTA />
      </main>

      {/* 8. Sleek Dark Footer */}
      <Footer />
    </div>
  );
}
