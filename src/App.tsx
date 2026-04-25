import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import LessonsPage from './pages/LessonsPage';
import PricingPage from './pages/PricingPage';
import AreasPage from './pages/AreasPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import InstructorsPage from './pages/InstructorsPage';
import ResourcesPage from './pages/ResourcesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import HowItWorksPage from './pages/HowItWorksPage';
import Footer from './components/Footer';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <main>
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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
