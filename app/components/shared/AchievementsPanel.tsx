"use client";

import { useAchievements, ACHIEVEMENTS } from "@/app/store/achievements";

export default function AchievementsPanel() {
  const { unlocked, panelOpen, togglePanel } = useAchievements();

  return (
    <div
      className="fixed bottom-0 right-0 z-[90] bg-[var(--paper)] border-2 border-[var(--ink)] border-b-0 border-r-0 transition-transform duration-400"
      style={{
        width: "min(360px, 100vw)",
        transform: panelOpen
          ? "translateY(0)"
          : `translateY(calc(100% - 50px))`,
        transitionTimingFunction: "cubic-bezier(.7,.1,.3,1)",
        fontFamily: "var(--font-patrick-hand)",
      }}
    >
      <div
        className="px-4 py-3 cursor-pointer flex justify-between items-center border-b border-dashed border-[var(--ink-soft)] font-bold tracking-widest text-sm"
        onClick={togglePanel}
      >
        <span>ACHIEVEMENTS</span>
        <span>
          {unlocked.length} / {ACHIEVEMENTS.length} EXPLORED
        </span>
      </div>
      <div className="px-4 py-3 max-h-[380px] overflow-y-auto">
        {ACHIEVEMENTS.map((a) => {
          const done = unlocked.includes(a.id);
          return (
            <div
              key={a.id}
              className="flex items-center gap-3 py-2.5 border-b border-dotted border-[var(--ink-faint)] last:border-b-0 transition-opacity"
              style={{ opacity: done ? 1 : 0.35 }}
            >
              <div
                className="w-[22px] h-[22px] border-2 border-[var(--ink)] flex-shrink-0 flex items-center justify-center text-lg font-bold"
                style={{
                  fontFamily: "var(--font-caveat)",
                  color: "var(--accent)",
                }}
              >
                {done ? "✓" : ""}
              </div>
              <div>
                <h4
                  className="text-base tracking-wide mb-0.5"
                  style={{ fontFamily: "var(--font-shadows)" }}
                >
                  {a.title}
                </h4>
                <p className="text-sm text-[var(--ink-soft)]">{a.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
