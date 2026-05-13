import { motion } from 'motion/react';
import { ArrowRight, Star, Check, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import MagneticButton from './MagneticButton';
import Counter from './Counter';

/* --------- Match-found pill card (top, dark) ------------------- */
function RouteCard() {
  return (
    <div className="hero-card hero-card-top absolute -top-5 -right-3 sm:-top-6 sm:-right-6 md:-top-8 md:-right-10 bg-secondary text-white rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-[0_24px_50px_-18px_rgba(0,0,0,0.5)] w-[160px] sm:w-[200px] z-20">
      <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-[0.3em] text-white/40 mb-2 sm:mb-3">Match found</p>
      <div className="flex items-center gap-2">
        <span className="text-primary font-black text-sm sm:text-base tracking-tighter">M14 8AB</span>
        <ArrowRight className="w-3 h-3 text-white/50" />
        <span className="text-white/80 text-xs sm:text-sm font-bold">5 mi</span>
      </div>
      <div className="mt-3 relative h-px bg-white/15">
        <span className="absolute -top-[5px] left-0 w-[10px] h-[10px] rounded-full bg-white border-2 border-primary" />
        <motion.span
          aria-hidden="true"
          className="absolute -top-[3px] left-0 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,210,111,0.8)]"
          animate={{ left: ['0%', '100%'] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: [0.65, 0, 0.35, 1], repeatDelay: 0.8 }}
        />
        <span className="absolute -top-[5px] right-0 w-[10px] h-[10px] rounded-full bg-primary" />
      </div>
      <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-white/50 mt-3">Avg 6 days</p>
    </div>
  );
}

/* --------- Main instructor card -------------------------------- */
function InstructorCard() {
  return (
    <div className="hero-card hero-card-main relative bg-white rounded-[28px] sm:rounded-[36px] p-6 sm:p-7 md:p-8 shadow-[0_40px_80px_-25px_rgba(0,0,0,0.22)] border border-secondary/[0.06] z-10">
      <div className="flex items-center gap-2 mb-5 sm:mb-6">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
        </span>
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary/60">Your match</span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative shrink-0">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/15 ring-2 ring-primary flex items-center justify-center">
            <span className="font-black text-lg sm:text-xl text-secondary tracking-tight">AK</span>
          </div>
          <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-primary border-2 border-white flex items-center justify-center">
            <Check className="w-3 h-3 text-secondary" strokeWidth={3} />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-black text-secondary text-lg sm:text-xl tracking-tight truncate">Aisha K.</p>
          <p className="text-secondary/50 text-xs sm:text-sm flex items-center gap-1 font-medium mt-0.5">
            <MapPin className="w-3 h-3" /> Chorlton · M21
          </p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 divide-x divide-secondary/10">
        <div className="text-center px-1">
          <p className="text-xl sm:text-2xl font-black text-secondary tracking-tighter tabular-nums">
            <Counter to={5.0} decimals={1} duration={1300} delay={700} />
          </p>
          <div className="flex justify-center gap-0.5 mt-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-primary text-primary" />
            ))}
          </div>
        </div>
        <div className="text-center px-1">
          <p className="text-xl sm:text-2xl font-black text-secondary tracking-tighter tabular-nums">
            <Counter to={92} duration={1400} delay={800} />
            <span className="text-xs sm:text-sm align-top">%</span>
          </p>
          <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-secondary/40 mt-1.5">First-time</p>
        </div>
        <div className="text-center px-1">
          <p className="text-xl sm:text-2xl font-black text-secondary tracking-tighter tabular-nums">
            <Counter to={847} duration={1500} delay={900} />
          </p>
          <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-secondary/40 mt-1.5">Lessons</p>
        </div>
      </div>

      <div className="mt-6 pt-5 border-t border-secondary/[0.07] flex items-center justify-between gap-3">
        <span className="text-secondary/60 font-medium text-xs sm:text-sm truncate">Manual & Auto · Patient pace</span>
        <span className="shrink-0 px-3 py-1.5 bg-secondary text-white text-[9px] sm:text-[10px] font-black uppercase tracking-widest rounded-full">
          Connect
        </span>
      </div>
    </div>
  );
}

/* --------- Floating pass-rate sticker (bottom-left) ------------ */
function PassRateBadge() {
  return (
    <div className="hero-card hero-card-badge absolute -bottom-4 -left-3 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-10 bg-primary text-secondary rounded-full pl-4 pr-5 py-3 sm:pl-5 sm:pr-6 sm:py-3.5 shadow-[0_24px_50px_-15px_rgba(0,210,111,0.55)] flex items-center gap-3 z-20">
      <span className="text-2xl sm:text-3xl font-black tracking-tighter leading-none tabular-nums">
        <Counter to={97} duration={1500} delay={1100} />
        <span className="text-base sm:text-lg">%</span>
      </span>
      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-widest leading-tight">
        Pass<br />guarantee
      </span>
    </div>
  );
}

/* --------- Hero ------------------------------------------------ */
export default function Hero({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="relative min-h-[100svh] xl:min-h-[720px] w-full bg-bg-page bg-wayfinder text-secondary overflow-hidden pt-20 sm:pt-24 pb-20 md:pb-24"
    >
      {/* Printed road markings — drifting lanes */}
      <div className="road-marks" aria-hidden="true">
        <div className="road-mark road-mark-1" />
        <div className="road-mark road-mark-2" />
        <div className="road-mark road-mark-3" />
        <div className="road-mark road-mark-4" />
      </div>

      {/* Ghost outlined display word — editorial background watermark */}
      <span
        aria-hidden="true"
        className="ghost-display absolute bottom-[4vh] -right-[4vw] pointer-events-none select-none z-0 hidden sm:block"
      >
        DRIVE.
      </span>

      {/* Top hairline + corner meta */}
      <div className="absolute top-[68px] sm:top-[80px] left-0 right-0 h-px bg-secondary/10 z-[5]" />
      <div className="hidden md:flex absolute top-[88px] left-12 z-10 items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-secondary/40">
        <span>EST. 2019</span>
        <span className="w-1 h-1 rounded-full bg-primary/60" />
        <span>Greater Manchester</span>
      </div>
      <div className="hidden md:flex absolute top-[88px] right-12 z-10 items-center gap-2 text-[10px] font-black uppercase tracking-[0.4em] text-secondary/40">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span>Booking now for May</span>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-12 relative z-[1]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center pt-8 md:pt-10 lg:pt-12">
          {/* LEFT — Editorial text ------------------------------- */}
          <div className="lg:col-span-7 relative">
            <div className="flex items-center gap-3 mb-6 md:mb-8">
              <span className="block w-10 h-px bg-primary" />
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[0.4em] text-secondary/60">
                Driving school · Manchester
              </span>
            </div>

            <h1 className="font-black uppercase tracking-tighter leading-[0.84] mb-7 md:mb-9 text-[clamp(3rem,8.4vw,8.5rem)]">
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <span className="block hero-line hero-line-1">Stop</span>
              </span>
              <span className="block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <span className="block hero-line hero-line-2">searching.</span>
              </span>
              <span className="relative block overflow-hidden pb-[0.12em] -mb-[0.12em]">
                <span className="block hero-line hero-line-3 italic text-primary">Start driving.</span>
                <svg
                  aria-hidden="true"
                  viewBox="0 0 800 36"
                  preserveAspectRatio="none"
                  className="underline-stroke absolute -bottom-2 sm:-bottom-3 left-0 w-[88%] sm:w-[78%] h-6 sm:h-8 pointer-events-none"
                >
                  <path d="M 8 22 Q 80 8 180 18 T 380 16 T 580 20 T 790 14" />
                </svg>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-base md:text-lg text-secondary/70 font-medium max-w-xl leading-relaxed mb-8 md:mb-10 text-balance"
            >
              Tell us how you learn. We pair you with a DVSA-approved instructor in your area, usually inside a week. Manual, automatic, beginner or refresher.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <MagneticButton>
                <Link
                  to="/get-matched"
                  className="group inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 bg-secondary text-white font-black uppercase tracking-widest text-xs sm:text-sm rounded-full hover:bg-primary hover:text-secondary transition-colors duration-500"
                >
                  Get matched
                  <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/lessons"
                  className="inline-flex items-center justify-center gap-3 px-7 sm:px-8 py-4 border border-secondary/15 text-secondary font-black uppercase tracking-widest text-xs sm:text-sm rounded-full hover:bg-secondary/5 transition-colors duration-500"
                >
                  View courses
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Hairline credibility row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.25, duration: 1 }}
              className="mt-10 md:mt-12 pt-5 md:pt-6 border-t border-secondary/10 flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-secondary/40"
            >
              <span>2,000+ learners</span>
              <span className="w-1 h-1 rounded-full bg-primary/60" />
              <span>DVSA approved</span>
              <span className="w-1 h-1 rounded-full bg-primary/60" />
              <span>Match within 7 days</span>
            </motion.div>
          </div>

          {/* RIGHT — Card stack visual --------------------------- */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <div className="relative max-w-[400px] mx-auto lg:ml-auto px-3 sm:px-0">
              <RouteCard />
              <InstructorCard />
              <PassRateBadge />

              {/* Decorative dotted route line behind cards */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 380"
                className="absolute -bottom-6 -right-10 sm:-right-14 w-[120%] max-w-[420px] -z-[1] opacity-[0.12] pointer-events-none"
                fill="none"
              >
                <path
                  d="M 20 360 Q 100 280 180 290 T 360 120 Q 380 80 360 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6 8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom hairline */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-secondary/10 z-[5]" />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-secondary/40"
      >
        <span className="text-[9px] font-black uppercase tracking-[0.4em]">scroll</span>
        <motion.span
          aria-hidden="true"
          className="block w-px h-7 bg-secondary/25 origin-top"
          animate={{ scaleY: [0.2, 1, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
}
