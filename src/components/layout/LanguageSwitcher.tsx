"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLocale = () => {
    const nextLocale = locale === "ar" ? "en" : "ar";
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wider border transition-all duration-300 ${
        isPending
          ? "opacity-50 cursor-wait"
          : "border-white/10 text-muted hover:text-white hover:border-white/30"
      }`}
      id="language-switcher"
      aria-label="Switch language"
    >
      {locale === "ar" ? "EN" : "عربي"}
    </button>
  );
}
