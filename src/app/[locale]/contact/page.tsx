import ContactClient from "./ContactClient";
import siteData from "@/data/site.json";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "تواصل معنا — ابدأ مشروعك البرمجي اليوم | هوك للتقنيات"
    : "Contact Us — Start Your Software Project Today | HOK Technologies";

  const description = isAr
    ? "تواصل مع هوك للتقنيات اليوم لمناقشة مشروعك القادم في أنظمة ERP، نقاط البيع POS، تطبيقات الموبايل، أو حلول WhatsApp API."
    : "Get in touch with HOK Technologies today to discuss your next project in ERP systems, POS solutions, mobile apps, or WhatsApp API integration.";

  const keywords = isAr
    ? ["تواصل مع هوك", "رقم واتساب هوك", "رقم تليفون محمود صلاح", "بريد الكتروني هوك", "استشارة برمجية مجانية", "هوك للتقنيات"]
    : ["Contact HOK Technologies", "HOK Whatsapp number", "Mahmoud Salah contact", "Email HOK Tech", "Software development consultation", "HOK Technologies"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.hokportal.com/${locale}/contact`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const { whatsapp } = siteData.company;

  const schemaContactPage = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": isAr ? "تواصل معنا — هوك للتقنيات" : "Contact Us — HOK Technologies",
    "description": isAr
      ? "صفحة التواصل الرسمية مع فريق هوك للتقنيات. ابدأ مشروعك البرمجي اليوم."
      : "Official contact page for HOK Technologies. Start your software project today.",
    "url": `https://www.hokportal.com/${locale}/contact`,
    "mainEntity": {
      "@type": "ProfessionalService",
      "name": isAr ? "هوك للتقنيات" : "HOK Technologies",
      "image": "https://www.hokportal.com/images/hero/mahmoud-salah.png",
      "telePhone": `+${whatsapp}`,
      "email": "ceo@hokportal.com",
      "url": "https://www.hokportal.com",
      "sameAs": [
        "https://www.facebook.com/hoktech/"
      ]
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
        "name": isAr ? "تواصل معنا" : "Contact",
        "item": `https://www.hokportal.com/${locale}/contact`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaContactPage) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <ContactClient />
    </>
  );
}
