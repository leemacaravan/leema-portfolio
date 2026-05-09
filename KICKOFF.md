# Claude Code — Kickoff Guide

## Before you start

Make sure you've done these in your terminal:

```bash
# 1. Create the project
cd ~/Desktop
npx create-next-app@latest leema-portfolio --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*"
cd leema-portfolio

# 2. Copy CLAUDE.md, README.md, index.html, and leema-caravan-resume.pdf into this folder
#    (drag them in from Finder)

# 3. Install the libraries
npm install gsap framer-motion howler
npm install -D @types/howler

# 4. Initialize git + push to GitHub
git init
git add .
git commit -m "Initial commit with v1 starter"
# Create a repo on github.com called "leema-portfolio", then:
git remote add origin https://github.com/leemacaravan/leema-portfolio.git
git branch -M main
git push -u origin main

# 5. Start Claude Code
claude
```

---

## SESSION 1 — Send this exact message to Claude Code

Copy and paste this whole block:

```
Read CLAUDE.md and README.md fully before doing anything else. Then read index.html — it's a working v1 of this site I want to upgrade to a proper Next.js project.

Goal for this session: port the LOADER and HUB DOOR scenes from index.html into the Next.js project.

- The loader should be at /app/page.tsx (or a Loader component that renders before the hub)
- The hub should be the main / route after loading completes
- Use Framer Motion for the loader → hub transition
- Use GSAP for the percentage-counting circle animation
- Keep the exact aesthetic from CLAUDE.md (paper texture, Caveat + Patrick Hand fonts, terracotta accent ONLY for emphasis)
- Add Google Fonts via next/font for performance
- Move all the SVG illustrations (door, tree, cat, plants, bug) into /components/illustrations/ as separate React components
- Set up a Tailwind config with the design tokens from CLAUDE.md (paper, ink, accent colors)

Don't build /journey yet — that's session 2. Just nail the loader → hub transition.

When done, run `npm run dev` and tell me what to test.
```

---

## SESSION 2 — Sky journey scroll

```
Now build the /journey route. Reference index.html for the section structure but use proper React components.

- Create /app/journey/page.tsx
- Each section (Hero, About, Proud Of, Journey Islands, Skills, Projects, Contact) should be its own component in /components/journey/
- Use GSAP ScrollTrigger for the paper airplane: it should follow the user's scroll, wobble, and tilt naturally as they go down the page
- The airplane should be position: fixed, with smooth motion (not jumpy)
- Parallax the background clouds at different scroll speeds
- Use real content from CLAUDE.md — do not invent any accomplishments
- The Hero section has the resume download button and GitHub link
- The About section is short: 2 professional paragraphs + 1 italic personal line at the bottom
- The Proud Of section has 6 cards (NOT awards — see CLAUDE.md for the real list)
- Add a back button at top-left that returns to /

Test on `npm run dev` and tell me what to verify.
```

---

## SESSION 3 — The Map (navigation modal)

```
Build the navigation Map modal — see CLAUDE.md "NAVIGATION MAP" section for full spec.

This is the most important visual feature on the site. It needs to feel like a piece of hand-drawn paper, not a UI panel.

- Trigger: clicking the ☰ menu button in top-right
- Visual: torn-edge paper (use clip-path with irregular polygon points), centered modal, slight rotation
- Inside: vertical dashed flight path, section markers as empty squares, hand-drawn icons next to each (paper airplane for About, device stack for Studio, city skyline for Gallery, dock for Contact)
- A red push-pin marks the current section
- Use IntersectionObserver to update the pin as the user scrolls
- Clicking a section square smooth-scrolls to that section and closes the modal
- Open animation: scale + slight rotation, like paper being slammed down (Framer Motion)
- Press Escape to close

The icons (paper airplane, device stack, city, dock) should be SVG components in /components/illustrations/map/. Use the SAME pencil-line style as the rest of the site, but with subtle hand-drawn color accents (the airplane is blue/yellow, the device stack has muted colors). This is the ONE place on the site where color appears beyond the terracotta accent.

When done, the user should be able to navigate the entire site through this map.
```

---

## SESSION 4 — Skills balloons with physics

```
Upgrade the Skills section. Currently the balloons just float with a CSS animation. Make them feel alive:

- Use GSAP for organic floating motion (slight x/y drift, never linear)
- On hover: balloon scales up slightly, string sways, balloon rotates a few degrees
- On click: balloon "pops" — a small SVG burst animation, then it respawns after 2 seconds
- Add subtle collision detection so balloons don't overlap when they drift
- Make sure motion is reduced when user has prefers-reduced-motion: reduce

Don't break the existing layout — just enhance the motion. This is a polish session.
```

---

## SESSION 5 — Project pages + case studies

```
Build /projects/[slug] dynamic routes for each project.

Projects (use real data from CLAUDE.md):
- daisy-portal
- hybrid-ai-platform  
- missing-patients
- phishing-detector
- rpi-eventhub
- climbing-research

Each page should:
- Open with a hand-drawn frame holding a screenshot (placeholder if I don't have one)
- Have sections: Problem, Approach, What I Built, Impact, Tech Stack
- Style match the rest of the site (paper, sketchy headers, hand-written fonts)
- Have a back button that returns to /journey at the projects section
- Pull data from a /data/projects.ts file you create — typed properly with TypeScript

For projects without screenshots yet, leave a placeholder frame that says "Empty canvas — Want screenshots? Contact me!" (matching the original itomdev empty-frame aesthetic).

Wire up the project gallery on /journey so clicking a frame goes to its project page.
```

---

## SESSION 6 — Achievements + Sound

```
Two things this session:

1. Achievement system:
   - Move the achievement logic into a Zustand store
   - Persist unlocked achievements in localStorage
   - Show toast on unlock with a nicer animation (bounce + slight rotation)
   - Make the achievement panel collapsible from any page, not just /journey

2. Sound (Howler.js):
   - Background ambient: soft wind / paper rustle (looped, very quiet, ~10% volume default)
   - Page-flip sound when navigating between scenes
   - Soft "ding" when an achievement unlocks
   - Toggle with the ♪ button (default: OFF — important, don't auto-play)
   - Persist sound preference in localStorage

Find royalty-free sounds on freesound.org or Pixabay. Drop them in /public/audio/. Don't commit any copyrighted audio.
```

---

## SESSION 7 — Mobile + polish

```
Polish session. Focus on:

- Mobile responsiveness — test at 375px (iPhone SE), 414px (iPhone Pro Max), 768px (iPad)
- Hub door scales properly on mobile, decorative elements (tree, plants) hide gracefully
- Map modal works on mobile (smaller paper sheet, larger touch targets)
- Achievement panel becomes full-width drawer on mobile
- Run Lighthouse — fix any issues bringing scores below 90
- Add proper meta tags, Open Graph image (use a screenshot of the hub), favicon (the door icon)
- Make sure all images are next/image with proper alt text
- Add a sitemap.xml and robots.txt

Final check: load the site on a real phone over cellular and confirm it feels good.
```

---

## SESSION 8 — Deploy + custom domain

```
Final session — ship it.

- Push final code to main on GitHub
- Connect the repo to Vercel (vercel.com/new)
- Buy leemacaravan.com on Namecheap or Cloudflare ($12/year)
- Add the domain in Vercel project settings
- Set up automatic preview deployments for PRs
- Add a deploy hook so the site rebuilds when CMS content changes (if I add a CMS later)
- Run final Lighthouse on the live site, share results with me

After deploy: submit to Awwwards (https://www.awwwards.com/submit/) and CSS Design Awards.
```

---

## Tips for working with Claude Code

- **Don't try to do all 8 sessions in one day.** Each one is 1–3 hours of back-and-forth. Spread it across a week.
- **Commit after every session.** That way if Claude Code breaks something in session 4 you can roll back to session 3.
- **If Claude Code starts adding random libraries, push back.** It's been told (in CLAUDE.md) not to add anything outside the approved tech stack.
- **Test on `npm run dev` after every meaningful change.** Don't let it pile up untested code.
- **When stuck, paste error messages directly.** Claude Code is great at debugging if you give it the actual error.
- **The art is the hardest part.** No amount of code will replace good illustrations. Plan to either draw them or hire someone in parallel.
