"use client";
import { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    // Reveal hero elements after loader
    const t = setTimeout(() => {
      document.querySelectorAll(".hero-reveal").forEach((el) =>
        el.classList.add("visible")
      );
    }, 1900);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center gap-16 px-8 md:px-16 pt-32 pb-16 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute w-[500px] h-[500px] rounded-full bg-accent blur-[80px] opacity-15 -top-24 -left-24 animate-blob-float" />
        <div className="blob absolute w-[400px] h-[400px] rounded-full bg-accent2 blur-[80px] opacity-15 -bottom-24 right-[10%] animate-blob-float [animation-delay:3s]" />
        <div className="blob absolute w-[300px] h-[300px] rounded-full bg-accent3 blur-[80px] opacity-15 top-[40%] left-[40%] animate-blob-float [animation-delay:6s]" />
        <div className="absolute inset-0 grid-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 max-w-2xl">
        <div className="hero-reveal reveal-up inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent text-xs font-medium mb-6">
          Available for work ✦
        </div>

        <h1 className="flex flex-col font-black leading-[1.05] mb-4">
          <span className="hero-reveal reveal-up delay-1 text-[clamp(3rem,7vw,6rem)] text-[#f0f0f8]">
            Preeti
          </span>
          <span className="hero-reveal reveal-up delay-2 text-[clamp(3rem,7vw,6rem)] font-serif italic grad-text">
            Sharma
          </span>
        </h1>

        <p className="hero-reveal reveal-up delay-3 text-accent font-semibold tracking-widest uppercase text-sm mb-3">
          Web Designer &amp; UI/UX Specialist
        </p>

        <p className="hero-reveal reveal-up delay-4 text-muted text-base leading-relaxed mb-10 max-w-lg">
          Crafting responsive, user-friendly digital experiences with 2+ years
          of expertise in UI/UX design, wireframing, and front-end development.
        </p>

        <div className="hero-reveal reveal-up delay-5 flex flex-wrap gap-4 mb-12">
          <button
            onClick={() => scrollTo("projects")}
            className="cursor-none px-8 py-3.5 rounded-full grad-bg text-white font-semibold text-sm shadow-[0_8px_30px_rgba(167,139,250,0.3)] hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(167,139,250,0.4)] transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="cursor-none px-8 py-3.5 rounded-full border border-white/10 text-[#f0f0f8] font-semibold text-sm hover:border-accent hover:text-accent hover:-translate-y-1 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>

        <div className="hero-reveal reveal-up delay-6 flex items-center gap-4 text-muted text-xs">
          <span>Scroll down</span>
          <div className="scroll-line" />
        </div>
      </div>

      {/* Avatar visual */}
      <div className="relative z-10 hidden lg:flex items-center justify-center flex-shrink-0">
        <div className="relative w-[300px] h-[300px]">
          {/* Rotating ring */}
          <svg
            className="absolute inset-0 w-full h-full animate-ring-rotate"
            viewBox="0 0 300 300"
          >
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a78bfa" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
            <circle
              cx="150" cy="150" r="140"
              fill="none"
              stroke="url(#ringGrad)"
              strokeWidth="1.5"
              strokeDasharray="6 4"
            />
          </svg>

          {/* Avatar circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full bg-surface border border-white/[0.07] flex items-center justify-center">
            <span className="text-6xl font-black grad-text">PS</span>
          </div>

          {/* Floating tags */}
          {[
            { label: "UI/UX",      cls: "top-2 -left-5  [animation-delay:0s]"  },
            { label: "React.js",   cls: "top-2 -right-5 [animation-delay:1s]"  },
            { label: "WordPress",  cls: "bottom-10 -left-8 [animation-delay:2s]" },
            { label: "Tailwind",   cls: "bottom-10 -right-5 [animation-delay:3s]" },
          ].map(({ label, cls }) => (
            <div
              key={label}
              className={`absolute ${cls} px-3 py-1.5 bg-surface border border-white/[0.07] rounded-full text-xs font-semibold text-[#f0f0f8] whitespace-nowrap animate-tag-float`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
