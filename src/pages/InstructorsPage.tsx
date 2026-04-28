import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { UserPlus, Briefcase, Users, ShieldCheck, Clock, MapPin, Car, HelpCircle, ArrowRight } from 'lucide-react';
import React, { useState } from 'react';
import FinalCTA from '../components/FinalCTA';

export default function InstructorsPage() {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    carType: 'manual',
    availability: 'full-time'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  const benefits = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Work",
      desc: "Work when you want. You have total control over your diary and student load."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Consistent Students",
      desc: "Our high-energy marketing ensures your diary stays as full as you need it to be."
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Support System",
      desc: "Dedicated instructor support team to handle bookings, billing, and logistics."
    }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <SEO 
        title="Become a Driving Instructor Manchester | Joint the Network" 
        description="Are you an ADI in Greater Manchester? Join 'The Pass Guys' and benefit from a high-volume student network, professional support, and flexible working."
        canonical="https://thepassguys.co.uk/instructors"
      />
      {/* Hero Section */}
      <section className="py-20 overflow-hidden relative bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Become a Partner
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black text-secondary leading-[0.9] tracking-tighter mb-8 uppercase"
          >
            Join The <br />
            Pass <span className="text-primary italic">Guys.</span>
          </motion.h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            Manchester's fastest growing driving school network. We empower instructors to do what they do best: teaching the next generation to drive.
          </p>
        </div>
      </section>

      {/* About Working With Us */}
      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 md:p-16 items-center">
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
             >
               <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">The Network</span>
               <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-8">
                 A Driving School <br /> <span className="italic text-primary">Built for Instructors.</span>
               </h2>
               <p className="text-slate-500 text-lg font-medium leading-relaxed mb-6">
                 The Pass Guys isn't just another franchise. We're a technology-first driving school platform that puts our instructors in the driver's seat of their own careers.
               </p>
               <p className="text-slate-500 text-lg font-medium leading-relaxed">
                 We handle the marketing, the initial student screening, and the automated booking systems so you can focus 100% on delivery and student success.
               </p>
             </motion.div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="vibrant-card !bg-secondary p-8 text-white">
                   <Briefcase className="w-10 h-10 text-primary mb-6" />
                   <h4 className="text-xl font-black uppercase mb-2">Modern Franchise</h4>
                   <p className="text-white/60 text-sm font-bold">Low weekly fees and zero commission on your lesson rates.</p>
                </div>
                <div className="vibrant-card !bg-white p-8 border-2 border-slate-100">
                   <UserPlus className="w-10 h-10 text-secondary mb-6" />
                   <h4 className="text-xl font-black uppercase mb-2">Instant Scale</h4>
                   <p className="text-slate-500 text-sm font-bold">Access a pool of 500+ active students waiting for tuition in Manchester.</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
           <div className="text-center mb-8 md:mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter italic">Why Choose Us?</h2>
           </div>
           
           <div className="grid md:grid-cols-3 gap-6 md:p-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="vibrant-card !p-12 text-center group hover:bg-secondary transition-all cursor-default"
                >
                  <div className="w-16 h-16 bg-bg-page rounded-2xl flex items-center justify-center text-secondary mx-auto mb-8 transform group-hover:bg-primary group-hover:rotate-6 transition-all">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-black text-secondary group-hover:text-white uppercase tracking-tight mb-4">{benefit.title}</h3>
                  <p className="text-slate-500 group-hover:text-white/60 font-medium leading-relaxed">{benefit.desc}</p>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* Who You Work With */}
      <section className="py-16 md:py-24 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
             <div className="text-[40vw] font-black text-outline rotate-12">ADI</div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">Our Standards</span>
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter mb-8 md:mb-12">
              Join a Network of <br /> <span className="text-primary italic">Elite Professionals.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                <div className="space-y-6">
                    <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                            <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xl font-black uppercase mb-2">ADI Qualified</h4>
                            <p className="text-white/60 font-medium leading-relaxed">We only partner with Fully Qualified ADIs to maintain our rigorous safety and pass standards.</p>
                        </div>
                    </div>
                    <div className="flex items-start space-x-6">
                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                            <Car className="w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="text-xl font-black uppercase mb-2">Instructor Owned</h4>
                            <p className="text-white/60 font-medium leading-relaxed">Use your own vehicle or lease a modern Mini Cooper through our fleet partner scheme.</p>
                        </div>
                    </div>
                </div>
                
                <div className="bg-white/5 border border-white/10 p-6 md:p-10 rounded-[32px] backdrop-blur-sm">
                    <h4 className="text-2xl font-black uppercase mb-6 flex items-center space-x-3">
                        <HelpCircle className="text-primary w-6 h-6" />
                        <span>Other Approved Instructors</span>
                    </h4>
                    <p className="text-white/70 font-medium leading-relaxed mb-8">
                        Are you an existing school looking to white-label our technology? Or a freelancer wanting more overflow students? We have partnership tiers for every level of operation.
                    </p>
                    <button className="flex items-center space-x-2 text-primary font-black uppercase tracking-widest text-xs hover:text-white transition-colors">
                        <span>Partner Enquiry</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-up Form */}
      <section id="signup" className="py-16 md:py-24 bg-bg-page overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 md:p-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-8">
                      Start your <br /> <span className="text-primary italic">next chapter.</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                      Fill out the form and a member of our partnership team will be in touch within 24 hours to discuss your onboarding.
                    </p>
                    
                    <div className="space-y-4">
                        {["M1 - M99 Postcode Exposure", "High-Volume Lead Generation", "Instructor Success Manager"].map((item, i) => (
                            <div key={i} className="flex items-center space-x-3">
                                <CheckCircleIcon className="w-5 h-5 text-primary" />
                                <span className="font-bold text-secondary text-sm uppercase">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="vibrant-card !bg-white !p-6 sm:!p-6 md:p-10 md:!p-12">
                   {!submitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-secondary/50 mb-3 ml-2">Full Name</label>
                            <input 
                                required
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                className="w-full bg-bg-page rounded-2xl px-4 md:px-6 py-4 font-bold text-secondary focus:outline-none border-2 border-transparent focus:border-primary transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-black uppercase tracking-widest text-secondary/50 mb-3 ml-2">Primary Location</label>
                            <input 
                                required
                                type="text"
                                placeholder="e.g. Stockport"
                                value={formData.location}
                                onChange={(e) => setFormData({...formData, location: e.target.value})}
                                className="w-full bg-bg-page rounded-2xl px-4 md:px-6 py-4 font-bold text-secondary focus:outline-none border-2 border-transparent focus:border-primary transition-all"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-secondary/50 mb-3 ml-2">Car Type</label>
                                <select 
                                    className="w-full bg-bg-page rounded-2xl px-4 md:px-6 py-4 font-bold text-secondary focus:outline-none border-2 border-transparent focus:border-primary transition-all appearance-none"
                                    value={formData.carType}
                                    onChange={(e) => setFormData({...formData, carType: e.target.value})}
                                >
                                    <option value="manual">Manual</option>
                                    <option value="automatic">Automatic</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-xs font-black uppercase tracking-widest text-secondary/50 mb-3 ml-2">Availability</label>
                                <select 
                                    className="w-full bg-bg-page rounded-2xl px-4 md:px-6 py-4 font-bold text-secondary focus:outline-none border-2 border-transparent focus:border-primary transition-all appearance-none"
                                    value={formData.availability}
                                    onChange={(e) => setFormData({...formData, availability: e.target.value})}
                                >
                                    <option value="full-time">Full-time</option>
                                    <option value="part-time">Part-time</option>
                                    <option value="ev-only">Evening/Weekend</option>
                                </select>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-5 bg-primary text-secondary font-black uppercase tracking-widest rounded-2xl shadow-xl transition-all hover:bg-secondary hover:text-white"
                        >
                            Apply to Join
                        </motion.button>
                    </form>
                   ) : (
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-10"
                    >
                        <div className="w-20 h-20 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                            <CheckCircleIcon className="w-10 h-10" />
                        </div>
                        <h3 className="text-3xl font-black text-secondary uppercase tracking-tighter mb-4">Application Sent!</h3>
                        <p className="text-slate-500 font-medium mb-8">Thanks for your interest, {formData.name}. Our team will call you shortly.</p>
                        <button 
                            onClick={() => setSubmitted(false)}
                            className="text-secondary font-black uppercase tracking-widest text-xs hover:text-primary transition-colors underline underline-offset-4"
                        >
                            Go Back
                        </button>
                    </motion.div>
                   )}
                </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

function CheckCircleIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
    );
}
