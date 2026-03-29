# Naman Yadav Portfolio

Interactive personal portfolio built with React, TypeScript, GSAP, Three.js, and Vite.

The site combines a 3D landing experience, scroll-driven motion, animated section reveals, and a responsive layout for showcasing profile, services, work, and contact details.

## Overview

- 3D hero section rendered with `@react-three/fiber`, `drei`, and `rapier`
- GSAP-powered scroll animations and section transitions
- Lenis-based smooth scrolling for deploy-safe production builds
- Custom text-splitting utility for animated headings and paragraph reveals
- Responsive layout across desktop and smaller screens
- Vercel-ready routing and asset caching via `vercel.json`

## Sections

- Landing hero with animated introduction
- Profile summary
- What I Do / services cards
- Career section
- Work showcase
- Tech stack scene
- Contact and social links

## Tech Stack

- React 18
- TypeScript
- Vite
- GSAP
- Three.js
- `@react-three/fiber`
- `@react-three/drei`
- `@react-three/rapier`
- Lenis
- CSS
- Vercel Analytics

## Getting Started

### Prerequisites

- Node.js 20+ recommended
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

The Vite dev server is exposed with `--host`, so it can be tested from other devices on the same network if needed.

## Available Scripts

- `npm run dev` starts the development server
- `npm run build` creates a production build in `dist/`
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## Project Structure

```text
src/
  components/
    Character/          3D scene and character logic
    styles/             section-specific styles
    utils/              GSAP, smooth scroll, and text animation helpers
  context/              loading state provider
  data/                 scene-related data
```

## Deployment

This project is configured for Vercel:

- all routes rewrite to `index.html`
- built assets under `/assets` receive long-term cache headers

Standard static hosting also works after:

```bash
npm run build
```

Then deploy the generated `dist/` folder.

## Notes

- The project previously referenced GSAP trial plugins, but the current codebase uses deploy-safe alternatives.
- Some animations and layout behavior are tuned specifically for this portfolio's visual design and content.
- `npm run build` passes in the current state of the project.
- `npm run lint` still reports existing issues in parts of the Three.js and animation codebase.

## License

This repository includes a custom license in [LICENSE](./LICENSE).

The code is shared for learning and reference purposes, not for cloning or commercial reuse. Review the license file before reusing any part of the project.
