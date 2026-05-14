import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Cinematic background video — fixed, full screen, behind everything.
 *
 * Two scroll-driven behaviours:
 *   1. currentTime scrub  — video frames advance with scroll (lerped for smoothness)
 *   2. Cinematic zoom-in  — video scales from 1.0 → 1.55 as the user scrolls,
 *                           making the car progressively fill more of the frame.
 *
 * No autoplay, no loop. The video only moves when the user scrolls.
 */
const VIDEO_SRC = '/cinematic-bg.mp4';

export default function CinematicBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    /* ── 1. Lerped currentTime scrub ───────────────────────────────────────
     * We keep a `targetTime` that ScrollTrigger updates on every scroll tick.
     * A separate gsap.ticker function lerps the actual `video.currentTime`
     * toward that target — this smooths out browser seek latency and gives
     * a cinematic trailing feel rather than frame-jumping.                  */
    let targetTime = 0;
    let lerpedTime = 0;
    let duration = 0;

    const scrubSt = ScrollTrigger.create({
      id: 'video-scrub',
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate(self) {
        targetTime = self.progress * (duration || 0);
      },
    });

    const tickFn = () => {
      lerpedTime += (targetTime - lerpedTime) * 0.07;
      if (Math.abs(targetTime - lerpedTime) > 0.001 && duration > 0) {
        // fastSeek sacrifices precision for speed on Firefox; Chrome is fast either way
        const v = video as unknown as { fastSeek?: (t: number) => void };
        if (v.fastSeek) v.fastSeek(lerpedTime);
        else video.currentTime = lerpedTime;
      }
    };

    const initScrub = () => {
      duration = video.duration;
      gsap.ticker.add(tickFn);
    };

    if (video.readyState >= 1) {
      initScrub();
    } else {
      video.addEventListener('loadedmetadata', initScrub, { once: true });
    }

    /* ── 2. Cinematic zoom-in timeline ─────────────────────────────────────
     * scrub: 1.8 gives the zoom its own eased lag — slightly behind the
     * scroll — so it feels like a physical camera dolly move rather than a
     * direct 1:1 CSS scale.
     *
     * Scale keyframes per section (5 × 100vh page):
     *   S1 Hero        → 1.00  (wide establishing shot)
     *   S1→S2 Match    → 1.15  (begin push-in)
     *   S2→S3 Vehicles → 1.30  (car notably closer)
     *   S3→S4 Coverage → 1.45  (car fills the frame)
     *   S4→S5 CTA      → 1.55  (tight, intimate close-up)               */
    gsap.set(video, { scale: 1, xPercent: 0, yPercent: 0, transformOrigin: '50% 50%' });

    const zoomTl = gsap.timeline({
      scrollTrigger: {
        id: 'video-zoom',
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1.8,
        invalidateOnRefresh: true,
      },
    });

    // S1 → S2: gentle push-in, slight leftward drift
    zoomTl.to(video, {
      scale: 1.15,
      xPercent: -2,
      ease: 'power2.inOut',
      duration: 1,
    });

    // S2 → S3: continue push, reframe slightly right
    zoomTl.to(video, {
      scale: 1.30,
      xPercent: 1.5,
      ease: 'power2.inOut',
      duration: 1,
    });

    // S3 → S4: deeper push-in, drift back left
    zoomTl.to(video, {
      scale: 1.45,
      xPercent: -2.5,
      ease: 'power2.inOut',
      duration: 1,
    });

    // S4 → S5: final tight close-up, settle to centre
    zoomTl.to(video, {
      scale: 1.55,
      xPercent: 0,
      ease: 'power3.out',
      duration: 1,
    });

    return () => {
      video.removeEventListener('loadedmetadata', initScrub);
      gsap.ticker.remove(tickFn);
      scrubSt.kill();
      ScrollTrigger.getById('video-zoom')?.kill();
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-0 overflow-hidden bg-bg-page"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-[1200ms] ease-out will-change-transform"
        muted
        playsInline
        preload="auto"
        onCanPlay={(e) => {
          (e.currentTarget as HTMLVideoElement).style.opacity = '1';
        }}
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
