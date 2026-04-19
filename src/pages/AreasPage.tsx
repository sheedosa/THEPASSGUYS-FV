import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { MapPin, Navigation, Car, Heart } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';

export default function AreasPage() {
  const regions = [
    {
      name: "Manchester",
      desc: "City centre and surrounding boroughs including Cheetham Hill, Didsbury, and Chorlton.",
      icon: <MapPin className="w-8 h-8" />
    },
    {
      name: "Salford",
      desc: "Covering MediaCityUK, Eccles, Worsley, and Swinton with expert local instructors.",
      icon: <Navigation className="w-8 h-8" />
    },
    {
      name: "Stockport",
      desc: "Comprehensive coverage across the town centre, Bramhall, Hazel Grove, and Edgeley.",
      icon: <Car className="w-8 h-8" />
    },
    {
      name: "Bolton",
      desc: "Local tuition in Farnworth, Horwich, Westhoughton, and Little Lever.",
      icon: <Heart className="w-8 h-8" />
    },
    {
      name: "Oldham",
      nameFull: "Oldham & Rochdale",
      desc: "Extensive network serving Oldham, Chadderton, Royton, and Rochdale town centre.",
      icon: <MapPin className="w-8 h-8" />
    },
    {
      name: "Trafford",
      desc: "Altrincham, Sale, Stretford, and Urmston covered by our patient instructor team.",
      icon: <Navigation className="w-8 h-8" />
    }
  ];

  const boroughList = [
    "Manchester City Centre", "Salford", "Stockport", "Bolton", 
    "Oldham", "Rochdale", "Trafford", "Bury", "Wigan", "Tameside",
    "Glossop", "Altrincham", "Sale", "Wilmslow", "Cheadle"
  ];

  return (
    <div className="pt-24 min-h-screen bg-bg-page">
      <SEO 
        title="Driving Lessons in Manchester | Areas Covered" 
        description="We offer driving lessons across Greater Manchester, Salford, Stockport, Bolton, Oldham, and Trafford. Check our full list of covered boroughs and postcodes."
        canonical="https://thepassguys.co.uk/areas"
      />
      {/* Hero Section */}
      <section className="py-20 overflow-hidden relative bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4"
          >
            Coverage Area
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-secondary leading-[0.9] tracking-tighter mb-8 uppercase"
          >
            Driving Lessons in <br />
            Greater <span className="text-primary italic">Manchester.</span>
          </motion.h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
            From the bustling city centre to the quiet suburbs, our network of 150+ instructors covers almost every M-postcode in the North West.
          </p>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="py-24 relative z-10 bg-bg-page/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="vibrant-card !bg-white group relative pt-16 pb-12 px-10"
              >
                {/* Floating Icon Holder */}
                <div className="absolute -top-6 left-10 w-20 h-20 bg-secondary text-primary rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform z-20">
                  {region.icon}
                </div>

                <div className="relative">
                  <h3 className="text-2xl md:text-3xl font-black text-secondary uppercase tracking-tighter mb-4 leading-none">
                    {region.nameFull || region.name}
                  </h3>
                  <div className="h-1 w-12 bg-primary mb-6 rounded-full" />
                  <p className="text-slate-600 font-bold leading-relaxed text-sm md:text-base">
                    {region.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full List */}
      <section className="py-24 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
             <div className="text-[30vw] font-black text-outline -rotate-12 translate-y-1/2">AREAS</div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Complete <span className="text-primary">Postcode</span> Coverage
            </h2>
            <p className="text-white/60 font-medium text-lg">
              We have local instructors living and working in every borough of Greater Manchester, ensuring you get familiar with the test routes in your specific area.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {boroughList.map((borough, index) => (
               <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
               >
                 <div className="w-3 h-3 bg-primary rounded-full shrink-0" />
                 <span className="text-xl font-bold uppercase tracking-tight">{borough}</span>
               </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
}
