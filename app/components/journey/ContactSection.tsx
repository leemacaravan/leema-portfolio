"use client";

import { useAchievements } from "@/app/store/achievements";

const CONTACTS = [
  { label: "EMAIL",    href: "mailto:leemacaravan@gmail.com", val: "leemacaravan@gmail.com" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/leema-caravan-4738791aa/", val: "/in/leema-caravan" },
  { label: "GITHUB",   href: "https://github.com/leemacaravan", val: "@leemacaravan" },
  { label: "PHONE",    href: "tel:+15163093396", val: "+1 (516) 309-3396" },
];

const ROTATIONS = [-1, 1, -2, 1.5];

export default function ContactSection() {
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
        CONTACT
      </h2>
      <div
        className="mt-2 tracking-[2px] text-[var(--ink-soft)]"
        style={{ fontFamily: "var(--font-patrick-hand)", fontSize: 18 }}
      >
        Find me — pick your method
      </div>

      <div className="flex gap-5 flex-wrap justify-center mt-8">
        {CONTACTS.map((c, i) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel={c.href.startsWith("http") ? "noopener" : undefined}
            onClick={() => unlock("sociable")}
            className="transition-transform duration-300 hover:rotate-0 hover:-translate-y-1"
            style={{
              background: "var(--paper)",
              border: "2px solid var(--ink)",
              padding: "18px 24px",
              fontFamily: "var(--font-patrick-hand)",
              textDecoration: "none",
              color: "var(--ink)",
              transform: `rotate(${ROTATIONS[i]}deg)`,
              boxShadow: "3px 3px 0 var(--ink-soft)",
              display: "block",
            }}
          >
            <div
              style={{ fontFamily: "var(--font-shadows)", fontSize: 12, color: "var(--accent)", letterSpacing: 2 }}
            >
              {c.label}
            </div>
            <div style={{ fontSize: 18, fontWeight: 700 }}>{c.val}</div>
          </a>
        ))}
      </div>

      <div
        className="mt-16 tracking-[2px]"
        style={{ fontFamily: "var(--font-shadows)", color: "var(--ink-faint)" }}
      >
        ✦ END OF JOURNEY · THANKS FOR FLYING ✦
      </div>

      {/* Footer */}
      <footer className="mt-16 flex flex-col items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/badge.svg" alt="Leema Caravan badge" width={80} height={80} />
        <div
          style={{ fontFamily: "var(--font-shadows)", fontSize: 13, color: "var(--ink-faint)", letterSpacing: 1 }}
        >
          Leema Caravan © 2026
        </div>
      </footer>
    </section>
  );
}
