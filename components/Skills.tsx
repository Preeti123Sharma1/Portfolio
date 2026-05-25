"use client";
import { useEffect } from "react";
import { skills } from "@/lib/data";

export default function Skills() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const fill = entry.target.querySelector<HTMLDivElement>(".skill-bar-fill");
          if (fill) setTimeout(() => { fill.style.width = fill.dataset.width + "%"; }, 100);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".skill-row").forEach((r) => obs.observe(r));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="bg-surface py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div data-reveal="up">
            <p className="section-label mb-3">02 — What I Know</p>
            <h2 className="font-serif font-black leading-none text-ink"
              style={{ fontSize:"clamp(2.2rem,5vw,4rem)" }}>
              My <em className="italic text-accent">Skills</em>
            </h2>
          </div>
          <p className="font-mono text-xs text-muted" data-reveal="right" data-delay="2">
            {skills.length} technologies
          </p>
        </div>

        {/* Skills list */}
        <div className="grid lg:grid-cols-2 gap-x-16">
          {skills.map(({ name, pct }, i) => (
            <div
              key={name}
              className="skill-row group flex items-center gap-3 sm:gap-5 py-5 border-b border-line"
              data-reveal="up"
              data-delay={String((i % 4) + 1)}
            >
              <span className="font-mono text-[0.6rem] text-muted w-5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="font-serif font-bold text-sm sm:text-lg text-ink flex-1 group-hover:text-accent transition-colors duration-300">
                {name}
              </span>
              <div className="flex items-center gap-3 flex-shrink-0">
                <div className="w-24 h-0.5 bg-border rounded-full overflow-hidden">
                  <div className="skill-bar-fill" data-width={pct} />
                </div>
                <span className="font-mono text-xs text-muted w-8 text-right">{pct}%</span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 font-mono text-xs text-muted" data-reveal="up" data-delay="5">
          — always learning more.
        </p>
      </div>
    </section>
  );
}
