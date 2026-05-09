type Cloud = { top: string; width: number; left?: string; right?: string };

const SKY_CLOUDS: Cloud[] = [
  { top: "8%",   left: "5%",   width: 140 },
  { top: "18%",  right: "8%",  width: 110 },
  { top: "35%",  left: "12%",  width: 120 },
  { top: "50%",  right: "15%", width: 130 },
  { top: "65%",  left: "8%",   width: 150 },
  { top: "80%",  right: "5%",  width: 120 },
  { top: "92%",  left: "20%",  width: 130 },
];

export default function SkyBackground() {
  return (
    <>
      {SKY_CLOUDS.map((c, i) => (
        <svg
          key={i}
          className="absolute pointer-events-none opacity-70"
          style={{ top: c.top, left: c.left, right: c.right, width: c.width }}
          viewBox="0 0 140 60"
          fill="#fff"
          stroke="#999"
          strokeWidth="1.5"
        >
          <path d="M20 40 Q15 25 30 25 Q35 12 50 18 Q60 8 75 18 Q90 12 95 25 Q115 25 110 40 Q120 50 100 50 L30 50 Q10 50 20 40Z" />
        </svg>
      ))}
    </>
  );
}
