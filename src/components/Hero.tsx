import { useRef, type ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useVideoAutoplay } from '../hooks/useVideoAutoplay';

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
//
// Padding/margin trick keeps room for descenders (the 'y' in "Drive",
// the comma in "fast,") so they don't get clipped by overflow:hidden.
function Word({ children, accent = false }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className="inline-block overflow-hidden align-baseline"
      style={{ paddingBottom: '0.12em', marginBottom: '-0.12em' }}
    >
      <motion.span
        variants={wordVariants}
        className={
          accent
            ? // Stamped accent: tight padding hugging the letterforms,
              // slight counter-rotation so it reads as a confident stamp
              // rather than a floating chip. Drop-shadow adds depth that
              // separates it from the page even on busy backgrounds.
              'inline-block text-primary bg-secondary px-3 sm:px-4 md:px-5 py-0.5 sm:py-1 rounded-xl -rotate-2 shadow-[4px_4px_0_var(--color-primary)] sm:shadow-[6px_6px_0_var(--color-primary)]'
            : 'inline-block'
        }
        style={accent ? { transformOrigin: '50% 100%' } : undefined}
      >
        {children}
      </motion.span>
    </span>
  );
}

export default function Hero({ id }: { id?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoAutoplay(videoRef);

  return (
    <section
      id={id}
      className="relative flex flex-col items-center justify-center min-h-[85svh] sm:min-h-[90svh] pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 md:pb-24 overflow-hidden bg-white"
    >
      {/* ── Background video layer ──────────────────────────────────
          Absolutely positioned to fill the entire hero section. The
          car stays the same size via max-w constraints on the inner
          wrapper. mix-blend-multiply makes the white video backdrop
          invisible against bg-white. The radial mask feathers the
          edges so there's no visible frame.

          The video is NOT wrapped in a framer-motion opacity animation
          — Chrome's autoplay policy blocks elements that start at
          opacity:0. Full visibility from frame one. */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          style={{
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 65% at 50% 50%, black 40%, transparent 100%)',
            maskImage:
              'radial-gradient(ellipse 70% 65% at 50% 50%, black 40%, transparent 100%)',
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-auto object-contain mix-blend-multiply"
            style={{ filter: 'brightness(1.08) contrast(1.03) saturate(1.05)' }}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disableRemotePlayback
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
            aria-hidden="true"
          >
            <source src="/hero-bg-v7.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* ── Foreground content layer ────────────────────────────── */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 container mx-auto px-4 sm:px-6"
      >
        {/* Location eyebrow */}
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

        <h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-secondary leading-[0.88] text-center text-balance tracking-tight md:tracking-[-0.03em] antialiased"
          style={{
            textRendering: 'optimizeLegibility',
            fontFeatureSettings: '"kern" 1, "liga" 1, "calt" 1, "ss01" 1',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          }}
        >
          <Word>Pass</Word>
          <span className="inline-block w-[0.25em]" aria-hidden="true" />
          <Word>fast,</Word>
          <br />
          <Word>Drive</Word>
          <span className="inline-block w-[0.25em]" aria-hidden="true" />
          <Word accent>Smart.</Word>
        </h1>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.55,
            type: 'spring',
            stiffness: 110,
            damping: 18,
          }}
          className="mt-6 sm:mt-8 flex items-center justify-center"
        >
          <Link
            to="/book"
            className="group inline-flex items-center justify-center gap-2 px-8 sm:px-10 py-4 sm:py-5 bg-primary text-secondary font-black uppercase tracking-widest text-base sm:text-lg rounded-full border-4 border-secondary shadow-[6px_6px_0_var(--color-secondary)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-secondary)] active:translate-y-0 active:shadow-[2px_2px_0_var(--color-secondary)] transition-all duration-200"
          >
            Book Now
            <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
