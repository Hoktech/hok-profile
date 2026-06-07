"use client";

import { useTranslations } from "next-intl";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import siteData from "@/data/site.json";

function AnimatedCounter({ target, duration = 1.8 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!isInView || hasStarted.current || !ref.current) return;
    hasStarted.current = true;

    const el = ref.current;
    const startTime = performance.now();
    const durationMs = duration * 1000;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      // Write directly to DOM — no React setState, no re-render
      el.textContent = String(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return <span ref={ref}>0</span>;
}

export default function StatsSection() {
  const t = useTranslations("sections.stats");
  const { projects, clients, yearsOfExperience, technologies } = siteData.stats;

  const stats = [
    { value: projects, label: t("projects"), suffix: "+" },
    { value: clients, label: t("clients"), suffix: "+" },
    { value: yearsOfExperience, label: t("years"), suffix: "+" },
    { value: technologies, label: t("technologies"), suffix: "+" },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-surface relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tighter">
                <AnimatedCounter target={stat.value} />
                <span className="text-muted">{stat.suffix}</span>
              </div>
              <p className="mt-3 text-xs md:text-sm text-muted tracking-wide uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
