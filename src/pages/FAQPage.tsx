import SEO from '../components/SEO';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Booking",
      items: [
        { q: "How do I book my first lesson?", a: "You can book directly through our website by entering your postcode on the home page, or by calling our friendly student support team." },
        { q: "How far in advance should I book?", a: "We recommend booking at least 2 weeks in advance to secure your preferred time slots, although we often have last-minute openings." },
        { q: "Can I change my booking?", a: "Yes, you can manage your bookings through the student portal. We require at least 48 hours notice for cancellations or changes to avoid charges." }
      ]
    },
    {
      category: "Lessons",
      items: [
        { q: "How long is each lesson?", a: "Our standard lessons are 2 hours long. We've found this is the most effective duration for retaining new skills and making real progress." },
        { q: "What car will I learn in?", a: "Modern dual-control hatchbacks. Most of our instructors drive a Mini Cooper or Audi A1." },
        { q: "Do you offer intensive courses?", a: "Yes! We specialise in Fast Track intensive courses ranging from 5 to 14 days, designed to get you test-ready quickly." }
      ]
    },
    {
      category: "Pricing",
      items: [
        { q: "How much do lessons cost?", a: "Pricing varies slightly based on location and whether you choose manual or automatic. Check our Pricing page for the most up-to-date rates." },
        { q: "Do you offer block booking discounts?", a: "Absolutely. We offer discounted rates when you book and pay for 10 or 20 hours upfront." },
        { q: "Are there any hidden fees?", a: "No. Our pricing is transparent. The only additional cost you'll face is the DVSA test fee when the time comes." }
      ]
    },
    {
      category: "Instructors",
      items: [
        { q: "Are your instructors qualified?", a: "Every single instructor in our network is a fully qualified, DVSA-approved ADI (Approved Driving Instructor)." },
        { q: "Can I change my instructor?", a: "We want you to feel 100% comfortable. If you feel you'd learn better with a different instructor, just let us know and we'll arrange a swap." },
        { q: "Do you have female instructors?", a: "Yes, we have many female instructors across our network. You can request a female instructor when booking." }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-bg-page">
      <SEO
        title="Driving Lesson FAQs | The Pass Guys"
        description="Common questions about booking, pricing, intensive courses, and our instructors in Manchester."
        canonical="https://thepassguys.co.uk/faq"
      />
      <PageHero
        eyebrow="Help"
        title="Got"
        accent="questions?"
        description="The things most learners ask before they book. If yours isn't here, drop us a line and we'll answer it directly."
        primaryCta={{ label: 'Find My Instructor', href: '/get-matched' }}
        secondaryCta={{ label: 'Contact us', href: '/contact' }}
      />

      {/* Categorized FAQs — homepage style: hairline eyebrow + minimal section */}
      <div className="pb-16 md:pb-24 space-y-20 md:space-y-28">
        {faqCategories.map((cat, idx) => (
          <div key={idx} className="container mx-auto px-4 md:px-6">
            <div className="flex items-center justify-center gap-4 mb-2 text-secondary/55">
              <span className="inline-block w-10 h-px bg-secondary/25" aria-hidden="true" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.32em]">
                {String(idx + 1).padStart(2, '0')} <span className="mx-1.5 opacity-50">—</span> {cat.category}
              </span>
              <span className="inline-block w-10 h-px bg-secondary/25" aria-hidden="true" />
            </div>
            <div className="max-w-4xl mx-auto mt-8">
              <FAQ items={cat.items} hideHeader />
            </div>
          </div>
        ))}
      </div>

      <FinalCTA />
    </div>
  );
}
