"use client";
import { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import { skills } from "@/lib/data";

export default function Skills() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const fill = entry.target.querySelector<HTMLDivElement>(".skill-fill");
          if (fill) {
            const w = fill.dataset.width;
            setTimeout(() => { fill.style.width = w + "%"; }, 200);
          }
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll(".skill-card").forEach((c) => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="skills" className="bg-bg py-28">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader label="What I Know" title="My" italic="Skills" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map(({ name, pct }, i) => (
            <div
              key={name}
              className="skill-card reveal-up bg-surface border border-white/[0.07] rounded-2xl p-7 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all duration-300"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-4 text-accent">
                <SkillIcon name={name} />
              </div>
              <h4 className="font-bold mb-3">{name}</h4>
              <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden mb-1.5">
                <div className="skill-fill" data-width={pct} />
              </div>
              <span className="text-xs text-muted font-semibold">{pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    "HTML5": (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M4 3h16l-1.5 16.5L12 21l-6.5-1.5L4 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M8 8h8M8.5 12h7l-.5 5-3 1-3-1-.2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "CSS3": (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M4 3h16l-1.5 16.5L12 21l-6.5-1.5L4 3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M16 8H8.5l.3 3.5H15l-.5 4.5-2.5.7-2.5-.7-.2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "React.js": (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="1.5" transform="rotate(120 12 12)"/>
      </svg>
    ),
    "SCSS": (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 14c.5 1.5 2 2 3.5 1.5s2-2 1-3-3-1-3.5-2.5.5-3 2-3 2.5.5 3 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Bootstrap": (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12h4.5a2 2 0 000-4H8v8h5a2 2 0 000-4H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    "Tailwind CSS": (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.09 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.51 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.49 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.51 12 7 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    "WordPress": (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 12h18M12 3c-2 3-2 6 0 9s2 6 0 9M12 3c2 3 2 6 0 9s-2 6 0 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  };
  return <>{icons[name] ?? <span className="text-sm font-bold">{name[0]}</span>}</>;
}
