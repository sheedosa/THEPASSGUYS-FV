import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Testimonials from '../components/Testimonials';
import AboutNetwork from '../components/AboutNetwork';
import HowItWorks from '../components/HowItWorks';
import AreasCovered from '../components/AreasCovered';
import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import MidPageCTA from '../components/MidPageCTA';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

/**
 * Home page section flow — optimised for conversion:
 *
 *   Hook        : Hero
 *   Reassure    : TrustBar          (4 quick proof signals)
 *   Prove       : Testimonials      (real-mouth proof, social)
 *                 AboutNetwork      (hard numbers: 150+, 2k+, 98%)
 *   Inform      : HowItWorks        (process clarity)
 *                 AreasCovered      (relevance to user's area)
 *   Sell        : Pricing           (now they've been sold, show £)
 *                 WhyChooseUs       (differentiation)
 *   Convert     : MidPageCTA        (off-ramp before objections)
 *                 FAQ               (close remaining doubts)
 *                 FinalCTA          (closing pitch)
 *
 * QuickAccess was removed from the homepage — Student Portal,
 * Become an Instructor, and Learner Resources now live in the footer
 * and main nav respectively.
 */
export default function HomePage() {
  return (
    <>
      <Hero id="hero" />
      <TrustBar />
      <Testimonials id="testimonials" />
      <AboutNetwork id="about" />
      <HowItWorks id="how-it-works" />
      <AreasCovered id="areas" />
      <Pricing id="services" />
      <WhyChooseUs id="why-choose-us" />
      <MidPageCTA />
      <FAQ id="faq" />
      <FinalCTA />
    </>
  );
}
