import { useEffect } from 'react';

/**
 * Bulletproof muted-autoplay + loop for a <video> element.
 *
 * Designed to make playback effectively unstoppable on both desktop and
 * mobile without ever fighting the browser's legitimate buffering pauses.
 *
 * Layers (in order of when they fire):
 *
 *  1. On mount: force `muted` via IDL property + HTML attribute + defaultMuted.
 *     React's `muted` JSX prop alone is sometimes ignored by Chrome's autoplay
 *     policy, which reads the HTML attribute directly.
 *
 *  2. Immediate play(): called the moment the hook runs, and again when
 *     `canplay` or `loadeddata` fire (whichever comes first).
 *
 *  3. User-gesture fallback: if Chrome blocks the initial play() on a fresh
 *     domain with zero Media-Engagement history, the NEXT user interaction
 *     (mousemove, wheel, pointer, touch, scroll, key) retries play(). The
 *     listeners self-remove after firing once.
 *
 *  4. IntersectionObserver: retries play() every time the video scrolls into
 *     the viewport. Some browsers (Firefox, Safari) defer autoplay for elements
 *     that aren't visible on initial load.
 *
 *  5. Visibility-change: resumes playback when the tab returns to the foreground.
 *
 *  6. Staggered re-checks at 1 s, 3 s, and 6 s: catches every edge case where
 *     none of the above fired early enough (slow network, race between React
 *     hydration and media loading, restored browser session).
 *
 *  7. `ended` handler: manually rewinds + replays as a safety net if the native
 *     `loop` attribute is ever dropped (Safari low-power mode).
 *
 * It deliberately does NOT listen for `pause` — the browser pauses legitimately
 * while buffering, and retrying there causes a play/pause race that breaks the
 * element entirely.
 */
export function useVideoAutoplay(ref: { current: HTMLVideoElement | null }) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // ── Force muted state for autoplay eligibility ──────────────
    video.muted = true;
    video.setAttribute('muted', '');
    video.defaultMuted = true;
    video.setAttribute('playsinline', '');
    video.loop = true;

    const tryPlay = () => {
      // Re-assert muted every time — some browser extensions toggle it.
      video.muted = true;
      video.play().catch(() => {
        // Swallowed intentionally. One of the fallback layers below
        // will retry when the conditions change.
      });
    };

    // ── Layer 2: immediate + data-ready ─────────────────────────
    tryPlay();
    if (video.readyState >= 2) tryPlay();

    const onDataReady = () => tryPlay();
    video.addEventListener('loadeddata', onDataReady);
    video.addEventListener('canplay', onDataReady);

    // ── Layer 7: loop safety net ────────────────────────────────
    const onEnded = () => {
      video.currentTime = 0;
      tryPlay();
    };
    video.addEventListener('ended', onEnded);

    // ── Layer 5: tab refocus ────────────────────────────────────
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener('visibilitychange', onVisibility);

    // ── Layer 3: one-shot user-gesture fallback ─────────────────
    const GESTURES: (keyof WindowEventMap)[] = [
      'mousemove',
      'pointerdown',
      'touchstart',
      'wheel',
      'keydown',
      'scroll',
    ];
    const onFirstGesture = () => {
      tryPlay();
      GESTURES.forEach((g) => window.removeEventListener(g, onFirstGesture));
    };
    GESTURES.forEach((g) =>
      window.addEventListener(g, onFirstGesture, {
        once: true,
        passive: true,
      } as AddEventListenerOptions)
    );

    // ── Layer 4: IntersectionObserver ───────────────────────────
    let observer: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting && video.paused) {
            tryPlay();
          }
        },
        { threshold: 0.15 }
      );
      observer.observe(video);
    }

    // ── Layer 6: staggered re-checks ────────────────────────────
    const timers = [1000, 3000, 6000].map((ms) =>
      window.setTimeout(() => {
        if (video.paused || video.currentTime < 0.05) tryPlay();
      }, ms)
    );

    // ── Cleanup ─────────────────────────────────────────────────
    return () => {
      video.removeEventListener('loadeddata', onDataReady);
      video.removeEventListener('canplay', onDataReady);
      video.removeEventListener('ended', onEnded);
      document.removeEventListener('visibilitychange', onVisibility);
      GESTURES.forEach((g) => window.removeEventListener(g, onFirstGesture));
      observer?.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [ref]);
}
