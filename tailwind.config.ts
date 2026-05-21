import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      colors: {
        bg: "#0a0a0f",
        bg2: "#111118",
        surface: "#1c1c28",
        accent: "#a78bfa",
        accent2: "#ec4899",
        accent3: "#38bdf8",
        muted: "#8888aa",
      },
      backgroundImage: {
        grad: "linear-gradient(135deg, #a78bfa, #ec4899)",
        grad2: "linear-gradient(135deg, #38bdf8, #a78bfa)",
      },
      animation: {
        "blob-float": "blobFloat 8s ease-in-out infinite",
        "ring-rotate": "ringRotate 20s linear infinite",
        "tag-float": "tagFloat 4s ease-in-out infinite",
        "scroll-slide": "scrollSlide 2s ease infinite",
        "loader-bounce": "loaderBounce 0.8s ease infinite alternate",
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-left": "fadeLeft 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-right": "fadeRight 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        blobFloat: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-30px) scale(1.05)" },
          "66%": { transform: "translate(-20px,20px) scale(0.95)" },
        },
        ringRotate: { to: { transform: "rotate(360deg)" } },
        tagFloat: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        scrollSlide: { to: { left: "100%" } },
        loaderBounce: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-20px)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(40px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeLeft: {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        fadeRight: {
          from: { opacity: "0", transform: "translateX(40px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
