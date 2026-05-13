import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { ShieldCheck, Wallet, Sparkles, Clock, CheckCircle2, Info } from 'lucide-react';
import Pricing from '../components/Pricing';
import FinalCTA from '../components/FinalCTA';
import FAQ from '../components/FAQ';
import PageHero from '../components/PageHero';

export default function PricingPage() {
  const trustPoints = [
    {
      icon: <Wallet className="w-8 h-8" />,
      title: "No Large Upfront Fees",
      desc: "We don't believe in charging thousands upfront. Pay for what you use or small blocks."
    },
    {
      icon: <CheckCircle2 className="w-8 h-8" />,
      title: "Small Deposits",
      desc: "Secure your intensive course with just a fraction of the total cost."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Instructor Quality",
      desc: "All instructors are DVSA approved and regularly vetted for standard."
    }
  ];

  const features = [
    "Fully Insured Vehicles",
    "Modern Dual Controls",
    "Free Theory App Access",
    "Choice of Instructor",
    "Block Booking Discounts",
    "Student Portal Access"
  ];

  const pricingFaqs = [
    {
      q: "Are there any hidden booking fees?",
      a: "Absolutely not. The price you see is the price you pay. We don't charge administration fees for matching you with an instructor."
    },
    {
      q: "Do you offer student discounts?",
      a: "Our block booking 'Standard Course' is designed specifically to offer the best value for students, saving you £30 compared to pay-as-you-go rates."
    },
    {
      q: "What happens if I need to cancel?",
      a: "As long as you provide 48 hours notice, you can reschedule your lesson for free through our student portal."
    },
    {
      q: "Can I pay my instructor directly?",
      a: "We manage all payments through our secure central system to ensure your funds are protected and to maintain our small deposit guarantee."
    }
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      <SEO
        title="Driving Lesson Prices Manchester | Blocks & Intensive"
        description="Honest, upfront pricing for driving lessons across Greater Manchester. Manual, automatic, block-bookings and intensive courses."
        canonical="https://thepassguys.co.uk/pricing"
      />
      <PageHero
        eyebrow="Pricing · Transparent rates"
        title="Simple pricing."
        accent="No hidden fees."
        description="The price you see is what you pay. Block-book to save up to £30. Cancel up to 24 hours before with no charge."
        primaryCta={{ label: 'See plans', href: '#pricing-plans' }}
        secondaryCta={{ label: 'Get matched', href: '/get-matched' }}
        meta={['Block-booking discounts', 'No upfront thousands', 'Test fee at cost']}
      />

      {/* Pricing Blocks */}
      <Pricing id="pricing-plans" />

      {/* Why Our Prices are Better (Trust Points) */}
      <section className="py-16 md:py-24 bg-secondary text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="w-16 h-16 bg-primary text-secondary rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 transform rotate-3">
                  {point.icon}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight mb-4">{point.title}</h3>
                <p className="text-white/60 font-medium leading-relaxed">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included / Features */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="vibrant-card !bg-bg-page !border-none grid lg:grid-cols-2 gap-8 md:p-16 items-center p-6 md:p-10 md:p-20">
            <div>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">Value Pack</span>
              <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-8">
                What’s included <br /> in your <span className="italic">investment.</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-black text-secondary uppercase text-lg">Total Flexibility</h4>
                        <p className="text-slate-500 font-medium">Cancel or reschedule lessons with ease through our student portal.</p>
                    </div>
                </div>
                <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-secondary text-white rounded-xl flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-black text-secondary uppercase text-lg">Modern Fleet</h4>
                        <p className="text-slate-500 font-medium">Learn in the latest models with full safety features and climate control.</p>
                    </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                    <motion.div 
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center space-x-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100"
                    >
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <span className="font-bold text-secondary text-sm">{feature}</span>
                    </motion.div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ (Specific) */}
      <FAQ id="pricing-faq" items={pricingFaqs} />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
