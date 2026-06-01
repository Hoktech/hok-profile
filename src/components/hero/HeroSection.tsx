"use client";

import dynamic from "next/dynamic";
import HeroContent from "./HeroContent";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-radial from-surface-light/20 to-background" />
  ),
});

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-background">
      {/* Radial gradient backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(40,40,40,0.3)_0%,_transparent_70%)]" />
      
      {/* 3D Scene */}
      <HeroScene />

      {/* Content Overlay */}
      <HeroContent />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
