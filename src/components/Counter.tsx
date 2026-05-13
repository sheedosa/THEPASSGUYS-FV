import { useEffect, useRef } from 'react';

interface CounterProps {
  to: number;
  decimals?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

/**
 * Count-up animation from 0 to `to`. Ease-out cubic.
 * Honors prefers-reduced-motion by jumping to the final value.
 */
export default function Counter({
  to,
  decimals = 0,
  duration = 1400,
  delay = 0,
  className,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      el.textContent = to.toFixed(decimals);
      return;
    }

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    let rafId = 0;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime - delay;

      if (elapsed < 0) {
        el.textContent = (0).toFixed(decimals);
        rafId = requestAnimationFrame(tick);
        return;
      }

      const t = Math.min(elapsed / duration, 1);
      const value = to * easeOut(t);
      el.textContent = value.toFixed(decimals);

      if (t < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [to, decimals, duration, delay]);

  return <span ref={ref} className={className}>0{decimals ? '.' + '0'.repeat(decimals) : ''}</span>;
}
