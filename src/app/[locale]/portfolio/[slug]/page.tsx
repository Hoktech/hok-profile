import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import portfolioData from "@/data/portfolio.json";
import AnimatedReveal from "@/components/ui/AnimatedReveal";

interface Project {
  slug: string;
  category: { en: string; ar: string };
  title: { en: string; ar: string };
  description: { en: string; ar: string };
  year: string;
  techStack: string[];
  link?: string;
  images?: string[];
}

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const project = portfolioData.projects.find((p) => p.slug === slug);
  if (!project) return {};

  const isAr = locale === "ar";
  const activeLocale = locale as "ar" | "en";

  const title = `${project.title[activeLocale]} — ${isAr ? "مشاريع هوك للتقنيات" : "HOK Technologies Projects"}`;
  const description = project.description[activeLocale];
  const keywords = [...project.techStack, project.category[activeLocale], project.title[activeLocale], "HOK Technologies"];

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `https://www.hokportal.com/${locale}/portfolio/${slug}`,
      type: "website",
      images: project.images ? project.images.map((img) => `https://www.hokportal.com${img}`) : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.images ? project.images.map((img) => `https://www.hokportal.com${img}`) : [],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const rawProject = portfolioData.projects.find((p) => p.slug === slug);

  if (!rawProject) notFound();

  const project = rawProject as unknown as Project;
  const activeLocale = locale as "ar" | "en";
  const isAr = locale === "ar";

  const schemaCreativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title[activeLocale],
    "description": project.description[activeLocale],
    "genre": project.category[activeLocale],
    "dateCreated": project.year,
    "url": `https://www.hokportal.com/${locale}/portfolio/${project.slug}`,
    "creator": {
      "@type": "ProfessionalService",
      "name": isAr ? "هوك للتقنيات" : "HOK Technologies",
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
        "name": isAr ? "أعمالنا" : "Portfolio",
        "item": `https://www.hokportal.com/${locale}/portfolio`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title[activeLocale],
        "item": `https://www.hokportal.com/${locale}/portfolio/${project.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaCreativeWork) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }}
      />
      <div className="pt-32 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <AnimatedReveal>
            {/* Back link */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors duration-300 mb-12"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              {locale === "ar" ? "العودة للمشاريع" : "Back to Projects"}
            </Link>

            {/* Category */}
            <span className="text-[10px] uppercase tracking-[0.3em] text-accent-dim">
              {project.category[activeLocale]}
            </span>

            {/* Title */}
            <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {project.title[activeLocale]}
            </h1>

            {/* Year */}
            <p className="mt-4 text-sm text-muted">{project.year}</p>
          </AnimatedReveal>

          {/* Image placeholder */}
          <AnimatedReveal delay={0.2}>
            <div className="mt-12 aspect-video rounded-2xl bg-surface-light glass-card glow-border overflow-hidden flex items-center justify-center">
              <span className="text-4xl font-bold text-white/5 tracking-tighter">
                {project.title[activeLocale]}
              </span>
            </div>
          </AnimatedReveal>

          {/* Description */}
          <AnimatedReveal delay={0.3}>
            <div className="mt-12">
              <h2 className="text-xs uppercase tracking-[0.2em] text-accent-dim mb-4">
                {locale === "ar" ? "عن المشروع" : "About the Project"}
              </h2>
              <p className="text-lg text-muted leading-relaxed">
                {project.description[activeLocale]}
              </p>
            </div>
          </AnimatedReveal>

          {/* Tech Stack */}
          <AnimatedReveal delay={0.4}>
            <div className="mt-12">
              <h2 className="text-xs uppercase tracking-[0.2em] text-accent-dim mb-4">
                {locale === "ar" ? "التقنيات المستخدمة" : "Tech Stack"}
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm px-4 py-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedReveal>

          {/* Link */}
          {project.link && (
            <AnimatedReveal delay={0.5}>
              <div className="mt-12">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-white/10 text-sm tracking-wider text-muted hover:text-white hover:border-white/30 transition-all duration-500"
                >
                  {locale === "ar" ? "زيارة المشروع" : "Visit Project"}
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </AnimatedReveal>
          )}
        </div>
      </div>
    </>
  );
}
