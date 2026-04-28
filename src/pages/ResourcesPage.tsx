import React from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { ExternalLink, BookOpen, Lightbulb, ClipboardCheck, ArrowRight, Shield } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

const sections = [
  {
    title: "DVSA Official Links",
    icon: <Shield className="w-10 h-10 text-primary" />,
    description: "Official government resources for your driving journey.",
    items: [
      { name: "Book your Theory Test", url: "https://www.gov.uk/book-theory-test" },
      { name: "Book your Practical Test", url: "https://www.gov.uk/book-driving-test" },
      { name: "Manage your Test Booking", url: "https://www.gov.uk/change-driving-test" },
      { name: "Highway Code Online", url: "https://www.gov.uk/guidance/the-highway-code" }
    ]
  },
  {
    title: "Theory Test Help",
    icon: <BookOpen className="w-10 h-10 text-secondary" />,
    description: "Master the signs, rules, and hazard perception.",
    items: [
      { name: "Top 10 Theory Apps", url: "#" },
      { name: "Hazard Perception Guide", url: "#" },
      { name: "Common Signs Cheat Sheet", url: "#" },
      { name: "Mock Theory Tests", url: "#" }
    ]
  },
  {
    title: "Driving Tips",
    icon: <Lightbulb className="w-10 h-10 text-primary" />,
    description: "Practical advice from our network of expert ADIs.",
    items: [
      { name: "Perfecting the Parallel Park", url: "#" },
      { name: "Roundabouts Made Easy", url: "#" },
      { name: "Economical Driving Habits", url: "#" },
      { name: "Night Driving Essentials", url: "#" }
    ]
  },
  {
    title: "Test Preparation",
    icon: <ClipboardCheck className="w-10 h-10 text-secondary" />,
    description: "What to expect on your big day.",
    items: [
      { name: "The 'Show Me, Tell Me' Q&A", url: "#" },
      { name: "Test Day Checklist", url: "#" },
      { name: "Managing Test Nerves", url: "#" },
      { name: "Common Failing Mistakes", url: "#" }
    ]
  }
];

export default function ResourcesPage() {
  return (
    <div className="pt-24 min-h-screen">
      <SEO 
        title="Driving Resources & Theory Help | The Pass Guys" 
        description="Comprehensive resources for learner drivers. Get theory test help, practical driving tips, and direct links to book your official DVSA tests."
        canonical="https://thepassguys.co.uk/resources"
      />
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Learn & Succeed
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-secondary leading-[0.9] tracking-tighter mb-8 uppercase italic"
          >
            Learner <br />
            <span className="text-primary">Resources.</span>
          </motion.h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Everything you need to go from a total beginner to a confident, qualified driver. Explore our curated guides and official links.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {sections.map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="vibrant-card !p-0 overflow-hidden bg-white group flex flex-col"
              >
                <div className="p-6 md:p-10 border-b-4 border-secondary/5 group-hover:bg-bg-page transition-colors flex-1">
                  <div className="mb-6">{section.icon}</div>
                  <h2 className="text-3xl font-black text-secondary uppercase tracking-tight mb-4">{section.title}</h2>
                  <p className="text-slate-500 font-medium leading-relaxed mb-8">{section.description}</p>
                  
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li key={i}>
                        <a 
                          href={item.url}
                          target={item.url.startsWith('http') ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          className="flex items-center justify-between p-4 bg-bg-page rounded-2xl group/item hover:bg-secondary transition-all"
                        >
                          <span className="font-bold text-secondary group-hover/item:text-white uppercase tracking-tight text-sm">
                            {item.name}
                          </span>
                          <div className="text-primary group-hover/item:translate-x-1 transition-transform">
                            {item.url.startsWith('http') ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary p-4 text-center">
                  <span className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Pass Fast, Drive Smart</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Blog-style Tips Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-16 gap-6">
                <div className="max-w-2xl">
                    <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">The Blog</span>
                    <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9]">
                        Latest from <br /> <span className="text-primary italic">The Instructors.</span>
                    </h2>
                </div>
                <button className="text-secondary font-black uppercase tracking-widest text-sm hover:text-primary transition-colors flex items-center space-x-2 shrink-0 border-b-4 border-primary pb-2">
                    <span>View all guides</span>
                    <ArrowRight className="w-4 h-4" />
                </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:p-10">
                {[
                    { title: "5 Cold Weather Driving Secrets", date: "Jan 12", category: "Safety", img: "https://picsum.photos/seed/winter/600/400" },
                    { title: "How to Master High-Speed Merging", date: "Feb 04", category: "Motorway", img: "https://picsum.photos/seed/merging/600/400" },
                    { title: "The 2024 Practical Test Update", date: "Mar 22", category: "Industry", img: "https://picsum.photos/seed/test/600/400" }
                ].map((post, i) => (
                    <motion.div 
                        key={i}
                        whileHover={{ y: -10 }}
                        className="group cursor-pointer"
                    >
                        <div className="vibrant-card !p-0 !shadow-none overflow-hidden aspect-[4/3] mb-6 relative">
                            <img 
                                src={post.img} 
                                alt={post.title} 
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 grayscale hover:grayscale-0"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-4 left-4 bg-primary text-secondary px-3 py-1 font-black uppercase text-[10px] tracking-widest rounded-lg">
                                {post.category}
                            </div>
                        </div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">{post.date}</p>
                        <h3 className="text-2xl font-black text-secondary uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
