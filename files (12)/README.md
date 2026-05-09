# Leema Portfolio — Setup Guide

## What this is

A starter project for an interactive, hand-drawn portfolio site inspired by [itomdev.com](https://itomdev.com), built with Next.js + GSAP + Framer Motion. Designed to be iterated on with Claude Code.

## What's included

- `CLAUDE.md` — design rules and content reference for Claude Code
- `index.html` — a working v1 single-file version (deploy this NOW for an immediate live site)
- This README

---

## Step 1: Deploy the v1 today (10 min)

The single-file `index.html` works as-is. Get a live URL today, then upgrade to Next.js in parallel.

1. Create a GitHub repo named `leema-portfolio`
2. Upload `index.html` to the repo root
3. Go to [vercel.com/new](https://vercel.com/new), import the repo, click Deploy
4. Live in ~30 seconds at `leema-portfolio-yourname.vercel.app`
5. Optional: buy `leemacaravan.com` from Namecheap (~$12/year) and point it at Vercel

---

## Step 2: Spin up the Next.js version

Open Terminal:

```bash
# Clone or create a new folder
cd ~/Desktop
npx create-next-app@latest leema-portfolio --typescript --tailwind --app --eslint --no-src-dir --import-alias "@/*"
cd leema-portfolio

# Drop the CLAUDE.md file in the project root
# (download CLAUDE.md from Claude chat, move it here)

# Install the libraries we'll need
npm install gsap framer-motion howler
npm install -D @types/howler

# Test it works
npm run dev
# → open http://localhost:3000
```

---

## Step 3: Install Claude Code

```bash
npm install -g @anthropic-ai/claude-code
```

In your project folder:

```bash
claude
```

First message to send Claude Code:

> Read CLAUDE.md first. We're building Leema's portfolio site. The design is inspired by itomdev.com — sketchy, hand-drawn, paper-textured. There's a single-file v1 working version (I'll paste the HTML if needed). Let's start with the loader + hub door scene as a proper Next.js page at `/`. Use GSAP for the loading animation. Don't add any framework not listed in CLAUDE.md.

---

## Step 4: Iterate scene by scene

Don't try to build everything at once. Suggested session order:

| Session | Build | Effort |
|---|---|---|
| 1 | Loader + Hub door (`/`) | Easy |
| 2 | Sky journey scroll route (`/journey`) with GSAP airplane | Medium |
| 3 | "Things I'm Proud Of" + Journey islands sections | Easy |
| 4 | Skills balloons w/ subtle physics | Medium |
| 5 | Project gallery + per-project pages (`/projects/[slug]`) | Medium |
| 6 | Achievement system w/ localStorage persistence | Easy |
| 7 | Sound (Howler.js) + audio toggle | Easy |
| 8 | Mobile responsive polish | Medium |
| 9 | Replace SVG placeholders with real illustrations | Hard (needs art) |
| 10 | Lighthouse, SEO, OG image, deploy to custom domain | Easy |

---

## Step 5: Get illustrations

Biggest gap between v1 and itomdev-quality is hand-drawn art. Options:

- **Draw them yourself** (Procreate, $13 one-time on iPad)
- **Hire on Fiverr** — search "hand-drawn sketch illustration" — budget ~$100–200 for a set
- **Commission a friend** in art school (best value — they'll do it for $50 + portfolio credit)

Tell the illustrator to look at itomdev.com for style reference, and ask for: door, tree, cat, plants, clouds, paper airplane, floating islands, balloons, cloud-character (Leema reclining on a cloud), and ~6 framed scenes for the project gallery.

---

## Step 6: Submit to Awwwards (the *real* SOTD path)

Once polished:
- [Awwwards](https://www.awwwards.com/submit/) — submission is $35
- [CSS Design Awards](https://www.cssdesignawards.com/) — free
- [SiteInspire](https://www.siteinspire.com/submit) — free

Winning even a "Site of the Day Honorable Mention" puts your name in front of real design hiring managers.

---

## TODO before going live

**Done ✓**
- ✅ GitHub username (`leemacaravan`)
- ✅ LinkedIn (`/in/leema-caravan-4738791aa`)
- ✅ Missing Patients live link (`missing-patients.vercel.app`)
- ✅ EventHub live link (`rpieventhub.com`)

**Still need from Leema:**
- [ ] Vizzy profile link
- [ ] Hybrid AI Platform — confirm exact GitHub repo name + demo URL if any
- [ ] Phishing Detector — confirm exact GitHub repo name
- [ ] Confirm exact repo names for the rest (currently linked to GitHub profile as fallback)
- [ ] Add `leema-caravan-resume.pdf` to project root for the download button
- [ ] Photo of yourself for the cloud-character (or commission a stylized illustration)
