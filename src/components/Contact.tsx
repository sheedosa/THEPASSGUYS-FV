import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  return (
    <section id="contact" className="py-16 md:py-24 bg-bg-page relative overflow-hidden">
      {/* Background Decorative */}
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-20 -left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="vibrant-card !shadow-none !p-0 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2">
            
            {/* Contact Info */}
            <div className="p-8 sm:p-12 lg:p-20 bg-secondary text-white flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="text-[150px] font-black text-white absolute -bottom-10 -left-10 rotate-12">CONNECT</div>
                </div>

                <div className="relative z-10">
                    <span className="text-primary font-black uppercase tracking-widest text-sm block mb-4">Get In Touch</span>
                    <h2 className="text-4xl sm:text-6xl font-black mb-8 uppercase tracking-tighter leading-[0.9]">Let's get <br /> you behind <br /> the <span className="text-primary">wheel.</span></h2>
                    
                    <div className="space-y-6 mt-12">
                        <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary">
                                <Phone />
                            </div>
                            <div>
                                <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Call Us</p>
                                <p className="text-xl font-black italic">0800 123 4567</p>
                            </div>
                        </motion.div>
                        <motion.div whileHover={{ x: 10 }} className="flex items-center space-x-6">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-primary">
                                <Mail />
                            </div>
                            <div>
                                <p className="text-[10px] text-white/40 font-black uppercase tracking-widest">Email Us</p>
                                <p className="text-xl font-black italic">hello@thepassguys.com</p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-white/5 flex space-x-8 text-[10px] font-black uppercase tracking-widest text-white/30 relative z-10">
                    <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                    <a href="#" className="hover:text-primary transition-colors">Facebook</a>
                    <a href="#" className="hover:text-primary transition-colors">TikTok</a>
                </div>
            </div>

            {/* Form */}
            <div className="bg-white p-8 sm:p-12 lg:p-20">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-secondary/40 tracking-widest">Full Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-4 md:px-6 py-4 text-secondary focus:outline-none focus:border-primary transition-all font-bold placeholder:opacity-30"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-secondary/40 tracking-widest">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-4 md:px-6 py-4 text-secondary focus:outline-none focus:border-primary transition-all font-bold placeholder:opacity-30"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-[10px] font-black uppercase text-secondary/40 tracking-widest">Message</label>
                        <textarea 
                            rows={4}
                            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-4 md:px-6 py-4 text-secondary focus:outline-none focus:border-primary transition-all resize-none font-bold placeholder:opacity-30"
                            placeholder="Tell us about your driving goals..."
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-5 bg-secondary text-white font-black uppercase tracking-widest rounded-2xl flex items-center justify-center space-x-3 shadow-[0_20px_0_rgba(0,0,0,0.1)] hover:shadow-[0_10px_0_rgba(0,0,0,0.1)] transition-all"
                    >
                        <span>Send Message</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
