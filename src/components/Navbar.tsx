import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

/**
 * Navbar — intentionally minimal for v1. The whole nav is two routes:
 *   - Logo → /
 *   - Book Now → /book
 *
 * Dropdowns / dead routes have been stripped while we focus on the
 * single conversion funnel. Add them back as real pages get built.
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-12',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md py-3 md:py-4 shadow-sm'
          : 'bg-transparent py-4 md:py-6'
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <span className="text-2xl font-black tracking-tighter text-secondary">
            THE PASS GUYS
          </span>
        </Link>

        <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
          <Link
            to="/book"
            className="inline-flex items-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-secondary text-white font-black uppercase tracking-widest text-xs md:text-sm rounded-full shadow-lg shadow-black/10 hover:bg-primary hover:text-secondary transition-colors"
          >
            Book Now
          </Link>
        </motion.div>
      </div>
    </nav>
  );
}
