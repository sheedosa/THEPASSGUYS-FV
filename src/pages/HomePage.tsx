import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import ThePromise from '../components/ThePromise';
import HowItWorks from '../components/HowItWorks';
import AreasCovered from '../components/AreasCovered';
import Pricing from '../components/Pricing';
import WhyChooseUs from '../components/WhyChooseUs';
import MidPageCTA from '../components/MidPageCTA';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

/**
 * Home page — restructured for a NEW business (no reviews, no stats).
 *
 * Section flow:
 *
 *   Hook        : Hero               (brand + video + CTA)
 *   Reassure    : TrustBar           (3 verifiable facts — DVSA, flexible, manual/auto)
 *   Promise     : ThePromise         (what every student gets — dark section)
 *   Inform      : HowItWorks         (3-step process — light tint)
 *                 AreasCovered       (postcode checker — white)
 *   Sell        : Pricing            (transparent plans — dark section)
 *                 WhyChooseUs        (commitments, not claims — light tint)
 *   Convert     : MidPageCTA         (off-ramp before objections)
 *                 FAQ                (close remaining doubts)
 *                 FinalCTA           (closing pitch — dark section)
 *
 * Removed: Testimonials (no real reviews yet), AboutNetwork (no real stats).
 * Replaced with: ThePromise (honest commitments the business can deliver).
 */
export default function HomePage() {
  return (
    <>
      <Hero id="hero" />
      <TrustBar />
      <ThePromise id="our-promise" />
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
