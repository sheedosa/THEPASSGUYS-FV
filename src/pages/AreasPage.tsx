import { motion } from 'motion/react';
import SEO from '../components/SEO';
import { MapPin, Navigation, Car, Heart } from 'lucide-react';
import FinalCTA from '../components/FinalCTA';
import PageHero from '../components/PageHero';

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
    <div className="min-h-screen bg-bg-page">
      <SEO
        title="Driving Lessons in Manchester | Areas Covered"
        description="Driving lessons across Greater Manchester. Salford, Stockport, Bolton, Oldham, Trafford and every M-postcode."
        canonical="https://thepassguys.co.uk/areas"
      />
      <PageHero
        eyebrow="Coverage · Greater Manchester"
        title="We cover every"
        accent="M-postcode."
        description="City centre to the suburbs, north to south. Our 150 instructors live and teach across all 10 boroughs."
        primaryCta={{ label: 'Get matched', href: '/get-matched' }}
        secondaryCta={{ label: 'See boroughs', href: '#regions' }}
        meta={['150+ instructors', '12 boroughs', '60+ test routes']}
      />

      {/* Featured Regions */}
      <section className="py-16 md:py-24 relative z-10 bg-bg-page/50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 md:gap-6 md:p-10">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="vibrant-card !bg-white !rounded-2xl md:!rounded-[40px] !shadow-none md:!shadow-[10px_10px_0_var(--color-primary)] group relative pt-10 sm:pt-14 md:pt-16 pb-6 sm:pb-10 md:pb-12 px-5 sm:px-8 md:px-10"
              >
                <div className="absolute -top-4 sm:-top-5 md:-top-6 left-4 sm:left-7 md:left-10 w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 bg-secondary text-primary rounded-xl md:rounded-3xl flex items-center justify-center shadow-2xl group-hover:rotate-6 transition-transform z-20 [&_svg]:w-4 [&_svg]:h-4 sm:[&_svg]:w-6 sm:[&_svg]:h-6 md:[&_svg]:w-8 md:[&_svg]:h-8">
                  {region.icon}
                </div>

                <div className="relative">
                  <h3 className="text-lg sm:text-xl md:text-3xl font-black text-secondary uppercase tracking-tighter mb-2 md:mb-4 leading-none">
                    {region.nameFull || region.name}
                  </h3>
                  <div className="h-0.5 w-8 md:h-1 md:w-12 bg-primary mb-3 md:mb-6 rounded-full" />
                  <p className="text-slate-600 font-medium leading-relaxed text-xs sm:text-sm md:text-base">
                    {region.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full List */}
      <section className="py-16 md:py-24 bg-secondary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none overflow-hidden">
             <div className="text-[30vw] font-black text-outline -rotate-12 translate-y-1/2">AREAS</div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16">
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
