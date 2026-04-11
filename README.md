# Sipwala — Financial Services Website

A production-ready Next.js 14 + Tailwind CSS website for Sipwala, a SEBI-registered investment advisory platform.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript
- **Fonts**: Manrope (headlines) + Inter (body) via `next/font/google`
- **Icons**: Google Material Symbols Outlined

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — Hero, Stats, Investment Archetypes, Why Sipwala, Testimonials, CTA |
| `/mutual-funds` | Explore Mutual Funds — Search, Category Cards, Featured Funds, Sidebar |
| `/calculator` | SIP Calculator — Interactive sliders, Live donut chart, Fund recommendations |
| `/contact` | Contact Us — Consultation form, Office info, Map, FAQ |
| `/about` | About Us — Mission, Milestones, Leadership Team, Trust Badges |

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
sipwala/
├── app/
│   ├── layout.tsx          # Root layout (Navbar + Footer + Fonts)
│   ├── globals.css         # Tailwind + custom styles
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About Us
│   ├── calculator/page.tsx # SIP Calculator (Client Component)
│   ├── contact/page.tsx    # Contact Us
│   └── mutual-funds/page.tsx  # Explore Funds
├── components/
│   ├── Navbar.tsx          # Fixed nav with dropdowns + mobile menu
│   └── Footer.tsx          # Footer with newsletter
├── tailwind.config.js      # Full Sipwala design system colors
├── next.config.js
└── package.json
```

## Design System

**Primary Color**: `#28691a` (Forest Green)  
**Secondary Color**: `#5755a5` (Indigo Purple)  
**Surface**: `#fef7ff` (Off-white)

The design system follows Material Design 3 color token conventions with custom Sipwala branding.

## Notes

- The SIP Calculator uses React `useState` and is a Client Component
- The Navbar uses `usePathname` for active link detection
- All pages are Server Components except the Calculator
- Range input styling is handled via global CSS (Tailwind cannot style pseudo-elements)
