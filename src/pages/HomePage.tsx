import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Pricing from '../components/Pricing';
import HowItWorks from '../components/HowItWorks';
import AreasCovered from '../components/AreasCovered';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutNetwork from '../components/AboutNetwork';
import Testimonials from '../components/Testimonials';
import QuickAccess from '../components/QuickAccess';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
        <Hero id="hero" />
        <TrustBar />
        <Pricing id="services" />
        <HowItWorks id="how-it-works" />
        <AreasCovered id="areas" />
        <WhyChooseUs id="why-choose-us" />
        <AboutNetwork id="about" />
        <Testimonials id="testimonials" />
        <QuickAccess id="resources" />
        <FAQ id="faq" />
        <FinalCTA />
    </>
  );
}
