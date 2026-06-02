"use client";

import { motion } from "framer-motion";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import teamData from "@/data/team.json";

// SVG Logos for languages and tools
const techLogos = {
  react: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="20" height="20" fill="none">
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" filter="url(#glow-react)">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
      <defs>
        <filter id="glow-react">
          <feGaussianBlur stdDeviation="0.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
    </svg>
  ),
  dotnet: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20" fill="none">
      <title>.NET C# Logo</title>
      <circle cx="50" cy="50" r="45" stroke="#512bd4" strokeWidth="6" fill="rgba(81, 43, 212, 0.05)"/>
      <path d="M30 65 L45 35 L55 35 L70 65 M38 52 L62 52" stroke="#512bd4" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  flutter: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="20" height="20" fill="none">
      <title>Flutter Logo</title>
      <path d="M59.3 2.2 L28.2 33.3 L47.4 52.5 L78.5 21.4 Z" fill="#02569B"/>
      <path d="M47.4 52.5 L28.2 71.7 L59.3 102.8 L78.5 83.6 Z" fill="#0175C2"/>
      <path d="M47.4 52.5 L36.7 63.2 L47.4 73.9 L78.5 73.9 Z" fill="#13B9FD" opacity="0.9"/>
    </svg>
  ),
  whatsapp: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#25D366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <title>WhatsApp Logo</title>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  ),
  nextjs: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180" width="20" height="20" fill="none">
      <title>Next.js Logo</title>
      <circle cx="90" cy="90" r="90" fill="#000000" stroke="#ffffff" strokeWidth="2"/>
      <path d="M149.508 157.52L69.142 54H54v72h13.5v-51.782l72.308 93.302z M126 54h13.5v72H126z" fill="#ffffff"/>
    </svg>
  ),
  sql: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#0072C6" strokeWidth="2">
      <title>Database Logo</title>
      <ellipse cx="12" cy="5" rx="9" ry="3"/>
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
    </svg>
  )
};

export default function HeroContent() {
  const t = useTranslations("hero");
  const locale = useLocale() as "ar" | "en";
  const leader = teamData.leader;
  const isAr = locale === "ar";

  // Floating technology badges configuration
  const badges = [
    {
      name: "React / Next.js",
      logo: techLogos.react,
      color: "rgba(97, 218, 251, 0.15)",
      borderColor: "rgba(97, 218, 251, 0.3)",
      glowColor: "rgba(97, 218, 251, 0.4)",
      style: "top-[10%] left-[8%] md:top-[12%] md:left-[15%]",
      duration: 5,
      delay: 0
    },
    {
      name: "C# / .NET 8",
      logo: techLogos.dotnet,
      color: "rgba(81, 43, 212, 0.15)",
      borderColor: "rgba(81, 43, 212, 0.3)",
      glowColor: "rgba(81, 43, 212, 0.4)",
      style: "top-[18%] right-[6%] md:top-[20%] md:right-[18%]",
      duration: 5.5,
      delay: 0.5
    },
    {
      name: "Flutter",
      logo: techLogos.flutter,
      color: "rgba(2, 86, 155, 0.15)",
      borderColor: "rgba(2, 86, 155, 0.3)",
      glowColor: "rgba(2, 86, 155, 0.4)",
      style: "top-[50%] left-[2%] md:top-[48%] md:left-[10%]",
      duration: 4.8,
      delay: 0.2
    },
    {
      name: "WhatsApp API",
      logo: techLogos.whatsapp,
      color: "rgba(37, 211, 102, 0.15)",
      borderColor: "rgba(37, 211, 102, 0.3)",
      glowColor: "rgba(37, 211, 102, 0.4)",
      style: "top-[45%] right-[2%] md:top-[42%] md:right-[12%]",
      duration: 5.2,
      delay: 0.8
    },
    {
      name: "SQL / database",
      logo: techLogos.sql,
      color: "rgba(0, 114, 198, 0.15)",
      borderColor: "rgba(0, 114, 198, 0.3)",
      glowColor: "rgba(0, 114, 198, 0.4)",
      style: "bottom-[15%] left-[6%] md:bottom-[15%] md:left-[18%]",
      duration: 4.5,
      delay: 0.4
    },
    {
      name: "Next.js 15",
      logo: techLogos.nextjs,
      color: "rgba(255, 255, 255, 0.08)",
      borderColor: "rgba(255, 255, 255, 0.15)",
      glowColor: "rgba(255, 255, 255, 0.2)",
      style: "bottom-[22%] right-[8%] md:bottom-[22%] md:right-[15%]",
      duration: 6,
      delay: 0.6
    }
  ];

  return (
    <div className="relative z-10 flex flex-col items-center justify-between min-h-screen px-6 pt-32 pb-16 overflow-hidden">
      
      {/* 1. Header Typography */}
      <div className="w-full text-center max-w-4xl mx-auto flex-grow flex flex-col justify-center">
        {/* Category Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-3"
        >
          <span className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-accent font-light">
            {leader.shortTitle[locale]}
          </span>
        </motion.div>

        {/* Hero Title (Eng. Mahmoud Salah) */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white uppercase"
        >
          {leader.name[locale]}
        </motion.h1>

        {/* Cinematic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-base sm:text-lg md:text-xl text-muted font-light max-w-2xl mx-auto tracking-wide leading-relaxed"
        >
          {t("subtitle")}
        </motion.p>
      </div>

      {/* 2. Centered Showcase Product & Floating Tech Badge Matrix */}
      <div className="w-full max-w-5xl mx-auto relative my-8 flex justify-center items-center h-[350px] md:h-[480px]">
        
        {/* Floating Programming Languages & Tools Badges */}
        {badges.map((badge, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${badge.style} z-30`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.75, 1, 0.75],
              scale: 1,
              y: [0, -12, 0]
            }}
            transition={{
              opacity: {
                duration: badge.duration,
                repeat: Infinity,
                ease: "easeInOut"
              },
              y: {
                duration: badge.duration,
                repeat: Infinity,
                ease: "easeInOut"
              },
              scale: { duration: 0.8, delay: badge.delay }
            }}
          >
            <div 
              className="glass-card px-4 py-2.5 rounded-2xl flex items-center gap-2.5 backdrop-blur-md transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{
                backgroundColor: badge.color,
                borderColor: badge.borderColor,
                boxShadow: `0 0 15px ${badge.glowColor}`
              }}
            >
              {badge.logo}
              <span className="text-[10px] md:text-xs font-medium text-white tracking-wider uppercase">
                {badge.name}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Center: The Leader Image Cutout */}
        <div className="relative w-full max-w-[460px] aspect-[1.1] z-20 self-end">
          <div className="relative w-full h-full animate-fade-in-up">
            {/* Soft, beautiful background glow directly behind the cutout */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent rounded-full filter blur-3xl pointer-events-none opacity-40 -z-10" />

            <Image
              src={leader.image}
              alt={leader.name[locale]}
              fill
              className="object-contain object-bottom select-none pointer-events-none drop-shadow-[0_10px_50px_rgba(255,255,255,0.08)]"
              priority
              unoptimized
              sizes="(max-width: 1024px) 100vw, 460px"
            />
          </div>
        </div>
      </div>

      {/* 3. Footer Action Section (CTAs + Minimal Telemetry) */}
      <div className="w-full flex flex-col items-center gap-8 mt-4 z-30">
        
        {/* Tech Specs Summary */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-center max-w-md bg-white/[0.02] border border-white/[0.04] rounded-2xl p-4 backdrop-blur-md">
          <span className="text-[11px] font-semibold text-white uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            WebSocket Realtime
          </span>
          <span className="text-white/10">|</span>
          <span className="text-[11px] text-muted uppercase">ERP & POS Architect</span>
          <span className="text-white/10">|</span>
          <span className="text-[11px] text-muted uppercase">WhatsApp API Suite</span>
        </div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="#services"
            className="inline-flex items-center gap-2.5 px-10 py-3.5 rounded-full border border-white/10 text-xs tracking-[0.2em] text-muted uppercase hover:text-white hover:border-white/30 hover:bg-white/[0.02] transition-all duration-500 group"
          >
            {t("cta")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-y-0.5 transition-transform duration-300"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex flex-col items-center gap-2 mt-2"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase text-muted">
            {t("scrollHint")}
          </span>
          <div className="w-[1px] h-6 bg-gradient-to-b from-white/30 to-transparent" />
        </motion.div>
      </div>

    </div>
  );
}
