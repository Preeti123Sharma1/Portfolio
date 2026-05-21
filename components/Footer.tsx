"use client";

const links = ["home", "about", "projects", "contact"];

export default function Footer() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-bg border-t border-white/[0.07] py-10">
      <div className="max-w-6xl mx-auto px-8 flex flex-wrap items-center justify-between gap-4">
        <span className="text-xl font-black tracking-widest grad-text">PS</span>
        <p className="text-sm text-muted">
          © 2025 Preeti Sharma. Designed &amp; Built with ♥
        </p>
        <div className="flex gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="text-sm text-muted hover:text-accent transition-colors capitalize cursor-none"
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
