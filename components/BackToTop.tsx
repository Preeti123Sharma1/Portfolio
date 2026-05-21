"use client";
import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`cursor-none fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full grad-bg text-white flex items-center justify-center shadow-[0_8px_24px_rgba(167,139,250,0.4)] hover:-translate-y-1 transition-all duration-300 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      ↑
    </button>
  );
}
