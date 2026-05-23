"use client";
import { useEffect, useState } from "react";

const links = ["home","about","skills","experience","projects","contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [active, setActive]     = useState("home");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-base/95 backdrop-blur-xl border-b border-border" : ""
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

          <button onClick={() => go("home")}
            className="cursor-none font-serif italic font-black text-xl text-ink">
            Preeti<span className="text-accent">.</span>
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l}>
                <button onClick={() => go(l)}
                  className={`nav-item cursor-none capitalize ${active === l ? "active" : ""}`}>
                  {l}
                </button>
              </li>
            ))}
          </ul>

          <a href="mailto:preetisharma840040@gmail.com"
            className="hidden md:flex cursor-none items-center gap-2 text-xs font-semibold tracking-widest uppercase px-5 py-2.5 border border-border text-ink2 hover:border-accent hover:text-accent transition-all duration-300">
            Hire Me
          </a>

          <button
            onClick={() => { setOpen(v => !v); document.body.style.overflow = open ? "" : "hidden"; }}
            className="md:hidden cursor-none flex flex-col gap-1.5 p-1" aria-label="Menu">
            <span className={`block w-6 h-px bg-ink transition-all duration-300 ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-px bg-ink transition-all duration-300 ${open ? "w-6 opacity-0" : "w-4"}`} />
            <span className={`block w-6 h-px bg-ink transition-all duration-300 ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-base flex flex-col items-center justify-center transition-all duration-500 ${
        open ? "opacity-100 visible" : "opacity-0 invisible"
      }`}>
        <ul className="flex flex-col gap-5 text-center">
          {links.map((l, i) => (
            <li key={l}>
              <button onClick={() => go(l)}
                className="cursor-none font-serif italic font-black text-5xl text-ink hover:text-accent transition-colors capitalize"
                style={{ transitionDelay: open ? `${i * 0.05}s` : "0s" }}>
                {l}
              </button>
            </li>
          ))}
        </ul>
        <p className="absolute bottom-10 font-mono text-xs text-muted tracking-widest uppercase">
          preetisharma840040@gmail.com
        </p>
      </div>
    </>
  );
}
