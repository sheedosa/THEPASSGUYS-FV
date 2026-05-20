import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

type Testimonial = { name: string; role: string; content: string };

const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Jenkins',
    role: 'Passed in 6 weeks',
    content:
      'The best driving school in the area. My instructor was patient and gave me the confidence I lacked first time!',
  },
  {
    name: 'Marcus Thorne',
    role: 'Intensive Course',
    content:
      'I needed to pass quickly for work. The 5-day course was intense but perfectly structured and successful.',
  },
  {
    name: 'Chloe Smith',
    role: 'Automatic Lessons',
    content:
      'Transitioning to automatic was the best choice. The car was brand new and very easy to learn in.',
  },
];

// Initials derived from name — cleaner than placeholder avatars
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
      {/* Background decorative text — kept very subtle */}
      <div
        className="absolute top-1/2 left-0 w-full pointer-events-none opacity-[0.03] select-none -translate-y-1/2"
        aria-hidden="true"
      >
        <div className="text-[18vw] font-black text-white whitespace-nowrap -rotate-6 -translate-x-1/4">
          REAL PASSES REAL PASSES
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-4 sm:px-6 relative z-10">
        {/* Section header — uses the shared rhythm */}
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
              className="relative bg-white/[0.04] border border-white/10 rounded-3xl p-7 md:p-8 backdrop-blur-sm group"
            >
              <Quote
                className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-primary/20 transition-colors"
                aria-hidden="true"
              />

              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-primary border-2 border-secondary flex items-center justify-center font-black text-secondary text-lg">
                  {getInitials(t.name)}
                </div>
                <div className="leading-tight">
                  <h4 className="font-black text-base text-white tracking-tight">
                    {t.name}
                  </h4>
                  <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mt-1">
                    {t.role}
                  </p>
                </div>
              </div>

              <p className="text-white/85 text-base md:text-lg leading-relaxed font-medium">
                &ldquo;{t.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
