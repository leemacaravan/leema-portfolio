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
        className="max-w-[640px] mt-6 text-left"
        style={{ fontFamily: "var(--font-patrick-hand)", fontSize: 19, lineHeight: 1.7, color: "var(--ink)" }}
      >
        <p style={{ marginBottom: 16 }}>
          I&apos;m a senior at <strong>Rensselaer Polytechnic Institute</strong> studying Computer
          Science with a minor in Economics, graduating <strong>May 2026</strong>.
        </p>
        <p style={{ marginBottom: 16 }}>
          I build things that solve real problems — internal tools that drive revenue, AI agents
          that help people, EHR integrations that keep patients on schedule. Most recently I owned
          an end-to-end portal at <strong>Daisy</strong> that&apos;s now used daily across the company.
        </p>
        <p
          style={{
            fontFamily: "var(--font-shadows)",
            color: "var(--ink-soft)",
            marginTop: 24,
            fontSize: 17,
          }}
        >
          ✦ Second-youngest of five. Daughter of Afghan refugees. The first generation in my
          family to go to college — and most of what I want to build comes from that.
        </p>
      </div>
    </section>
  );
}
