import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';
import ScrollToTop from './components/ScrollToTop';

/**
 * Route map:
 *
 *   /          Homepage funnel
 *   /book      Lead-capture form
 *   /privacy   Privacy Policy (GDPR)
 *   /terms     Terms & Conditions
 *   *          Catch-all → home
 */
export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            {/* Catch-all → home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <StickyMobileCTA />
    </Router>
  );
}
