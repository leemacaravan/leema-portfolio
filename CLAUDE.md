# Leema Caravan — Portfolio Site

This is a creative, hand-drawn-aesthetic portfolio site for Leema Caravan, a CS senior at RPI graduating May 2026.

Inspired by [itomdev.com](https://itomdev.com) (a 4x Awwwards SOTD winner). The goal is the same level of polish and personality, but with Leema's identity.

---

## DESIGN RULES — DO NOT VIOLATE

### Aesthetic
- **Sketchy, hand-drawn, paper-textured.** Think: a notebook sketch come to life.
- **Color palette:**
  - Paper: `#f5f2ea` (warm off-white, NOT pure white)
  - Paper shadow: `#e8e3d5`
  - Ink: `#2a2a2a` (NOT pure black)
  - Ink soft: `#555`
  - Accent: `#d4502c` (warm terracotta — used SPARINGLY for emphasis)
- **NEVER** use purple gradients. NEVER use neon. NEVER use generic AI gradients.
- **Texture:** every page should have a subtle paper grain noise overlay.

### Typography
- **Display font:** Caveat (Google Fonts) — for big headers, hand-written feel
- **Body/UI font:** Patrick Hand (Google Fonts) — for paragraphs and labels
- **Accent/sketch:** Shadows Into Light — for small captions, achievement labels
- **NEVER** use Inter, Roboto, system-ui, Arial, or any generic sans-serif.

### Layout
- Asymmetric, not grid-perfect. Things should feel slightly hand-placed.
- Use `transform: rotate(-2deg)` etc. on cards/labels for a casual feel.
- Generous whitespace. Don't cram.

### Motion
- Use **GSAP + ScrollTrigger** for scroll-driven animation (paper airplane, parallax clouds, scene transitions).
- Use **Framer Motion** for page transitions and component-level animation.
- Animations should feel like physical paper — ease, wobble, slight overshoot. NEVER linear.
- Stagger reveals on first load.

### Illustrations
- **Current state:** placeholder SVGs drawn by Claude (rough, ok for v1).
- **Goal:** replace with real hand-drawn illustrations (Procreate / commissioned).
- Keep all illustration files in `/public/illustrations/` as SVG.
- Style: pencil/ink line drawings, mostly monochrome with selective color accents.

---

## SCENE STRUCTURE

The site has multiple "scenes" the user navigates through, each with its own URL/route:

1. **`/` — Loader + Hub** — animated loading screen, then a sketchy door labeled "PORTFOLIO". Click it to enter.
2. **`/journey` — Sky scroll** — paper airplane flies through a long scrollable sky, passing through:
   - Hero (name, photo on cloud)
   - "Things I'm Proud Of" (the 'awards'-style section, but real accomplishments)
   - Journey islands (RPI, Daisy, Coder, RPI Lab — floating islands with year banners)
   - Skills balloons (technologies as floating balloons)
   - Projects gallery (framed paintings on a wall)
   - Contact (paper notes)
3. **(Future) `/projects/[slug]`** — individual project deep-dives, each with screenshots and case study text

---

## ACHIEVEMENT SYSTEM

Bottom-right collapsible panel. Unlocks shown as toast notifications.

| ID | Title | Trigger |
|---|---|---|
| explorer | Explorer | Click the door on the hub |
| sky | Sky Walker | Scroll on /journey |
| proud | Proud Reader | Reach "Things I'm Proud Of" section |
| critic | Art Critic | Click any project frame |
| sociable | Sociable | Click any contact method |
| wanderer | Wanderer | Reach the bottom of /journey |

Persist unlocked achievements in localStorage so they survive page refresh.

---

## REAL CONTENT — USE EXACT VALUES

### Personal
- **Name:** Leema Caravan
- **Pronouns:** She/Her
- **School:** Rensselaer Polytechnic Institute (RPI)
- **Major:** B.S. Computer Science, Minor in Economics
- **Graduation:** May 2026
- **Location:** Malverne, NY
- **Email:** leemacaravan@gmail.com
- **Phone:** +1 (516) 309-3396
- **LinkedIn:** https://www.linkedin.com/in/leema-caravan-4738791aa/
- **GitHub:** https://github.com/leemacaravan
- **Vizzy:** TODO — Leema to provide profile link
- **Languages:** English, Pashto

### Personal "Why"
> "Daughter of Afghan refugees. Second-youngest of 5. I get to do what my mother couldn't — go to college. Most of what I want to build comes from that."

(Use this in About section. It's her differentiator.)

### Things I'm Proud Of (REPLACE the fake "Awards" section)
1. **First-Gen College Student** — daughter of Afghan refugees, doing what her mother couldn't
2. **$200 → $450 Pricing Shift** — direct revenue impact at Daisy from her portal
3. **Trilingual** — English + Pashto + Afghan heritage
4. **Practice Fusion Approved Developer** — real EHR API credential earned for Missing Patients Tracker
5. **Open Source @ RCOS** — RPI EventHub contributor, live at rpieventhub.com
6. **Summer Research Presenter** — RPI Summer Undergraduate Research Fair (Climbing × CS, advised by Dr. Neha Keshan)

### Experience
- **Daisy Property Management** — Product Operations Intern (May–Aug 2025), New York, NY
  - Owned end-to-end Building Policy & Fee Portal (now in production)
  - Backend webhooks, Softr + Airtable front end, QA automations
  - Drove pricing shift $200 → $450 (+125%), added $150 premium tier
- **The Coder School** — Code Coach + Office Manager (Jan–Jul 2025)
  - Taught Python, C++, Lua to students 7–15
- **Women for Afghan Women** — Software & Data Intern (Mar–May 2025)
  - Bonterra data migration, user account management
- **RPI Research Lab** — Undergrad Research Asst. (May–Aug 2024)
  - PI: Dr. Neha Keshan
  - Climbing performance data viz with Python (matplotlib, pandas)
  - Presented at Summer Undergraduate Research Fair

### Projects (with REAL links)
- **Daisy Building Portal** — internal Daisy tool, no public link (mark as "Internal — Daisy")
- **Hybrid AI Platform** — Python, Ollama, ChromaDB, CrewAI, Gradio, SQLite. GitHub: https://github.com/leemacaravan (confirm exact repo name). Demo: TODO
- **Missing Patients Tracker** — Flask, Python, Pandas. Built for Brookmed Pediatric P.C. Practice Fusion API approved developer. Live: https://missing-patients.vercel.app/. GitHub: https://github.com/leemacaravan (confirm exact repo name)
- **Real-Time Phishing URL Detector** — React, ML, threat-intel API. GitHub: https://github.com/leemacaravan (confirm exact repo name)
- **RPI EventHub** — React, MongoDB, Node, Bootstrap. RCOS open source. Live: https://rpieventhub.com. GitHub: https://github.com/leemacaravan (confirm exact repo name)
- **Climbing × CS Research** — Python, matplotlib, pandas. RPI Summer Research Fair 2024. PI: Dr. Neha Keshan. GitHub: https://github.com/leemacaravan (confirm)

### Skills (use as balloons in /journey)
- **Languages:** Python, JavaScript, Java, SQL, C++, Swift, HTML/CSS
- **Frameworks:** React, Node.js, Express, Flask, MongoDB, Pandas, NumPy, PyTorch, LangChain
- **Tools:** Git, GitHub, VS Code, Xcode, REST APIs, FHIR/HIPAA standards, Bonterra, Softr + Airtable

---

## TECH STACK

- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** (with custom theme matching the design rules above)
- **GSAP + ScrollTrigger** for scroll animation
- **Framer Motion** for page transitions
- **Howler.js** for ambient sound (page flip, paper rustle, soft wind)
- Deploy: **Vercel** (free Hobby plan)

---

## WORKING WITH CLAUDE CODE

When Claude Code edits this project:

1. **Always read this file first.**
2. **Never invent accomplishments.** If an award/credential isn't in this file, don't add it.
3. **Never use placeholder Lorem Ipsum.** Use real content from this file.
4. **Ask before adding any framework or library** not listed in tech stack.
5. **Test locally** with `npm run dev` after every meaningful change.
6. **TODO comments** mark places where Leema needs to provide info — leave them visible, don't hallucinate values.

---

## SHIP CHECKLIST (before going live)

- [ ] Replace all `TODO` placeholders with real links / values
- [ ] Run Lighthouse — target 90+ on Performance, Accessibility, SEO
- [ ] Test on mobile (iPhone safari, Android Chrome)
- [ ] Add OG image + meta tags for social sharing
- [ ] Add domain (leemacaravan.com or similar)
- [ ] Submit to Awwwards / CSS Design Awards once polished — that's the path to a *real* SOTD
