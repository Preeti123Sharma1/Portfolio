"use client";
import { useEffect, useState } from "react";

export default function Loader() {
  const [out, setOut] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setOut(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div id="loader" className={out ? "out" : ""}>
      <div className="loader-name">
        {"Preeti".split("").map((ch, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.08}s` }}>{ch}</span>
        ))}
        <span style={{ animationDelay: "0.55s", color: "#6D8196" }}>.</span>
      </div>
      <div className="loader-progress" />
    </div>
  );
}
