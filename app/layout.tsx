import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preeti Sharma — Web Designer & UI/UX",
  description:
    "Creative Web Designer with 2+ years of experience. Skilled in UI/UX, wireframing, React, Tailwind, WordPress and front-end development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
