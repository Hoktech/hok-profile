"use client";

import { useTranslations, useLocale } from "next-intl";
import AnimatedReveal from "@/components/ui/AnimatedReveal";
import siteData from "@/data/site.json";

export default function ContactClient() {
  const t = useTranslations("contact");
  const locale = useLocale() as "ar" | "en";
  const { emails, whatsapp } = siteData.company;
  const { facebook } = siteData.social;

  const contactCards = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
      label: "WhatsApp",
      value: `+${whatsapp}`,
      href: `https://wa.me/${whatsapp}`,
      glow: "rgba(37,211,102,0.15)",
      border: "rgba(37,211,102,0.25)",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
        </svg>
      ),
      label: "Facebook",
      value: "HOK Tech",
      href: facebook,
      glow: "rgba(24,119,242,0.15)",
      border: "rgba(24,119,242,0.25)",
    },
  ];

  return (
    <div className="pt-32 pb-32 px-6">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <AnimatedReveal>
          <div className="text-center mb-16">
            <div className="w-[60px] h-[1px] bg-gradient-to-r from-white/40 to-transparent mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
              {t("title")}
            </h1>
            <p className="mt-4 text-lg text-muted font-light">
              {t("subtitle")}
            </p>
          </div>
        </AnimatedReveal>

        {/* Social / Quick Contact Cards */}
        <AnimatedReveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {contactCards.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 flex items-center gap-4 group hover:scale-[1.02] transition-all duration-300"
                style={{
                  backgroundColor: card.glow,
                  borderColor: card.border,
                  boxShadow: `0 0 20px ${card.glow}`,
                }}
              >
                <div className="text-white/70 group-hover:text-white transition-colors duration-300">
                  {card.icon}
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-muted mb-0.5">
                    {card.label}
                  </span>
                  <span className="text-sm font-semibold text-white">
                    {card.value}
                  </span>
                </div>
                <svg className="ms-auto text-muted group-hover:text-white group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-all duration-300" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>
        </AnimatedReveal>

        {/* Email Cards */}
        <AnimatedReveal delay={0.2}>
          <h2 className="text-xs uppercase tracking-[0.25em] text-muted mb-4">
            {locale === "ar" ? "البريد الإلكتروني" : "Email Addresses"}
          </h2>
          <div className="space-y-3 mb-12">
            {emails.map((e) => (
              <a
                key={e.address}
                href={`mailto:${e.address}`}
                className="glass-card glow-border rounded-xl px-5 py-4 flex items-center gap-4 group hover:scale-[1.01] transition-all duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-muted group-hover:text-white transition-colors duration-300 shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.15em] text-muted/60 mb-0.5">
                    {e.label}
                  </span>
                  <span className="text-sm text-white font-medium">{e.address}</span>
                </div>
                <svg className="ms-auto text-muted group-hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
            ))}
          </div>
        </AnimatedReveal>

        {/* Contact Form */}
        <AnimatedReveal delay={0.3}>
          <div className="glass-card glow-border rounded-2xl p-8">
            <h2 className="text-xs uppercase tracking-[0.25em] text-muted mb-8">
              {locale === "ar" ? "أرسل رسالة" : "Send a Message"}
            </h2>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted mb-2">
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-muted/30 focus:outline-none focus:border-white/20 transition-colors duration-300"
                    placeholder={t("name")}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-muted mb-2">
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-muted/30 focus:outline-none focus:border-white/20 transition-colors duration-300"
                    placeholder={t("email")}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-muted mb-2">
                  {t("message")}
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl px-4 py-3 text-sm text-white placeholder-muted/30 focus:outline-none focus:border-white/20 transition-colors duration-300 resize-none"
                  placeholder={t("message")}
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-white text-black font-semibold text-sm tracking-wider hover:bg-neutral-200 transition-all duration-300"
              >
                {t("send")}
              </button>
            </form>
          </div>
        </AnimatedReveal>

      </div>
    </div>
  );
}
