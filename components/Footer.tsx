"use client";

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-ink py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <button onClick={() => go("home")}
          className="cursor-none font-serif italic font-black text-xl text-base hover:text-accent transition-colors">
          Preeti<span className="text-accent">.</span>
        </button>
        <nav className="flex flex-wrap gap-3 sm:gap-6">
          {["home","about","skills","experience","projects","contact"].map((l) => (
            <button key={l} onClick={() => go(l)}
              className="cursor-none font-mono text-[0.65rem] uppercase tracking-widest text-base/40 hover:text-[#ffffe3] transition-colors capitalize">
              {l}
            </button>
          ))}
        </nav>
        <p className="font-mono text-[0.65rem] text-base/30">© 2025 Preeti Sharma</p>
      </div>
    </footer>
  );
}
