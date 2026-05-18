import { useState, useEffect, useLayoutEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import MagneticButton from './MagneticButton';

const LESSON_LINKS = [
  { name: 'Manual Lessons', href: '/services/manual-lessons' },
  { name: 'Automatic Lessons', href: '/services/automatic-lessons' },
  { name: 'Beginner Lessons', href: '/services/beginner-lessons' },
  { name: 'Refresher Lessons', href: '/services/refresher-lessons' },
  { name: 'Intensive / Fast-Track', href: '/services/intensive-fast-track' },
];

const MAIN_LINKS = [
  { name: 'Courses & Packages', href: '/pricing' },
  { name: 'How It Works', href: '/how-it-works' },
  { name: 'Areas', href: '/areas' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      document.documentElement.classList.add('lenis-stopped');
      return () => {
        document.body.style.overflow = prevOverflow;
        document.documentElement.classList.remove('lenis-stopped');
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-12 bg-secondary',
        isScrolled ? 'py-3 shadow-md' : 'py-4',
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <img
            src="/logo.png"
            alt="The Pass Guys"
            width={300}
            height={168}
            className="h-10 sm:h-12 w-auto transition-all duration-500"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown('lessons')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="flex items-center space-x-1 text-sm font-sans font-medium transition-colors text-white/90 hover:text-white"
            >
              <span>Driving Lessons</span>
              <ChevronDown
                className={cn(
                  'w-4 h-4 transition-transform',
                  activeDropdown === 'lessons' && 'rotate-180',
                )}
              />
            </button>

            <AnimatePresence>
              {activeDropdown === 'lessons' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute top-full left-0 mt-2 w-72 bg-charcoal rounded-lg shadow-2xl border border-white/10 overflow-hidden py-3"
                >
                  {LESSON_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-4 md:px-6 py-3 text-sm font-sans font-medium text-white/90 hover:text-primary hover:bg-white/5 transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {MAIN_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-sans font-medium transition-colors text-white/90 hover:text-white"
            >
              {link.name}
            </Link>
          ))}

          <MagneticButton>
            <Link
              to="/get-matched"
              className="px-7 py-2.5 bg-primary text-secondary font-accent font-bold uppercase tracking-[0.08em] rounded-sm text-sm hover:bg-primary-hover hover:shadow-yellow hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              Find My Instructor
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-3 -mr-2 min-w-11 min-h-11 text-white transition-colors duration-500 inline-flex items-center justify-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-secondary overflow-hidden border-t border-white/10 mt-4 px-4 md:px-6 rounded-b-lg shadow-2xl max-h-[calc(100svh-5rem)] overflow-y-auto"
          >
            <div className="flex flex-col space-y-4 py-8">
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'lessons' ? null : 'lessons')
                  }
                  className="w-full flex items-center justify-between text-xl font-sans font-medium text-white py-2"
                >
                  <span>Driving Lessons</span>
                  <ChevronDown
                    className={cn(
                      'w-5 h-5 transition-transform',
                      activeDropdown === 'lessons' && 'rotate-180',
                    )}
                  />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'lessons' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden bg-white/5 rounded-lg mt-2"
                    >
                      {LESSON_LINKS.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="block px-4 py-3 text-lg font-sans font-medium text-white/90 hover:text-primary transition-colors"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {MAIN_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xl font-sans font-medium text-white py-2 border-b border-white/10 last:border-0"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/get-matched"
                className="w-full py-4 bg-primary text-secondary font-accent font-bold uppercase tracking-[0.08em] rounded-sm text-lg text-center"
              >
                Find My Instructor
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
