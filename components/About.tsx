"use client";
import { education } from "@/lib/data";

const stats = [
  { n: "2+", label: "Years\nExperience" },
  { n: "8+", label: "Projects\nDelivered" },
  { n: "7",  label: "Skills\nMastered"   },
  { n: "2",  label: "Companies\nWorked"  },
];

export default function About() {
  return (
    <section id="about" className="bg-base py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div data-reveal="up">
            <p className="section-label mb-3">01 — Who I Am</p>
            <h2 className="font-serif font-black leading-none text-ink"
              style={{ fontSize:"clamp(2.2rem,5vw,4rem)" }}>
              About <em className="italic text-accent">Me</em>
            </h2>
          </div>
          <p className="text-ink2 text-sm leading-relaxed max-w-xs" data-reveal="right" data-delay="2">
            Designer focused on building experiences that are both beautiful and functional.
          </p>
        </div>

        {/* Bio + Stats */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 mb-20 items-start">

          {/* Bio */}
          <div data-reveal="up" data-delay="1">
            <p className="font-serif text-xl font-light leading-relaxed text-ink mb-5 max-w-2xl">
              &ldquo;Creative Web Designer with{" "}
              <em className="italic font-semibold text-accent">2 years of experience</em>{" "}
              building responsive and user-friendly websites.&rdquo;
            </p>
            <p className="text-ink2 leading-relaxed mb-8 max-w-xl text-sm">
              Skilled in UI/UX design, wireframing, and front-end development.
              Focused on creating attractive, functional websites that improve
              user experience and support business growth.
            </p>
            <div className="flex flex-col">
              {[
                { label: "Location", value: "Sector-F Jankipuram, Lucknow, India — 226021" },
                { label: "Phone",    value: "+91-8400403524" },
                { label: "Email",    value: "preetisharma840040@gmail.com" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-baseline gap-6 py-3 border-b border-line">
                  <span className="font-mono text-[0.62rem] uppercase tracking-widest text-muted w-20 flex-shrink-0">{label}</span>
                  <span className="text-sm text-ink2">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="stagger grid grid-cols-2 gap-3">
            {stats.map(({ n, label }) => (
              <div key={label} className="card group p-5 relative overflow-hidden">
                <div className="font-serif font-black text-4xl leading-none mb-2 text-accent">{n}</div>
                <p className="font-mono text-[0.62rem] uppercase tracking-wider text-muted whitespace-pre-line leading-relaxed">{label}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-4 mb-8" data-reveal="up">
            <p className="section-label">Education</p>
            <div className="flex-1 h-px bg-border" />
          </div>
          <div className="grid md:grid-cols-2 gap-4 stagger">
            {education.map((ed, i) => (
              <div key={i} className="card group p-6 relative overflow-hidden">
                <span className="section-label mb-3 block">{ed.date}</span>
                <h4 className="font-serif font-bold text-base text-ink mb-1 leading-snug">{ed.degree}</h4>
                <p className="text-sm text-ink2">{ed.school}</p>
                <p className="text-xs text-muted mt-0.5">{ed.location}</p>
                <div className="absolute top-0 left-0 w-0.5 h-0 bg-accent group-hover:h-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
