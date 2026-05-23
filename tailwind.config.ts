import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:  ["'DM Sans'",  "sans-serif"],
        serif: ["'Fraunces'", "serif"],
        mono:  ["'DM Mono'",  "monospace"],
      },
      colors: {
        // ── Light palette ─────────────────────────
        // #FFFFE3  warm cream  → page background
        // #4A4A4A  charcoal    → headings / body text
        // #6D8196  steel blue  → accent / highlights
        // #CBCBCB  silver      → borders / muted text
        // #F5F4E8  off-cream   → card / surface bg
        // ──────────────────────────────────────────
        base:    "#FFFFE3",   // page background
        surface: "#F5F4E8",   // card / alternate section bg
        card:    "#ECEBD8",   // deeper card bg
        ink:     "#4A4A4A",   // primary text
        ink2:    "#6b6b6b",   // secondary text
        muted:   "#9a9a9a",   // placeholder / tertiary
        border:  "#CBCBCB",   // full border
        line:    "rgba(74,74,74,0.1)",  // subtle divider
        accent:  "#6D8196",   // steel blue accent
        accentD: "#556878",   // darker accent for hover
        silver:  "#CBCBCB",   // silver
      },
    },
  },
  plugins: [],
};

export default config;
