export const SKILLS = [
  { name: "Python",  color: "#3776ab" },
  { name: "React",   color: "#61dafb" },
  { name: "Node",    color: "#83cd29" },
  { name: "JS",      color: "#f7df1e" },
  { name: "SQL",     color: "#e38b3a" },
  { name: "Java",    color: "#ed8b00" },
  { name: "C++",     color: "#5588cf" },
  { name: "Swift",   color: "#fa7343" },
  { name: "Flask",   color: "#444"    },
  { name: "Mongo",   color: "#4db33d" },
  { name: "Pandas",  color: "#150458" },
  { name: "PyTorch", color: "#ee4c2c" },
];

export const PROJECTS = [
  {
    id: "daisy-portal",
    title: "Daisy Building Portal",
    stack: "SOFTR · AIRTABLE · WEBHOOKS · LIVE",
    desc: "End-to-end design and launch of a Centralized Policy & Fee Hub now used daily by property managers, board members & attorneys. Drove pricing shift from $200 → $450 (+125%) and added a $150 premium tier.",
    links: [] as { label: string; href: string }[],
    note: "Internal tool — Daisy",
  },
  {
    id: "hybrid-ai",
    title: "Hybrid AI Platform",
    stack: "PYTHON · OLLAMA · CHROMADB · CREWAI",
    desc: "Locally-running multi-agent AI with RAG (ChromaDB + nomic embeddings). Includes a Career Co-Pilot pipeline and a Missing Persons semantic case-matching system.",
    links: [{ label: "GitHub ↗", href: "https://github.com/leemacaravan" }],
    note: "",
  },
  {
    id: "missing-patients",
    title: "Missing Patients Tracker",
    stack: "FLASK · PYTHON · PRACTICE FUSION API · LIVE",
    desc: "Built for Brookmed Pediatric P.C. as an approved Practice Fusion developer. Pulls patient rosters via EHR API, identifies overdue well-child visits. No PHI stored — all in-memory.",
    links: [
      { label: "Live ↗", href: "https://missing-patients.vercel.app/" },
      { label: "GitHub ↗", href: "https://github.com/leemacaravan" },
    ],
    note: "",
  },
  {
    id: "phishing-detector",
    title: "Phishing URL Detector",
    stack: "REACT · ML · THREAT-INTEL API",
    desc: "Real-time ML-powered phishing detection app with React front end and live threat-intel API integration.",
    links: [{ label: "GitHub ↗", href: "https://github.com/leemacaravan" }],
    note: "",
  },
  {
    id: "rpi-eventhub",
    title: "RPI EventHub",
    stack: "MERN · OPEN SOURCE · RCOS",
    desc: "Open-source events platform for RPI built on the full MERN stack via RCOS. Presented at Rensselaer Summer Open-Source Poster Session. Not currently hosted.",
    links: [
      { label: "GitHub ↗", href: "https://github.com/MeiH10/RPI-EventHub" },
    ],
    note: "",
  },
  {
    id: "climbing-research",
    title: "Climbing × CS Research",
    stack: "PYTHON · MATPLOTLIB · PANDAS · DATA VIZ",
    desc: "Independent research at RPI Summer Research Fair 2024 (PI: Dr. Neha Keshan). Visualized correlations between muscle mass, grip strength, and fear of falling among climbers.",
    links: [{ label: "GitHub ↗", href: "https://github.com/leemacaravan" }],
    note: "",
  },
];

export const JOURNEY_STOPS = [
  {
    id: "rpi",
    name: "RPI",
    years: "2022 — '26",
    role: "CS · Econ Minor",
    href: "https://www.rpi.edu",
  },
  {
    id: "daisy",
    name: "DAISY",
    years: "SUMMER '25",
    role: "Product Ops Intern (Building Portal)",
    href: "https://www.daisyco.com",
  },
  {
    id: "coder",
    name: "CODER",
    years: "'25",
    role: "Code Coach (Python · C++ · Lua)",
    href: "https://www.coder.com",
  },
  {
    id: "rpi-lab",
    name: "RPI LAB",
    years: "'24",
    role: "Research Asst. (ML / Data Viz)",
    href: "https://science.rpi.edu/computer-science",
  },
];

export const PROUD_OF = [
  {
    label: "— REVENUE IMPACT —",
    name: "+125%",
    symbol: "$",
    desc: "Drove $200 → $450\npricing shift at Daisy",
    href: "https://www.daisyco.com",
  },
  {
    label: "— LANGUAGES —",
    name: "Bilingual",
    symbol: "2",
    desc: "English · Pashto",
    href: "",
  },
  {
    label: "— CREDENTIAL —",
    name: "EHR API",
    symbol: "✓",
    desc: "Practice Fusion\napproved developer",
    href: "https://missing-patients.vercel.app/",
  },
  {
    label: "— OPEN SOURCE —",
    name: "RCOS",
    symbol: "⌘",
    desc: "RPI EventHub contributor\nopen-source via RCOS",
    href: "https://github.com/MeiH10/RPI-EventHub",
  },
  {
    label: "— RESEARCH —",
    name: "Research",
    symbol: "📊",
    desc: "Presented at RPI Summer\nResearch Fair '24",
    href: "https://github.com/leemacaravan",
  },
];
