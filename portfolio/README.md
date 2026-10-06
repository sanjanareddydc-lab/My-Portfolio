# Sanjana DC | Full Stack Developer Portfolio

A responsive, dark-themed static portfolio built with HTML5, CSS3 and vanilla JavaScript. No build step, no backend, no Node.js required.

## Features
- Sticky glass navbar, active-link highlighting, mobile hamburger menu
- Hero with profile photo frame, terminal window and CTA buttons
- Scroll-reveal animations (IntersectionObserver), floating and hover effects
- Skills, Projects, Education, Learning & Development and Contact sections
- Subtle animated grid/gradient background and desktop-only custom cursor
- Respects `prefers-reduced-motion`; semantic HTML, focus states, alt text
- SEO meta tags, Open Graph tags and favicon

## Folder structure
```
portfolio/
├── index.html
├── style.css
├── script.js
├── vercel.json
├── README.md
├── assets/
│   ├── images/profile.jpg   <- add your photo here
│   ├── icons/favicon.svg
│   └── resume.pdf           <- replace with your own PDF resume
└── screenshots/
```

## Add your photo and resume
1. Save your photo as `assets/images/profile.jpg` (square or portrait crop works best, about 800x800 px). Until then, an "SD" monogram is shown.
2. Replace `assets/resume.pdf` with your own resume PDF (keep the same filename).

## Run locally
Open `index.html` in a browser, or run a local server: `python -m http.server 8000` and visit http://localhost:8000.

## Deploy to Vercel
### Method 1: GitHub + Vercel
1. Create a new GitHub repository.
2. Upload the project files (the contents of this folder) to it.
3. Open https://vercel.com and sign in.
4. Click **Add New > Project** and import your repository.
5. Framework Preset: **Other**. Build command: leave empty. Output directory: leave empty (project root).
6. Click **Deploy**.

### Method 2: Vercel CLI
```bash
npm install -g vercel
vercel
```
Run `vercel` inside this folder, accept the defaults, then `vercel --prod` for production.

## Customization
- Colors: edit the CSS variables at the top of `style.css`.
- Content: edit `index.html`. Add project GitHub or live links by adding buttons in each `.project` card's `.actions` div.
- Contact form: it currently uses `mailto:` (opens the visitor's email app). To use Formspree, set `<form action="https://formspree.io/f/YOUR_ID" method="POST">` and remove the submit handler in `script.js`. For EmailJS, add its script and call `emailjs.sendForm(...)` inside that handler.
- Screenshot: add `screenshots/portfolio-preview.png` after deploying.
