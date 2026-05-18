import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/* ═══════════════════════════════════════════════════════════════════════════
 * ImmersiveHero — Full-bleed cinematic video hero
 *
 * Design intent:
 *   • Full-viewport looping video background with dark gradient overlay
 *   • Giant Bebas Neue heading, Pass Yellow accents, CTA button
 *   • Auto-entry animation on mount
 *   • Parallax scroll-out: video scales up, content fades + lifts
 *   • Trust badges row at bottom
 *   • Scroll indicator with gentle pulse
 * ═══════════════════════════════════════════════════════════════════════════ */

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260518_111644_a408553e-d4e8-4ab6-9f00-f48f9646a2d2.mp4';

const TRUST_ITEMS = ['DVSA-approved', 'Free matching', '10 boroughs', 'No contracts'];

export default function ImmersiveHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  /* ── Video ready detection + force autoplay ───────────────────────────── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true; // ensure muted (required for autoplay)
      video.play().catch(() => {});
      setVideoReady(true);
    };

    // Try playing as early as possible — even loadeddata (readyState 2) is enough
    if (video.readyState >= 1) {
      tryPlay();
      return;
    }
    const onReady = () => tryPlay();
    video.addEventListener('loadeddata', onReady);
    // Also listen for canplay as fallback
    video.addEventListener('canplay', onReady);
    return () => {
      video.removeEventListener('loadeddata', onReady);
      video.removeEventListener('canplay', onReady);
    };
  }, []);

  /* ── Entry animation + scroll parallax ───────────────────────────────── */
  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const content = contentRef.current;
    const scrollHint = scrollHintRef.current;
    if (!section || !video || !overlay || !content) return;

    // Heading words/accent are driven by Framer Motion in JSX (more reliable than GSAP timeline here)
    const subtext = content.querySelector<HTMLElement>('[data-hero-subtext]');
    const cta = content.querySelector<HTMLElement>('[data-hero-cta]');
    const trust = content.querySelector<HTMLElement>('[data-hero-trust]');

    const scrollTriggers: ScrollTrigger[] = [];
    let entryDone = false;

    /* ── Scroll-driven parallax (created after entry) ──────────────── */
    function initScrollParallax() {
      if (scrollTriggers.length > 0) return;

      scrollTriggers.push(
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
          onUpdate: (self) => {
            const p = self.progress;

            // Video: scale up slightly + drift down for parallax depth
            video.style.transform = `scale(${1 + p * 0.15}) translateY(${p * -4}%)`;

            // Overlay gradient: darken more as you scroll
            overlay.style.opacity = String(Math.min(1, 0.65 + p * 0.35));

            // Content: fade out + lift
            if (p < 0.6) {
              const t = p / 0.6;
              content.style.opacity = String(1 - t);
              content.style.transform = `translateY(${-t * 80}px)`;
            } else {
              content.style.opacity = '0';
            }

            // Scroll hint
            if (scrollHint && p > 0.02) {
              scrollHint.style.opacity = '0';
            }
          },
        }),
      );
    }

    /* ── Skip entry if already scrolled ────────────────────────────── */
    if (window.scrollY > 80) {
      video.style.opacity = '1';
      video.style.transform = 'scale(1)';
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
      if (subtext) gsap.set(subtext, { opacity: 1, y: 0 });
      if (cta) gsap.set(cta, { opacity: 1, y: 0 });
      if (trust) gsap.set(trust, { opacity: 1 });
      entryDone = true;
      initScrollParallax();
      return () => scrollTriggers.forEach((st) => st.kill());
    }

    /* ── Mount entry animation ─────────────────────────────────────── */
    video.style.opacity = '0';
    video.style.transform = 'scale(1.05)';
    content.style.opacity = '1';
    content.style.transform = 'translateY(0)';
    if (subtext) gsap.set(subtext, { opacity: 0, y: 28 });
    if (cta) gsap.set(cta, { opacity: 0, y: 20 });
    if (trust) gsap.set(trust, { opacity: 0 });
    if (scrollHint) gsap.set(scrollHint, { opacity: 0 });

    const tl = gsap.timeline({ delay: 0.05 });

    // Video fades in fast — appear within 0.8s
    tl.to(video, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      onUpdate: function () {
        const progress = this.progress();
        const s = 1.05 - 0.05 * progress;
        const o = progress;
        video.style.opacity = String(o);
        video.style.transform = `scale(${s})`;
      },
    });

    // Heading words + accent are handled by Framer Motion in JSX (kicks off on mount automatically)
    if (subtext) {
      tl.to(subtext, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.2');
    }
    if (cta) {
      tl.to(cta, { opacity: 1, y: 0, duration: 0.55, ease: 'back.out(1.4)' }, '-=0.35');
    }
    if (trust) {
      tl.to(trust, { opacity: 1, duration: 0.5, ease: 'power1.out' }, '-=0.3');
    }
    if (scrollHint) {
      tl.to(scrollHint, { opacity: 1, duration: 0.5, ease: 'power1.out' }, '-=0.2');
    }

    tl.call(() => {
      entryDone = true;
      initScrollParallax();
    });

    const onEarlyScroll = () => {
      if (!entryDone && window.scrollY > 50) {
        tl.progress(1).kill();
        video.style.opacity = '1';
        video.style.transform = 'scale(1)';
        if (subtext) gsap.set(subtext, { opacity: 1, y: 0 });
        if (cta) gsap.set(cta, { opacity: 1, y: 0 });
        if (trust) gsap.set(trust, { opacity: 1 });
        if (scrollHint) gsap.set(scrollHint, { opacity: 0 });
        entryDone = true;
        initScrollParallax();
        window.removeEventListener('scroll', onEarlyScroll);
      }
    };
    window.addEventListener('scroll', onEarlyScroll, { passive: true });

    return () => {
      tl.kill();
      scrollTriggers.forEach((st) => st.kill());
      window.removeEventListener('scroll', onEarlyScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[140vh] h-[140svh]"
      data-hero="immersive"
    >
      {/* Sticky viewport container */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen h-[100svh] w-full overflow-hidden"
      >
        {/* ── Video background ─────────────────────────────────────── */}
        <div className="absolute inset-0">
          {!videoReady && (
            <div className="absolute inset-0 bg-secondary flex items-center justify-center z-10">
              <div className="w-10 h-10 border-2 border-white/20 border-t-primary rounded-full animate-spin" />
            </div>
          )}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0, transform: 'scale(1.05)', willChange: 'transform, opacity' }}
            muted
            loop
            playsInline
            autoPlay
            preload="auto"
          >
            <source src={HERO_VIDEO} type="video/mp4" />
          </video>
        </div>

        {/* ── Gradient overlay ─────────────────────────────────────── */}
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(10,10,10,0.45) 0%, rgba(10,10,10,0.55) 40%, rgba(10,10,10,0.82) 80%, rgba(10,10,10,0.95) 100%)',
            opacity: 0.65,
          }}
        />

        {/* ── Content ──────────────────────────────────────────────── */}
        <div
          ref={contentRef}
          className="relative z-10 h-full flex flex-col justify-end pb-16 sm:pb-20 md:pb-28 lg:pb-32 px-6 sm:px-8 md:px-16 lg:px-24"
          style={{ willChange: 'opacity, transform' }}
        >
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5 sm:mb-6">
              <span className="inline-block w-8 h-px bg-white/30" aria-hidden="true" />
              <span className="font-accent text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80">
                Greater Manchester
              </span>
            </div>

            {/* Heading — Bebas Neue, split for punchy entrance (pure CSS animation) */}
            <h1 className="font-display text-[clamp(2.75rem,10vw,9rem)] text-white leading-[0.92] tracking-[0.02em]">
              <span className="block">
                {['LEARN', 'TO', 'DRIVE'].map((word, i) => (
                  <span
                    key={word}
                    className="inline-block overflow-hidden align-baseline"
                    style={{ paddingBottom: '0.08em', marginBottom: '-0.08em' }}
                  >
                    <span className={`hero-word-slam hero-word-slam-${i}`}>
                      {word}
                    </span>
                    {i < 2 && <span className="inline-block">&nbsp;</span>}
                  </span>
                ))}
              </span>
              {/* Yellow accent — mask-wipe reveal left → right */}
              <span className="hero-accent-wipe text-primary">
                WITH CONFIDENCE.
              </span>
            </h1>

            {/* Subtext */}
            <p
              data-hero-subtext
              className="mt-5 sm:mt-6 md:mt-8 text-white text-base sm:text-lg md:text-xl max-w-lg leading-relaxed font-sans"
            >
              We match you with a vetted, local DVSA-approved instructor.
              Free. In minutes.
            </p>

            {/* CTA */}
            <div data-hero-cta className="mt-7 sm:mt-8 md:mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/get-matched"
                className="group inline-flex items-center gap-3 px-8 py-4 sm:px-10 sm:py-[18px] bg-primary text-secondary font-accent font-bold uppercase tracking-[0.08em] rounded-sm text-base sm:text-lg hover:bg-primary-hover hover:shadow-yellow hover:-translate-y-0.5 transition-all duration-300"
              >
                Find My Instructor
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform duration-500 group-hover:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-4 text-white/90 font-accent font-semibold uppercase tracking-[0.08em] text-sm sm:text-base hover:text-white transition-colors duration-300"
              >
                How it works
                <span aria-hidden="true" className="text-white/70">&rarr;</span>
              </a>
            </div>
          </div>

          {/* ── Trust bar ────────────────────────────────────────────── */}
          <div
            data-hero-trust
            className="mt-12 sm:mt-16 md:mt-20 flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-6"
          >
            {TRUST_ITEMS.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                {i > 0 && (
                  <span className="w-1 h-1 rounded-full bg-primary/60" aria-hidden="true" />
                )}
                <span className="font-accent text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.25em] text-white/80">
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>

        {/* ── Scroll indicator ─────────────────────────────────────── */}
        <div
          ref={scrollHintRef}
          className="absolute bottom-4 sm:bottom-6 right-6 sm:right-8 md:right-16 lg:right-24 flex items-center gap-3 z-10 pointer-events-none"
          style={{ opacity: 0 }}
        >
          <span className="font-accent text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.4em] text-white/70">
            Scroll
          </span>
          <div className="w-8 h-px bg-gradient-to-r from-white/30 to-transparent relative overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-3 bg-white/50 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
