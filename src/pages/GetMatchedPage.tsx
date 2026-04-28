import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Check, BookOpen, UserPlus, HelpCircle, GraduationCap, Car, Calendar, Clock, MapPin, Send } from 'lucide-react';

type FormData = {
  intent: string;
  experience: string;
  transmission: string;
  lessonType: string;
  postcode: string;
  availability: string[];
  startTiming: string;
  firstName: string;
  phone: string;
  email: string;
};

const STEPS_COUNT = 4;

export default function GetMatchedPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    intent: '',
    experience: '',
    transmission: '',
    lessonType: '',
    postcode: '',
    availability: [],
    startTiming: '',
    firstName: '',
    phone: '',
    email: '',
  });

  const nextStep = () => {
    setStep((s) => Math.min(s + 1, STEPS_COUNT));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelect = (field: keyof FormData, value: string | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const toggleMultiSelect = (field: 'availability', value: string) => {
    setFormData((prev) => {
      const current = prev[field] as string[];
      const next = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [field]: next };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const renderProgress = () => (
    <div className="mb-8">
      <div className="flex gap-2 mb-4">
        {[1, 2, 3, 4].map((s) => (
          <div
            key={s}
            className={`h-3 flex-1 rounded-full transition-all duration-500 ${
              s < step ? 'bg-primary' : s === step ? 'bg-secondary' : 'bg-secondary/10'
            }`}
          />
        ))}
      </div>
      <p className="text-secondary font-black uppercase tracking-widest text-xs">Step {step} of 4</p>
    </div>
  );

  const tileClass = (isSelected: boolean) => `
    relative p-6 rounded-3xl border-4 transition-all duration-300 text-left group cursor-pointer
    ${isSelected 
      ? 'border-secondary bg-primary shadow-[10px_10px_0_rgba(45,52,54,1)]' 
      : 'border-secondary/10 bg-white hover:border-primary/50'
    }
  `;

  if (isSubmitted) {
    return (
      <div className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-4 md:px-6 min-h-screen flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="vibrant-card max-w-2xl w-full p-8 sm:p-12 text-center"
        >
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <Check className="w-8 h-8 sm:w-10 sm:h-10 text-secondary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-secondary uppercase tracking-tighter mb-6">WE'VE GOT YOUR DETAILS!</h2>
          <p className="text-secondary/70 text-lg sm:text-xl font-medium">
            We'll be in touch very soon.
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-24 sm:pt-32 pb-12 sm:pb-24 px-4 md:px-6 min-h-screen flex items-center justify-center bg-bg-page">
      <div className="max-w-3xl w-full">
        {renderProgress()}

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tight mb-4 text-balance">What are you looking for?</h2>
                <p className="text-secondary/60 font-medium">Choose an option below to start your journey.</p>
              </div>

              <div className="grid gap-4">
                {[
                  { id: 'lessons', title: 'Book lessons', sub: 'Regular or intensive', icon: BookOpen },
                  { id: 'match', title: 'Get matched with an instructor', sub: "We'll find the right fit for you", icon: UserPlus },
                  { id: 'decide', title: 'Not sure yet — help me decide', sub: "Our team will guide you", icon: HelpCircle },
                ].map((option) => (
                  <div
                    key={option.id}
                    onClick={() => handleSelect('intent', option.id)}
                    className={tileClass(formData.intent === option.id)}
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg transition-colors ${formData.intent === option.id ? 'bg-secondary text-primary' : 'bg-slate-50 text-secondary'}`}>
                        <option.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-black text-xl text-secondary uppercase tracking-tighter">{option.title}</h3>
                        <p className="text-secondary/60 text-sm font-bold uppercase tracking-widest">{option.sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-end gap-4 pt-4">
                <button
                  disabled={!formData.intent}
                  onClick={nextStep}
                  className="w-full sm:w-auto px-12 py-5 bg-secondary text-white font-black uppercase tracking-widest rounded-3xl shadow-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tight mb-4 text-balance">Tell us about yourself</h2>
                <p className="text-secondary/60 font-medium">This helps us tailor your experience.</p>
              </div>

              <div className="space-y-12">
                {/* Experience Level */}
                <div className="space-y-4">
                  <span className="text-secondary/40 font-black uppercase tracking-[0.2em] text-[10px]">Experience Level</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['Beginner', 'Some experience', 'Refresher'].map((v) => (
                      <div
                        key={v}
                        onClick={() => handleSelect('experience', v)}
                        className={tileClass(formData.experience === v)}
                      >
                        <h4 className="font-black text-sm uppercase tracking-widest">{v}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Transmission */}
                <div className="space-y-4">
                  <span className="text-secondary/40 font-black uppercase tracking-[0.2em] text-[10px]">Transmission</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['Manual', 'Automatic', 'No preference'].map((v) => (
                      <div
                        key={v}
                        onClick={() => handleSelect('transmission', v)}
                        className={tileClass(formData.transmission === v)}
                      >
                        <h4 className="font-black text-sm uppercase tracking-widest">{v}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lesson Type */}
                <div className="space-y-4">
                  <span className="text-secondary/40 font-black uppercase tracking-[0.2em] text-[10px]">Lesson Type</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['Weekly lessons', 'Intensive course', 'Not sure yet'].map((v) => (
                      <div
                        key={v}
                        onClick={() => handleSelect('lessonType', v)}
                        className={tileClass(formData.lessonType === v)}
                      >
                        <h4 className="font-black text-sm uppercase tracking-widest">{v}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 pt-8 border-t border-secondary/5">
                <button
                  onClick={prevStep}
                  className="w-full sm:w-auto px-8 py-5 border-4 border-secondary/10 bg-white text-secondary font-black uppercase tracking-widest rounded-3xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back
                </button>
                <button
                  disabled={!formData.experience || !formData.transmission || !formData.lessonType}
                  onClick={nextStep}
                  className="w-full sm:w-auto px-12 py-5 bg-secondary text-white font-black uppercase tracking-widest rounded-3xl shadow-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tight mb-4 text-balance">Practical details</h2>
                <p className="text-secondary/60 font-medium">Where and when should we start?</p>
              </div>

              <div className="space-y-12">
                {/* Postcode */}
                <div className="space-y-4">
                  <span className="text-secondary/40 font-black uppercase tracking-[0.2em] text-[10px]">Postcode</span>
                  <div className="relative">
                    <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary/30 w-6 h-6" />
                    <input
                      type="text"
                      placeholder="e.g. M1 1AA"
                      value={formData.postcode}
                      onChange={(e) => handleSelect('postcode', e.target.value)}
                      className="w-full bg-white border-4 border-secondary/5 focus:border-primary rounded-3xl px-16 py-6 font-bold text-secondary outline-none transition-all placeholder:text-secondary/20"
                    />
                  </div>
                </div>

                {/* Availability */}
                <div className="space-y-4">
                  <span className="text-secondary/40 font-black uppercase tracking-[0.2em] text-[10px]">Availability (Select multiple)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {['Weekday mornings', 'Weekday afternoons', 'Evenings', 'Weekends', 'Flexible'].map((v) => (
                      <div
                        key={v}
                        onClick={() => toggleMultiSelect('availability', v)}
                        className={tileClass(formData.availability.includes(v))}
                      >
                        <h4 className="font-black text-sm uppercase tracking-widest">{v}</h4>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Start Timing */}
                <div className="space-y-4">
                  <span className="text-secondary/40 font-black uppercase tracking-[0.2em] text-[10px]">How soon do you want to start?</span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {['ASAP', 'Within a month', 'Just exploring'].map((v) => (
                      <div
                        key={v}
                        onClick={() => handleSelect('startTiming', v)}
                        className={tileClass(formData.startTiming === v)}
                      >
                        <h4 className="font-black text-sm uppercase tracking-widest">{v}</h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 pt-8 border-t border-secondary/5">
                <button
                  onClick={prevStep}
                  className="w-full sm:w-auto px-8 py-5 border-4 border-secondary/10 bg-white text-secondary font-black uppercase tracking-widest rounded-3xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back
                </button>
                <button
                  disabled={!formData.postcode || !formData.startTiming || formData.availability.length === 0}
                  onClick={nextStep}
                  className="w-full sm:w-auto px-12 py-5 bg-secondary text-white font-black uppercase tracking-widest rounded-3xl shadow-lg hover:bg-secondary/90 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  Continue <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl md:text-5xl font-black text-secondary uppercase tracking-tight mb-4 text-balance">Contact details</h2>
                <p className="text-secondary/60 font-medium">How should we reach you?</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-secondary/40 font-black uppercase tracking-[0.2em] text-[10px]">First Name</label>
                  <input
                    required
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleSelect('firstName', e.target.value)}
                    className="w-full bg-white border-4 border-secondary/5 focus:border-primary rounded-[2rem] px-8 py-5 font-bold text-secondary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-secondary/40 font-black uppercase tracking-[0.2em] text-[10px]">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleSelect('phone', e.target.value)}
                    className="w-full bg-white border-4 border-secondary/5 focus:border-primary rounded-[2rem] px-8 py-5 font-bold text-secondary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-secondary/40 font-black uppercase tracking-[0.2em] text-[10px]">Email Address</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleSelect('email', e.target.value)}
                    className="w-full bg-white border-4 border-secondary/5 focus:border-primary rounded-[2rem] px-8 py-5 font-bold text-secondary outline-none transition-all"
                  />
                </div>

                <div className="flex flex-col-reverse sm:flex-row justify-between gap-4 pt-12 border-t border-secondary/5">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-full sm:w-auto px-8 py-5 border-4 border-secondary/10 bg-white text-secondary font-black uppercase tracking-widest rounded-3xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3 group"
                  >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" /> Back
                  </button>
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-5 bg-primary text-secondary font-black uppercase tracking-widest rounded-3xl shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-3 group"
                  >
                    Find My Instructor <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
