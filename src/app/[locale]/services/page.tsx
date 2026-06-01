import { useTranslations, useLocale } from "next-intl";
import servicesData from "@/data/services.json";
import ServicesSection from "@/components/sections/ServicesSection";
import CTASection from "@/components/sections/CTASection";

export default function ServicesPage() {
  return (
    <>
      <div className="pt-32" />
      <ServicesSection />
      <CTASection />
    </>
  );
}
