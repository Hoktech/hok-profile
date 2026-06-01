"use client";

import { useTranslations, useLocale } from "next-intl";
import skillsData from "@/data/skills.json";
import SectionHeading from "../ui/SectionHeading";
import AnimatedReveal from "../ui/AnimatedReveal";

export default function SkillsSection() {
  const t = useTranslations("sections.skills");
  const locale = useLocale() as "ar" | "en";

  return (
    <section id="skills" className="py-32 md:py-40 px-6 bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skillsData.categories.map((category, catIndex) => (
            <AnimatedReveal key={category.id} delay={catIndex * 0.08}>
              <div className="glass-card rounded-2xl p-6 h-full">
                <h3 className="text-xs uppercase tracking-[0.2em] text-accent-dim mb-5 font-medium">
                  {category.title[locale]}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.06] text-muted hover:text-white hover:border-white/15 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
