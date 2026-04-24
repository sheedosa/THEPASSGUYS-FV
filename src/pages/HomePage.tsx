import SEO from '../components/SEO';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ServicesOverview from '../components/ServicesOverview';
import HowItWorks from '../components/HowItWorks';
import WhyChooseUs from '../components/WhyChooseUs';
import MatchingCallout from '../components/MatchingCallout';
import AreasCovered from '../components/AreasCovered';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
        <SEO />
        <Hero id="hero" />
        <TrustBar />
        <ServicesOverview />
        <HowItWorks id="how-it-works" />
        <WhyChooseUs id="why-choose-us" />
        <MatchingCallout />
        <AreasCovered id="areas" />
        <Testimonials id="testimonials" />
        <FAQ id="faq" />
        <FinalCTA />
    </>
  );
}
