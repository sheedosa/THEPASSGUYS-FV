import React, { useState } from 'react';
import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
import AreasCovered from '../components/AreasCovered';
import FinalCTA from '../components/FinalCTA';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "0161 123 4567",
      desc: "Mon-Fri: 8am - 8pm"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "hello@thepassguys.co.uk",
      desc: "We reply within 2 hours"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      value: "Start a Chat",
      desc: "Available on our portal"
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <SEO 
        title="Contact The Pass Guys | Manchester Support" 
        description="Get in touch with Manchester's leading driving school. Whether you're a new student or interested in joining our network of instructors, we're here to help."
        canonical="https://thepassguys.co.uk/contact"
      />
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Get In Touch
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-secondary leading-[0.9] tracking-tighter mb-8 uppercase italic"
          >
            Contact <br />
            <span className="text-primary">The Guys.</span>
          </motion.h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Ready to start your journey? Our Manchester-based support team is standing by to help you get behind the wheel.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 lg:gap-8 md:p-16">
            
            {/* Contact Details */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              {contactInfo.map((info, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="vibrant-card !p-6 sm:!p-8 bg-white"
                >
                  <div className="flex items-start space-x-4 sm:space-x-6">
                    <div className="w-12 h-12 bg-primary text-secondary rounded-xl flex items-center justify-center shrink-0 shadow-lg border-2 border-secondary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{info.title}</p>
                      <p className="text-lg sm:text-xl font-black text-secondary uppercase tracking-tight">{info.value}</p>
                      <p className="text-xs sm:text-sm font-bold text-slate-500 mt-1">{info.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}

              <div className="vibrant-card !p-6 sm:!p-8 bg-secondary text-white">
                <div className="flex items-start space-x-4 sm:space-x-6">
                  <div className="w-12 h-12 bg-white text-secondary rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">Our Base</p>
                    <p className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">Manchester Central</p>
                    <p className="text-xs sm:text-sm font-bold text-white/60 mt-1">Covering Greater Manchester</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="vibrant-card !p-6 sm:!p-12 bg-white h-full"
              >
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-secondary uppercase tracking-widest px-2">Your Name</label>
                        <input required type="text" className="w-full bg-slate-50 border-4 border-transparent focus:border-primary rounded-2xl px-4 md:px-6 py-4 font-bold text-secondary outline-none transition-all" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-secondary uppercase tracking-widest px-2">Email Address</label>
                        <input required type="email" className="w-full bg-slate-50 border-4 border-transparent focus:border-primary rounded-2xl px-4 md:px-6 py-4 font-bold text-secondary outline-none transition-all" placeholder="john@example.com" />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-secondary uppercase tracking-widest px-2">Phone Number</label>
                        <input type="tel" className="w-full bg-slate-50 border-4 border-transparent focus:border-primary rounded-2xl px-4 md:px-6 py-4 font-bold text-secondary outline-none transition-all" placeholder="07123 456789" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-secondary uppercase tracking-widest px-2">Inquiry Type</label>
                        <select className="w-full bg-slate-50 border-4 border-transparent focus:border-primary rounded-2xl px-4 md:px-6 py-5 font-bold text-secondary outline-none transition-all appearance-none cursor-pointer">
                          <option>General Inquiry</option>
                          <option>Booking Question</option>
                          <option>Intensive Courses</option>
                          <option>Instructor Partnership</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-secondary uppercase tracking-widest px-2">Your Message</label>
                      <textarea required rows={4} className="w-full bg-slate-50 border-4 border-transparent focus:border-primary rounded-3xl px-4 md:px-6 py-4 font-bold text-secondary outline-none transition-all resize-none" placeholder="Hey guys, I want to pass fast..."></textarea>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-secondary text-white py-6 rounded-2xl font-black uppercase tracking-widest text-lg flex items-center justify-center space-x-3 shadow-xl hover:bg-primary hover:text-secondary group transition-all"
                    >
                      <span>Send Message</span>
                      <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                  </form>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-12">
                    <div className="w-24 h-24 bg-primary text-secondary rounded-full flex items-center justify-center shadow-2xl border-4 border-secondary animate-bounce">
                      <Send className="w-10 h-10" />
                    </div>
                    <h2 className="text-4xl font-black text-secondary uppercase tracking-tighter">Message Sent!</h2>
                    <p className="text-slate-500 font-bold max-w-sm">We've received your inquiry and one of the guys will get back to you within 2 hours.</p>
                    <button onClick={() => setSubmitted(false)} className="text-secondary font-black uppercase tracking-widest text-xs border-b-2 border-primary pb-1">Send another message</button>
                  </div>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Areas Served Section (Reusing existing component structure) */}
      <AreasCovered id="areas" />

      <FinalCTA />
    </div>
  );
}
