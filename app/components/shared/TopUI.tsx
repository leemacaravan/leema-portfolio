"use client";

import { useAchievements } from "@/app/store/achievements";

interface TopUIProps {
  showBack?: boolean;
  onBack?: () => void;
}

export default function TopUI({ showBack, onBack }: TopUIProps) {
  const { togglePanel, toggleSound, soundEnabled } = useAchievements();

  return (
    <>
      {showBack && (
        <button
          onClick={onBack}
          className="torn-paper fixed top-4 left-4 z-[100] w-11 h-11 bg-[var(--paper)] border-2 border-[var(--ink)] flex items-center justify-center text-lg cursor-pointer hover:-rotate-3 hover:scale-105 transition-transform"
          title="Back"
          style={{ fontFamily: "var(--font-patrick-hand)" }}
        >
          ←
        </button>
      )}
      <div className="fixed top-4 right-4 z-[100] flex gap-2.5">
        <button
          className="torn-paper w-11 h-11 bg-[var(--paper)] border-2 border-[var(--ink)] flex items-center justify-center text-lg cursor-pointer hover:-rotate-3 hover:scale-105 transition-transform"
          title="Sound"
          onClick={toggleSound}
          style={{ fontFamily: "var(--font-patrick-hand)" }}
        >
          {soundEnabled ? "♪" : "♩"}
        </button>
        <button
          className="torn-paper w-11 h-11 bg-[var(--paper)] border-2 border-[var(--ink)] flex items-center justify-center text-lg cursor-pointer hover:-rotate-3 hover:scale-105 transition-transform"
          title="Achievements"
          onClick={togglePanel}
          style={{ fontFamily: "var(--font-patrick-hand)" }}
        >
          ♥
        </button>
      </div>
    </>
  );
}
