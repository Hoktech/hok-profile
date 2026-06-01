"use client";

import AnimatedReveal from "./AnimatedReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "start";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`mb-16 md:mb-20 ${align === "center" ? "text-center" : "text-start"}`}>
      <AnimatedReveal>
        <div className={`line-accent mb-6 ${align === "center" ? "mx-auto" : ""}`} />
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-base md:text-lg text-muted font-light max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
      </AnimatedReveal>
    </div>
  );
}
