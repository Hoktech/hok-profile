import portfolioData from "@/data/portfolio.json";
import PortfolioSection from "@/components/sections/PortfolioSection";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "أعمالنا ومشاريعنا — معرض أعمال هوك للتقنيات"
    : "Our Portfolio — Showcase of Projects | HOK Technologies";

  const description = isAr
    ? "تصفح معرض مشاريعنا المميزة في هوك للتقنيات، بما في ذلك نظام HOK ERP، ومنصة WPCloud، وأداة WPSender لأتمتة الواتساب."
    : "Browse our portfolio of featured projects at HOK Technologies, including HOK ERP, WPCloud WhatsApp API, and WPSender automation platform.";

  const keywords = isAr
    ? ["مشاريع هوك للتقنيات", "معرض الأعمال", "سابقة أعمال", "نظام ERP", "أتمتة الواتساب", "مشاريع برمجية منفذة", "هوك للتقنيات"]
    : ["HOK Portfolio", "Projects Showcase", "Case Studies", "ERP Project", "WhatsApp Automation Project", "Completed Software Projects", "HOK Technologies"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.hokportal.com/${locale}/portfolio`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const activeLocale = locale as "ar" | "en";

  const schemaCollection = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": isAr ? "معرض أعمال هوك للتقنيات" : "HOK Technologies Portfolio",
    "description": isAr
      ? "مشاريع برمجية وأنظمة متكاملة قمنا بتطويرها لعملائنا."
      : "Software projects and enterprise systems we have developed for our clients.",
    "url": `https://www.hokportal.com/${locale}/portfolio`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": portfolioData.projects.length,
      "itemListElement": portfolioData.projects.map((proj, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": proj.title[activeLocale],
          "description": proj.description[activeLocale],
          "url": `https://www.hokportal.com/${locale}/portfolio/${proj.slug}`
        }
      }))
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
        "name": isAr ? "أعمالنا" : "Portfolio",
        "item": `https://www.hokportal.com/${locale}/portfolio`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCollection) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <div className="pt-32" />
      <PortfolioSection />
    </>
  );
}
