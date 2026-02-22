# Patrick Byishimo — Personal Branding Website

A modern, premium personal branding website for **Patrick Byishimo** — Gospel Artist, Worship Leader, and Songwriter (Edmonton, Canada | Rwanda-born | Multilingual).

## Tech Stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Icons** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview   # preview production build
```

## Project Structure

- `src/components/` — Navbar, Footer, ScrollProgress, ScrollToTop
- `src/sections/` — Hero, Biography, Music, Highlights, Digital Presence, Vision, Press Kit, Testimonials, Booking
- `src/ui/` — Button, Container, SectionWrapper, AnimatedReveal, Card
- `src/data/content.ts` — Copy, links, and content (edit here to customize)
- `src/hooks/` — useScrollProgress, useScrollToTop
- `src/types/` — TypeScript types

## Customization

- **Content**: Edit `src/data/content.ts` for bio, tracks, highlights, testimonials, social links, and press kit text.
- **Hero image**: Replace the hero background URL in `src/sections/Hero.tsx` with your own image path (e.g. `/hero-bg.jpg`).
- **SEO**: Update `index.html` meta tags and canonical URL for your domain.

## Features

- Sticky navbar with mobile menu
- Scroll progress indicator
- Smooth scroll navigation
- Scroll-to-top button
- Responsive layout
- SEO meta tags and semantic HTML
- Accessible (ARIA, focus states)
