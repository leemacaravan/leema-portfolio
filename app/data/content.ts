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
    desc: "Internal portal at Daisy that centralizes building policies, fees, and documents for property managers, boards, and attorneys.",
    links: [] as { label: string; href: string }[],
    note: "Internal tool — Daisy",
  },
  {
    id: "hybrid-ai",
    title: "Hybrid AI Platform",
    stack: "PYTHON · OLLAMA · CHROMADB · CREWAI",
    desc: "Local multi-agent AI tool. Uses RAG with ChromaDB and CrewAI to power a Career Co-Pilot and a missing-persons matching workflow.",
    links: [{ label: "GitHub ↗", href: "https://github.com/leemacaravan" }],
    note: "",
  },
  {
    id: "missing-patients",
    title: "Missing Patients Tracker",
    stack: "FLASK · PYTHON · PRACTICE FUSION API · LIVE",
    desc: "EHR integration for a Brooklyn pediatric practice. Pulls patient rosters from Practice Fusion and flags overdue well-child visits.",
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
    desc: "React app that flags suspicious URLs in real time using a threat-intel API.",
    links: [{ label: "GitHub ↗", href: "https://github.com/leemacaravan" }],
    note: "",
  },
  {
    id: "rpi-eventhub",
    title: "RPI EventHub",
    stack: "MERN · OPEN SOURCE · RCOS",
    desc: "Open-source events platform for RPI, built on the MERN stack.",
    links: [
      { label: "GitHub ↗", href: "https://github.com/MeiH10/RPI-EventHub" },
    ],
    note: "",
  },
  {
    id: "climbing-research",
    title: "Climbing × CS Research",
    stack: "PYTHON · MATPLOTLIB · PANDAS · DATA VIZ",
    desc: "Visualized correlations between grip strength, muscle mass, and fear-of-falling in rock climbers.",
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
    role: "Product Ops Intern",
    href: "https://www.daisyco.com",
  },
  {
    id: "coder",
    name: "CODER",
    years: "'25",
    role: "Code Coach",
    href: "https://www.coder.com",
  },
  {
    id: "rpi-lab",
    name: "RPI LAB",
    years: "'24",
    role: "Research Asst.",
    href: "https://science.rpi.edu/computer-science",
  },
];

export const PROUD_OF = [
  {
    label: "— REVENUE IMPACT —",
    name: "+125%",
    symbol: "$",
    desc: "Drove the price of a Daisy questionnaire from $200 to $450 by rebuilding the request flow.",
    href: "https://www.daisyco.com",
  },
  {
    label: "— LANGUAGES —",
    name: "Bilingual",
    symbol: "2",
    desc: "Fluent in English and Pashto.",
    href: "",
  },
  {
    label: "— CREDENTIAL —",
    name: "EHR API",
    symbol: "✓",
    desc: "Approved Practice Fusion developer — built a tool for a Brooklyn pediatric practice.",
    href: "https://missing-patients.vercel.app/",
  },
  {
    label: "— OPEN SOURCE —",
    name: "RCOS",
    symbol: "⌘",
    desc: "Contributed to RPI EventHub, an open-source campus events platform built at RCOS.",
    href: "https://github.com/MeiH10/RPI-EventHub",
  },
  {
    label: "— RESEARCH —",
    name: "Research",
    symbol: "📊",
    desc: "Presented climbing-performance research at RPI's Summer Research Fair under Dr. Neha Keshan.",
    href: "https://github.com/leemacaravan",
  },
];
