import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

/**
 * Reliable autoplay — same pattern as hero + ThePromise videos.
 */
function useEnsureAutoplay(ref: { current: HTMLVideoElement | null }) {
  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const tryPlay = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    if (video.readyState >= 2) tryPlay();
    video.addEventListener('loadeddata', tryPlay);
    video.addEventListener('canplay', tryPlay);

    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      video.removeEventListener('loadeddata', tryPlay);
      video.removeEventListener('canplay', tryPlay);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [ref]);
}

export default function FinalCTA() {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEnsureAutoplay(videoRef);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const xValue = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section
      ref={containerRef}
      className="py-14 md:py-24 bg-secondary overflow-hidden relative"
    >
      {/* Parallax Background Text */}
      <motion.div
        style={{ x: xValue }}
        className="absolute top-1/2 left-0 w-full opacity-[0.05] pointer-events-none -translate-y-1/2 whitespace-nowrap"
      >
        <span className="text-[25vw] font-black text-white uppercase select-none">
          GET YOUR LICENSE GET YOUR LICENSE
        </span>
      </motion.div>

      <div className="container mx-auto max-w-5xl px-4 sm:px-6 relative z-10 text-center">
        {/* Card with POV video background */}
        <div className="relative rounded-3xl border-4 border-secondary overflow-hidden shadow-[6px_6px_0_rgba(0,0,0,0.25)] md:shadow-[12px_12px_0_rgba(0,0,0,0.25)]">
          {/* POV driving video — sits behind the card content */}
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            disableRemotePlayback
            aria-hidden="true"
          >
            <source src="/pov-driving.mp4" type="video/mp4" />
          </video>

          {/* Dark overlay so text stays readable */}
          <div className="absolute inset-0 bg-secondary/75" />

          {/* Content — sits above the video */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16 lg:p-20">
            <span className="text-white/50 font-black uppercase tracking-[0.32em] text-[10px] md:text-xs block mb-4">
              Last stop
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9] mb-8 md:mb-12">
              Stop scrolling.
              <br />
              <span className="text-primary italic">Start driving.</span>
            </h2>

            <div className="flex justify-center">
              <motion.div
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  to="/book"
                  className="group inline-flex items-center gap-3 px-10 py-5 md:px-12 md:py-6 bg-primary text-secondary font-black uppercase tracking-[0.16em] rounded-full text-base md:text-lg border-4 border-secondary"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <p className="mt-8 md:mt-10 text-white/50 font-black uppercase tracking-widest text-[10px] md:text-xs">
              First lesson this week · From £35/hr
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
