# Martha Ukange — Personal Portfolio

A premium, modern personal portfolio website built with React + Vite + Tailwind CSS.

---

## 🚀 Getting Started

### Prerequisites

You need **Node.js v18+** installed. Download it from [nodejs.org](https://nodejs.org).

### Install & Run

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Sticky nav + animated mobile menu
│   ├── Hero.jsx           # Editorial hero with photo
│   ├── About.jsx          # Split layout about + progression
│   ├── Work.jsx           # Projects (3 tier visual hierarchy)
│   ├── ProjectCard.jsx    # Featured / Secondary / Small card variants
│   ├── Learning.jsx       # Learning experiences section
│   ├── TechTots.jsx       # TechTots community section
│   ├── Skills.jsx         # Skill tag cards (no fake percentages)
│   ├── Journey.jsx        # Timeline (horizontal desktop, vertical mobile)
│   ├── Resume.jsx         # Resume download CTA
│   ├── Contact.jsx        # Contact cards section
│   └── Footer.jsx         # Footer with social links
├── data/
│   └── content.js         # ← All content here — easy to update
├── hooks/
│   └── useScrollReveal.js # Intersection Observer scroll reveal
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🖼️ Adding Martha's Photo

1. Save Martha's professional photo as `martha-ukange.jpg`
2. Place it in the `public/` folder (alongside `favicon.svg`)
3. The site automatically uses it in the Hero and About sections

Recommended image specs:
- Format: JPG or WebP
- Minimum size: 800 × 1000 px
- Aspect ratio: portrait (4:5 ideal)

---

## 📄 Adding the Resume

1. Save the resume as `resume.pdf`
2. Place it in the `public/` folder
3. All "Download Resume" buttons will work automatically

---

## 📧 Setting Martha's Email

Open `src/data/content.js` and update the `email` field:

```js
export const socialLinks = {
  github: 'https://github.com/neobrainiac-hub',
  linkedin: 'https://www.linkedin.com/in/martha-ukange-20995027b',
  email: 'mailto:your-actual-email@example.com', // ← change this
};
```

---

## 🎨 Updating Projects

All project data lives in `src/data/content.js`. To add or edit a project, simply update the relevant array:

- `featuredProjects` — the 4 main featured projects
- `moreProjects` — the 2 smaller "More Projects" items
- `learningExperiences` — the 3 learning experience cards

---

## 🌐 Deploying

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

Drag the `dist/` folder (after `npm run build`) to [app.netlify.com/drop](https://app.netlify.com/drop).

---

## 🧰 Tech Stack

- **React 18** — UI components
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icon library
- **Inter** — Body font (Google Fonts)
- **Playfair Display** — Display/heading font (Google Fonts)

---

*Built with care for Martha Ukange's scholarship application and long-term professional portfolio.*
