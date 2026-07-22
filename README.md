# Carrio Motors

A modern performance dealership website for handpicked sports cars, electric grand tourers, and luxury machines.

## Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   └── Footer.jsx
│   └── sections/
│       ├── Hero.jsx
│       ├── Lineup.jsx
│       ├── Service.jsx
│       └── Visit.jsx
├── data/
│   └── vehicles.js
├── styles/
│   ├── main.css
│   ├── variables.css
│   ├── utilities.css
│   └── components/
│       ├── hero.css
│       ├── lineup.css
│       ├── service.css
│       ├── visit.css
│       └── footer.css
├── App.jsx
└── main.jsx
```

## Design System

### Colors
- **Background**: `#090909` (--color-bg)
- **Elevated**: `#111111` (--color-bg-elevated)
- **Text**: `#ffffff` (--color-text)
- **Text Muted**: `#a1a1aa` (--color-text-muted)
- **Text Dim**: `#71717a` (--color-text-dim)
- **Accent**: `#ef4444` (--color-accent)
- **Border**: `rgba(255, 255, 255, 0.05)` (--color-border)

### Typography
- **Font Family**: Space Grotesk (--font-sans)
- **Weights**: 400, 500, 600, 700, 900
- **Scale**: xs (0.75rem) to 8xl (6rem)

### Spacing
- Base unit: 0.25rem (--space-xs)
- Scale: xs, sm, md, lg, xl, 2xl, 3xl, 4xl

### Border Radius
- sm: 0.375rem
- md: 0.5rem
- lg: 0.75rem
- xl: 1rem
- 2xl: 1.5rem

### Transitions
- Fast: 150ms
- Base: 200ms
- Slow: 300ms
- Slower: 500ms

## Animations

All animations respect `prefers-reduced-motion: reduce`.

- **heroDrift**: Hero background parallax drift
- **copyRise**: Hero copy entrance
- **stageIn**: Vehicle stage entrance
- **reveal**: Scroll-triggered reveal

## Accessibility

- Semantic HTML5 elements
- ARIA labels and roles
- Focus-visible states
- Skip to main content link
- Color contrast compliance
- Reduced motion support

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```"# carrio-motors" 
