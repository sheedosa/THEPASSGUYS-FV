import { motion } from 'motion/react';
import { User, UserPlus, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuickAccess({ id }: { id?: string }) {
  const links = [
    {
      title: "Student Portal",
      icon: <User className="w-6 h-6" />,
      desc: "Manage your lessons & track progress.",
      color: "bg-secondary",
      text: "text-white",
      href: "#"
    },
    {
      title: "Become an Instructor",
      icon: <UserPlus className="w-6 h-6" />,
      desc: "Join the UK's fastest growing school.",
      color: "bg-primary",
      text: "text-secondary",
      href: "/instructors"
    },
    {
      title: "Learner Resources",
      icon: <BookOpen className="w-6 h-6" />,
      desc: "Study materials & mock exams.",
      color: "bg-white",
      text: "text-secondary",
      href: "/resources"
    }
  ];

  return (
    <section id={id} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {links.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[40px] border-4 border-secondary flex flex-col justify-between h-full group ${link.color} ${link.text}`}
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 border-4 border-secondary shadow-lg transform group-hover:-rotate-6 transition-transform ${link.color === 'bg-white' ? 'bg-primary' : 'bg-white text-secondary'}`}>
                  {link.icon}
                </div>
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 leading-none">{link.title}</h3>
                <p className="font-bold opacity-70 mb-8">{link.desc}</p>
              </div>
              
              <Link 
                to={link.href}
                className={`w-full py-4 text-center rounded-xl font-black uppercase tracking-widest text-xs transition-all ${
                  link.color === 'bg-secondary' ? 'bg-primary text-secondary' : 'bg-secondary text-white'
                }`}
              >
                Access Now
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
