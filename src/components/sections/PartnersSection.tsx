"use client";

import { useTranslations } from "next-intl";
import partnersData from "@/data/partners.json";
import SectionHeading from "../ui/SectionHeading";
import AnimatedReveal from "../ui/AnimatedReveal";

export default function PartnersSection() {
  const t = useTranslations("sections.partners");

  return (
    <section id="partners" className="py-32 md:py-40 px-6 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {partnersData.partners.map((partner, index) => (
            <AnimatedReveal key={partner.id} delay={index * 0.1}>
              <a href={partner.website} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-center w-40 h-20 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/10 transition-all duration-500">
                <span className="text-lg font-semibold text-muted/40 group-hover:text-muted transition-colors duration-500 tracking-tight">
                  {partner.name}
                </span>
              </a>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
