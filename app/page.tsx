"use client";

import { useEffect, useRef, useState } from "react";

// Reliable public HLS master playlist stream (Apple test stream - Big Buck Bunny 1080p/720p adaptive)
const HLS_STREAM_URL =
  "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Feature detection for native HLS (Safari, iOS, iPadOS, native HLS platforms)
    const canPlayHLS = video.canPlayType("application/vnd.apple.mpegurl");

    if (canPlayHLS === "maybe" || canPlayHLS === "probably") {
      video.src = HLS_STREAM_URL;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch(() => {
            // Autoplay was blocked or interrupted - fail gracefully without breaking UI
            setIsPlaying(false);
          });
      }
    } else {
      // Browser does not support native HLS playback
      // Graceful fallback to dark atmospheric baseline without exposing error UI
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
      {/* 5. Fullscreen HLS Video Background */}
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

      {/* 9. Video Contrast Layer - Subtle directional gradient ensuring legibility without crushing the video */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/35"
        aria-hidden="true"
      />

      {/* 10. Foreground UI Wrapper */}
      <div className="relative z-10 flex min-h-[100dvh] min-h-screen flex-col justify-between">
        {/* 11-16. Glassmorphic Navigation */}
        <header className="w-full px-5 pt-5 sm:px-8 sm:pt-7 lg:px-12">
          <nav
            aria-label="Primary"
            className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.18] bg-white/[0.12] px-5 py-3 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-xl transition-colors duration-200"
          >
            {/* 14. Brand Wordmark */}
            <a
              href="#"
              className="flex items-center gap-2.5 text-sm font-medium tracking-tight text-white transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-white/90" />
              <span className="tracking-[0.14em]">LUMEN</span>
            </a>

            {/* 15. Navigation Links */}
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

            {/* 16. Navigation CTA Pill */}
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

        {/* 17-23. Hero Content: Anchored in Bottom-Left Corner */}
        <main className="flex flex-1 items-end px-6 pb-10 sm:px-10 sm:pb-14 lg:px-16 lg:pb-20">
          <section className="max-w-xl text-left">
            {/* 19. Eyebrow */}
            <div className="mb-3.5 inline-flex items-center gap-2">
              <span className="h-1 w-1 rounded-full bg-white/70" />
              <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-white/70 sm:text-xs">
                Spatial Architecture 01
              </span>
            </div>

            {/* 20. Hero Headline */}
            <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl leading-[0.98]">
              Autonomous Spatial Intelligence.
            </h1>

            {/* 21. Hero Supporting Copy */}
            <p className="mt-5 max-w-lg text-sm font-normal leading-relaxed text-white/65 sm:text-base">
              Continuous neural telemetry and perception models designed to perceive,
              simulate, and orchestrate physical space at scale.
            </p>

            {/* 22. Hero CTA */}
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
