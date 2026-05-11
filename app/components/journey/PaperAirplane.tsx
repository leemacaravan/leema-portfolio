"use client";

import { useEffect, useRef } from "react";

export default function PaperAirplane() {
  const ref = useRef<SVGSVGElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const prev = useRef({ x: 0, y: 0 });
  const frameRef = useRef<number>(0);
  const isTouch = useRef(false);

  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    isTouch.current = window.matchMedia("(hover: none)").matches;

    if (isTouch.current) {
      function onScroll() {
        if (!ref.current) return;
        const max = document.body.scrollHeight - window.innerHeight;
        const progress = window.scrollY / (max || 1);
        const y = window.innerHeight * 0.2 + progress * window.innerHeight * 0.6;
        const x = window.innerWidth / 2;
        const wobble = Math.sin(window.scrollY * 0.01) * 30;
        const tilt = Math.sin(window.scrollY * 0.008) * 12;
        ref.current.style.transform = `translate(calc(-50% + ${wobble}px), 0) rotate(${tilt}deg)`;
        ref.current.style.left = `${x}px`;
        ref.current.style.top = `${y}px`;
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // Desktop: hide system cursor and let the airplane be the cursor
    document.body.style.cursor = "none";

    function onMouseMove(e: MouseEvent) {
      target.current = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener("mousemove", onMouseMove);

    pos.current = { x: window.innerWidth / 2, y: window.innerHeight * 0.7 };
    target.current = { ...pos.current };
    prev.current = { ...pos.current };

    function tick() {
      const lerp = prefersReduced ? 1 : 0.25;
      prev.current = { ...pos.current };
      pos.current.x += (target.current.x - pos.current.x) * lerp;
      pos.current.y += (target.current.y - pos.current.y) * lerp;

      if (ref.current) {
        const dx = pos.current.x - prev.current.x;
        const dy = pos.current.y - prev.current.y;
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        ref.current.style.left = `${pos.current.x}px`;
        ref.current.style.top = `${pos.current.y}px`;
        ref.current.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      }
      frameRef.current = requestAnimationFrame(tick);
    }
    frameRef.current = requestAnimationFrame(tick);

    return () => {
      document.body.style.cursor = "";
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <svg
      ref={ref}
      className="fixed pointer-events-none z-50"
      style={{ width: 80, height: 60, left: "50%", top: "70%" }}
      viewBox="0 0 100 80"
      fill="var(--paper)"
      stroke="var(--ink)"
      strokeWidth="1.5"
    >
      <path d="M5 75 L95 35 L40 40 Z" fill="var(--paper)" />
      <path d="M40 40 L55 70 L50 50 Z" fill="var(--paper-shadow)" />
      <line x1="40" y1="40" x2="50" y2="50" />
    </svg>
  );
}
