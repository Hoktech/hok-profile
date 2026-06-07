import servicesData from "@/data/services.json";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "خدماتنا — أنظمة ERP و POS وتطوير المواقع والتطبيقات | هوك للتقنيات"
    : "Our Services — ERP, POS, Web & App Development | HOK Technologies";

  const description = isAr
    ? "اكتشف خدماتنا البرمجية المتميزة: تطوير أنظمة ERP، حلول POS، منصات CRM، تطبيقات الموبايل بـ Flutter، وربط WhatsApp API الرسمي وغير الرسمي."
    : "Explore our premium software services: Custom ERP systems, POS solutions, CRM platforms, Flutter mobile apps, and official/unofficial WhatsApp API integration.";

  const keywords = isAr
    ? ["خدمات هوك للتقنيات", "برمجة ERP", "تركيب POS", "تطوير تطبيقات Flutter", "تكامل API", "تصميم مواقع الكترونية", "هوك للتقنيات"]
    : ["HOK Services", "ERP Development", "POS Installation", "Flutter App Development", "API Integration", "Web Application Development", "HOK Technologies"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.hokportal.com/${locale}/services`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const activeLocale = locale as "ar" | "en";

  const schemaServicesList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": isAr ? "خدمات هوك للتقنيات" : "HOK Technologies Services",
    "description": isAr
      ? "تطوير أنظمة تخطيط الموارد ERP، نقاط البيع POS، إدارة علاقات العملاء CRM، تطبيقات الموبايل، وربط WhatsApp API."
      : "Development of custom ERP systems, POS solutions, CRM platforms, mobile apps, and WhatsApp API integrations.",
    "numberOfItems": servicesData.services.length,
    "itemListElement": servicesData.services.map((svc, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": svc.title[activeLocale],
        "description": svc.description[activeLocale],
        "provider": {
          "@type": "ProfessionalService",
          "name": isAr ? "هوك للتقنيات" : "HOK Technologies"
        }
      }
    }))
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
        "name": isAr ? "خدماتنا" : "Services",
        "item": `https://www.hokportal.com/${locale}/services`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaServicesList) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <div className="pt-32" />
      <ServicesSection />
      <CTASection />
    </>
  );
}
