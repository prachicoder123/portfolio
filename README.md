# Prachi Khutarkar — Cybersecurity Portfolio

This repository contains a Vite + React single-page portfolio starter tailored for a professional cybersecurity theme (dark navy/blue). I committed the app structure, project entries (as you provided), and a placeholder contact form that uses Formspree.

What I committed
- Vite + React app (index.html, src/, vite.config.js)
- Projects data (src/data/projects.js) — includes the two real projects you gave
- Placeholder contact form wired to a Formspree placeholder
- Styles using a professional dark navy/blue theme
- README (this file)

Assets you should add
- public/Resume.pdf  — place your resume PDF here (I did NOT add the binary to avoid large commit). Name: `Resume.pdf`
- public/profile.jpg — place your profile image here named `profile.jpg`

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
- src/data/projects.js — project titles, tech, bullets, and URLs
- src/components/Hero.jsx — hero text and link target for resume
- src/styles.css — theme colors and layout tweaks

Deployment
- This site can be deployed on GitHub Pages, Vercel, Netlify, or similar. For GitHub Pages, build the site and push the `dist/` contents to the gh-pages branch or use an action.

Notes
- I kept the projects you provided exactly as you wrote them — no placeholders.
- I used placeholders for the resume/profile files so you can upload the exact binary assets to `public/Resume.pdf` and `public/profile.jpg`.

If you want, I can now:
- Add a small GitHub Actions workflow to deploy to GitHub Pages automatically on push
- Wire the contact form to your Formspree endpoint if you paste it here
- Replace the placeholders with the exact Resume.pdf and profile.jpg if you paste their binary (or allow me to pull them from a link)

Next steps I will take if you confirm:
- (Optional) Add GitHub Pages deployment workflow
- Help you paste the Formspree endpoint into the code

