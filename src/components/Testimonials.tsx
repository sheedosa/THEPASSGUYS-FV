import { motion, AnimatePresence } from 'motion/react';
import { Star } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import SectionLabel from './ui/SectionLabel';

/**
 * Testimonials.
 *
 * When real reviews come in, populate REVIEWS below — the section will switch
 * automatically to the rotating pull-quote carousel.
 *
 * While the array is empty we render an honest placeholder ("First learners")
 * instead of fake quotes — much safer for trust.
 */
const REVIEWS: Array<{ name: string; role: string; content: string }> = [];

const ROTATE_MS = 7500;

export default function Testimonials({ id }: { id?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hasReviews = REVIEWS.length > 0;

  const advance = useCallback(
    () => setIndex((i) => (hasReviews ? (i + 1) % REVIEWS.length : 0)),
    [hasReviews],
  );

  useEffect(() => {
    if (!hasReviews || paused) return;
    const t = setInterval(advance, ROTATE_MS);
    return () => clearInterval(t);
  }, [paused, advance, hasReviews]);

  const current = hasReviews ? REVIEWS[index] : null;

  return (
    <section
      id={id}
      className="py-24 md:py-40 bg-secondary text-white overflow-hidden relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
        <div className="text-center mb-12 md:mb-16">
          <SectionLabel number="06" label="Reviews" tone="dark" />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-normal leading-[0.95] mb-6 tracking-tighter"
          >
            Real lessons. Real{' '}
            <span className="text-primary">
              success.
            </span>
          </motion.h2>

          {/* Compact stars line — only renders when there are real reviews to back the claim */}
          {hasReviews && (
            <div className="inline-flex items-center gap-2 text-white/60 text-xs uppercase tracking-[0.3em]">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                ))}
              </span>
              <span>5.0 — Google</span>
            </div>
          )}
        </div>

        {hasReviews ? (
          <>
            {/* Rotating pull quote */}
            <div className="relative min-h-[280px] md:min-h-[260px] flex flex-col items-center justify-center text-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full"
                >
                  <p className="text-2xl md:text-4xl lg:text-5xl font-normal leading-[1.15] text-white tracking-tight mb-10 max-w-3xl mx-auto">
                    <span className="text-primary/60 mr-2" aria-hidden="true">&ldquo;</span>
                    {current!.content}
                    <span className="text-primary/60 ml-1" aria-hidden="true">&rdquo;</span>
                  </p>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-white font-medium tracking-tight">
                      {current!.name}
                    </span>
                    <span className="text-primary text-xs font-semibold uppercase tracking-[0.25em]">
                      {current!.role}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots + counter */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <span className="text-white/40 text-xs font-medium tracking-[0.3em]">
                {String(index + 1).padStart(2, '0')} / {String(REVIEWS.length).padStart(2, '0')}
              </span>
              <span className="inline-block w-8 h-px bg-white/20" />
              <div className="flex items-center gap-2">
                {REVIEWS.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Show review ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className="group p-1 -m-1"
                  >
                    <span
                      className={`block h-px transition-all duration-700 ${
                        i === index ? 'w-10 bg-primary' : 'w-5 bg-white/30 group-hover:bg-white/60'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Honest "first learners" empty state */
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl mx-auto text-center"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-normal leading-[1.2] text-white tracking-tight mb-8">
              We're matching our{' '}
              <span className="text-primary">
                first learners
              </span>{' '}
              right now. Want to be one of them?
            </p>
            <p className="text-white/55 max-w-lg mx-auto mb-10 leading-relaxed">
              Pass with us in the coming months and your story takes this spot.
              No catch, no padded reviews, no recycled quotes. Just real learners, when we have them.
            </p>
            <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/45">
              <span className="inline-block w-8 h-px bg-white/20" />
              <span>Reviews — coming soon</span>
              <span className="inline-block w-8 h-px bg-white/20" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
