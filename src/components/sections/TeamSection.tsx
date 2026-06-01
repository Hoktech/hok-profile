"use client";

import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import teamData from "@/data/team.json";
import SectionHeading from "../ui/SectionHeading";
import AnimatedReveal from "../ui/AnimatedReveal";

export default function TeamSection() {
  const t = useTranslations("sections.team");
  const locale = useLocale() as "ar" | "en";
  const leader = teamData.leader;

  return (
    <section id="team" className="py-32 md:py-40 px-6 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        {/* Team Leader Feature */}
        <AnimatedReveal>
          <div className="max-w-3xl mx-auto glass-card glow-border rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Photo */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 shrink-0">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-surface-light relative">
                  <Image
                    src={leader.image}
                    alt={leader.name[locale]}
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 768px) 128px, 160px"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="text-center md:text-start">
                <span className="text-[10px] uppercase tracking-[0.3em] text-accent-dim">
                  {t("leader")}
                </span>
                <h3 className="mt-2 text-2xl md:text-3xl font-bold text-white tracking-tight">
                  {leader.name[locale]}
                </h3>
                <p className="mt-1 text-sm text-muted">
                  {leader.title[locale]}
                </p>
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  {leader.bio[locale]}
                </p>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-2">
                  {leader.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
