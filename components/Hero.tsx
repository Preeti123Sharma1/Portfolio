"use client";
import { useEffect, useRef, useState } from "react";

const marqueeItems = [
  "UI/UX Design","·","React.js","·","Tailwind CSS","·","WordPress","·",
  "Bootstrap","·","SCSS","·","HTML5","·","CSS3","·",
  "UI/UX Design","·","React.js","·","Tailwind CSS","·","WordPress","·",
  "Bootstrap","·","SCSS","·","HTML5","·","CSS3","·",
];

const roles = ["Web Designer", "UI/UX Specialist", "Front-end Developer"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 2100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setRoleIdx(i => (i + 1) % roles.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth  - 0.5) * 14;
      const y = (e.clientY / window.innerHeight - 0.5) * 14;
      const el = document.getElementById("h-deco");
      if (el) el.style.transform = `translate(${x}px,${y}px)`;
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const tr = "transition-all duration-700";
  const v  = visible ? "opacity-100 translate-y-0 translate-x-0" : "";

  return (
    <section id="home" ref={ref} className="relative min-h-screen bg-base flex flex-col overflow-hidden">

      {/* Decorative layer */}
      <div id="h-deco" className="absolute inset-0 pointer-events-none transition-transform duration-700 ease-out">
        {/* Soft accent glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-[160px]"
          style={{ background: "rgba(109,129,150,0.08)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px]"
          style={{ background: "rgba(74,74,74,0.04)" }} />
        {/* Dot grid */}
        <div className="absolute inset-0"
          style={{ backgroundImage:"radial-gradient(rgba(74,74,74,0.07) 1px,transparent 1px)", backgroundSize:"40px 40px" }} />
        {/* Watermark */}
        <span className="absolute right-0 top-16 font-serif font-black italic leading-none select-none pointer-events-none"
          style={{ fontSize:"20vw", color:"rgba(74,74,74,0.04)" }}>PS</span>
        {/* Decorative lines */}
        <div className="absolute left-0 right-0 hidden lg:block" style={{ top:"38%", height:"1px", background:"rgba(74,74,74,0.06)" }} />
        <div className="absolute top-0 bottom-0 hidden lg:block" style={{ left:"58%", width:"1px", background:"rgba(74,74,74,0.06)" }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex-1 flex flex-col lg:flex-row items-center max-w-7xl mx-auto w-full px-6 md:px-12 pt-28 pb-12 gap-16">

        {/* Left */}
        <div className="flex-1 max-w-2xl">

          {/* Available badge */}
          <div className={`${tr} ${v} opacity-0 translate-y-4 flex items-center gap-3 mb-8`}
            style={{ transitionDelay: "0s" }}>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="section-label">Available for work</span>
          </div>

          {/* Name */}
          <h1 className="font-serif font-black leading-[0.92] mb-6">
            <span className={`${tr} ${v} opacity-0 translate-y-6 block text-ink`}
              style={{ fontSize:"clamp(3.5rem,8vw,7rem)", transitionDelay:"0.08s" }}>
              Preeti
            </span>
            <span className={`${tr} ${v} opacity-0 translate-y-6 block italic text-accent`}
              style={{ fontSize:"clamp(3.5rem,8vw,7rem)", transitionDelay:"0.16s" }}>
              Sharma
            </span>
          </h1>

          {/* Role ticker */}
          <div className={`${tr} ${v} opacity-0 translate-y-4 flex items-center gap-3 mb-6`}
            style={{ transitionDelay:"0.24s" }}>
            <span className="w-6 h-px bg-accent flex-shrink-0" />
            <span className="font-mono text-sm tracking-widest uppercase text-ink2 transition-all duration-500">
              {roles[roleIdx]}
            </span>
          </div>

          {/* Bio */}
          <p className={`${tr} ${v} opacity-0 translate-y-4 text-ink2 text-base leading-relaxed max-w-md mb-10`}
            style={{ transitionDelay:"0.32s" }}>
            Crafting responsive, user-friendly digital experiences with{" "}
            <span className="text-ink font-semibold">2+ years</span> of expertise
            in UI/UX design, wireframing, and front-end development.
          </p>

          {/* CTAs */}
          <div className={`${tr} ${v} opacity-0 translate-y-4 flex flex-wrap gap-4 mb-12`}
            style={{ transitionDelay:"0.40s" }}>
            <button onClick={() => go("projects")}
              className="cursor-none group flex items-center gap-3 bg-accent text-base px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-accentD transition-colors duration-300">
              View My Work
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button onClick={() => go("contact")}
              className="cursor-none text-sm font-semibold tracking-wide px-7 py-3.5 border border-border text-ink2 hover:border-accent hover:text-accent transition-all duration-300">
              Get In Touch
            </button>
          </div>

          {/* Scroll hint */}
          <div className={`${tr} ${v} opacity-0 translate-y-4 flex items-center gap-3 text-muted`}
            style={{ transitionDelay:"0.48s" }}>
            <div className="w-px h-10 bg-border relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-accent animate-[progressFill_2s_ease_infinite]" />
            </div>
            <span className="font-mono text-xs tracking-widest uppercase">Scroll to explore</span>
          </div>
        </div>

        {/* Right — profile card */}
        <div className={`${tr} ${v} opacity-0 translate-x-8 hidden lg:block flex-shrink-0`}
          style={{ transitionDelay:"0.32s" }}>
          <div className="relative w-[300px]">
            <div className="bg-surface border border-border p-8 relative"
              style={{ boxShadow:"0 8px 40px rgba(74,74,74,0.08)" }}>
              {/* Corner accents */}
              {["top-2 left-2 border-t border-l","top-2 right-2 border-t border-r",
                "bottom-2 left-2 border-b border-l","bottom-2 right-2 border-b border-r"].map((c,i) => (
                <span key={i} className={`absolute w-4 h-4 ${c} border-accent/40`} />
              ))}

              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-card border border-border mx-auto flex items-center justify-center mb-4">
                  <span className="font-serif font-black italic text-2xl text-accent">PS</span>
                </div>
                <h3 className="font-serif font-bold text-lg text-ink">Preeti Sharma</h3>
                <p className="font-mono text-xs text-muted mt-1 tracking-wider uppercase">Web Designer</p>
              </div>

              <div>
                {[
                  { k:"Location",   v:"Lucknow, India" },
                  { k:"Experience", v:"2+ Years" },
                  { k:"Status",     v:"Open to Work" },
                  { k:"Focus",      v:"UI/UX & Front-end" },
                ].map(({ k, v }) => (
                  <div key={k} className="flex justify-between items-center py-2.5 border-b border-line last:border-0">
                    <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">{k}</span>
                    <span className="text-xs font-semibold text-ink">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-accent text-white px-3 py-1.5 text-[0.65rem] font-bold tracking-widest uppercase float-y">
              Lucknow, IN
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative z-10 marquee-wrap py-3 bg-surface border-t border-border">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i}
              className="px-5 font-mono text-[0.65rem] tracking-widest uppercase whitespace-nowrap"
              style={{ color: item === "·" ? "#6D8196" : "#9a9a9a" }}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
