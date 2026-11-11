# Master Blueprint & Exact Replica Prompt: Full-Screen HLS Video Hero Landing Page

> **Usage Instructions:**
> Pass the entire contents of this prompt into an AI coding agent (e.g. Antigravity, Claude, Cursor) to reconstruct this exact full-screen HLS cinematic landing page with zero omissions.

---

```markdown
# Prompt: Full-Screen HLS Video Hero Landing Page (LUMEN Spatial Computing Replica)

Build a modern, cinematic, production-grade **single-page landing page** using **Next.js (App Router) + React + TypeScript + Tailwind CSS**.

The entire page is centered around an edge-to-edge **full-screen HLS video background**, a floating translucent **glassmorphic navigation header**, and an understated **editorial hero content block anchored in the bottom-left corner**.

The implementation must strictly respect the design philosophies of:
- **Emil Design Engineering**: Exact layout boundaries, viewport safety, responsive interaction polish, performance, and rock-solid architecture.
- **Impeccable Design**: Typography hierarchy, calculated spacing, high contrast accessibility, and subtle optical refinement.
- **Taste**: Restraint, premium simplicity, absence of decorative slop, and no gratuitous UI clutter.

---

## 1. Technical Stack & Strict Constraints

Use strictly:
- Next.js (App Router, `app/` directory)
- React 19 (`use client` for browser media orchestration)
- TypeScript (Strict type checking, zero `any`)
- Tailwind CSS with PostCSS compilation pipeline
- Native browser APIs & Native HTML5 video capabilities

**Strict Prohibitions:**
- Do NOT use external animation libraries (No Framer Motion, GSAP, etc.)
- Do NOT use 3D/canvas renderers (No Three.js, WebGL, React Three Fiber)
- Do NOT use external UI component libraries (No shadcn/ui, Radix, MUI)
- Do NOT add multiple routes, dashboards, CMS, or backend services
- Do NOT install heavy HLS parsing libraries (use native HLS feature detection)

---

## 2. Page Architecture & Folder Structure

Keep the project ultra-lean:

```text
app/
  globals.css
  layout.tsx
  page.tsx
postcss.config.js
next.config.ts
package.json
tsconfig.json
```

Conceptual Component Structure:
```text
LandingPage
├── FullscreenVideoBackground (Native HTML5 <video> with HLS feature detection)
├── VideoContrastLayer (Subtle directional gradient)
├── ForegroundWrapper (z-10 flex min-h-[100dvh] flex-col justify-between)
│   ├── GlassNavigationHeader (Floating pill navbar, brand wordmark, links, pill CTA)
│   └── HeroContentSection (Anchored bottom-left, eyebrow, headline, copy, action buttons)
```

There are **NO** additional sections below the hero. No feature cards, no testimonials, no pricing tables, and no footer. The entire viewport is the hero experience.

---

## 3. Detailed Color Palette & Tokens

- **Base Background**: `#050505`
- **Primary Foreground (Text & Brand)**: `#FFFFFF`
- **Muted Foreground (Subtitles & Eyebrow)**: `rgba(255, 255, 255, 0.65)` to `rgba(255, 255, 255, 0.70)`
- **Glass Navbar Surface**: `rgba(255, 255, 255, 0.12)` (`bg-white/[0.12]`)
- **Glass Navbar Border**: `rgba(255, 255, 255, 0.18)` (`border-white/[0.18]`)
- **Glass Navbar Depth Shadow**: `0 8px 32px 0 rgba(0, 0, 0, 0.36)`
- **Backdrop Filter**: `backdrop-blur-xl`
- **Contrast Gradient**: `from-black/80 via-black/25 to-black/35`

---

## 4. Full-Screen Video Background & Native HLS Implementation

1. **HTML `<video>` Element Specifications**:
   - Attributes: `autoPlay`, `muted`, `loop`, `playsInline`, `aria-hidden="true"`, `tabIndex={-1}`
   - Styling: `pointer-events-none absolute inset-0 h-full w-full object-cover`
   - Transition: Smooth fade-in on playback `transition-opacity duration-1000` (`opacity-0` while mounting to `opacity-100` on play)

2. **HLS Source Stream**:
   - Master Playlist URL: `https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8`

3. **Detection & Fail-Safe Logic**:
   - Detect native HLS capability using:
     ```ts
     const canPlayHLS = video.canPlayType("application/vnd.apple.mpegurl");
     if (canPlayHLS === "maybe" || canPlayHLS === "probably") {
       video.src = HLS_STREAM_URL;
       video.play().catch(() => setIsPlaying(false));
     } else {
       setHasError(true);
     }
     ```
   - If native HLS is unsupported (or playback errors), fail gracefully by displaying the clean `#050505` dark background.
   - **Never** render browser player controls, broken media icons, or technical error popups.

---

## 5. Floating Glassmorphic Header Component

Positioned at the top with responsive padding:
- Container: `w-full px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12`
- Nav Pill: `mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.18] bg-white/[0.12] px-5 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl transition-colors duration-200`

### Inner Sections:
1. **Brand Wordmark (Left)**:
   - Text: `LUMEN`
   - Leading indicator: Small white dot `h-2 w-2 rounded-full bg-white/90`
   - Styling: `text-sm font-medium tracking-[0.14em] text-white hover:opacity-80 transition-opacity`
2. **Navigation Links (Center/Right)**:
   - Hidden on mobile (`hidden md:flex items-center gap-8`)
   - Links: `SYSTEMS`, `OPTICS`, `MANIFESTO`
   - Styling: `text-xs font-medium tracking-wider text-white/70 hover:text-white transition-colors duration-200`
3. **Primary Header Action (Right)**:
   - Text: `Launch Console`
   - Styling: `rounded-full border border-white/25 bg-white/10 px-4 py-1.5 sm:px-5 sm:py-2 text-xs font-medium tracking-wide text-white backdrop-blur-md hover:border-white/40 hover:bg-white/20 active:scale-[0.98] transition-all duration-200`

---

## 6. Bottom-Left Hero Content Component

Anchored specifically to the lower-left corner (NOT vertically centered):
- Outer Layout: `flex flex-1 items-end px-6 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-20`
- Content Width: `max-w-xl text-left`

### Typography & Spacing:
1. **Eyebrow**:
   - Element: Bullet dot + text `Spatial Architecture 01`
   - Styling: `mb-3.5 inline-flex items-center gap-2 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-white/70`
2. **Headline**:
   - Text: `Autonomous Spatial Intelligence.`
   - Styling: `text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tight text-white leading-[0.98]`
3. **Supporting Copy**:
   - Text: `Continuous neural telemetry and perception models designed to perceive, simulate, and orchestrate physical space at scale.`
   - Styling: `mt-5 max-w-lg text-sm sm:text-base font-normal leading-relaxed text-white/65`
4. **Action Group**:
   - Layout: `mt-8 flex items-center gap-4`
   - **Primary Button**: White pill `rounded-full bg-white px-6 py-3 text-xs sm:text-sm font-medium text-black hover:bg-white/90 active:scale-[0.98] transition-all duration-200` with arrow SVG translating on hover (`group-hover:translate-x-0.5`). Label: `Initialize Platform`.
   - **Secondary Button**: Translucent glass pill `rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-xs sm:text-sm font-medium text-white/90 backdrop-blur-md hover:border-white/40 hover:bg-white/[0.12] transition-colors duration-200`. Label: `Documentation`.

---

## 7. Accessibility & Motion Polish

- **Accessible Focus Rings**: Every link and button has clear accessibility rings: `focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white`.
- **Reduced Motion Support**:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- **Viewport Resilience**: Uses `min-h-[100dvh]` and `min-h-screen` to guarantee mobile URL bar expansions do not crop or overflow content.

---

## 8. Exact File Implementation Code

### `app/layout.tsx`
```tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUMEN — Precision Spatial Computing",
  description: "Next-generation spatial intelligence and real-time environment simulation.",
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-[#050505] text-white antialiased">
      <body className="h-full min-h-screen bg-[#050505] selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
```

### `app/page.tsx`
```tsx
"use client";

import { useEffect, useRef, useState } from "react";

const HLS_STREAM_URL = "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const canPlayHLS = video.canPlayType("application/vnd.apple.mpegurl");

    if (canPlayHLS === "maybe" || canPlayHLS === "probably") {
      video.src = HLS_STREAM_URL;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    } else {
      setHasError(true);
    }

    const handlePlaying = () => setIsPlaying(true);
    const handleError = () => {
      setHasError(true);
      setIsPlaying(false);
    };

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050505]">
      {/* Fullscreen Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        tabIndex={-1}
        className={`pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          isPlaying && !hasError ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Video Contrast Layer */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35"
        aria-hidden="true"
      />

      {/* Foreground UI Wrapper */}
      <div className="relative z-10 flex min-h-[100dvh] min-h-screen flex-col justify-between">
        {/* Glassmorphic Navigation */}
        <header className="w-full px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12">
          <nav
            aria-label="Primary"
            className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.18] bg-white/[0.12] px-5 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl transition-colors duration-200"
          >
            {/* Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-white/90" />
              <span className="tracking-[0.14em]">LUMEN</span>
            </a>

            {/* Navigation Links */}
            <div className="hidden items-center gap-8 md:flex">
              <a
                href="#systems"
                className="text-xs font-medium tracking-wider text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                SYSTEMS
              </a>
              <a
                href="#optics"
                className="text-xs font-medium tracking-wider text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                OPTICS
              </a>
              <a
                href="#manifesto"
                className="text-xs font-medium tracking-wider text-white/70 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                MANIFESTO
              </a>
            </div>

            {/* Navigation CTA Pill */}
            <div className="flex items-center gap-3">
              <a
                href="#terminal"
                className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white backdrop-blur-md transition-all duration-200 hover:border-white/40 hover:bg-white/20 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-5 sm:py-2"
              >
                Launch Console
              </a>
            </div>
          </nav>
        </header>

        {/* Hero Content: Anchored in Bottom-Left Corner */}
        <main className="flex flex-1 items-end px-6 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-20">
          <section className="max-w-xl text-left">
            {/* Eyebrow */}
            <div className="mb-3.5 inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/70" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                Spatial Architecture 01
              </span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98]">
              Autonomous Spatial Intelligence.
            </h1>

            {/* Hero Supporting Copy */}
            <p className="mt-5 max-w-lg text-sm font-normal leading-relaxed text-white/65 sm:text-base">
              Continuous neural telemetry and perception models designed to perceive,
              simulate, and orchestrate physical space at scale.
            </p>

            {/* Hero CTAs */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="#explore"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-medium tracking-wide text-black transition-all duration-200 hover:bg-white/90 active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-sm"
              >
                <span>Initialize Platform</span>
                <svg
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>

              <a
                href="#specification"
                className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] px-5 py-3 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md transition-colors duration-200 hover:border-white/40 hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-sm"
              >
                Documentation
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
```

### `app/globals.css`
```css
@import "tailwindcss";

:root {
  --background: #050505;
  --foreground: #ffffff;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}

html,
body {
  background-color: #050505;
  color: #ffffff;
  overflow-x: hidden;
  height: 100%;
}

@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### `postcss.config.js`
```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### `next.config.ts`
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Clean Next.js configuration ready for Vercel deployment */
};

export default nextConfig;
```

---

## 9. Vercel & Production Verification Command

Run the build script to ensure zero TypeScript, linting, or asset errors:

```bash
npm run build
```
Verify that all routes compile as static pages (`○ (Static) prerendered as static content`) with exit code 0.
```
