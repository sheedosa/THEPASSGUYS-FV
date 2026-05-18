import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SmoothScroll from './components/SmoothScroll';

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

export default function App() {
  return (
    <Router>
      <SmoothScroll />
      <div className="min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-secondary focus:px-4 focus:py-2 focus:rounded-sm focus:font-accent focus:font-bold focus:text-sm focus:uppercase focus:tracking-wider"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}
