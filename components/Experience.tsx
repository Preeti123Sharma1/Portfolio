"use client";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-base py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        <div className="mb-16" data-reveal="up">
          <p className="section-label mb-3">03 — Where I&apos;ve Worked</p>
          <h2 className="font-serif font-black leading-none text-ink"
            style={{ fontSize:"clamp(2.2rem,5vw,4rem)" }}>
            Work <em className="italic text-accent">Experience</em>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="flex flex-col">
            {experience.map((exp, i) => (
              <div key={i} data-reveal="up" data-delay={String(i + 1)}
                className="group relative md:pl-12 py-10 border-b border-line last:border-0">

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-12 w-3 h-3 rounded-full bg-base border-2 border-border group-hover:border-accent group-hover:bg-accent transition-all duration-300 -translate-x-[5px]" />

                <div className="grid md:grid-cols-[220px_1fr] gap-6 md:gap-12 items-start">
                  <div>
                    <span className="font-mono text-[0.62rem] uppercase tracking-widest text-muted block mb-2">{exp.date}</span>
                    <p className="font-semibold text-sm text-accent">{exp.company}</p>
                    <p className="text-xs text-muted mt-0.5">{exp.location}</p>
                    {/* {exp.current && (
                      <span className="inline-block mt-2 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/30">
                        Current
                      </span>
                    )} */}
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl text-ink mb-3 group-hover:text-accent transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <p className="text-ink2 text-sm leading-relaxed max-w-xl">{exp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
