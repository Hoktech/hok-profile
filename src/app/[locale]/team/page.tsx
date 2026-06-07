import teamData from "@/data/team.json";
import TeamSection from "@/components/sections/TeamSection";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "فريق العمل — قادتنا ومطورونا | هوك للتقنيات"
    : "Our Team — Leaders & Developers | HOK Technologies";

  const description = isAr
    ? "تعرف على الفريق المبدع خلف نجاح هوك للتقنيات بقيادة المهندس محمود صلاح، مطور متكامل وباني أنظمة المؤسسات."
    : "Meet the creative team behind HOK Technologies, led by Eng. Mahmoud Salah, full-stack developer and enterprise systems architect.";

  const keywords = isAr
    ? ["فريق هوك للتقنيات", "المهندس محمود صلاح", "مطورين برمجيات", "فريق البرمجة", "خبراء أنظمة ERP", "هوك للتقنيات"]
    : ["HOK Tech Team", "Eng. Mahmoud Salah", "Software Engineers", "Full Stack Developers", "ERP Experts", "HOK Technologies"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.hokportal.com/${locale}/team`,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function TeamPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";
  const activeLocale = locale as "ar" | "en";
  const leader = teamData.leader;

  const schemaProfile = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "name": isAr ? `الملف المهني لـ ${leader.name[activeLocale]}` : `${leader.name[activeLocale]}'s Profile`,
    "description": leader.bio[activeLocale],
    "url": `https://www.hokportal.com/${locale}/team`,
    "mainEntity": {
      "@type": "Person",
      "name": leader.name[activeLocale],
      "jobTitle": leader.title[activeLocale],
      "image": `https://www.hokportal.com${leader.image}`,
      "worksFor": {
        "@type": "ProfessionalService",
        "name": isAr ? "هوك للتقنيات" : "HOK Technologies",
        "url": "https://www.hokportal.com"
      },
      "url": `https://www.hokportal.com/${locale}/team`,
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
        "name": isAr ? "فريقنا" : "Team",
        "item": `https://www.hokportal.com/${locale}/team`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaProfile) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <div className="pt-32" />
      <TeamSection />
    </>
  );
}
