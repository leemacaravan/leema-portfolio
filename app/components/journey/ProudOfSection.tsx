"use client";

import { useAchievements } from "@/app/store/achievements";
import { PROUD_OF } from "@/app/data/content";

export default function ProudOfSection() {
  const { unlock } = useAchievements();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-5 py-10">
      <h2
        className="font-bold tracking-[3px]"
        style={{
          fontFamily: "var(--font-caveat)",
          fontSize: "clamp(48px, 8vw, 96px)",
          WebkitTextStroke: "1.5px var(--ink)",
          color: "transparent",
          textShadow: "3px 3px 0 var(--paper-shadow)",
        }}
      >
        PROUD OF
      </h2>
      <div
        className="mt-2 tracking-[2px] text-[var(--ink-soft)]"
        style={{ fontFamily: "var(--font-patrick-hand)", fontSize: 18 }}
      >
        a few things I&apos;ve earned along the way
      </div>

      <div
        className="flex gap-6 flex-wrap justify-center mt-8"
        style={{ maxWidth: 1100 }}
        onMouseEnter={() => unlock("proud")}
      >
        {PROUD_OF.map((item, i) => {
          const rotations = [-2, 1, -1, 2, -1.5, 1];
          const Card = (
            <div
              key={item.label}
              className="w-[180px] p-5 bg-[var(--paper)] border-2 border-[var(--ink)] text-center cursor-pointer transition-transform duration-300 hover:rotate-0 hover:scale-105"
              style={{
                transform: `rotate(${rotations[i % rotations.length]}deg)`,
                boxShadow: "4px 4px 0 var(--ink-soft)",
              }}
            >
              <div
                style={{ fontFamily: "var(--font-shadows)", fontSize: 11, color: "var(--accent)", letterSpacing: 1 }}
              >
                {item.label}
              </div>
              <div style={{ fontFamily: "var(--font-caveat)", fontSize: 22, fontWeight: 700 }}>
                {item.name}
              </div>
              <div style={{ fontFamily: "var(--font-caveat)", fontSize: 32, color: "var(--accent)", margin: "6px 0" }}>
                {item.symbol}
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-soft)", letterSpacing: 1, whiteSpace: "pre-line" }}>
                {item.desc}
              </div>
            </div>
          );

          return item.href ? (
            <a key={item.label} href={item.href} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
              {Card}
            </a>
          ) : (
            Card
          );
        })}
      </div>
    </section>
  );
}
