import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';

/**
 * Navbar — wordmark on the left, hamburger menu on the right.
 *
 * The Book Now CTA has been removed from the bar itself; the hamburger
 * opens a slide-down drawer that contains the section anchors + a big
 * Book Now action at the bottom. This keeps the bar visually quiet so
 * the brand wordmark is the only standing element.
 *
 * Menu items map to homepage section IDs. When tapped from the homepage
 * the page scrolls smoothly; when tapped from /book we navigate home
 * with the matching hash so the new page lands at the right place.
 */

type MenuItem = { label: string; anchor?: string; href?: string; primary?: boolean };

const MENU_ITEMS: MenuItem[] = [
  { label: 'Our Promise', anchor: '#our-promise' },
  { label: 'How it works', anchor: '#how-it-works' },
  { label: 'Pricing', anchor: '#services' },
  { label: 'Coverage', anchor: '#areas' },
  { label: 'FAQ', anchor: '#faq' },
  { label: 'Book Now', href: '/book', primary: true },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Sticky-state cosmetic flag — passive for zero scroll-jank
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock background scroll while the menu is open
  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  // Esc to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen]);

  // Anchor tap: smooth-scroll on homepage; route home with hash from /book
  const handleAnchorClick = (anchor: string) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      const target = document.querySelector(anchor);
      if (target) {
        // Small delay so the close animation can start
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
      }
    } else {
      navigate(`/${anchor}`);
    }
  };

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-12',
          isScrolled
            ? 'bg-white/90 backdrop-blur-md py-3 md:py-4 shadow-sm'
            : 'bg-transparent py-4 md:py-6'
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center group" aria-label="The Pass Guys — Home">
            <img
              src="/logo.png"
              alt="The Pass Guys"
              width="160"
              height="160"
              className="h-12 md:h-14 w-auto group-hover:scale-105 transition-transform"
              loading="eager"
              decoding="async"
            />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="primary-menu"
            className="relative w-11 h-11 flex items-center justify-center rounded-full bg-secondary text-white hover:bg-primary hover:text-secondary transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X className="w-5 h-5" strokeWidth={2.5} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu className="w-5 h-5" strokeWidth={2.5} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* ── Drawer + backdrop ─────────────────────────────────────── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop — tap to dismiss */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-secondary/40 backdrop-blur-sm"
              aria-hidden="true"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              id="primary-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Site navigation"
              initial={{ y: '-100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-100%' }}
              transition={{ type: 'spring', stiffness: 280, damping: 32 }}
              className="fixed top-0 inset-x-0 z-40 bg-secondary text-white pt-24 md:pt-28 pb-10 px-4 sm:px-6 max-h-[100svh] overflow-y-auto"
            >
              <div className="container mx-auto max-w-2xl">
                <ul className="divide-y divide-white/10">
                  {MENU_ITEMS.filter((item) => !item.primary).map((item, i) => (
                    <li key={item.label}>
                      <motion.button
                        type="button"
                        onClick={() => item.anchor && handleAnchorClick(item.anchor)}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.05 + i * 0.05,
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="group w-full text-left py-5 md:py-6 flex items-center justify-between hover:text-primary transition-colors"
                      >
                        <span className="font-black uppercase tracking-tighter text-3xl md:text-4xl leading-none">
                          {item.label}
                        </span>
                        <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </motion.button>
                    </li>
                  ))}
                </ul>

                {/* Primary CTA — bold pill at the bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="mt-8"
                >
                  <Link
                    to="/book"
                    onClick={() => setIsOpen(false)}
                    className="group w-full inline-flex items-center justify-between gap-3 px-6 py-5 bg-primary text-secondary font-black uppercase tracking-widest rounded-full border-4 border-secondary text-lg shadow-[6px_6px_0_rgba(255,255,255,0.15)] hover:shadow-[4px_4px_0_rgba(255,255,255,0.15)] hover:-translate-y-0.5 transition-all"
                  >
                    <span className="flex flex-col items-start leading-none">
                      <span>Book Now</span>
                      <span className="text-[10px] font-bold opacity-70 mt-1 tracking-wider">
                        From £35 / hr
                      </span>
                    </span>
                    <span className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center">
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </motion.div>

                <p className="mt-8 text-white/40 text-[10px] font-black uppercase tracking-[0.32em] text-center">
                  Greater Manchester · Pass fast, Drive Smart.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
