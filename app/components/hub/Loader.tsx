"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface LoaderProps {
  onDone: () => void;
}

const C = 2 * Math.PI * 85;

export default function Loader({ onDone }: LoaderProps) {
  const [pct, setPct] = useState(0);
  const [phase, setPhase] = useState<"loading" | "logo" | "done">("loading");
  const ringRef = useRef<SVGCircleElement>(null);
  const onDoneRef = useRef(onDone);
  useEffect(() => { onDoneRef.current = onDone; });

  useEffect(() => {
    let current = 0;
    let active = true;
    const interval = setInterval(() => {
      current += Math.random() * 7 + 2;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        if (!active) return;
        setPct(100);
        setTimeout(() => { if (active) setPhase("logo"); }, 400);
        setTimeout(() => {
          if (!active) return;
          setPhase("done");
          setTimeout(() => { if (active) onDoneRef.current(); }, 600);
        }, 1200);
        return;
      }
      if (active) setPct(Math.floor(current));
    }, 90);
    return () => { active = false; clearInterval(interval); };
  }, []);

  useEffect(() => {
    if (ringRef.current) {
      ringRef.current.style.strokeDashoffset = String(C * (1 - pct / 100));
    }
  }, [pct]);

  return (
    <div
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-[var(--paper)]"
      style={{
        opacity: phase === "done" ? 0 : 1,
        visibility: phase === "done" ? "hidden" : "visible",
        transition: "opacity 0.6s ease, visibility 0.6s ease",
      }}
    >
      {phase === "logo" ? (
        <div
          className="flex flex-col items-center gap-4"
          style={{ animation: "float 1s ease-in-out" }}
        >
          <Image
            src="/logo.svg"
            alt="Leema Caravan"
            width={160}
            height={54}
            priority
          />
        </div>
      ) : (
        <>
          <div className="relative w-[200px] h-[200px] flex items-center justify-center">
            <svg viewBox="0 0 200 200" className="absolute inset-0">
              <circle
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="#999"
                strokeWidth="2"
                strokeDasharray="3 6"
                opacity="0.4"
              />
              <circle
                ref={ringRef}
                cx="100"
                cy="100"
                r="85"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="3"
                strokeDasharray={C}
                strokeDashoffset={C}
                strokeLinecap="round"
                style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
              />
            </svg>
            <span
              className="text-[56px] font-bold"
              style={{ fontFamily: "var(--font-caveat)" }}
            >
              {pct}%
            </span>
          </div>
          <div
            className="mt-7 text-[22px] tracking-[2px] text-[var(--ink-soft)]"
            style={{ fontFamily: "var(--font-shadows)" }}
          >
            SKETCHING THE WORLD…
          </div>
        </>
      )}
    </div>
  );
}
