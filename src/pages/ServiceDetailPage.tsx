import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? services[slug] : null;

  if (!service) {
    return <Navigate to="/lessons" replace />;
  }

  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
                Specialist Tuition
              </span>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-secondary leading-[0.9] tracking-tighter mb-8 uppercase">
                {service.title} <br />
                <span className="text-primary italic">{service.subtitle}</span>
              </h1>
              <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed mb-10">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                 <div className="px-6 py-3 bg-secondary text-white rounded-full font-black uppercase text-xs tracking-widest">
                    {service.pricingHint}
                 </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative aspect-video rounded-[32px] overflow-hidden shadow-2xl border-4 border-secondary"
            >
              <img 
                src={service.heroImage} 
                alt={service.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who it's for & Benefits */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Who it's for */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="vibrant-card !bg-secondary !border-none p-10 md:p-16 text-white"
            >
              <h2 className="text-3xl font-black uppercase tracking-tight mb-8">Who it's for</h2>
              <ul className="space-y-6">
                {service.whoItIsFor.map((item, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="mt-1">
                        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    </div>
                    <span className="text-lg font-bold text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Benefits */}
            <div className="flex flex-col justify-center space-y-12">
               {service.benefits.map((benefit, index) => (
                 <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-6"
                 >
                   <div className="w-16 h-16 bg-white border-4 border-secondary rounded-2xl flex items-center justify-center text-secondary shrink-0 shadow-xl transform rotate-3">
                      <benefit.icon className="w-8 h-8" />
                   </div>
                   <div>
                     <h3 className="text-2xl font-black text-secondary uppercase tracking-tight mb-2">{benefit.title}</h3>
                     <p className="text-slate-500 font-medium text-lg leading-relaxed">{benefit.desc}</p>
                   </div>
                 </motion.div>
               ))}
               
               <motion.div 
                 initial={{ opacity: 0 }}
                 whileInView={{ opacity: 1 }}
                 className="pt-8 border-t border-slate-200"
               >
                 <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20 flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-primary text-secondary rounded-xl flex items-center justify-center">
                            <ArrowRight className="w-5 h-5" />
                        </div>
                        <span className="font-black text-secondary uppercase tracking-tight">Check current availability</span>
                    </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Hint Section */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black text-secondary uppercase tracking-tighter mb-8 italic">Pricing Overview</h2>
            <div className="vibrant-card !p-12 bg-bg-page border-dashed">
                <p className="text-2xl font-black text-secondary mb-4 uppercase">{service.pricingHint}</p>
                <p className="text-slate-500 font-medium">All our rates are transparent and we never charge hidden booking or administration fees. We offer flexible payment options to suit your budget.</p>
                <motion.button 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   className="mt-10 px-12 py-5 bg-secondary text-white font-black uppercase tracking-widest rounded-2xl shadow-xl"
                >
                    View Full Pricing
                </motion.button>
            </div>
          </div>
      </section>

      {/* FAQ */}
      <FAQ id="service-faq" items={service.faqs} />

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
