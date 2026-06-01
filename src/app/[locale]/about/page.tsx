import { useTranslations } from "next-intl";
import TeamSection from "@/components/sections/TeamSection";

export default function AboutPage() {
  return (
    <>
      <div className="pt-32" />
      <AboutContent />
      <TeamSection />
    </>
  );
}

function AboutContent() {
  const t = useTranslations("about");

  return (
    <section className="py-20 md:py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="w-[60px] h-[1px] bg-gradient-to-r from-white/40 to-transparent mx-auto mb-8" />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
          {t("title")}
        </h1>
        <p className="mt-4 text-lg text-muted font-light max-w-2xl mx-auto leading-relaxed">
          {t("subtitle")}
        </p>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="glass-card glow-border rounded-2xl p-8 text-start">
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent-dim mb-4">
              {t("mission.title")}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {t("mission.description")}
            </p>
          </div>

          {/* Vision */}
          <div className="glass-card glow-border rounded-2xl p-8 text-start">
            <h3 className="text-xs uppercase tracking-[0.2em] text-accent-dim mb-4">
              {t("vision.title")}
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              {t("vision.description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
