import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Smooth scroll wrapper.
 * Lenis owns the scroll loop; ScrollTrigger is hooked into Lenis so any
 * GSAP scroll-driven timeline scrubs perfectly in sync.
 *
 * The active Lenis instance is exposed on `window.__lenis` so anchor links
 * and the ScrollToTop helper can call `lenis.scrollTo(target, opts)` without
 * needing to thread refs through the tree.
 */

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({
      // 0.1 is Lenis' tuned default. Slightly snappier feel without losing the
      // glide quality on long pages.
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1.0,
      // Smooth out trackpad inertia bursts so the page never "races" the scroll
      touchMultiplier: 1.2,
      // Lenis v1 lets us decide whether to take over touch scrolling on mobile.
      // We DON'T (`syncTouch: false`) so iOS/Android native momentum scrolling
      // stays buttery — Lenis only smooths wheel + programmatic scrollTo.
      syncTouch: false,
    });

    // Expose so anchor links + ScrollToTop can use Lenis' easings.
    window.__lenis = lenis;

    // Drive ScrollTrigger from Lenis's scroll position
    lenis.on('scroll', ScrollTrigger.update);

    // Use a single RAF loop (GSAP's ticker) so Lenis + ScrollTrigger stay in lockstep
    const tickerFn = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
      if (window.__lenis === lenis) delete window.__lenis;
    };
  }, []);

  return null;
}
