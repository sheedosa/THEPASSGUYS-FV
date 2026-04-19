import React from 'react';
import { motion } from 'motion/react';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

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
        { q: "What car will I learn in?", a: "You'll learn in a modern, dual-controlled car. We use premium hatchbacks like Mini Coopers and Audi A1s to give you the best driving experience." },
        { q: "Do you offer intensive courses?", a: "Yes! We specialize in Fast Track intensive courses ranging from 5 to 14 days, designed to get you test-ready quickly." }
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
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Help Center
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-secondary leading-[0.9] tracking-tighter mb-8 uppercase italic"
          >
            Got <br />
            <span className="text-primary">Questions?</span>
          </motion.h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to know about starting your journey with The Pass Guys. If you can't find the answer here, get in touch!
          </p>
        </div>
      </section>

      {/* Categorized FAQs */}
      <div className="py-24 space-y-12">
        {faqCategories.map((cat, idx) => (
          <div key={idx} className="container mx-auto px-6">
            <div className="flex items-center space-x-4 mb-8">
                <div className="h-1 flex-1 bg-slate-100" />
                <h2 className="text-2xl font-black text-secondary uppercase tracking-widest">{cat.category}</h2>
                <div className="h-1 flex-1 bg-slate-100" />
            </div>
            <FAQ items={cat.items} />
          </div>
        ))}
      </div>

      <FinalCTA />
    </div>
  );
}
