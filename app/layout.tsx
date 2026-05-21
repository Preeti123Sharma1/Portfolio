import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preeti Sharma — Web Designer",
  description:
    "Creative Web Designer with 2+ years of experience building responsive and user-friendly websites. Skilled in UI/UX design, wireframing, and front-end development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
