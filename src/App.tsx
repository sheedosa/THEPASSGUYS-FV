import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import Footer from './components/Footer';
import StickyMobileCTA from './components/StickyMobileCTA';

/**
 * Route map — intentionally minimal for v1.
 *
 *   /        Homepage funnel (the main conversion experience)
 *   /book    Short lead-capture form
 *   *        Anything else redirects back to home
 *
 * The other route stubs (lessons, pricing, areas, instructors, etc.)
 * are commented out below so we can re-enable them quickly once we have
 * real content. Until then, every path funnels users to the homepage,
 * and every Book Now CTA funnels them to /book.
 */
export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/book" element={<BookPage />} />
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
