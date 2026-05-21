"use client";
import { useEffect, useState } from "react";

const letters = ["P", "R", "E", "E", "T", "I"];

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-bg flex items-center justify-center z-[10000] transition-all duration-700 ${
        hidden ? "opacity-0 invisible" : "opacity-100 visible"
      }`}
    >
      <div className="flex gap-1">
        {letters.map((l, i) => (
          <span
            key={i}
            className="text-5xl md:text-7xl font-black grad-text animate-loader-bounce"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            {l}
          </span>
        ))}
      </div>
    </div>
  );
}
