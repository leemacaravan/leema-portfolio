"use client";

import { useEffect, useRef, useState } from "react";
import { useAchievements, ACHIEVEMENTS } from "@/app/store/achievements";

export default function Toast() {
  const { pendingToast, clearToast } = useAchievements();
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<{ title: string; desc: string } | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!pendingToast) return;

    const ach = ACHIEVEMENTS.find((a) => a.id === pendingToast);
    if (!ach) return;

    clearToast();
    setCurrent({ title: ach.title, desc: ach.desc });
    setVisible(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setVisible(false), 3000);
  }, [pendingToast, clearToast]);

  if (!current) return null;

  return (
    <div
      className="fixed z-[200] top-1/2 left-1/2 bg-[var(--paper)] border-[2.5px] border-[var(--ink)] px-8 py-5 text-center pointer-events-none transition-all duration-500"
      style={{
        transform: visible
          ? "translate(-50%, -50%) scale(1) rotate(-2deg)"
          : "translate(-50%, -50%) scale(0.5)",
        opacity: visible ? 1 : 0,
        boxShadow: "6px 6px 0 var(--ink)",
        transitionTimingFunction: "cubic-bezier(.7,.1,.3,1.5)",
      }}
    >
      <div
        className="text-sm tracking-[3px]"
        style={{ fontFamily: "var(--font-shadows)", color: "var(--accent)" }}
      >
        ★ ACHIEVEMENT UNLOCKED ★
      </div>
      <div
        className="text-4xl font-bold my-1"
        style={{ fontFamily: "var(--font-caveat)" }}
      >
        {current.title}
      </div>
      <div className="text-sm text-[var(--ink-soft)]">{current.desc}</div>
    </div>
  );
}
