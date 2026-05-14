import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

/**
 * Hero — premium driving-school landing.
 * Cream bg matches the rest of the site. Overlap headline with serif italic accent.
 * Video tag retained for when the CloudFront URL is dropped in.
 */
export default function Hero({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative h-screen overflow-hidden bg-bg-page"
    >
      {/* Video background — DROP YOUR CLOUDFRONT URL INTO `src` BELOW */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-0"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={(e) => { (e.currentTarget as HTMLVideoElement).style.opacity = '1'; }}
      >
        <source src="" type="video/mp4" />
      </video>

      {/* Soft radial ambient glow — primary green at very low opacity */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(900px circle at 50% 55%, rgba(0,210,111,0.05), transparent 60%)',
        }}
      />

      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center px-6">
          <div className="text-center -mt-24 sm:-mt-40 md:-mt-56 lg:-mt-72 max-w-5xl">
            {/* Editorial eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center justify-center gap-4 mb-8 text-secondary/45"
            >
              <span className="inline-block w-8 h-px bg-secondary/20" aria-hidden="true" />
              <span className="text-[11px] font-medium uppercase tracking-[0.3em]">
                Greater Manchester
              </span>
              <span className="inline-block w-8 h-px bg-secondary/20" aria-hidden="true" />
            </motion.div>

            {/* Two-line overlap headline */}
            <h1 className="leading-[0.95] tracking-tighter">
              <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.3, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-secondary/45"
                >
                  Learn to drive.
                </motion.span>
              </span>
              <span className="block overflow-hidden pb-[0.1em] -mb-[0.1em]">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 1.3, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-secondary -mt-2 sm:-mt-3 md:-mt-4"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Actually pass.
                </motion.span>
              </span>
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-secondary/60 mt-8 mb-10 max-w-xl mx-auto leading-relaxed"
            >
              DVSA-approved instructors matched to you in days, not weeks. Manchester's most straightforward way to get your licence.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-3 justify-center"
            >
              <Link
                to="/how-it-works"
                className="px-5 py-2.5 rounded-full bg-secondary/5 text-secondary border border-secondary/10 font-medium hover:bg-secondary/10 transition-colors duration-500"
              >
                How it works
              </Link>
              <Link
                to="/get-matched"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary text-white font-medium hover:bg-secondary/90 transition-colors duration-500"
              >
                Book a lesson
                <span aria-hidden="true" className="inline-block transition-transform duration-500 group-hover:translate-x-1">→</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1.6 }}
          className="absolute bottom-6 left-6 md:left-10 flex items-center gap-3 text-secondary/40 pointer-events-none"
          aria-hidden="true"
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.4em]">Scroll</span>
          <span className="inline-block w-10 h-px bg-secondary/30" />
          <span className="text-[10px] font-medium tracking-[0.2em]">01 / 09</span>
        </motion.div>
      </div>
    </section>
  );
}
