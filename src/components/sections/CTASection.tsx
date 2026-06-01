"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import AnimatedReveal from "../ui/AnimatedReveal";

export default function CTASection() {
  const t = useTranslations("sections.cta");

  return (
    <section className="py-32 md:py-40 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      
      {/* Background visual element */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimatedReveal>
          <div className="line-accent mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            {t("title")}
          </h2>
          <p className="text-lg md:text-xl text-muted font-light mb-12 max-w-2xl mx-auto leading-relaxed">
            {t("subtitle")}
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-white text-black font-semibold text-sm tracking-wider hover:bg-neutral-200 transition-all duration-300 group"
          >
            {t("button")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </AnimatedReveal>
      </div>
    </section>
  );
}
