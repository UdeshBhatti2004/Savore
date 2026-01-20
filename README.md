SAVORÉ is a premium, editorial-style restaurant website built with Next.js, Tailwind CSS, Framer Motion, and Lenis.
The experience is calm, intentional, and typography-driven — inspired by award-ready hospitality websites.

✨ Project Vision

SAVORÉ focuses on restraint and confidence rather than visual noise.

Editorial typography
Minimal color usage
Structured layouts
Smooth, continuous motion
Timeless, high-end aesthetic

The goal is to create a restaurant website that feels crafted, considered, and never loud.

🛠 Tech Stack

Next.js (App Router)
React + TypeScript
Tailwind CSS
Framer Motion
Lenis (Smooth Scrolling)

🎨 Design System (LOCKED)
Color

Black & off-white base
Red used only as an accent
No gradients
No flashy colors

Typography

Bold grotesk for headings
Serif italic used only for emphasis
Uppercase with tight tracking
Typography-led layouts

Layout Rules

No mx-auto on large screens
Horizontal spacing handled by a reusable Container
Desktop and mobile share the same design language
No mobile-only redesigns

🧭 Scrolling & Navigation Architecture
Lenis Smooth Scroll

Single global Lenis instance
Mounted only once in app/layout.tsx
Exposed globally via:

(window as any).lenis

Never mounted inside pages or components

Scroll Navigation Rules (VERY IMPORTANT)

No hash navigation
No browser anchor scrolling
No <a href="#section">
All scrolling handled via Lenis

ScrollLink Component

All internal navigation uses a custom ScrollLink component.

Renders a <button>
Calls lenis.scrollTo()
Supports offset for sticky navbar
Supports optional onClick (used for mobile menu close)
Children must be non-interactive elements (span, div, text)

📄 Site Structure

Each section exists in normal document flow and has a stable ID.

section id="menu"
section id="about"
section id="gallery"
section id="reserve"

🧩 Implemented Sections
Hero

Editorial headline
Lenis-powered CTAs
Minimal motion

Menu

Desktop grid
Mobile carousel
Shared header style (design reference)

Gallery — The Look

Vertical scroll controlling horizontal motion
Sticky section (300vh)
Full-bleed film strip
Editorial philosophy section

About

Two-column editorial layout
Parallax imagery
Continuous subtle motion

Booking / Reserve

Two-column layout
Editorial booking form
Lenis scroll target (id="reserve")

Footer

Editorial grid layout
Live local time
Lenis-powered navigation
CTA scrolls to reservation section

🚫 Strict Rules (Do Not Break)

No hash navigation
No browser anchor scrolling
No mx-auto on large screens
No moving Lenis into pages
No redesigning section headers
No helper UI components unless required
No mobile-only layouts

🎯 Project Goal

To build a restaurant website that feels:

Intentional
Confident
Calm
Minimal
Timeless
Award-ready

👤 Author

Udesh Bhatti
Design & Development

📜 License

This project is for educational and portfolio purposes only.