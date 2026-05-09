import { JOURNEY_STOPS } from "@/app/data/content";

export default function JourneySection() {
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
        JOURNEY
      </h2>
      <div
        className="mt-2 tracking-[2px] text-[var(--ink-soft)]"
        style={{ fontFamily: "var(--font-patrick-hand)", fontSize: 18 }}
      >
        My path so far...
      </div>

      <div className="flex gap-[60px] mt-10 flex-wrap justify-center">
        {JOURNEY_STOPS.map((stop) => (
          <a
            key={stop.id}
            href={stop.href}
            target="_blank"
            rel="noopener"
            className="w-[220px] text-center cursor-pointer transition-transform duration-300 hover:-translate-y-2"
            style={{ textDecoration: "none" }}
          >
            <div
              className="font-bold"
              style={{
                fontFamily: "var(--font-caveat)",
                fontSize: 48,
                WebkitTextStroke: "1.5px var(--ink)",
                color: "transparent",
              }}
            >
              {stop.name}
            </div>
            <div
              className="inline-block mt-1.5 px-2.5 py-1 bg-[var(--paper)] border border-[var(--ink)]"
              style={{
                fontFamily: "var(--font-patrick-hand)",
                fontSize: 14,
                transform: "rotate(-2deg)",
              }}
            >
              {stop.years}
            </div>
            <div
              className="mt-2.5 whitespace-pre-line"
              style={{ fontFamily: "var(--font-shadows)", fontSize: 16, color: "var(--ink-soft)" }}
            >
              {stop.role}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
