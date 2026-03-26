# Adarsh Infrastructure - Official Website

**A-Class Government Registered Electrical Contractor | Chhindwara, Madhya Pradesh**

Professional website for Adarsh Infrastructure — specializing in HT & LT power distribution, transformer installation, solar energy solutions, and complete electrification services since 2011.

---

## Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 15.1.6 | React Framework (Pages Router) |
| React | 18.3.1 | UI Library |
| Tailwind CSS | 3.4.1 | Styling |
| Framer Motion | 12.4.2 | Animations |
| React Icons | 5.4.0 | Icon Library |
| Heroicons | 2.2.0 | Navigation Icons |

## Features

- **Fully Responsive** — Mobile (320px), Tablet (768px), Laptop (1024px+)
- **SEO Optimized** — JSON-LD Schema, Open Graph, Sitemap, Robots.txt
- **WhatsApp Integration** — Floating chat button + contact form via WhatsApp
- **Work Gallery** — 27 real project photos with category filters & lightbox viewer
- **Bilingual FAQ** — English & Hindi support
- **Performance** — Static pre-rendered pages, optimized images (WebP/AVIF), lazy loading
- **Security** — Input validation, XSS-safe forms, noopener/noreferrer on external links

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services, projects, testimonials, FAQ, contact |
| About | `/about` | Company story, values, timeline, expertise |
| Services | `/services` | 8 detailed electrical services with features |
| Projects | `/projects` | Completed project showcase with images |
| Gallery | `/work-gallery` | 27 photos with category filters & lightbox |
| Contact | `/contact` | Form (WhatsApp), map, contact cards |
| Privacy Policy | `/privacy-policy` | Privacy policy |
| Terms of Service | `/terms-of-service` | Terms of service |
| 404 | `/404` | Custom error page |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js        # Sticky header with mobile menu
│   ├── Footer.js        # Multi-column footer with credits
│   ├── Layout.js        # Main layout (WhatsApp, scroll-top, phone bar)
│   ├── HeroSection.js   # Full-screen hero with stats
│   ├── WhyChooseUs.js   # Feature cards
│   ├── ServicesOverview.js
│   ├── ProjectsOverview.js
│   ├── Testimonials.js  # Auto-rotating carousel
│   ├── ContactSection.js
│   └── FAQSection.js    # Bilingual accordion
├── pages/               # Next.js pages
│   ├── _app.js
│   ├── _document.js     # SEO, fonts, JSON-LD schema
│   ├── index.js
│   ├── about.js
│   ├── services.js
│   ├── projects.js
│   ├── work-gallery.js
│   ├── contact.js
│   ├── privacy-policy.js
│   ├── terms-of-service.js
│   └── 404.js
├── data/                # Centralized data
│   ├── projects.js      # Project listings
│   ├── galleryImages.js # Gallery with categories
│   └── siteConfig.js    # Phone, email, WhatsApp config
├── styles/
│   └── globals.css      # Tailwind + custom components
public/
├── images/              # Project images
│   └── gallery/         # 22 real JustDial photos
├── favicon.ico
├── favicon.svg
├── robots.txt
└── sitemap.xml
```

## Design System

- **Theme:** Royal Blue (#0A0F2D) & Gold (#FFD700) Dark Mode
- **Font:** Inter (Google Fonts)
- **Components:** `.card`, `.btn-primary`, `.btn-outline`, `.glass`, `.text-gold`
- **Animations:** fadeIn, fadeUp, float, glow, pulse-slow

---

**Designed & Developed by [Niket Group](https://niketgroup.in)** | Powered by NiketGroup.in Hosting
