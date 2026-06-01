"use client";

import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import portfolioData from "@/data/portfolio.json";
import SectionHeading from "../ui/SectionHeading";
import AnimatedReveal from "../ui/AnimatedReveal";

export default function PortfolioSection() {
  const t = useTranslations("sections.portfolio");
  const locale = useLocale() as "ar" | "en";
  const featured = portfolioData.projects.filter((p) => p.featured);

  return (
    <section id="portfolio" className="py-32 md:py-40 px-6 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <SectionHeading title={t("title")} subtitle={t("subtitle")} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, index) => (
            <AnimatedReveal key={project.id} delay={index * 0.1}>
              <Link href={`/portfolio/${project.slug}`}>
                <div className="glass-card glow-border rounded-2xl overflow-hidden group cursor-pointer h-full">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-surface-light relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold text-white/5 tracking-tighter group-hover:text-white/10 transition-all duration-500">
                        {project.title[locale]}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-accent-dim">
                      {project.category[locale]}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-white tracking-tight">
                      {project.title[locale]}
                    </h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
                      {project.description[locale]}
                    </p>

                    {/* Tech stack tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] px-2 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedReveal>
          ))}
        </div>

        {/* View all link */}
        <AnimatedReveal delay={0.4}>
          <div className="mt-16 text-center">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 text-sm tracking-wider text-muted hover:text-white hover:border-white/30 transition-all duration-500"
            >
              {t("viewAll")}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
