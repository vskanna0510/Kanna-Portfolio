# Deployment

## Vercel (recommended)

1. Push this repo to GitHub.
2. Sign in at [vercel.com](https://vercel.com) → **Add New** → **Project**.
3. Import your GitHub repo. Root directory: leave default.
4. **Build Command:** `npm run build`  
   **Output Directory:** `.next` (default).
5. Click **Deploy**. Your site will be at `https://your-project.vercel.app`.

Optional: add environment variable `GITHUB_USER` if you wire the heatmap to the GitHub API.

---

## Netlify

1. **Build command:** `npm run build`  
2. **Publish directory:** `.next`  
3. Use the **Next.js runtime** (Netlify detects it; or set `NODE_VERSION=18`).

Or use Netlify’s “Import from Git” and select this repo; it will suggest Next.js settings.

---

## Before going live

- [ ] Replace placeholder content in `src/data/profile.ts` (name, email, GitHub, LinkedIn, resume URL).
- [ ] Add `public/resume.pdf` for the Resume download.
- [ ] Update projects, experience, publications, and blog in `src/data/`.
- [ ] (Optional) Point GitHub heatmap to your username in `src/components/extra/GitHubHeatmap.tsx`.
