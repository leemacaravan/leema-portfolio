export default function AboutSection() {
  return (
    <section
      className="flex flex-col items-center justify-center relative text-center px-5 py-10"
      style={{ minHeight: "70vh" }}
    >
      <h2
        className="font-bold tracking-[3px]"
        style={{
          fontFamily: "var(--font-caveat)",
          fontSize: "clamp(36px, 6vw, 64px)",
          WebkitTextStroke: "1.5px var(--ink)",
          color: "transparent",
          textShadow: "3px 3px 0 var(--paper-shadow)",
        }}
      >
        ABOUT
      </h2>
      <div
        className="max-w-[560px] mt-6 text-left"
        style={{ fontFamily: "var(--font-patrick-hand)", fontSize: 19, lineHeight: 1.7, color: "var(--ink)" }}
      >
        <p>
          Senior at <strong>Rensselaer Polytechnic Institute</strong> studying CS with a minor in
          Economics, graduating <strong>May 2026</strong>. I build things that solve real
          problems — internal tools, AI agents, and EHR integrations. Most recently I owned an
          end-to-end portal at <strong>Daisy</strong> that&apos;s now used daily across the company.
        </p>
      </div>
    </section>
  );
}
