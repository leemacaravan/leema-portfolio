"use client";

import { useAchievements } from "@/app/store/achievements";
import { PROJECTS } from "@/app/data/content";

export default function ProjectsSection() {
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
        PROJECTS
      </h2>
      <div
        className="mt-2 tracking-[2px] text-[var(--ink-soft)]"
        style={{ fontFamily: "var(--font-patrick-hand)", fontSize: 18 }}
      >
        Things I&apos;ve built
      </div>

      <div
        className="grid mt-8 px-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          width: "100%",
        }}
      >
        {PROJECTS.map((proj, i) => {
          const rotations = [0, -1, 0, 1, -1, 0];
          return (
            <div
              key={proj.id}
              className="text-left cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
              style={{
                background: "var(--paper)",
                border: "14px solid #c89968",
                boxShadow: "inset 0 0 0 2px var(--ink), 6px 6px 0 var(--ink-soft)",
                padding: 24,
                position: "relative",
              }}
              onClick={() => unlock("critic")}
            >
              <h3
                className="text-[28px] font-bold mb-1.5"
                style={{ fontFamily: "var(--font-caveat)" }}
              >
                {proj.title}
              </h3>
              <div
                className="text-[13px] tracking-[1px] mb-2.5"
                style={{ fontFamily: "var(--font-shadows)", color: "var(--accent)" }}
              >
                {proj.stack}
              </div>
              <p className="text-sm leading-relaxed text-[var(--ink-soft)]">{proj.desc}</p>
              <div className="mt-3 flex gap-3">
                {proj.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      fontFamily: "var(--font-patrick-hand)",
                      color: "var(--ink)",
                      textDecoration: "underline wavy var(--accent)",
                      fontSize: 14,
                    }}
                  >
                    {link.label}
                  </a>
                ))}
                {proj.note && (
                  <span
                    style={{ fontFamily: "var(--font-shadows)", fontSize: 13, color: "var(--ink-faint)" }}
                  >
                    {proj.note}
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
