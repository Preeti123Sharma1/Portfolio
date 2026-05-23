"use client";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="bg-surface py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div data-reveal="up">
            <p className="section-label mb-3">04 — What I&apos;ve Built</p>
            <h2 className="font-serif font-black leading-none text-ink"
              style={{ fontSize:"clamp(2.2rem,5vw,4rem)" }}>
              Recent <em className="italic text-accent">Projects</em>
            </h2>
          </div>
          <p className="font-mono text-xs text-muted" data-reveal="right" data-delay="2">
            {projects.length} projects delivered
          </p>
        </div>

        <div className="stagger">
          {projects.map((p) => (
            <a
              key={p.num}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 py-5 border-b border-line -mx-4 px-4 hover:bg-card transition-colors duration-300 cursor-none"
            >
              {/* Number */}
              <span className="font-mono text-[0.6rem] text-muted/40 w-7 flex-shrink-0">{p.num}</span>

              {/* Name */}
              <h3 className="font-serif font-bold text-xl md:text-2xl text-ink group-hover:text-accent transition-colors duration-300 flex-1 min-w-0">
                {p.name}
              </h3>

              {/* Tags */}
              <div className="hidden md:flex gap-2 flex-shrink-0">
                {p.tags.map((t) => (
                  <span key={t}
                    className="font-mono text-[0.6rem] uppercase tracking-wider text-muted border border-border px-2 py-0.5 group-hover:border-accent/40 transition-colors duration-300">
                    {t}
                  </span>
                ))}
              </div>

              {/* Desc */}
              <p className="hidden lg:block text-xs text-muted max-w-[220px] flex-shrink-0 leading-relaxed">
                {p.desc}
              </p>

              {/* Arrow */}
              <div className="flex-shrink-0 w-8 h-8 border border-border flex items-center justify-center text-muted group-hover:border-accent group-hover:bg-accent group-hover:text-base transition-all duration-300">
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H7M17 7v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
