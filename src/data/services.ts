import { ShieldCheck, Zap, Repeat, Compass, GraduationCap, ClipboardCheck, Timer } from 'lucide-react';

export interface FAQItem {
  q: string;
  a: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  whoItIsFor: string[];
  benefits: {
    title: string;
    desc: string;
    icon: any;
  }[];
  pricingHint: string;
  faqs: FAQItem[];
  heroImage: string;
}

export const services: Record<string, ServiceDetail> = {
  'manual-lessons': {
    slug: 'manual-lessons',
    title: 'Manual Driving Lessons',
    subtitle: 'Master the Art of the Gearbox',
    description: 'Manual lessons give you full control over your vehicle. Our expert instructors specialize in teaching smooth gear changes and clutch control, preparing you for a lifetime of versatile driving.',
    whoItIsFor: [
      "Beginners wanting full vehicle control",
      "Those looking for the most affordable car options",
      "Drivers planning to drive a wide range of vehicles globally"
    ],
    benefits: [
      { 
        title: "Total Control", 
        desc: "Learn to use gears to manage speed and power effectively.", 
        icon: Zap 
      },
      { 
        title: "Lower Entry Cost", 
        desc: "Manual cars are generally cheaper to buy and insure.", 
        icon: ShieldCheck 
      }
    ],
    pricingHint: "Starting from £35/hr. Bulk discounts available.",
    heroImage: "https://picsum.photos/seed/manual/1200/800",
    faqs: [
      { q: "Is manual harder than automatic?", a: "It has a steeper learning curve initially due to the clutch, but most students find it rewarding once mastered." },
      { q: "Will I pass faster in a manual?", a: "Usually, automatic is faster to learn, but manual gives you a license for both types of cars." }
    ]
  },
  'automatic-lessons': {
    slug: 'automatic-lessons',
    title: 'Automatic Driving Lessons',
    subtitle: 'The Smoother Way to Drive',
    description: 'Automatic cars are becoming the industry standard. Focus more on the road and less on the gears with our modern automatic fleet, perfect for busy Manchester traffic.',
    whoItIsFor: [
      "Those who find clutch control stressful",
      "Students looking for a faster route to their license",
      "People planning to own modern electric or hybrid vehicles"
    ],
    benefits: [
      { 
        title: "Faster Learning", 
        desc: "Spend less time on technicalities and more on road safety.", 
        icon: Zap 
      },
      { 
        title: "Stress-Free", 
        desc: "No more stalling at busy junctions or roundabouts.", 
        icon: ShieldCheck 
      }
    ],
    pricingHint: "Starting from £38/hr. Optimized for fast results.",
    heroImage: "https://picsum.photos/seed/auto/1200/800",
    faqs: [
      { q: "Can I drive a manual with an automatic license?", a: "No, you would need to take another test to drive a manual car." },
      { q: "Are automatic cars better for city driving?", a: "Absolutely. Stop-start traffic in Manchester is much easier in an automatic." }
    ]
  },
  'intensive-fast-track': {
    slug: 'intensive-fast-track',
    title: 'Intensive Fast Track',
    subtitle: 'Your License in Weeks, Not Months',
    description: 'Our intensive courses are designed for students who want to focus purely on driving over a short period. We condense months of learning into focused daily blocks.',
    whoItIsFor: [
      "People with upcoming job requirements",
      "Students on summer or winter breaks",
      "Learners who have some experience but want to finish quickly"
    ],
    benefits: [
      { 
        title: "Rapid Progress", 
        desc: "Retain information better with daily consistent practice.", 
        icon: Timer 
      },
      { 
        title: "Guaranteed Test", 
        desc: "We help book your practical test for the final day of your course.", 
        icon: Zap 
      }
    ],
    pricingHint: "Packages start from £499. Small deposit required.",
    heroImage: "https://picsum.photos/seed/fasttrack/1200/800",
    faqs: [
      { q: "Can I pass in one week?", a: "Yes, if you have some experience. For complete beginners, we recommend our 2-week intensive." },
      { q: "What if I fail the test?", a: "We offer discounted 'fix-up' lessons to get you back to test standard quickly." }
    ]
  },
  'refresher-lessons': {
    slug: 'refresher-lessons',
    title: 'Refresher Lessons',
    subtitle: 'Regain Your Confidence',
    description: 'Haven’t driven in a while? Our refresher courses are perfect for license holders who want to brush up on their skills, learn new road layouts, or overcome driving anxiety.',
    whoItIsFor: [
      "Drivers who haven't been behind the wheel for years",
      "People move to Manchester and need to learn UK roads",
      "Those wanting to improve parking or motorway skills"
    ],
    benefits: [
      { 
        title: "Tailored to You", 
        desc: "We focus only on the specific areas where you feel unconfident.", 
        icon: Repeat 
      },
      { 
        title: "Modern Techniques", 
        desc: "Unlearn bad habits and adopt modern, safe driving styles.", 
        icon: ShieldCheck 
      }
    ],
    pricingHint: "Starting from £35/hr. No minimum lessons required.",
    heroImage: "https://picsum.photos/seed/refresher/1200/800",
    faqs: [
      { q: "Do I need a provisional license?", a: "No, you must hold a full valid driving license for refresher lessons." },
      { q: "Can we use my own car?", a: "Yes, after an initial assessment in our dual-controlled vehicle for safety." }
    ]
  },
  'motorway-lessons': {
    slug: 'motorway-lessons',
    title: 'Motorway Lessons',
    subtitle: 'High Speed, High Confidence',
    description: 'Motorways can be intimidating. We teach you the specific skills needed for high-speed driving, including merging, safe following distances, and advanced observation.',
    whoItIsFor: [
      "Newly qualified drivers",
      "Nervous motorway users",
      "Commuters who need to use the M60 or M6 frequently"
    ],
    benefits: [
      { 
        title: "Expert Lane Craft", 
        desc: "Learn the rules of lane discipline and overtaking at speed.", 
        icon: Compass 
      },
      { 
        title: "Safety First", 
        desc: "Understand high-speed hazard perception and emergency stops.", 
        icon: ShieldCheck 
      }
    ],
    pricingHint: "Recommended as a 3-hour specialist block for £110.",
    heroImage: "https://picsum.photos/seed/motorway/1200/800",
    faqs: [
      { q: "Is motorway driving part of the standard test?", a: "Learners can now have lessons on motorways with an instructor, but it's not a required part of the test." },
      { q: "Will this lower my insurance?", a: "Many insurers look favorably on advanced training, potentially reducing premiums." }
    ]
  },
  'pass-plus': {
    slug: 'pass-plus',
    title: 'Pass Plus Scheme',
    subtitle: 'Become a Professional-Grade Driver',
    description: 'Pass Plus is a government-backed training scheme that helps newly qualified drivers improve their skills and safety. It covers driving in conditions not usually covered in regular lessons.',
    whoItIsFor: [
      "Newly qualified drivers (within 1 year of passing)",
      "Anyone wanting to reduce their insurance premiums",
      "Drivers wanting experience in night and rural driving"
    ],
    benefits: [
      { 
        title: "Advanced Training", 
        desc: "Covers night, rural, all-weather, and dual-carriageway driving.", 
        icon: GraduationCap 
      },
      { 
        title: "Insurance Discounts", 
        desc: "Many providers offer significant discounts upon completion.", 
        icon: ShieldCheck 
      }
    ],
    pricingHint: "Full 6-hour course for £210. Certificate included.",
    heroImage: "https://picsum.photos/seed/passplus/1200/800",
    faqs: [
      { q: "Is there an exam at the end?", a: "No, your performance is continuously assessed by your instructor." },
      { q: "How long is the course?", a: "It is a minimum of 6 hours of practical training." }
    ]
  },
  'mock-tests': {
    slug: 'mock-tests',
    title: 'Mock Driving Tests',
    subtitle: 'Beat the Nerves, Pass First Time',
    description: 'Experience exactly what happens on test day. Our mock tests are conducted by senior instructors following official DVSA marking criteria, giving you realistic feedback.',
    whoItIsFor: [
      "Students nearing their practical test date",
      "Nervous learners who want to de-mystify the process",
      "Anyone wanting an unbiased second opinion on their driving"
    ],
    benefits: [
      { 
        title: "Realistic Feedback", 
        desc: "Get an official DVSA-style marking sheet and verbal debrief.", 
        icon: ClipboardCheck 
      },
      { 
        title: "Nerve Management", 
        desc: "Practice handling the pressure of a quiet, formal examination.", 
        icon: ShieldCheck 
      }
    ],
    pricingHint: "£45 for a 40-minute test and 20-minute feedback session.",
    heroImage: "https://picsum.photos/seed/mocktest/1200/800",
    faqs: [
      { q: "Will my regular instructor be in the car?", a: "Usually, we use a different instructor to make the scenario feel more realistic." },
      { q: "Do you use real test routes?", a: "Yes, we focus on the specific routes used by your local test centre in Manchester." }
    ]
  }
};
