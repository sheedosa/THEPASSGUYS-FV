import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Check, BookOpen, UserPlus, HelpCircle, MapPin } from 'lucide-react';
import SEO from '../components/SEO';

const EASE = [0.22, 1, 0.36, 1] as const;
const STEPS_COUNT = 4;

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

const initialForm: FormData = {
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
};

export default function GetMatchedPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialForm);

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
      const current = prev[field];
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

  /* ── Success state ───────────────────────────────────────────────────── */
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-bg-page pt-28 sm:pt-36 pb-24 px-6 flex items-center justify-center">
        <SEO
          title="Get matched | The Pass Guys"
          description="Get matched with a local DVSA-approved driving instructor in Greater Manchester."
          canonical="https://thepassguys.co.uk/get-matched"
        />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, ease: EASE }}
          className="max-w-2xl w-full text-center"
        >
          <div className="inline-flex w-16 h-16 rounded-full bg-primary text-secondary items-center justify-center mx-auto mb-8 shadow-sm">
            <Check className="w-7 h-7" strokeWidth={3} />
          </div>
          <div className="flex items-center justify-center gap-4 mb-8 text-secondary/80">
            <span className="inline-block w-10 h-px bg-secondary/25" aria-hidden="true" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.32em]">All set</span>
            <span className="inline-block w-10 h-px bg-secondary/25" aria-hidden="true" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display text-secondary tracking-[0.02em] leading-[0.92] mb-6">
            WE'VE GOT YOUR <br />
            <span className="text-primary">DETAILS, {(formData.firstName || 'FRIEND').toUpperCase()}.</span>
          </h1>
          <p className="text-secondary text-base md:text-lg leading-relaxed max-w-md mx-auto">
            One of the team will be in touch within 24 hours with your matched instructor.
          </p>
        </motion.div>
      </div>
    );
  }

  /* ── Form ────────────────────────────────────────────────────────────── */
  return (
    <div className="min-h-screen bg-bg-page pt-28 sm:pt-36 pb-24 px-6">
      <SEO
        title="Get matched | The Pass Guys"
        description="Get matched with a local DVSA-approved driving instructor in Greater Manchester."
        canonical="https://thepassguys.co.uk/get-matched"
      />

      <div className="max-w-3xl mx-auto">
        {/* ── Pricing context ──────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-3 mb-5">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-secondary text-[11px] font-accent font-semibold uppercase tracking-[0.15em]">
            From £35/hr · No commitment
          </span>
        </div>

        {/* ── Eyebrow ─────────────────────────────────────────────────── */}
        <div className="flex items-center justify-center gap-4 mb-8 text-secondary/80">
          <span className="inline-block w-10 h-px bg-secondary/25" aria-hidden="true" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.32em]">
            {String(step).padStart(2, '0')} <span className="mx-1.5 opacity-50">—</span> Step {step} of {STEPS_COUNT}
          </span>
          <span className="inline-block w-10 h-px bg-secondary/25" aria-hidden="true" />
        </div>

        {/* ── Progress bar ────────────────────────────────────────────── */}
        <div className="flex gap-1.5 mb-12 md:mb-16">
          {[1, 2, 3, 4].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors duration-500 ${
                s <= step ? 'bg-primary' : 'bg-secondary/10'
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {/* ── Step 1 ─────────────────────────────────────────────── */}
          {step === 1 && (
            <Step key="step1">
              <StepHeading
                title="What are you"
                accent="looking for?"
                sub="Choose an option below to start your journey."
              />

              <div className="space-y-3">
                {[
                  { id: 'lessons', title: 'Book lessons', sub: 'Regular or intensive', icon: BookOpen },
                  { id: 'match', title: 'Get matched with an instructor', sub: "We'll find the right fit for you", icon: UserPlus },
                  { id: 'decide', title: "Not sure yet. Help me decide.", sub: 'Our team will guide you', icon: HelpCircle },
                ].map((option) => {
                  const selected = formData.intent === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      onClick={() => handleSelect('intent', option.id)}
                      className={`w-full text-left p-5 md:p-6 rounded-2xl border transition-all duration-300 group ${
                        selected
                          ? 'border-primary bg-primary/10'
                          : 'border-secondary/10 bg-bg-page hover:border-secondary/20 hover:bg-white/40'
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        <div className={`shrink-0 transition-colors ${selected ? 'text-primary' : 'text-secondary/80'}`}>
                          <option.icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-display text-secondary tracking-[0.01em]">
                            {option.title}
                          </h3>
                          <p className="text-secondary text-sm mt-0.5">{option.sub}</p>
                        </div>
                        <div className={`shrink-0 w-5 h-5 rounded-full border transition-all flex items-center justify-center ${
                          selected ? 'border-primary bg-primary' : 'border-secondary/20'
                        }`}>
                          {selected && <Check className="w-3 h-3 text-secondary" strokeWidth={3} />}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <Nav
                onNext={nextStep}
                nextDisabled={!formData.intent}
              />
            </Step>
          )}

          {/* ── Step 2 ─────────────────────────────────────────────── */}
          {step === 2 && (
            <Step key="step2">
              <StepHeading
                title="Tell us"
                accent="about you."
                sub="This helps us tailor your match."
              />

              <ChoiceGroup
                label="Experience level"
                options={['Beginner', 'Some experience', 'Refresher']}
                value={formData.experience}
                onChange={(v) => handleSelect('experience', v)}
              />

              <ChoiceGroup
                label="Transmission"
                options={['Manual', 'Automatic', 'No preference']}
                value={formData.transmission}
                onChange={(v) => handleSelect('transmission', v)}
              />

              <ChoiceGroup
                label="Lesson type"
                options={['Weekly lessons', 'Intensive course', 'Not sure yet']}
                value={formData.lessonType}
                onChange={(v) => handleSelect('lessonType', v)}
              />

              <Nav
                onBack={prevStep}
                onNext={nextStep}
                nextDisabled={!formData.experience || !formData.transmission || !formData.lessonType}
              />
            </Step>
          )}

          {/* ── Step 3 ─────────────────────────────────────────────── */}
          {step === 3 && (
            <Step key="step3">
              <StepHeading
                title="Practical"
                accent="details."
                sub="Where and when should we start?"
              />

              {/* Postcode */}
              <div>
                <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/80 mb-3">
                  Postcode
                </span>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary w-4 h-4" />
                  <input
                    type="text"
                    placeholder="e.g. M1 1AA"
                    value={formData.postcode}
                    onChange={(e) => handleSelect('postcode', e.target.value)}
                    autoComplete="postal-code"
                    autoCapitalize="characters"
                    inputMode="text"
                    aria-label="Postcode"
                    className="w-full bg-white border border-secondary/15 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl pl-11 pr-4 py-3.5 text-secondary placeholder:text-secondary/50 outline-none transition-all"
                  />
                </div>
              </div>

              <ChoiceGroup
                label="Availability (select all that apply)"
                options={['Weekday mornings', 'Weekday afternoons', 'Evenings', 'Weekends', 'Flexible']}
                value={formData.availability}
                onChange={(v) => toggleMultiSelect('availability', v as string)}
                multi
                columns={3}
              />

              <ChoiceGroup
                label="How soon do you want to start?"
                options={['ASAP', 'Within a month', 'Just exploring']}
                value={formData.startTiming}
                onChange={(v) => handleSelect('startTiming', v)}
              />

              <Nav
                onBack={prevStep}
                onNext={nextStep}
                nextDisabled={!formData.postcode || !formData.startTiming || formData.availability.length === 0}
              />
            </Step>
          )}

          {/* ── Step 4 ─────────────────────────────────────────────── */}
          {step === 4 && (
            <Step key="step4">
              <StepHeading
                title="Contact"
                accent="details."
                sub="How should we reach you with your match?"
              />

              <form onSubmit={handleSubmit} className="space-y-5">
                <FieldInput
                  label="First name"
                  type="text"
                  value={formData.firstName}
                  onChange={(v) => handleSelect('firstName', v)}
                />
                <FieldInput
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(v) => handleSelect('phone', v)}
                />
                <FieldInput
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(v) => handleSelect('email', v)}
                />

                <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-8 mt-2 border-t border-secondary/10">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm border border-secondary/20 text-secondary text-sm font-accent font-semibold uppercase tracking-[0.08em] hover:bg-secondary/5 transition-colors duration-300"
                  >
                    <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    Back
                  </button>
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm bg-primary text-secondary text-sm font-accent font-bold uppercase tracking-[0.08em] hover:brightness-105 hover:scale-[1.02] transition-all duration-300 shadow-sm"
                  >
                    Find My Instructor
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
                <p className="text-center text-secondary/80 text-xs sm:text-sm tracking-wide pt-2">
                  Free · 2 minutes · No commitment
                </p>
                <p className="text-center text-secondary/60 text-[11px] leading-relaxed pt-3 max-w-sm mx-auto">
                  By submitting, you agree to our <a href="/privacy" className="underline hover:text-primary transition-colors">privacy policy</a>. We only use your details to match you with an instructor.
                </p>
              </form>
            </Step>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
 * Form primitives
 * ───────────────────────────────────────────────────────────────────────── */

function Step({ children, ...rest }: { children: React.ReactNode } & React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -16 }}
      transition={{ duration: 0.6, ease: EASE }}
      className="space-y-10"
    >
      {children}
    </motion.div>
  );
}

function StepHeading({ title, accent, sub }: { title: string; accent: string; sub: string }) {
  return (
    <div>
      <h2 className="leading-[0.95] tracking-tighter">
        <span className="block text-3xl sm:text-4xl md:text-5xl font-display text-secondary/70 tracking-[0.02em] uppercase">
          {title}
        </span>
        <span className="block text-4xl sm:text-5xl md:text-6xl font-display text-primary tracking-[0.02em] uppercase mt-1">
          {accent}
        </span>
      </h2>
      <p className="mt-4 text-secondary text-base md:text-lg leading-relaxed max-w-md">
        {sub}
      </p>
    </div>
  );
}

function ChoiceGroup({
  label,
  options,
  value,
  onChange,
  multi = false,
  columns = 2,
}: {
  label: string;
  options: string[];
  value: string | string[];
  onChange: (v: string) => void;
  multi?: boolean;
  columns?: 2 | 3;
}) {
  const isSelected = (v: string) =>
    multi ? (Array.isArray(value) && value.includes(v)) : value === v;
  return (
    <div>
      <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/80 mb-3">
        {label}
      </span>
      <div className={`grid gap-2.5 grid-cols-1 ${columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-3'}`}>
        {options.map((o) => {
          const selected = isSelected(o);
          return (
            <button
              key={o}
              type="button"
              onClick={() => onChange(o)}
              className={`text-sm px-4 py-3.5 rounded-xl border transition-all duration-300 ${
                selected
                  ? 'border-primary bg-primary text-secondary font-semibold'
                  : 'border-secondary/15 bg-white text-secondary/75 hover:border-secondary/30 hover:text-secondary font-medium'
              }`}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function FieldInput({
  label,
  type,
  value,
  onChange,
}: {
  label: string;
  type: string;
  value: string;
  onChange: (v: string) => void;
}) {
  // Derive sensible mobile keyboard + autofill defaults from the input type.
  const autoComplete =
    type === 'email'
      ? 'email'
      : type === 'tel'
        ? 'tel'
        : label.toLowerCase().includes('first')
          ? 'given-name'
          : label.toLowerCase().includes('last')
            ? 'family-name'
            : label.toLowerCase().includes('name')
              ? 'name'
              : undefined;
  const inputMode =
    type === 'email' ? 'email' : type === 'tel' ? 'tel' : undefined;

  return (
    <label className="block">
      <span className="block text-[10px] font-semibold uppercase tracking-[0.32em] text-secondary/80 mb-2">
        {label}
      </span>
      <input
        required
        type={type}
        value={value}
        autoComplete={autoComplete}
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-white border border-secondary/15 focus:border-primary focus:ring-2 focus:ring-primary/20 rounded-xl px-4 py-3.5 text-secondary outline-none transition-all"
      />
    </label>
  );
}

function Nav({
  onBack,
  onNext,
  nextDisabled,
}: {
  onBack?: () => void;
  onNext: () => void;
  nextDisabled?: boolean;
}) {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-between gap-3 pt-6 mt-2 border-t border-secondary/10">
      {onBack ? (
        <button
          type="button"
          onClick={onBack}
          className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-sm border border-secondary/20 text-secondary text-sm font-accent font-semibold uppercase tracking-[0.08em] hover:bg-secondary/5 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back
        </button>
      ) : <span />}
      <button
        type="button"
        onClick={onNext}
        disabled={nextDisabled}
        className="group inline-flex items-center justify-center gap-2 px-7 py-3 rounded-sm bg-primary text-secondary text-sm font-accent font-bold uppercase tracking-[0.08em] hover:brightness-105 hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-300 shadow-sm"
      >
        Continue
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
      </button>
    </div>
  );
}
