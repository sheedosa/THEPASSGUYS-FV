import { useRef, useEffect, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────────────────────────
 * Scene data — 6 scroll-driven video sections
 * ───────────────────────────────────────────────────────────────────────────── */
const SCENES = [
  {
    id: 'entrance',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260517_230640_e8d0b075-2914-4a21-a34d-24f77bc41610.mp4',
    heading: 'Learn to Drive with Confidence',
    subtext: 'Expert instructors, every lesson',
    textPosition: 'center' as const,
  },
  {
    id: 'reveal',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260517_230647_492b1119-62d3-44b2-b754-c3a4835d48ae.mp4',
    heading: 'Expert Instructors',
    subtext: 'Patient, professional, and fully qualified. Ready to help you get your licence.',
    textPosition: 'right' as const,
  },
  {
    id: 'turn',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260517_230653_54a376a1-a11b-4ef0-ae23-d7c337ed0cd8.mp4',
    heading: 'Fully Qualified & Insured',
    subtext: 'Every vehicle, every instructor. Fully certified for your peace of mind.',
    textPosition: 'left' as const,
  },
  {
    id: 'drive-through',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260517_230659_a7a5a82f-d37d-4324-ab15-1ac9d74dfdca.mp4',
    heading: 'Lessons Across the Area',
    subtext: 'We come to you. Flexible pickup, local routes, real roads.',
    textPosition: 'top' as const,
  },
  {
    id: 'approach',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260517_230704_1f04186d-e75a-43a0-a439-3e2395300b68.mp4',
    heading: 'Pass First Time',
    subtext: 'Our students have an above-average first-time pass rate',
    textPosition: 'bottom' as const,
  },
  {
    id: 'exit',
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260517_230714_d0e31cda-e46c-446f-9dea-c5a073a0ce8d.mp4',
    heading: 'Ready to Start?',
    subtext: 'Book your first lesson today',
    textPosition: 'center' as const,
    cta: true,
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
 * Single scene component
 * ───────────────────────────────────────────────────────────────────────────── */
function VideoScene({
  scene,
  index,
}: {
  scene: (typeof SCENES)[number];
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  /* ── Robust video-ready detection ────────────────────────────────────── */
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // If already loaded (cached / fast network), set immediately
    if (video.readyState >= 2) {
      setVideoReady(true);
      return;
    }
    const onReady = () => setVideoReady(true);
    video.addEventListener('loadeddata', onReady);
    return () => video.removeEventListener('loadeddata', onReady);
  }, []);

  /* ── Lazy-load videos via IntersectionObserver ────────────────────────── */
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // First scene loads immediately
    if (index === 0) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.preload = 'auto';
          video.load();
          observer.disconnect();
        }
      },
      { rootMargin: '200% 0px' }, // Start loading 2 viewports ahead
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [index]);

  /* ── Scroll-driven video scrubbing + text overlay ────────────────────── */
  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!section || !video || !overlay) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - viewportHeight;
    if (scrollableDistance <= 0) return;

    // Progress: 0 at top of section, 1 at bottom
    const progress = Math.max(0, Math.min(1, -rect.top / scrollableDistance));

    // Scrub video currentTime
    if (video.duration && isFinite(video.duration)) {
      const targetTime = progress * video.duration;
      // Only seek if difference is meaningful (avoids constant seeking)
      if (Math.abs(video.currentTime - targetTime) > 0.03) {
        video.currentTime = targetTime;
      }
    }

    // Text overlay: fade in 25-40%, visible 40-65%, fade out 65-80%
    let opacity = 0;
    let translateY = 20;
    if (progress < 0.25) {
      opacity = 0;
      translateY = 20;
    } else if (progress < 0.40) {
      const t = (progress - 0.25) / 0.15;
      opacity = t;
      translateY = 20 * (1 - t);
    } else if (progress < 0.65) {
      opacity = 1;
      translateY = 0;
    } else if (progress < 0.80) {
      const t = (progress - 0.65) / 0.15;
      opacity = 1 - t;
      translateY = -10 * t;
    } else {
      opacity = 0;
      translateY = -10;
    }

    overlay.style.opacity = String(opacity);
    overlay.style.transform = `translateY(${translateY}px)`;
  }, []);

  /* ── rAF loop — only runs when section is near viewport ──────────────── */
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf = 0;
    let running = false;

    const tick = () => {
      handleScroll();
      if (running) raf = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running) {
          running = true;
          raf = requestAnimationFrame(tick);
        } else if (!entry.isIntersecting && running) {
          running = false;
          cancelAnimationFrame(raf);
        }
      },
      { rootMargin: '10% 0px' },
    );
    observer.observe(section);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, [handleScroll]);

  // Text position classes (flex-col: justify = vertical, items = horizontal)
  // On mobile, all positions centre for readability; desktop uses directional layout
  const positionClasses = {
    center: 'items-center justify-center text-center',
    right: 'items-center md:items-end justify-center text-center md:text-right md:pr-16 lg:pr-24',
    left: 'items-center md:items-start justify-center text-center md:text-left md:pl-16 lg:pl-24',
    top: 'items-center justify-center md:justify-start text-center pt-0 md:pt-32',
    bottom: 'items-center justify-center md:justify-end text-center pb-0 md:pb-32',
  };

  return (
    <div
      ref={sectionRef}
      className="relative h-[200vh] md:h-[300vh]"
      style={{ touchAction: 'pan-y' }}
      data-scene={scene.id}
    >
      {/* Sticky video container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ background: '#f5f5f5' }}>
        {/* Loading skeleton — visible until video has data */}
        {!videoReady && (
          <div className="absolute inset-0 flex items-center justify-center z-0">
            <div className="w-8 h-8 border-2 border-secondary/15 border-t-primary rounded-full animate-spin" />
          </div>
        )}

        <video
          ref={videoRef}
          className={`w-full h-full object-cover transition-opacity duration-500 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
          style={{ pointerEvents: 'none' }}
          muted
          playsInline
          preload={index === 0 ? 'auto' : 'none'}
          aria-hidden="true"
        >
          <source src={scene.src} type="video/mp4" />
        </video>

        {/* Text overlay */}
        <div
          ref={overlayRef}
          className={`absolute inset-0 flex flex-col pointer-events-none z-10 px-4 sm:px-6 ${positionClasses[scene.textPosition]}`}
          style={{ opacity: 0, transform: 'translateY(20px)', willChange: 'opacity, transform' }}
        >
          <div className="pointer-events-auto max-w-xl rounded-2xl px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 bg-white/60 backdrop-blur-md">
            <h2
              className="text-3xl sm:text-[2.5rem] md:text-[4rem] font-bold leading-[1.05] tracking-tight text-secondary"
            >
              {scene.heading}
            </h2>
            <p
              className="mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-xl text-secondary/70 font-normal leading-relaxed max-w-[500px]"
            >
              {scene.subtext}
            </p>
            {scene.cta && (
              <Link
                to="/get-matched"
                className="inline-flex items-center gap-2 mt-5 sm:mt-6 md:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-secondary font-semibold text-sm sm:text-base md:text-lg rounded-full hover:scale-[1.03] hover:brightness-105 transition-all duration-300 shadow-lg"
              >
                Find My Instructor
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>

        {/* Scene counter */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 md:left-10 flex items-center gap-2 sm:gap-3 text-secondary/30 pointer-events-none z-10">
          <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.4em]">Scroll</span>
          <span className="inline-block w-6 sm:w-8 h-px bg-secondary/20" />
          <span className="text-[9px] sm:text-[10px] font-medium tracking-[0.2em]">
            {String(index + 1).padStart(2, '0')} / {String(SCENES.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
 * ScrollVideoHero — all 6 scenes in sequence
 * ───────────────────────────────────────────────────────────────────────────── */
export default function ScrollVideoHero() {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (prefersReduced) {
    // Static fallback: just show the first and last scene headings
    return (
      <section id="hero-story" className="bg-bg-page py-24 sm:py-32 px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-secondary tracking-tight mb-4 sm:mb-6">
          Learn to Drive with Confidence
        </h2>
        <p className="text-base sm:text-lg text-secondary/65 mb-6 sm:mb-8 max-w-md mx-auto">
          Expert instructors, every lesson
        </p>
        <Link
          to="/get-matched"
          className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-secondary font-semibold text-base sm:text-lg rounded-full hover:scale-[1.03] transition-transform duration-300 shadow-lg"
        >
          Find My Instructor
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    );
  }

  return (
    <section id="hero-story">
      {SCENES.map((scene, i) => (
        <VideoScene key={scene.id} scene={scene} index={i} />
      ))}
    </section>
  );
}
