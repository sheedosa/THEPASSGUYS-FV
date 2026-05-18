import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/ScrollToTop';
import AnchorScrollHandler from './components/AnchorScrollHandler';

const LessonsPage = lazy(() => import('./pages/LessonsPage'));
const PricingPage = lazy(() => import('./pages/PricingPage'));
const AreasPage = lazy(() => import('./pages/AreasPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
const InstructorsPage = lazy(() => import('./pages/InstructorsPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage'));
const GetMatchedPage = lazy(() => import('./pages/GetMatchedPage'));

function RouteFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-secondary border-t-primary rounded-full animate-spin" />
    </div>
  );
}

/**
 * Routes wrapped in AnimatePresence so each page cross-fades into the next.
 * Keyed by `pathname` so React Router treats each route as a distinct element
 * — that's what lets AnimatePresence run the exit animation on the outgoing
 * page before mounting the incoming one.
 */
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        // Prevent layout shift while the next page mounts.
        style={{ minHeight: '100svh' }}
      >
        <Suspense fallback={<RouteFallback />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/lessons" element={<LessonsPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/areas" element={<AreasPage />} />
            <Route path="/instructors" element={<InstructorsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/get-matched" element={<GetMatchedPage />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <SmoothScroll />
      <ScrollToTop />
      <AnchorScrollHandler />
      <div className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-secondary focus:px-4 focus:py-2 focus:rounded-sm focus:font-accent focus:font-bold focus:text-sm focus:uppercase focus:tracking-wider"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
