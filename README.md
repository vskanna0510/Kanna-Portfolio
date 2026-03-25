# Kanna Portfolio

Next-generation interactive developer portfolio: terminal-style navigation, 3D experiences, mini-games, and recruiter-friendly content.

## Features

- **Terminal interface** — Navigate with commands: `help`, `about`, `projects`, `skills`, `experience`, `research`, `publications`, `resume`, `contact`, `blog`, `play`, `explore`
- **3D skills galaxy** — Type `explore` for a React Three Fiber scene
- **Mini-games** — `play`: Hack the terminal (password puzzle), Code debug
- **Sections** — About, Projects, Skills, Experience, Research, Publications, Contact, Blog, Resume
- **AI chatbot** — Floating assistant (bottom-right) for quick Q&A
- **Skill radar chart** — In Skills panel
- **Neural network background** — Animated canvas
- **Easter eggs** — `matrix`, `sudo`, `hack`

## Tech stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion
- **3D:** Three.js, React Three Fiber, Drei
- **Charts:** Recharts (radar)
- **Icons:** Lucide React

## Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

### Vercel (recommended)

1. Push the repo to GitHub.
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo.
3. Root directory: `.` — leave as is.
4. Build command: `npm run build`
5. Deploy.

### Netlify

1. Build command: `npm run build`
2. Publish directory: `.next`
3. For static export (optional): add `output: 'export'` in `next.config.mjs` and use `out` as publish directory. This project uses server features; prefer Vercel or Netlify’s Next.js runtime.

### Environment (optional)

- `GITHUB_USER` — For real GitHub contribution data (heatmap). Update `src/components/extra/GitHubHeatmap.tsx` to fetch from GitHub API.

## Customize

- **Profile:** `src/data/profile.ts` — name, institution, links, resume URL
- **Projects:** `src/data/projects.ts`
- **Skills:** `src/data/skills.ts`
- **Experience:** `src/data/experience.ts`
- **Publications:** `src/data/publications.ts`
- **Blog:** `src/data/blog.ts`
- **Commands:** `src/data/commands.ts`

## Project structure

```
src/
├── app/              # Next.js app router (layout, page, globals.css)
├── components/
│   ├── terminal/     # Terminal UI
│   ├── sections/     # About, Projects, Skills, etc.
│   ├── three/        # 3D scene (Scene3D)
│   ├── games/        # HackGame, DebugGame
│   ├── extra/        # ChatBot, SkillRadarChart, GitHubHeatmap
│   └── background/   # NeuralBackground
├── context/          # TerminalContext
└── data/             # profile, projects, skills, commands, etc.
```

## Performance

- Terminal and 3D scene are client components; 3D is dynamically imported (no SSR).
- Lazy loading and code splitting via Next.js and dynamic imports.
- Tailwind purges unused CSS.

## License

MIT.

Test PR for AI reviewer