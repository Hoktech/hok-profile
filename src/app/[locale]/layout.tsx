import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../globals.css";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isAr = locale === "ar";

  const title = isAr
    ? "هوك للتقنيات — حلول المؤسسات والابتكار الرقمي"
    : "HOK Technologies — Enterprise Solutions & Digital Innovation";
  const description = isAr
    ? "هوك للتقنيات تبني أنظمة ERP و POS و CRM وتطبيقات Flutter وخدمات WhatsApp API. بقيادة م. محمود صلاح."
    : "HOK Technologies builds premium ERP, POS, CRM systems, Flutter mobile apps, and WhatsApp API services. Led by Eng. Mahmoud Salah.";

  return {
    metadataBase: new URL("https://www.hokportal.com"),
    title,
    description,
    icons: {
      icon: [
        { url: "/favicon.svg", type: "image/svg+xml" },
      ],
      shortcut: "/favicon.svg",
      apple: "/favicon.svg",
    },
    openGraph: {
      title,
      description,
      url: "https://www.hokportal.com",
      siteName: "HOK Technologies",
      images: [
        {
          url: "/images/hero/mahmoud-salah.png",
          width: 1200,
          height: 630,
          alt: isAr ? "م. محمود صلاح — هوك للتقنيات" : "Eng. Mahmoud Salah — HOK Technologies",
        },
      ],
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/hero/mahmoud-salah.png"],
    },
  };
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  const isRtl = locale === "ar";

  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={locale} dir={isRtl ? "rtl" : "ltr"}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Cairo:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-background text-foreground flex flex-col min-h-screen">
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
