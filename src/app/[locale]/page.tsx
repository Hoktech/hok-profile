import HeroSection from "@/components/hero/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import SkillsSection from "@/components/sections/SkillsSection";
import StatsSection from "@/components/sections/StatsSection";
import TeamSection from "@/components/sections/TeamSection";
import PartnersSection from "@/components/sections/PartnersSection";
import CTASection from "@/components/sections/CTASection";
import siteData from "@/data/site.json";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "هوك للتقنيات — أنظمة ERP ونقاط البيع POS وتطبيقات الموبايل"
    : "HOK Technologies — Custom ERP, POS, CRM & Mobile Apps";

  const description = isAr
    ? "هوك للتقنيات هي فريق برمجيات رائد لبناء أنظمة ERP المخصصة، نقاط البيع POS، منصات CRM، تطبيقات الفلاتر، وبوابات WhatsApp API الرسمية وغير الرسمية."
    : "HOK Technologies is a leading software team building custom ERP systems, POS solutions, CRM platforms, Flutter mobile apps, and official/unofficial WhatsApp APIs.";

  const keywords = isAr
    ? ["هوك للتقنيات", "أنظمة ERP مخصصة", "نقاط البيع POS", "تطبيقات فلاتر", "واتساب API", "برمجة شركات", "محمود صلاح", "WPSender", "WPCloud"]
    : ["HOK Technologies", "Custom ERP Systems", "POS Solutions", "CRM Platforms", "Flutter Apps", "WhatsApp API", "WPSender", "WPCloud", "Mahmoud Salah", "Enterprise Software"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.hokportal.com/${locale}`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const { whatsapp } = siteData.company;

  const schemaService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": isAr ? "هوك للتقنيات" : "HOK Technologies",
    "image": "https://www.hokportal.com/images/hero/mahmoud-salah.png",
    "telePhone": `+${whatsapp}`,
    "email": "ceo@hokportal.com",
    "url": `https://www.hokportal.com/${locale}`,
    "logo": "https://www.hokportal.com/favicon.svg",
    "sameAs": [
      "https://www.facebook.com/hoktech/"
    ],
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "EG",
      "addressLocality": isAr ? "القاهرة" : "Cairo"
    },
    "founder": {
      "@type": "Person",
      "name": isAr ? "م. محمود صلاح" : "Eng. Mahmoud Salah",
      "jobTitle": isAr ? "المؤسس وقائد الفريق" : "Founder & Team Leader"
    },
    "foundingDate": "2020",
    "description": isAr
      ? "فريق تقني متخصص في بناء أنظمة ERP و POS و CRM للمؤسسات، وتطبيقات الموبايل، وخدمات تكامل الـ API."
      : "We are a specialized tech team building enterprise-grade ERP, POS, CRM systems, mobile applications, and API integration services."
  };

  const schemaWebsite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": isAr ? "هوك للتقنيات" : "HOK Technologies",
    "url": `https://www.hokportal.com/${locale}`,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `https://www.hokportal.com/${locale}?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }}
      />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <SkillsSection />
      <StatsSection />
      <TeamSection />
      <PartnersSection />
      <CTASection />
    </>
  );
}
