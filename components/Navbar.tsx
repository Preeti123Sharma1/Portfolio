"use client";
import { useEffect, useState } from "react";

const links = ["home", "about", "skills", "experience", "projects", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-16 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-bg/85 backdrop-blur-xl border-b border-white/[0.07]"
            : "py-5"
        }`}
      >
        {/* Logo */}
        <span className="text-2xl font-black tracking-widest grad-text">PS</span>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className={`nav-link-item capitalize cursor-none ${active === l ? "active" : ""}`}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] cursor-none p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#f0f0f8] transition-all duration-500 ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#f0f0f8] transition-all duration-500 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#f0f0f8] transition-all duration-500 ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-bg flex items-center justify-center transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col gap-8 text-center">
          {links.map((l) => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-4xl font-bold text-muted hover:text-accent transition-colors capitalize cursor-none"
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
