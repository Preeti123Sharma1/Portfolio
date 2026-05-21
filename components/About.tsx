"use client";
import { useEffect, useRef } from "react";
import SectionHeader from "./SectionHeader";
import { education } from "@/lib/data";

const stats = [
  { target: 2,  label: "Years Experience" },
  { target: 8,  label: "Projects Delivered" },
  { target: 7,  label: "Skills Mastered" },
  { target: 1,  label: "Companies Worked" },
];

function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal-up,.reveal-left,.reveal-right").forEach((el) => {
      if (!el.closest("#home")) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
}

export default function About() {
  useReveal();
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.querySelectorAll<HTMLSpanElement>("[data-target]").forEach((num) => {
          const target = parseInt(num.dataset.target!);
          let start = 0;
          const step = target / (1500 / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) { num.textContent = String(target); clearInterval(timer); }
            else num.textContent = String(Math.floor(start));
          }, 16);
        });
        obs.disconnect();
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="bg-bg2 py-28">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader label="Who I Am" title="About" italic="Me" />

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-16 mb-20 items-start">
          {/* Text */}
          <div className="reveal-left">
            <p className="text-lg leading-relaxed mb-4">
              Creative Web Designer with{" "}
              <strong className="text-[#f0f0f8]">2 years of experience</strong>{" "}
              building responsive and user-friendly websites.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              Skilled in UI/UX design, wireframing, and front-end development.
              Focused on creating attractive, functional websites that improve
              user experience and support business growth.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: "📍", text: "Sector-F Jankipuram, Lucknow, India - 226021" },
                { icon: "📞", text: "+91-8400403524" },
                { icon: "✉️", text: "preetisharma840040@gmail.com" },
              ].map(({ icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-muted text-sm">
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="reveal-right grid grid-cols-2 gap-6">
            {stats.map(({ target, label }) => (
              <div
                key={label}
                className="stat-card relative bg-surface border border-white/[0.07] rounded-2xl p-8 text-center overflow-hidden hover:-translate-y-1 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-end justify-center gap-0.5">
                  <span
                    data-target={target}
                    className="text-4xl font-black grad-text"
                  >
                    0
                  </span>
                  <span className="text-2xl font-bold text-accent mb-1">+</span>
                </div>
                <span className="block text-xs text-muted mt-1">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="block-title text-2xl font-bold mb-8">Education</h3>
          <div className="timeline-wrap relative pl-8">
            {education.map((ed, i) => (
              <div
                key={i}
                className={`reveal-up relative pl-6 mb-8 delay-${i}`}
              >
                {/* dot */}
                <div className="absolute -left-[1.75rem] top-1.5 w-3.5 h-3.5 rounded-full grad-bg border-2 border-bg2 shadow-[0_0_0_3px_rgba(167,139,250,0.2)]" />
                <span className="text-[0.72rem] font-semibold text-accent uppercase tracking-wider">
                  {ed.date}
                </span>
                <h4 className="font-bold mt-1 mb-0.5">{ed.degree}</h4>
                <p className="text-sm text-muted">
                  {ed.school}, {ed.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
