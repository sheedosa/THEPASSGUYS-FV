import { useEffect } from 'react';

/**
 * Bulletproof muted-autoplay + loop for a <video> element.
 *
 * Why a hook and not just the `autoplay` attribute: desktop Chrome (and
 * Safari low-power mode) routinely refuse the HTML `autoplay` attribute
 * even on muted video — triggers include data-saver mode, a fresh domain
 * with zero Media-Engagement history, restored tabs, and battery saving.
 *
 * This hook makes playback effectively unstoppable without ever fighting
 * the browser's legitimate buffering pauses:
 *   1. Forces the `muted` IDL property AND the HTML attribute up-front
 *      (React's `muted` prop alone is sometimes ignored by the policy).
 *   2. Calls play() on mount, on `canplay`, on `loadeddata`, and when the
 *      tab returns to the foreground.
 *   3. Rewinds + replays on `ended` as a safety net if the `loop`
 *      attribute is ever dropped.
 *   4. One-shot user-gesture fallback (mousemove / wheel / pointer / touch
 *      / scroll / key) — the moment the user does anything, including just
 *      nudging the mouse, a blocked play() is retried, then the listeners
 *      remove themselves.
 *   5. A 1.5 s re-check: if the video still hasn't advanced past frame 0,
 *      try once more.
 *
 * It deliberately does NOT listen for `pause` — the browser pauses
 * legitimately while buffering, and retrying there causes a play/pause
 * race that leaves the element stuck. Looping is handled by the native
 * `loop` attribute plus the `ended` safety net.
 */
export function useVideoAutoplay(ref: { current: HTMLVideoElement | null }) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;
    video.setAttribute('muted', '');
    video.defaultMuted = true;
    video.setAttribute('playsinline', '');
    video.loop = true;

    const tryPlay = () => {
      video.muted = true;
      video.play().catch(() => {
        // Rejected — the gesture fallback below will retry on the next
        // user interaction.
      });
    };

    tryPlay();
    if (video.readyState >= 2) tryPlay();

    const onEnded = () => {
      video.currentTime = 0;
      tryPlay();
    };

    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('ended', onEnded);

    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener('visibilitychange', onVisibility);

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

    const retryTimer = window.setTimeout(() => {
      if (video.currentTime < 0.05 || video.paused) tryPlay();
    }, 1500);

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('ended', onEnded);
      document.removeEventListener('visibilitychange', onVisibility);
      GESTURES.forEach((g) => window.removeEventListener(g, onFirstGesture));
      window.clearTimeout(retryTimer);
    };
  }, [ref]);
}
