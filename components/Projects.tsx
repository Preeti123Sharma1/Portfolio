import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="bg-bg py-28">
      <div className="max-w-6xl mx-auto px-8">
        <SectionHeader label="What I've Built" title="Recent" italic="Projects" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.num}
              className="reveal-up group relative bg-surface border border-white/[0.07] rounded-2xl p-7 flex flex-col gap-4 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_24px_50px_rgba(0,0,0,0.4)] transition-all duration-300"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              {/* Number */}
              <span className="text-4xl font-black text-white/[0.05] group-hover:text-accent/15 transition-colors leading-none">
                {p.num}
              </span>

              {/* Body */}
              <div className="flex-1">
                <h4 className="font-bold mb-2">{p.name}</h4>
                <p className="text-sm text-muted leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-full text-[0.7rem] font-semibold bg-accent/10 border border-accent/20 text-accent"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live link */}
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.07] text-muted text-xs font-semibold hover:border-accent hover:text-accent hover:bg-accent/5 transition-all duration-300 group/link"
                aria-label={`View ${p.name}`}
              >
                <span>View Live</span>
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 17L17 7M17 7H7M17 7v10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
