import { motion } from 'motion/react';
import { Zap, Wallet, Star, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const items = [
    { icon: <Zap className="w-5 h-5" />, text: "Pass Fast" },
    { icon: <Wallet className="w-5 h-5" />, text: "Small Deposit" },
    { icon: <Star className="w-5 h-5" />, text: "Top Rated" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "DVSA Approved" },
  ];

  return (
    <div className="bg-secondary py-8 overflow-hidden relative border-y-4 border-primary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 md:p-16 justify-items-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center space-x-3 text-white/80 group cursor-default"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:scale-110 group-hover:rotate-6 transition-transform">
                {item.icon}
              </div>
              <span className="font-black uppercase tracking-widest text-xs md:text-sm">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
