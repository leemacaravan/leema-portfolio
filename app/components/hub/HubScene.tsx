"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useAchievements } from "@/app/store/achievements";

const CLOUDS = [
  { x: "5%",  top: "12%", w: 140, speed: 0.3, opacity: 0.8 },
  { x: "72%", top: "8%",  w: 110, speed: 0.5, opacity: 0.6 },
  { x: "20%", top: "22%", w: 90,  speed: 0.2, opacity: 0.5 },
  { x: "55%", top: "18%", w: 130, speed: 0.4, opacity: 0.7 },
  { x: "82%", top: "28%", w: 100, speed: 0.35, opacity: 0.55 },
  { x: "38%", top: "6%",  w: 80,  speed: 0.25, opacity: 0.45 },
];

const BIRDS = [
  { x: "15%", y: "15%", delay: "0s",   duration: "14s" },
  { x: "60%", y: "10%", delay: "4s",   duration: "18s" },
  { x: "80%", y: "20%", delay: "8s",   duration: "12s" },
];

const SPARKLES = [
  { x: "10%", y: "30%", delay: "0s"   },
  { x: "88%", y: "25%", delay: "1.2s" },
  { x: "45%", y: "8%",  delay: "2.1s" },
  { x: "70%", y: "60%", delay: "0.7s" },
  { x: "25%", y: "70%", delay: "3s"   },
];

function CloudSvg({ width }: { width: number }) {
  return (
    <svg width={width} viewBox="0 0 140 60" fill="#fff" stroke="#bbb" strokeWidth="1.5">
      <path d="M20 40 Q15 25 30 25 Q35 12 50 18 Q60 8 75 18 Q90 12 95 25 Q115 25 110 40 Q120 50 100 50 L30 50 Q10 50 20 40Z" />
    </svg>
  );
}

function BirdSvg() {
  return (
    <svg width="28" height="14" viewBox="0 0 28 14" fill="none" stroke="var(--ink-soft)" strokeWidth="1.5" strokeLinecap="round">
      <path d="M0 7 Q7 0 14 7 Q21 0 28 7" />
    </svg>
  );
}

function SparkleSvg() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="var(--accent)" strokeWidth="1.2">
      <line x1="8" y1="0" x2="8" y2="16" />
      <line x1="0" y1="8" x2="16" y2="8" />
      <line x1="2" y1="2" x2="14" y2="14" />
      <line x1="14" y1="2" x2="2" y2="14" />
    </svg>
  );
}

function Mountains() {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      style={{ height: "22vh", zIndex: 0 }}
      viewBox="0 0 1440 200"
      preserveAspectRatio="none"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="1.2"
    >
      <path d="M0 200 L120 80 L220 140 L360 40 L500 120 L620 60 L760 130 L880 50 L1020 110 L1140 30 L1280 100 L1440 60 L1440 200 Z"
        fill="var(--paper-shadow)" strokeWidth="1" />
      <path d="M0 200 L180 110 L300 160 L440 90 L560 145 L700 80 L820 150 L940 70 L1080 130 L1200 55 L1340 115 L1440 80 L1440 200 Z"
        fill="var(--paper)" strokeWidth="0.8" opacity="0.7" />
    </svg>
  );
}

function Mailbox() {
  return (
    <svg
      className="hub-decor absolute pointer-events-none"
      style={{ left: "8%", bottom: "16%", width: 60 }}
      viewBox="0 0 60 80"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="1.5"
    >
      <rect x="8" y="20" width="44" height="32" rx="22" fill="var(--paper)" />
      <path d="M8 32 Q30 44 52 32" />
      <line x1="30" y1="52" x2="30" y2="75" />
      <rect x="22" y="70" width="16" height="6" rx="2" fill="var(--paper)" />
      <rect x="26" y="28" width="8" height="8" fill="var(--paper-shadow)" rx="1" />
    </svg>
  );
}

function WelcomeMat() {
  return (
    <svg
      className="absolute pointer-events-none"
      style={{ bottom: "calc(50% - 240px)", left: "50%", transform: "translateX(-50%)", width: "min(260px,60vw)", zIndex: 1 }}
      viewBox="0 0 260 50"
      fill="none"
      stroke="var(--ink)"
      strokeWidth="1.2"
    >
      <rect x="0" y="0" width="260" height="50" rx="4" fill="var(--paper-shadow)" />
      <rect x="6" y="6" width="248" height="38" rx="2" fill="none" stroke="var(--ink-faint)" strokeDasharray="4 4" />
      <text x="130" y="32" textAnchor="middle" fontFamily="var(--font-caveat), cursive" fontSize="20" fontWeight="700" fill="var(--ink-soft)">WELCOME</text>
    </svg>
  );
}

export default function HubScene({ visible }: { visible: boolean }) {
  const router = useRouter();
  const { unlock } = useAchievements();
  const cloudsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!visible) return;
    let frame: number;
    let t = 0;
    function tick() {
      t += 0.3;
      cloudsRef.current.forEach((el, i) => {
        if (!el) return;
        const cloud = CLOUDS[i];
        const drift = Math.sin((t + i * 40) * 0.01) * 18 * cloud.speed;
        el.style.transform = `translateX(${drift}px)`;
      });
      frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [visible]);

  function handleEnter() {
    unlock("explorer");
    router.push("/journey");
  }

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? "visible" : "hidden",
        transition: "opacity 0.6s ease",
        background: "var(--paper)",
      }}
    >
      {/* Mountains */}
      <Mountains />

      {/* Clouds with parallax */}
      {CLOUDS.map((c, i) => (
        <div
          key={i}
          ref={(el) => { cloudsRef.current[i] = el; }}
          className="absolute pointer-events-none"
          style={{ left: c.x, top: c.top, opacity: c.opacity, zIndex: 2 }}
        >
          <CloudSvg width={c.w} />
        </div>
      ))}

      {/* Birds */}
      {BIRDS.map((b, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: b.x,
            top: b.y,
            zIndex: 3,
            animation: `bird-drift ${b.duration} ease-in-out ${b.delay} infinite alternate`,
          }}
        >
          <BirdSvg />
        </div>
      ))}

      {/* Sparkles */}
      {SPARKLES.map((s, i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: s.x,
            top: s.y,
            zIndex: 3,
            animation: `sparkle 3s ease-in-out ${s.delay} infinite`,
          }}
        >
          <SparkleSvg />
        </div>
      ))}

      {/* Decorative tree (left) */}
      <svg
        className="absolute pointer-events-none"
        style={{ left: "4%", top: "10%", width: "min(280px,28vw)", zIndex: 3 }}
        viewBox="0 0 280 400"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
      >
        <path d="M140 400 L140 200 M120 320 L100 280 M160 290 L185 250 M125 250 L100 220 M155 220 L180 195" />
        <ellipse cx="100" cy="180" rx="60" ry="55" fill="var(--paper)" stroke="var(--ink)" strokeWidth="1.5" />
        <ellipse cx="170" cy="160" rx="55" ry="50" fill="var(--paper)" />
        <ellipse cx="135" cy="120" rx="50" ry="45" fill="var(--paper)" />
        <ellipse cx="200" cy="200" rx="45" ry="40" fill="var(--paper)" />
      </svg>

      {/* Decorative window (right) */}
      <svg
        className="absolute pointer-events-none"
        style={{ right: "6%", top: "20%", width: "min(180px,18vw)", zIndex: 3 }}
        viewBox="0 0 180 200"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="2"
      >
        <rect x="10" y="10" width="160" height="180" fill="var(--paper)" />
        <line x1="90" y1="10" x2="90" y2="190" />
        <line x1="10" y1="100" x2="170" y2="100" />
      </svg>

      {/* Plants (right lower) */}
      <svg
        className="absolute pointer-events-none"
        style={{ right: "4%", bottom: "14%", width: "min(260px,28vw)", zIndex: 3 }}
        viewBox="0 0 280 100"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
      >
        <rect x="0" y="50" width="280" height="50" fill="var(--paper)" />
        <path d="M30 50 L25 20 M40 50 L48 18 M30 50 L20 25 M40 50 L50 30" strokeLinecap="round" />
        <ellipse cx="80" cy="40" rx="15" ry="20" fill="var(--paper)" />
        <path d="M120 50 L120 15 M130 50 L135 20 M115 50 L110 25" strokeLinecap="round" />
        <ellipse cx="170" cy="38" rx="18" ry="22" fill="var(--paper)" />
        <path d="M220 50 L220 12 M230 50 L235 18 M215 50 L210 22 M225 50 L240 30" strokeLinecap="round" />
        <ellipse cx="265" cy="42" rx="12" ry="18" fill="var(--paper)" />
      </svg>

      {/* Mailbox */}
      <Mailbox />

      {/* Blinking cat */}
      <svg
        className="absolute pointer-events-none"
        style={{ left: "35%", bottom: "18%", width: 90, zIndex: 4 }}
        viewBox="0 0 90 110"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.5"
      >
        <ellipse cx="45" cy="80" rx="28" ry="22" fill="var(--paper)" />
        <circle cx="45" cy="50" r="22" fill="var(--paper)" />
        <path d="M28 35 L24 18 L38 32 Z" fill="var(--paper)" />
        <path d="M62 35 L66 18 L52 32 Z" fill="var(--paper)" />
        {/* eyes with blink animation */}
        <ellipse cx="38" cy="50" rx="2.5" ry="2.5" fill="var(--ink)"
          style={{ animation: "blink 4s ease-in-out 0s infinite", transformOrigin: "38px 50px" }} />
        <ellipse cx="52" cy="50" rx="2.5" ry="2.5" fill="var(--ink)"
          style={{ animation: "blink 4s ease-in-out 0.2s infinite", transformOrigin: "52px 50px" }} />
        <path d="M42 56 L45 60 L48 56" strokeLinecap="round" />
        <path d="M70 95 Q85 90 88 75" strokeLinecap="round" />
      </svg>

      {/* Bug */}
      <svg
        className="absolute pointer-events-none"
        style={{ right: "12%", top: "8%", width: 30, zIndex: 4, animation: "flutter 4s ease-in-out infinite" }}
        viewBox="0 0 30 30"
        fill="none"
        stroke="var(--ink)"
        strokeWidth="1.2"
      >
        <ellipse cx="15" cy="15" rx="8" ry="10" fill="var(--paper)" />
        <line x1="11" y1="8" x2="8" y2="3" />
        <line x1="19" y1="8" x2="22" y2="3" />
        <line x1="15" y1="5" x2="15" y2="25" />
      </svg>

      {/* Welcome text — positioned well above the door */}
      <div
        className="absolute text-center pointer-events-none"
        style={{ top: "12%", left: "50%", transform: "translateX(-50%)", zIndex: 5 }}
      >
        <div
          className="text-[28px] text-[var(--ink-soft)]"
          style={{ fontFamily: "var(--font-caveat)" }}
        >
          Welcome
        </div>
        <span
          className="block text-base tracking-[2px] mt-1"
          style={{ fontFamily: "var(--font-patrick-hand)", color: "var(--ink-soft)" }}
        >
          ↓ click the door to enter
        </span>
      </div>

      {/* Welcome mat */}
      <WelcomeMat />

      {/* Door — breathing animation, clickable */}
      <div
        className="relative cursor-pointer z-[5]"
        style={{
          transform: "translateY(20px)",
          animation: "breathe 3s ease-in-out infinite",
        }}
        onClick={handleEnter}
        onMouseEnter={(e) => {
          const svg = e.currentTarget.querySelector("svg");
          if (svg) svg.style.filter = "drop-shadow(0 0 18px rgba(212,80,44,0.3))";
        }}
        onMouseLeave={(e) => {
          const svg = e.currentTarget.querySelector("svg");
          if (svg) svg.style.filter = "";
        }}
      >
        <svg
          style={{ width: "min(400px, 80vw)", height: "auto", transition: "filter 0.3s" }}
          viewBox="0 0 360 480"
          fill="none"
          stroke="var(--ink)"
          strokeWidth="2"
        >
          {/* sign */}
          <line x1="180" y1="10" x2="180" y2="60" strokeWidth="1" />
          <rect x="80" y="60" width="200" height="60" rx="4" fill="var(--paper)" strokeWidth="2.5" />
          <text x="180" y="100" textAnchor="middle" fontFamily="var(--font-caveat), cursive" fontSize="36" fontWeight="700" fill="var(--ink)">PORTFOLIO</text>
          <line x1="100" y1="120" x2="100" y2="140" strokeWidth="1" />
          <line x1="260" y1="120" x2="260" y2="140" strokeWidth="1" />
          {/* door frame */}
          <rect x="80" y="140" width="200" height="320" fill="var(--paper)" strokeWidth="2.5" />
          <line x1="180" y1="140" x2="180" y2="460" />
          {/* panels */}
          <rect x="100" y="160" width="60" height="60" fill="#fff" />
          <rect x="200" y="160" width="60" height="60" fill="#fff" />
          <rect x="100" y="240" width="60" height="60" fill="#fff" />
          <rect x="200" y="240" width="60" height="60" fill="#fff" />
          <rect x="100" y="320" width="60" height="120" fill="#fff" />
          <rect x="200" y="320" width="60" height="120" fill="#fff" />
          {/* stickers */}
          <circle cx="130" cy="270" r="14" fill="#f7df1e" strokeWidth="1.5" />
          <text x="130" y="275" textAnchor="middle" fontFamily="var(--font-caveat), cursive" fontSize="13" fontWeight="700" fill="var(--ink)">JS</text>
          <rect x="218" y="180" width="24" height="14" fill="#e34f26" strokeWidth="1" />
          <text x="230" y="190" textAnchor="middle" fontFamily="var(--font-patrick-hand), cursive" fontSize="9" fill="#fff" stroke="none">HTML</text>
          <circle cx="130" cy="190" r="14" fill="#61dafb" strokeWidth="1.5" />
          <text x="130" y="195" textAnchor="middle" fontFamily="var(--font-caveat), cursive" fontSize="11" fontWeight="700" fill="var(--ink)">React</text>
          <rect x="115" y="365" width="36" height="18" fill="#3178c6" strokeWidth="1" />
          <text x="133" y="378" textAnchor="middle" fontFamily="var(--font-caveat), cursive" fontSize="11" fill="#fff" stroke="none" fontWeight="700">TS</text>
          <circle cx="240" cy="380" r="14" fill="#264de4" strokeWidth="1.5" />
          <text x="240" y="385" textAnchor="middle" fontFamily="var(--font-caveat), cursive" fontSize="10" fill="#fff" stroke="none" fontWeight="700">CSS</text>
          {/* handles */}
          <circle cx="170" cy="300" r="5" fill="var(--ink)" />
          <circle cx="190" cy="300" r="5" fill="var(--ink)" />
        </svg>
      </div>
    </div>
  );
}
