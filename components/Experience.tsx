import SectionHeader from "./SectionHeader";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="bg-bg2 py-28">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader label="Where I've Worked" title="Work" italic="Experience" />
        <div className="max-w-3xl mx-auto flex flex-col gap-6">
          {experience.map((exp, i) => (
            <div key={i} className={`reveal-up flex gap-6 delay-${i}`}>
              {/* Marker */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full grad-bg flex-shrink-0 shadow-[0_0_0_4px_rgba(167,139,250,0.15)]" />
                {i < experience.length - 1 && (
                  <div className="flex-1 w-px bg-white/[0.07] mt-2" />
                )}
              </div>

              {/* Card */}
              <div className="exp-card flex-1 bg-surface border border-white/[0.07] rounded-2xl p-7 mb-2 hover:border-accent/30 transition-all duration-300">
                <div className="flex items-start justify-between gap-4 mb-1">
                  <div>
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <span className="block text-sm font-semibold text-accent mt-0.5">
                      {exp.company}
                    </span>
                    <span className="block text-xs text-muted">{exp.location}</span>
                  </div>
                  {exp.current && (
                    <span className="flex-shrink-0 px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wider bg-accent3/10 text-accent3 border border-accent3/30">
                      Current
                    </span>
                  )}
                </div>
                <span className="block text-xs text-muted mb-3">{exp.date}</span>
                <p className="text-sm text-muted leading-relaxed">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
