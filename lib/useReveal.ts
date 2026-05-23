"use client";
import { useEffect } from "react";

// Single global reveal — safe to call from multiple components,
// each call re-scans the DOM so late-mounted elements are picked up.
export function useReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    // Observe every reveal element that hasn't been triggered yet
    document.querySelectorAll("[data-reveal]:not(.in)").forEach((el) => {
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);
}

export function useStagger() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".stagger:not(.in)").forEach((el) => {
      obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);
}
