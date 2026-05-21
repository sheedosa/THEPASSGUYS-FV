import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/**
 * StickyMobileCTA — slim "Book Now" bar pinned to the bottom of the
 * viewport on mobile only. Hidden while the hero is in view (no need to
 * compete with the hero CTA), shown the moment the user scrolls past it.
 *
 * Why this pattern: keeps the primary conversion action one tap away
 * regardless of scroll depth, without consuming permanent screen real
 * estate on the page itself. Standard on AirBnB, Booking, Wise, etc.
 */
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show only after the user has scrolled past the hero region
    // (~70% of one viewport height is a safe threshold across phones).
    const threshold = () => window.innerHeight * 0.7;
    const onScroll = () => setVisible(window.scrollY > threshold());
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 320, damping: 28 }}
          className="lg:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pointer-events-none"
        >
          <a
            href="/book"
            aria-label="Book your first lesson"
            className="pointer-events-auto flex items-center justify-between gap-3 px-5 py-3.5 bg-primary text-secondary font-black uppercase tracking-widest rounded-full border-4 border-secondary shadow-[0_10px_25px_-5px_rgba(0,0,0,0.35)]"
          >
            <span className="flex flex-col items-start leading-none">
              <span className="text-base">Book Now</span>
              <span className="text-[10px] font-bold opacity-70 mt-1 tracking-wider">
                From £35 / hr
              </span>
            </span>
            <span className="w-9 h-9 rounded-full bg-secondary text-primary flex items-center justify-center">
              <ArrowRight className="w-5 h-5" />
            </span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
