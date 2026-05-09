import { SKILLS } from "@/app/data/content";

export default function SkillsSection() {
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
        SKILLS
      </h2>
      <div
        className="mt-2 tracking-[2px] text-[var(--ink-soft)]"
        style={{ fontFamily: "var(--font-patrick-hand)", fontSize: 18 }}
      >
        Technologies I love working with
      </div>

      <div
        className="grid mt-10"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: 30,
          maxWidth: 700,
          width: "100%",
        }}
      >
        {SKILLS.map((skill, i) => (
          <div
            key={skill.name}
            className="text-center cursor-pointer"
            style={{
              animation: `float 4s ease-in-out ${-(i * 0.3)}s infinite`,
            }}
          >
            <svg
              style={{ width: 90, height: 110, display: "block", margin: "0 auto" }}
              viewBox="0 0 90 110"
            >
              <ellipse
                cx="45"
                cy="42"
                rx="32"
                ry="38"
                fill={skill.color}
                fillOpacity="0.25"
                stroke="var(--ink)"
                strokeWidth="1.5"
              />
              <path d="M45 80 L43 84 L47 84 Z" fill="var(--ink)" />
              <path
                d="M45 84 Q40 92 48 96 Q42 102 45 108"
                fill="none"
                stroke="var(--ink)"
                strokeWidth="1"
              />
              <text
                x="45"
                y="48"
                textAnchor="middle"
                fontFamily="var(--font-caveat), cursive"
                fontSize="18"
                fontWeight="700"
                fill="var(--ink)"
              >
                {skill.name}
              </text>
            </svg>
            <div
              className="mt-1 text-sm"
              style={{ fontFamily: "var(--font-patrick-hand)" }}
            >
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
