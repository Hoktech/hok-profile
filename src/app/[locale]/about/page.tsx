import { useTranslations } from "next-intl";
import TeamSection from "@/components/sections/TeamSection";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "من نحن — هوك للتقنيات | حلول برمجية للمؤسسات"
    : "About Us — HOK Technologies | Enterprise Software Solutions";

  const description = isAr
    ? "تعرف على قصة هوك للتقنيات، رسالتنا ورؤيتنا في تمكين الشركات بحلول تقنية متقدمة ونقاط بيع وأنظمة تخطيط الموارد ERP المبتكرة."
    : "Learn about HOK Technologies, our mission, vision, and team. We empower businesses with advanced enterprise systems, custom ERP, and POS solutions.";

  const keywords = isAr
    ? ["من نحن هوك للتقنيات", "رسالة هوك", "رؤية هوك للتقنيات", "قصتنا", "شركاء هوك للتقنيات", "هوك للتقنيات"]
    : ["About HOK Technologies", "HOK Mission", "HOK Vision", "HOK Technologies history", "Enterprise tech partner", "HOK Technologies"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.hokportal.com/${locale}/about`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const schemaAboutPage = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": isAr ? "من نحن — هوك للتقنيات" : "About Us — HOK Technologies",
    "description": isAr
      ? "تعرف على قصة هوك للتقنيات ورسالتنا ورؤيتنا في تمكين الشركات بأحدث الحلول التقنية."
      : "Learn about HOK Technologies, our story, mission, and vision in driving digital transformation.",
    "url": `https://www.hokportal.com/${locale}/about`,
    "publisher": {
      "@type": "ProfessionalService",
      "name": isAr ? "هوك للتقنيات" : "HOK Technologies",
      "image": "https://www.hokportal.com/images/hero/mahmoud-salah.png",
      "url": "https://www.hokportal.com"
    }
  };

  const schemaBreadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": isAr ? "الرئيسية" : "Home",
        "item": `https://www.hokportal.com/${locale}`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": isAr ? "من نحن" : "About Us",
        "item": `https://www.hokportal.com/${locale}/about`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaAboutPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
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
