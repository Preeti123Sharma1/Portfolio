"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const follower = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      follower.current.x += (mouse.current.x - follower.current.x) * 0.12;
      follower.current.y += (mouse.current.y - follower.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = follower.current.x + "px";
        ringRef.current.style.top = follower.current.y + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-2.5 h-2.5 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 border border-accent/50 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-300"
      />
    </>
  );
}
