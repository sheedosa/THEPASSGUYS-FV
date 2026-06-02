import { useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, UserCheck, Banknote } from 'lucide-react';
import { useVideoAutoplay } from '../hooks/useVideoAutoplay';

/**
 * ThePromise — commitments section with an embedded learner-driving video.
 *
 * Layout:
 *   Heading + subtitle
 *   ↓ full-width rounded video (learner behind the wheel)
 *   ↓ 3 commitment cards
 *   ↓ CTA
 *
 * The video sits between the emotional hook ("what we guarantee") and the
 * logical proof (the 3 cards). Seeing a real learner driving reinforces
 * the promise before the user reads the details.
 */

const COMMITMENTS = [
  {
    icon: UserCheck,
    title: 'Qualified, patient instructors',
    description:
      'Every TPG instructor is DVSA-approved, CRB-checked, and chosen for how well they teach — not just how long they\'ve been driving.',
  },
  {
    icon: Banknote,
    title: 'Transparent pricing',
    description:
      'One price per hour. No booking fees, no card surcharges, no franchise costs. Block discounts when you commit.',
  },
  {
    icon: Zap,
    title: 'Book today, drive this week',
    description:
      'No waiting lists. Pick your time, get matched to a local instructor, and start lessons within days — not weeks.',
  },
];

export default function ThePromise({ id }: { id?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useVideoAutoplay(videoRef);

  return (
    <section
      id={id}
      className="py-16 md:py-24 bg-secondary text-white overflow-hidden relative"
    >
      {/* Subtle background watermark */}
      <div
        className="absolute top-1/2 left-0 w-full pointer-events-none opacity-[0.03] select-none -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="text-[18vw] font-black text-white whitespace-nowrap -rotate-6 -translate-x-1/4">
          THE PASS GUYS THE PASS GUYS
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 md:mb-14">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
            Our Promise
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
          >
            What we <span className="text-primary italic">guarantee.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-white/60 max-w-lg mx-auto mt-6 text-base md:text-lg font-medium"
          >
            We built The Pass Guys because driving schools shouldn&apos;t feel
            outdated. Here&apos;s what every student gets from day one.
          </motion.p>
        </div>

        {/* Learner driving video — full-width rounded clip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14 rounded-3xl overflow-hidden border-4 border-white/10"
        >
          <video
            ref={videoRef}
            className="w-full h-auto object-cover max-h-[320px] sm:max-h-[400px] md:max-h-[480px]"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            disableRemotePlayback
            aria-hidden="true"
          >
            <source src="/learner-driving.mp4" type="video/mp4" />
          </video>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {COMMITMENTS.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative flex flex-col bg-white/[0.04] border border-white/10 rounded-3xl p-7 md:p-8 backdrop-blur-sm"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary border-2 border-secondary text-secondary flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" strokeWidth={2.25} />
                </div>
                <h3 className="text-lg md:text-xl font-black uppercase tracking-tight leading-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed flex-1">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Tightener */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 md:mt-14 text-center"
        >
          <Link
            to="/book"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-secondary font-black uppercase tracking-widest rounded-full text-sm md:text-base hover:bg-white transition-colors"
          >
            Get Started
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
