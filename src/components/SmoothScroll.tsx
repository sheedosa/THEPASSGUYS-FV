import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Smooth scroll wrapper.
 * Lenis owns the scroll loop; ScrollTrigger is hooked into Lenis so any
 * GSAP scroll-driven timeline scrubs perfectly in sync.
 */
export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const lenis = new Lenis({
      lerp: 0.09,
      smoothWheel: true,
      wheelMultiplier: 1.0,
    });

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
    };
  }, []);

  return null;
}
