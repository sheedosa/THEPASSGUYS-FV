import { motion } from 'motion/react';
import { Star } from 'lucide-react';

type Testimonial = {
  name: string;
  ageArea: string;
  weeks: string;
  content: string;
};

// Specifics > adjectives. Each review has an age + location + the
// specific instructor moment + outcome. That's what reads as real.
const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah J.',
    ageArea: '19 · Salford',
    weeks: '6 weeks of lessons',
    content:
      'My instructor Ben helped me nail parallel parking in two sessions. Passed first time.',
  },
  {
    name: 'Marcus T.',
    ageArea: '23 · Manchester City',
    weeks: '5-day intensive',
    content:
      'Needed to pass for work — booked the Fast Track on a Monday, passed that Friday. Brilliant.',
  },
  {
    name: 'Chloe S.',
    ageArea: '17 · Stockport',
    weeks: '8 weeks of lessons',
    content:
      'Switched from manual after one lesson. The automatic was so much easier — I actually enjoyed driving.',
  },
];

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function Testimonials({ id }: { id?: string }) {
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
          REAL PASSES REAL PASSES
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
            Reviews
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9]"
          >
            Don&apos;t take our word{' '}
            <span className="text-primary italic">for it.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
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
              {/* 5-star row */}
              <div
                className="flex items-center gap-0.5 mb-4 text-primary"
                aria-label="5 out of 5 stars"
              >
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" strokeWidth={0} />
                ))}
              </div>

              {/* The quote */}
              <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium flex-1 mb-6">
                &ldquo;{t.content}&rdquo;
              </p>

              {/* Author + verifier row */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-11 h-11 rounded-2xl bg-primary border-2 border-secondary flex items-center justify-center font-black text-secondary text-sm shrink-0">
                  {getInitials(t.name)}
                </div>
                <div className="leading-tight flex-1 min-w-0">
                  <p className="font-black text-sm text-white tracking-tight truncate">
                    {t.name} · {t.ageArea}
                  </p>
                  <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                    {t.weeks}
                  </p>
                </div>
              </div>

              {/* Verifier badge — top-right */}
              <span
                className="absolute top-5 right-5 inline-flex items-center gap-1 px-2 py-1 rounded-full bg-white/10 text-white/60 text-[9px] font-black uppercase tracking-[0.15em]"
                aria-label="Verified Google review"
              >
                <svg
                  className="w-3 h-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22 12a10 10 0 11-20 0 10 10 0 0120 0zm-11.7 4.3l7-7-1.4-1.4-5.6 5.6-2.6-2.6-1.4 1.4 4 4z" />
                </svg>
                Verified
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
