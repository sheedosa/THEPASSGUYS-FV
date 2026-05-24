import { useEffect, useRef, type ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Reliable autoplay for the hero video.
 *
 * Desktop browsers (Chrome especially) sometimes refuse the HTML
 * `autoplay` attribute even when the video is muted — common triggers
 * are data-saver mode, low-power state, or restored tabs. This hook
 * calls `.play()` explicitly once the video can play, retries on
 * `canplay`, and resumes when the tab returns to the foreground.
 */
function useEnsureAutoplay(ref: { current: HTMLVideoElement | null }) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // React's `muted` prop has a known quirk where it doesn't always set
    // the HTML attribute that Chrome's autoplay policy reads. Force both
    // the IDL property and the attribute up-front so the very first
    // play() attempt is allowed.
    video.muted = true;
    video.setAttribute('muted', '');
    video.defaultMuted = true;
    // playsInline is also required on iOS Safari for inline autoplay.
    video.setAttribute('playsinline', '');

    const tryPlay = () => {
      video.muted = true;
      video.play().catch(() => {
        // Autoplay rejected — the one-shot user-gesture listener below
        // will pick it up the moment the user clicks, scrolls, or
        // touches anything on the page.
      });
    };

    // Fire immediately, then again as soon as enough data is buffered.
    tryPlay();
    if (video.readyState >= 2) tryPlay();

    // Safety net: if the `loop` attribute is ever dropped, manually
    // rewind on `ended`. We do NOT touch `pause` — the browser
    // legitimately pauses during buffering and fighting it makes
    // playback worse than the rare case it's solving.
    const onEnded = () => {
      video.currentTime = 0;
      tryPlay();
    };

    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);
    video.addEventListener('ended', onEnded);

    // Resume when the tab returns to the foreground.
    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener('visibilitychange', onVisibility);

    // One-shot user-gesture fallback for Chrome's strict autoplay
    // policy. If the first .play() was blocked because the user has
    // zero media-engagement history on the domain, this listener
    // retries on the very next click / scroll / touch / keystroke
    // anywhere on the page — then removes itself.
    const onFirstGesture = () => {
      tryPlay();
      window.removeEventListener('pointerdown', onFirstGesture);
      window.removeEventListener('touchstart', onFirstGesture);
      window.removeEventListener('keydown', onFirstGesture);
      window.removeEventListener('scroll', onFirstGesture);
    };
    window.addEventListener('pointerdown', onFirstGesture, { once: true, passive: true });
    window.addEventListener('touchstart', onFirstGesture, { once: true, passive: true });
    window.addEventListener('keydown', onFirstGesture, { once: true });
    window.addEventListener('scroll', onFirstGesture, { once: true, passive: true });

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      video.removeEventListener('ended', onEnded);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pointerdown', onFirstGesture);
      window.removeEventListener('touchstart', onFirstGesture);
      window.removeEventListener('keydown', onFirstGesture);
      window.removeEventListener('scroll', onFirstGesture);
    };
  }, [ref]);
}

/**
 * Hero — title slams in word-by-word, then the green "Smart." block pops
 * with rotation, then the CTA and supporting line lift up. Each word lives
 * inside an overflow-hidden mask so it appears from below the line.
 *
 * Choreography (timeline):
 *   0.00s   Pass     slides up
 *   0.08s   fast,    slides up
 *   0.18s   Drive    slides up
 *   0.34s   Smart.   pops + rotates into place
 *   0.55s   CTA      lifts up
 *   0.70s   sub-line fades in
 */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

// Each word: starts ~110% below baseline + slightly squashed, springs into
// its final position. `back.out`-ish easing for the punchy feel.
const wordVariants: Variants = {
  hidden: { y: '110%', scaleY: 1.1 },
  visible: {
    y: 0,
    scaleY: 1,
    transition: {
      type: 'spring',
      stiffness: 140,
      damping: 18,
      mass: 0.7,
    },
  },
};

// Helper that wraps a single word in a mask + the inner motion span.
// The outer span has `overflow: hidden` so anything below the baseline
// is clipped — that's what creates the "letter dropped behind a line"
// reveal effect.
function Word({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className="inline-block overflow-hidden align-baseline"
      style={{ paddingBottom: '0.08em', marginBottom: '-0.08em' }}
    >
      <motion.span
        variants={wordVariants}
        className={`inline-block ${accent ? 'text-primary bg-secondary px-4 py-1 rounded-xl mt-2 relative' : ''}`}
        style={accent ? { transformOrigin: '50% 100%' } : undefined}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ id }: { id?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEnsureAutoplay(videoRef);

  return (
    <section
      id={id}
      className="relative flex flex-col items-center pt-24 sm:pt-32 md:pt-40 pb-10 sm:pb-16 md:pb-20 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative container mx-auto px-4 sm:px-6"
      >
        {/* Location eyebrow — answers "is this for me?" in the first second */}
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-3 sm:mb-4"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.32em]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
            Manchester · North West
          </span>
        </motion.p>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-secondary leading-[0.85] tracking-tighter text-center text-balance">
          <Word>Pass</Word>
          <span>&nbsp;</span>
          <Word>fast,</Word>
          <br />
          <Word>Drive</Word>
          <span>&nbsp;</span>
          <Word accent>Smart.</Word>
        </h1>

        {/* CTA — fades in after the title finishes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            type: 'spring',
            stiffness: 110,
            damping: 18,
          }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            to="/book"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-primary text-secondary font-black uppercase tracking-widest text-base sm:text-lg rounded-full border-4 border-secondary shadow-[6px_6px_0_var(--color-secondary)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-secondary)] active:translate-y-0 active:shadow-[2px_2px_0_var(--color-secondary)] transition-all duration-200"
          >
            Book Now
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-xs sm:text-sm font-bold uppercase tracking-widest text-secondary/60"
          >
            First lesson this week · From £35/hr
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Hero video — large, contained block below the headline.
          IMPORTANT: this is NOT wrapped in a framer-motion opacity
          animation. Chrome's autoplay policy heuristically blocks
          playback for elements that start at opacity:0, even if they
          fade in immediately. Rendering the video at full visibility
          from the first frame gives the browser the clearest "this is
          a primary on-screen media element" signal it needs to
          allow muted autoplay. */}
      <div className="mt-8 sm:mt-12 md:mt-16 w-full flex justify-center">
        <div className="w-full sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%] xl:max-w-6xl">
          <video
            ref={videoRef}
            className="w-full h-auto object-contain"
            autoPlay
            muted
            defaultMuted
            loop
            playsInline
            preload="auto"
            disableRemotePlayback
            aria-hidden="true"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
