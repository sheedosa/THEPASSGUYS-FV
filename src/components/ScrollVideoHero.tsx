import { useRef, useEffect, useCallback } from 'react';
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
  const rafId = useRef<number>(0);

  const handleScroll = useCallback(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    if (!section || !video || !overlay) return;

    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = sectionHeight - viewportHeight;

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

    // Text overlay: fade in at 30-45%, visible 45-70%, fade out 70-85%
    let opacity = 0;
    let translateY = 20;
    if (progress < 0.30) {
      opacity = 0;
      translateY = 20;
    } else if (progress < 0.45) {
      const t = (progress - 0.30) / 0.15;
      opacity = t;
      translateY = 20 * (1 - t);
    } else if (progress < 0.70) {
      opacity = 1;
      translateY = 0;
    } else if (progress < 0.85) {
      const t = (progress - 0.70) / 0.15;
      opacity = 1 - t;
      translateY = -10 * t;
    } else {
      opacity = 0;
      translateY = -10;
    }

    overlay.style.opacity = String(opacity);
    overlay.style.transform = `translateY(${translateY}px)`;
  }, []);

  useEffect(() => {
    const tick = () => {
      handleScroll();
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId.current);
  }, [handleScroll]);

  // Text position classes
  const positionClasses = {
    center: 'items-center justify-center text-center',
    right: 'items-center justify-end text-right pr-8 md:pr-16 lg:pr-24',
    left: 'items-center justify-start text-left pl-8 md:pl-16 lg:pl-24',
    top: 'items-start justify-center text-center pt-24 md:pt-32',
    bottom: 'items-end justify-center text-center pb-24 md:pb-32',
  };

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{ height: '300vh' }}
      data-scene={scene.id}
    >
      {/* Sticky video container */}
      <div className="sticky top-0 h-screen w-screen bg-white flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          className="w-full h-full object-contain md:object-contain max-h-screen"
          style={{ objectFit: 'contain' }}
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={scene.src} type="video/mp4" />
        </video>

        {/* Text overlay */}
        <div
          ref={overlayRef}
          className={`absolute inset-0 flex flex-col pointer-events-none z-10 px-6 ${positionClasses[scene.textPosition]}`}
          style={{ opacity: 0, transform: 'translateY(20px)', willChange: 'opacity, transform' }}
        >
          <div className="pointer-events-auto max-w-xl">
            <h2
              className="text-[2.5rem] md:text-[4rem] font-bold leading-[1.05] tracking-tight text-secondary"
              style={{ textShadow: '0 2px 20px rgba(255,255,255,0.8)' }}
            >
              {scene.heading}
            </h2>
            <p
              className="mt-3 md:mt-4 text-base md:text-xl text-secondary/70 font-normal leading-relaxed max-w-[500px]"
              style={{ textShadow: '0 1px 12px rgba(255,255,255,0.9)' }}
            >
              {scene.subtext}
            </p>
            {scene.cta && (
              <Link
                to="/get-matched"
                className="inline-flex items-center gap-2 mt-6 md:mt-8 px-8 py-4 bg-primary text-secondary font-semibold text-base md:text-lg rounded-full hover:scale-[1.03] hover:brightness-105 transition-all duration-300 shadow-lg"
              >
                Find My Instructor
                <span aria-hidden="true">→</span>
              </Link>
            )}
          </div>
        </div>

        {/* Scene counter */}
        <div className="absolute bottom-6 left-6 md:left-10 flex items-center gap-3 text-secondary/30 pointer-events-none z-10">
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">Scroll</span>
          <span className="inline-block w-8 h-px bg-secondary/20" />
          <span className="text-[10px] font-medium tracking-[0.2em]">
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
  // Prefers-reduced-motion check
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReduced) {
    // Static fallback: just show the first and last scene headings
    return (
      <section id="hero-story" className="bg-white py-32 px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-secondary tracking-tight mb-6">
          Learn to Drive with Confidence
        </h2>
        <p className="text-lg text-secondary/65 mb-8 max-w-md mx-auto">
          Expert instructors, every lesson
        </p>
        <Link
          to="/get-matched"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-secondary font-semibold text-lg rounded-full hover:scale-[1.03] transition-transform duration-300 shadow-lg"
        >
          Find My Instructor
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    );
  }

  return (
    <section id="hero-story" className="bg-white">
      {SCENES.map((scene, i) => (
        <VideoScene key={scene.id} scene={scene} index={i} />
      ))}
    </section>
  );
}
