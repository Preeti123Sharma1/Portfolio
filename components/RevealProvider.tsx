"use client";
import { useEffect } from "react";

// Runs once at page level — observes ALL [data-reveal] and .stagger elements
export default function RevealProvider() {
  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
    );

    const staggerObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            staggerObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: "0px 0px -30px 0px" }
    );

    // Small delay so all components have mounted
    const t = setTimeout(() => {
      document.querySelectorAll("[data-reveal]").forEach((el) => revealObs.observe(el));
      document.querySelectorAll(".stagger").forEach((el) => staggerObs.observe(el));
    }, 100);

    return () => {
      clearTimeout(t);
      revealObs.disconnect();
      staggerObs.disconnect();
    };
  }, []);

  return null;
}
