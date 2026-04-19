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

  const services = [
    { name: 'Manual Lessons', href: '/services/manual-lessons' },
    { name: 'Automatic Lessons', href: '/services/automatic-lessons' },
    { name: 'Intensive Courses', href: '/services/intensive-fast-track' },
    { name: 'Refresher Lessons', href: '/services/refresher-lessons' },
    { name: 'Motorway Driving', href: '/services/motorway-lessons' },
    { name: 'Pass Plus', href: '/services/pass-plus' },
    { name: 'Mock Tests', href: '/services/mock-tests' },
  ];

  const learningLinks = [
    { name: 'Lessons Overview', href: '/lessons' },
    { name: 'Pricing Plans', href: '/pricing' },
    { name: 'Areas Covered', href: '/areas' },
  ];

  const supportLinks = [
    { name: 'Learner Resources', href: '/resources' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-12 py-4 md:py-6",
      isScrolled ? "bg-white/90 backdrop-blur-md py-3 md:py-4 shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center group">
          <span className={cn(
            "text-2xl font-black tracking-tighter transition-colors",
            isScrolled ? "text-secondary" : "text-secondary"
          )}>
            THE PASS GUYS
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Services Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center space-x-1 text-sm font-bold text-secondary/70 hover:text-secondary transition-colors uppercase tracking-widest">
              <span>Services</span>
              <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'services' && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {activeDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-3"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-6 py-3 text-sm font-bold text-secondary/70 hover:text-primary hover:bg-bg-page transition-all"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Learning Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('learning')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center space-x-1 text-sm font-bold text-secondary/70 hover:text-secondary transition-colors uppercase tracking-widest">
              <span>Learning</span>
              <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'learning' && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {activeDropdown === 'learning' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-3"
                >
                  {learningLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-6 py-3 text-sm font-bold text-secondary/70 hover:text-primary hover:bg-bg-page transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/instructors" className="text-sm font-bold text-secondary/70 hover:text-secondary transition-colors uppercase tracking-widest">
            Instructors
          </Link>

          {/* Support Dropdown */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveDropdown('support')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center space-x-1 text-sm font-bold text-secondary/70 hover:text-secondary transition-colors uppercase tracking-widest">
              <span>Support</span>
              <ChevronDown className={cn("w-4 h-4 transition-transform", activeDropdown === 'support' && "rotate-180")} />
            </button>
            
            <AnimatePresence>
              {activeDropdown === 'support' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden py-3"
                >
                  {supportLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-6 py-3 text-sm font-bold text-secondary/70 hover:text-primary hover:bg-bg-page transition-all"
                    >
                      {link.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/#about" className="text-sm font-bold text-secondary/70 hover:text-secondary transition-colors uppercase tracking-widest">
            About
          </a>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-2 bg-secondary text-white font-bold rounded-full text-sm uppercase tracking-widest shadow-lg shadow-black/10"
          >
            Book Now
          </motion.button>
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
              className="lg:hidden bg-white overflow-hidden border-t border-slate-100 mt-4 px-6 rounded-2xl shadow-2xl"
            >
              <div className="flex flex-col space-y-4 py-8">
                {/* Services */}
                <div>
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'services' ? null : 'services')}
                    className="w-full flex items-center justify-between text-xl font-bold text-secondary py-2"
                  >
                    <span>Services</span>
                    <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === 'services' && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-bg-page/50 rounded-xl mt-2"
                      >
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-3 text-lg font-bold text-secondary/60 hover:text-primary transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Learning */}
                <div>
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'learning' ? null : 'learning')}
                    className="w-full flex items-center justify-between text-xl font-bold text-secondary py-2"
                  >
                    <span>Learning</span>
                    <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === 'learning' && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'learning' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-bg-page/50 rounded-xl mt-2"
                      >
                        {learningLinks.map((link) => (
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

                <Link to="/instructors" className="text-xl font-bold text-secondary py-2">
                  Instructors
                </Link>

                {/* Support */}
                <div>
                  <button 
                    onClick={() => setActiveDropdown(activeDropdown === 'support' ? null : 'support')}
                    className="w-full flex items-center justify-between text-xl font-bold text-secondary py-2"
                  >
                    <span>Support</span>
                    <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === 'support' && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'support' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden bg-bg-page/50 rounded-xl mt-2"
                      >
                        {supportLinks.map((link) => (
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

                <a href="/#about" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-bold text-secondary py-2">
                  About
                </a>

                <button className="w-full py-4 bg-secondary text-white font-bold rounded-xl text-lg">
                  Book Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
}
