"use client";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center relative text-center px-5 py-10"
    >
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
        LEEMA CARAVAN
      </h2>
      <div
        className="mt-2 tracking-[2px] text-[var(--ink-soft)]"
        style={{ fontFamily: "var(--font-patrick-hand)", fontSize: 18 }}
      >
        Computer Science · RPI · Class of 2026
      </div>

      {/* Character on cloud */}
      <svg
        className="mt-5"
        style={{ width: 280, height: "auto" }}
        viewBox="0 0 280 160"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
      >
        <ellipse cx="140" cy="120" rx="100" ry="30" fill="#fff" />
        <ellipse cx="100" cy="105" rx="35" ry="22" fill="#fff" />
        <ellipse cx="180" cy="105" rx="35" ry="22" fill="#fff" />
        <ellipse cx="140" cy="95" rx="40" ry="25" fill="#fff" />
        <circle cx="170" cy="80" r="14" fill="#fff" />
        <circle cx="166" cy="78" r="2" fill="var(--ink)" />
        <circle cx="174" cy="78" r="2" fill="var(--ink)" />
        <path d="M158 75 Q156 70 162 68 M178 68 Q184 70 182 75" strokeWidth="1.2" />
        <path d="M163 84 Q170 87 177 84" strokeLinecap="round" />
        <path d="M170 94 L120 96 L100 100 L75 105" strokeLinecap="round" strokeWidth="2" />
        <path d="M120 96 L115 110 M100 100 L93 113" strokeLinecap="round" />
      </svg>

      <div className="mt-6 flex gap-3.5 flex-wrap justify-center">
        <a
          href="/leema-caravan-resume.pdf"
          download
          target="_blank"
          rel="noopener"
          className="contact-card"
          style={{
            background: "var(--paper)",
            border: "2px solid var(--ink)",
            padding: "10px 18px",
            fontFamily: "var(--font-patrick-hand)",
            textDecoration: "none",
            color: "var(--ink)",
            transform: "rotate(-1deg)",
            transition: "transform 0.3s",
            boxShadow: "3px 3px 0 var(--ink-soft)",
            display: "block",
          }}
        >
          <div style={{ fontFamily: "var(--font-shadows)", fontSize: 12, color: "var(--accent)", letterSpacing: 2 }}>↓ DOWNLOAD</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>Resume (PDF)</div>
        </a>
        <a
          href="https://github.com/leemacaravan"
          target="_blank"
          rel="noopener"
          className="contact-card"
          style={{
            background: "var(--paper)",
            border: "2px solid var(--ink)",
            padding: "10px 18px",
            fontFamily: "var(--font-patrick-hand)",
            textDecoration: "none",
            color: "var(--ink)",
            transform: "rotate(1deg)",
            transition: "transform 0.3s",
            boxShadow: "3px 3px 0 var(--ink-soft)",
            display: "block",
          }}
        >
          <div style={{ fontFamily: "var(--font-shadows)", fontSize: 12, color: "var(--accent)", letterSpacing: 2 }}>↗ GITHUB</div>
          <div style={{ fontSize: 16, fontWeight: 700 }}>@leemacaravan</div>
        </a>
      </div>

      <div
        className="absolute bottom-8 left-1/2 text-sm tracking-[2px] text-[var(--ink-soft)]"
        style={{
          fontFamily: "var(--font-patrick-hand)",
          transform: "translateX(-50%)",
          animation: "bounce 2s ease-in-out infinite",
        }}
      >
        SCROLL TO FLY ↓
      </div>
    </section>
  );
}
