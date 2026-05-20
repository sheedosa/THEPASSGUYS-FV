import { motion } from 'motion/react';
import { Map } from 'lucide-react';

const AREAS = [
  'Manchester City',
  'Salford',
  'Stockport',
  'Bolton',
  'Oldham',
  'Rochdale',
  'Trafford',
  'Bury',
  'Wigan',
  'Tameside',
];

export default function AreasCovered({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="bg-white border-4 border-secondary rounded-3xl overflow-hidden grid lg:grid-cols-2"
          style={{ boxShadow: '6px 6px 0 var(--color-primary)' }}
        >
          {/* Left — bold dark panel with map icon */}
          <div className="relative bg-secondary text-white p-8 md:p-12 flex flex-col items-center justify-center text-center min-h-[260px] lg:min-h-[420px]">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-primary text-secondary flex items-center justify-center mx-auto mb-5 border-4 border-secondary shadow-2xl">
              <Map className="w-10 h-10 md:w-12 md:h-12" strokeWidth={2.25} />
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              Greater Manchester
            </h3>
            <p className="text-primary font-black uppercase tracking-[0.32em] text-[10px] mt-3">
              Our primary focus
            </p>
          </div>

          {/* Right — copy + pill row + CTA */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
              Coverage
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-6">
              Across the <span className="text-primary">North West.</span>
            </h2>
            <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed mb-8 max-w-md">
              Vetted local instructors who know the test routes in your area.
            </p>

            {/* Area pills — wrap as needed, no fixed column count */}
            <div className="flex flex-wrap gap-2 mb-8">
              {AREAS.map((area, i) => (
                <motion.span
                  key={area}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.4,
                    delay: i * 0.04,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="px-3 py-1.5 rounded-full bg-slate-100 text-secondary text-xs sm:text-sm font-black uppercase tracking-tight"
                >
                  {area}
                </motion.span>
              ))}
            </div>

            <motion.a
              href="#services"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-max px-8 py-4 bg-primary text-secondary font-black uppercase tracking-widest rounded-full border-4 border-secondary text-sm md:text-base text-center shadow-[6px_6px_0_var(--color-secondary)] hover:shadow-[4px_4px_0_var(--color-secondary)] transition-all"
            >
              Book Now
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
