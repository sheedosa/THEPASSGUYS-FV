import { motion, MotionConfig } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Sparkles, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import ScrollVideoHero from '../components/ScrollVideoHero';

/**
 * Homepage — scroll-driven video hero followed by storytelling sections.
 */

const EASE = [0.22, 1, 0.36, 1] as const;

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{ duration: 1.0, ease: EASE }}
      className="flex items-center justify-center gap-4 text-secondary/55"
    >
      <span className="inline-block w-10 h-px bg-secondary/25" aria-hidden="true" />
      <span className="text-[11px] font-semibold uppercase tracking-[0.32em]">
        {number} <span className="mx-1.5 opacity-50">—</span> {label}
      </span>
      <span className="inline-block w-10 h-px bg-secondary/25" aria-hidden="true" />
    </motion.div>
  );
}


/* ============================== SECTION 2 — MATCH ============================ */
function Section2Match() {
  return (
    <section className="relative min-h-screen flex items-center px-6">
      <div className="relative z-20 w-full max-w-3xl mx-auto text-center">
        <SectionEyebrow number="02" label="Match" />
        <motion.h2
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
        >
          We do the searching. <br />
          <span className="text-primary">You do the driving.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
          className="mt-6 text-secondary/65 text-base md:text-lg max-w-md mx-auto leading-relaxed"
        >
          Tell us your location, availability, and how you like to learn. We match you with a vetted local instructor. Free, in minutes.
        </motion.p>
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
          className="mt-8 flex justify-center"
        >
          <Link
            to="/get-matched"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-secondary font-medium hover:scale-[1.03] transition-transform duration-500 shadow-ambient-lg shadow-primary/25"
          >
            Find My Instructor
            <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-6 md:left-10 flex items-center gap-3 text-secondary/40 pointer-events-none z-20">
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">Scroll</span>
        <span className="inline-block w-10 h-px bg-secondary/25" />
        <span className="text-[10px] font-medium tracking-[0.2em]">02 / 05</span>
      </div>
    </section>
  );
}

/* ============================ SECTION 3 — VEHICLES ============================ */
function Section3Vehicles() {
  return (
    <section className="relative min-h-screen flex items-center px-6">
      <div className="relative z-20 w-full max-w-3xl mx-auto text-center">
        <SectionEyebrow number="03" label="Drive" />
        <motion.h2
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
        >
          Manual or automatic. <br />
          <span className="text-primary">Your call.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
          className="mt-6 text-secondary/65 text-base md:text-lg max-w-md mx-auto leading-relaxed"
        >
          Same price, either way. Every lesson is in a modern dual-control car with a fully vetted, DVSA-approved instructor.
        </motion.p>
        <motion.ul
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
          className="mt-8 flex flex-wrap gap-2 justify-center"
        >
          {['Manual', 'Automatic', 'DVSA-approved', 'Dual-control'].map((tag) => (
            <li
              key={tag}
              className="px-3.5 py-1.5 rounded-full bg-white/70 border border-secondary/10 text-secondary/80 text-xs font-medium uppercase tracking-[0.15em] backdrop-blur"
            >
              {tag}
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="absolute bottom-6 left-6 md:left-10 flex items-center gap-3 text-secondary/40 pointer-events-none z-20">
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">Scroll</span>
        <span className="inline-block w-10 h-px bg-secondary/25" />
        <span className="text-[10px] font-medium tracking-[0.2em]">03 / 05</span>
      </div>
    </section>
  );
}

/* ============================ SECTION 4 — COVERAGE ============================ */
function Section4Coverage() {
  const boroughs = [
    'Manchester', 'Salford', 'Trafford', 'Stockport', 'Tameside',
    'Oldham', 'Rochdale', 'Bury', 'Bolton', 'Wigan',
  ];
  return (
    <section className="relative min-h-screen flex items-center px-6">
      <div className="relative z-20 w-full max-w-4xl mx-auto text-center">
        <SectionEyebrow number="04" label="Local" />
        <motion.h2
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.2, ease: EASE }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
        >
          Local instructors. <br />
          <span className="text-primary">Near you.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-secondary/80 text-xs sm:text-sm font-medium uppercase tracking-[0.18em]"
        >
          {boroughs.map((b, i) => (
            <span key={b} className="inline-flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3 h-3 text-primary" /> {b}
              </span>
              {i < boroughs.length - 1 && <span className="w-1 h-1 rounded-full bg-primary/60" aria-hidden="true" />}
            </span>
          ))}
        </motion.div>
        <div className="mt-6 text-secondary/45 text-[11px] uppercase tracking-[0.32em]">
          10 boroughs · Matched to your area
        </div>
      </div>

      <div className="absolute bottom-6 left-6 md:left-10 flex items-center gap-3 text-secondary/40 pointer-events-none z-20">
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">Scroll</span>
        <span className="inline-block w-10 h-px bg-secondary/25" />
        <span className="text-[10px] font-medium tracking-[0.2em]">04 / 05</span>
      </div>
    </section>
  );
}

/* =============================== SECTION 5 — CTA ============================== */
function Section5CTA() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6">
      <div className="relative z-20 w-full max-w-3xl text-center">
        <SectionEyebrow number="05" label="Start" />
        <motion.h2
          initial={{ opacity: 1, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.3, ease: EASE }}
          className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-secondary tracking-tighter leading-[0.95]"
        >
          Ready to start? <br />
          <span className="text-primary">Find your instructor.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
          className="mt-6 text-secondary/65 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
        >
          Free matching. No waiting lists. Get connected with a local instructor in minutes.
        </motion.p>
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 1.0, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <Link
            to="/get-matched"
            className="group inline-flex items-center gap-3 px-9 py-4 sm:px-12 sm:py-5 bg-primary text-secondary font-semibold rounded-full hover:scale-[1.03] transition-transform duration-500 shadow-ambient-lg text-base sm:text-lg"
          >
            Find My Instructor
            <ArrowRight className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-1" />
          </Link>
          <p className="text-secondary/50 text-xs sm:text-sm tracking-wide">
            Free · 2 minutes · No commitment
          </p>
        </motion.div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-6 md:gap-x-8 text-secondary/45 font-semibold uppercase tracking-wider text-[10px] whitespace-nowrap">
          <span className="inline-flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-primary" /> DVSA-approved
          </span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>Free matching</span>
          <span className="w-1 h-1 bg-primary rounded-full" />
          <span>Greater Manchester</span>
        </div>
      </div>
    </section>
  );
}

/* ================================ HOMEPAGE ================================ */
export default function HomePage() {
  return (
    <MotionConfig reducedMotion="never">
      <SEO />
      <div className="bg-bg-page">
        <ScrollVideoHero />
        <Section2Match />
        <Section3Vehicles />
        <Section4Coverage />
        <Section5CTA />
      </div>
    </MotionConfig>
  );
}
