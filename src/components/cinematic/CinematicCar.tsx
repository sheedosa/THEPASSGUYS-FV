import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CarSVG from './CarSVG';

gsap.registerPlugin(ScrollTrigger);

/**
 * CinematicCar — persistent foreground layer driven by scroll position.
 *
 * The outer `.cinematic-car-outer` element is fixed full-screen and receives
 * GSAP transforms scrubbed against page scroll. An inner `.cinematic-car-idle`
 * adds a soft floating bob (CSS) so the car is always alive, even at rest.
 *
 * Section beats (matches the spec):
 *   1. Hero            → centered near bottom, scale 1, idle
 *   2. Match           → diagonal up-right, scale 1.15, slight tilt
 *   3. Vehicles        → horizontal left, rotate -8deg
 *   4. Coverage        → toward viewer, scale 1.5, darker bg
 *   5. CTA             → returns to center, scale 1, settled
 */
export default function CinematicCar() {
  const outerRef = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !outerRef.current || !carRef.current) return;

    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(carRef.current, {
        xPercent: -50,
        yPercent: -50,
        x: 0,
        y: '18vh',
        scale: 1,
        rotate: 0,
        force3D: true,
      });

      // Master scroll-scrubbed timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: 'body',
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });

      // 0 → 25% : Hero → Match
      tl.to(carRef.current, {
        x: '24vw',
        y: '-2vh',
        scale: 1.15,
        rotate: -3,
        ease: 'power2.inOut',
        duration: 1,
      });

      // 25% → 50% : Match → Vehicles
      tl.to(carRef.current, {
        x: '-26vw',
        y: '4vh',
        scale: 1.18,
        rotate: -8,
        ease: 'power2.inOut',
        duration: 1,
      });

      // 50% → 75% : Vehicles → Coverage (toward viewer)
      tl.to(
        carRef.current,
        {
          x: '0vw',
          y: '6vh',
          scale: 1.55,
          rotate: 0,
          ease: 'power2.inOut',
          duration: 1,
        },
        '>',
      );

      // 75% → 100% : Coverage → CTA (settle back to center)
      tl.to(carRef.current, {
        x: '0vw',
        y: '14vh',
        scale: 1,
        rotate: 0,
        ease: 'power3.out',
        duration: 1,
      });
    }, outerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Car layer — fixed full-screen, content layer sits on top (z-20+) */}
      <div
        ref={outerRef}
        aria-hidden="true"
        className="fixed inset-0 z-[10] pointer-events-none overflow-hidden"
      >{/* car wrapper below; no darken overlay anymore */}
        {/* GSAP-controlled wrapper. Pivots from screen center via xPercent/yPercent -50. */}
        <div
          ref={carRef}
          className="absolute left-1/2 top-1/2 w-[88vw] sm:w-[70vw] md:w-[58vw] lg:w-[48vw] max-w-[820px] will-change-transform"
          style={{ transform: 'translate(-50%, -50%)' }}
        >
          {/* Idle float — CSS-only bob keeps the car feeling alive at rest */}
          <div className="cinematic-car-idle">
            <CarSVG />
          </div>
        </div>
      </div>
    </>
  );
}
