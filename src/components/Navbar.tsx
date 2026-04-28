import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const lessonLinks = [
    { name: 'Manual Lessons', href: '/services/manual-lessons' },
    { name: 'Automatic Lessons', href: '/services/automatic-lessons' },
    { name: 'Beginner Lessons', href: '/services/beginner-lessons' },
    { name: 'Refresher Lessons', href: '/services/refresher-lessons' },
    { name: 'Intensive / Fast-Track', href: '/services/intensive-fast-track' },
  ];

  const mainLinks = [
    { name: 'Courses & Packages', href: '/pricing' },
    { name: 'How It Works', href: '/how-it-works' },
    { name: 'Areas', href: '/areas' },
    { name: 'About', href: '/about' },
  ];

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-12 py-4",
        isScrolled ? "bg-white py-3 shadow-md" : "bg-white/90 py-4"
      )}>
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <span className="text-2xl font-black tracking-tighter text-secondary">
              THE PASS GUYS
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Driving Lessons Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveDropdown('lessons')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center space-x-1 text-sm font-bold text-secondary/70 hover:text-secondary transition-colors uppercase tracking-widest">
                <span>Driving Lessons</span>
                <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'lessons' && "rotate-180")} />
              </button>
              
              <AnimatePresence>
                {activeDropdown === 'lessons' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-3"
                  >
                    {lessonLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-4 md:px-6 py-3 text-sm font-bold text-secondary/70 hover:text-primary hover:bg-slate-50 transition-all"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {mainLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href} 
                className="text-sm font-bold text-secondary/70 hover:text-secondary transition-colors uppercase tracking-widest"
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/get-matched"
              className="px-8 py-3 bg-secondary text-white font-bold rounded-full text-xs uppercase tracking-widest shadow-lg hover:bg-secondary/90 transition-all flex items-center gap-2"
            >
              Book a Lesson <span className="text-lg">→</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-secondary p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="lg:hidden bg-white overflow-hidden border-t border-slate-100 mt-4 px-4 md:px-6 rounded-b-2xl shadow-2xl"
              >
                <div className="flex flex-col space-y-4 py-8">
                  {/* Driving Lessons */}
                  <div>
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === 'lessons' ? null : 'lessons')}
                      className="w-full flex items-center justify-between text-xl font-bold text-secondary py-2"
                    >
                      <span>Driving Lessons</span>
                      <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === 'lessons' && "rotate-180")} />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === 'lessons' && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden bg-slate-50 rounded-xl mt-2"
                        >
                          {lessonLinks.map((link) => (
                            <Link
                              key={link.name}
                              to={link.href}
                              className="block px-4 py-3 text-lg font-bold text-secondary/60 hover:text-primary transition-colors"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {mainLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.href} 
                      className="text-xl font-bold text-secondary py-2 border-b border-slate-50 last:border-0"
                    >
                      {link.name}
                    </Link>
                  ))}

                  <Link 
                    to="/get-matched"
                    className="w-full py-4 bg-secondary text-white font-bold rounded-xl text-lg text-center"
                  >
                    Book a Lesson
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
      </nav>
    </>
  );
}
