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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-12 py-4',
        isScrolled ? 'bg-bg-page py-3 shadow-md' : 'bg-bg-page/90 backdrop-blur-md py-4',
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <span className="text-2xl font-black tracking-tighter text-secondary">
            THE PASS GUYS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <div
            className="relative group"
            onMouseEnter={() => setActiveDropdown('lessons')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center space-x-1 text-sm font-medium text-secondary/70 hover:text-secondary transition-colors">
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
                  className="absolute top-full left-0 mt-2 w-72 bg-bg-page rounded-2xl shadow-2xl border border-secondary/10 overflow-hidden py-3"
                >
                  {LESSON_LINKS.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-4 md:px-6 py-3 text-sm font-medium text-secondary/70 hover:text-primary hover:bg-secondary/5 transition-all"
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
              className="text-sm font-medium text-secondary/70 hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}

          <MagneticButton>
            <Link
              to="/get-matched"
              className="px-7 py-2.5 bg-primary text-secondary font-semibold rounded-full text-sm shadow-sm hover:brightness-105 hover:scale-[1.02] transition-all duration-300 flex items-center gap-2"
            >
              Find My Instructor
            </Link>
          </MagneticButton>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-secondary p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
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
            className="lg:hidden bg-bg-page overflow-hidden border-t border-secondary/10 mt-4 px-4 md:px-6 rounded-b-2xl shadow-2xl"
          >
            <div className="flex flex-col space-y-4 py-8">
              <div>
                <button
                  onClick={() =>
                    setActiveDropdown(activeDropdown === 'lessons' ? null : 'lessons')
                  }
                  className="w-full flex items-center justify-between text-xl font-medium text-secondary py-2"
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
                      className="overflow-hidden bg-secondary/5 rounded-xl mt-2"
                    >
                      {LESSON_LINKS.map((link) => (
                        <Link
                          key={link.name}
                          to={link.href}
                          className="block px-4 py-3 text-lg font-medium text-secondary/70 hover:text-primary transition-colors"
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
                  className="text-xl font-medium text-secondary py-2 border-b border-secondary/8 last:border-0"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                to="/get-matched"
                className="w-full py-4 bg-primary text-secondary font-semibold rounded-xl text-lg text-center"
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
