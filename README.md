# Prachi Khutarkar — Cybersecurity Portfolio

This repository contains a Vite + React single-page portfolio starter tailored for a professional cybersecurity theme (dark navy/blue). I committed the app structure, project entries (as you provided), and a Formspree placeholder.

What I committed
- Vite + React app (index.html, src/, vite.config.js)
- Projects data (src/data/projects.js) — includes the two projects you gave
- Placeholder contact form wired to a Formspree placeholder
- Styles using a professional dark navy/blue theme
- README (this file)

Important: where to put your assets
- Place your resume at the repository root as `Resume.pdf` (served by Vite at `/Resume.pdf`).
- Place your profile image at the repository root as `profile.jpg` (served by Vite at `/profile.jpg`).

How to run locally
1. Clone the repo
   git clone https://github.com/prachicoder123/portfolio.git
2. Install deps
   npm install
3. Start dev server
   npm run dev
4. Open the URL shown by Vite (usually http://localhost:5173)

Activating the contact form (Formspree)
- Create a form in Formspree and get the action URL (looks like `https://formspree.io/f/XXXXXX`).
- Replace the placeholder action in `src/components/Contact.jsx` or set `src/config/formspree.js` and update the form to import it.

Where to edit content
- src/data/projects.js — project list (titles, tech, bullets, URLs)
- src/components/Hero.jsx — hero text and resume link
- src/components/About.jsx — about paragraph
- src/styles.css — theme colors and layout tweaks
- src/components/Contact.jsx — form configuration (Formspree action)

Deployment
- This site can be deployed on Vercel (recommended), Netlify, or GitHub Pages. For Vercel, connect the GitHub repo and Vercel will detect the Vite app and provide a default deployment.

Next steps I can take for you
- Commit your Resume.pdf and profile.jpg into the repository root if you upload them here (I will add them to `main`).
- Wire the Formspree endpoint when you provide it.
- Add a GitHub Actions workflow or Vercel-specific config if desired.

