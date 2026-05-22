import { useState, useRef, useEffect, type FormEvent, type KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  User,
  Cog,
  GraduationCap,
  Clock,
  MapPin,
  Mail,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Transmission = 'manual' | 'automatic';
type Experience = 'beginner' | 'some-lessons' | 'refresher';
type Urgency = 'asap' | 'this-month' | 'just-exploring';

interface FormData {
  firstName: string;
  transmission: Transmission | null;
  experience: Experience | null;
  urgency: Urgency | null;
  email: string;
  phone: string;
  postcode: string;
}

const TOTAL_STEPS = 5;

/* ------------------------------------------------------------------ */
/*  Validation helpers                                                 */
/* ------------------------------------------------------------------ */

/** At least 2 alpha characters */
const isValidName = (v: string) => v.trim().length >= 2;

/** Standard email regex */
const isValidEmail = (v: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

/**
 * UK phone: 07xxx, 01xxx, 02xxx, 03xxx, or +44 prefix.
 * Strips spaces/dashes, then checks 10-13 digit range.
 */
const isValidUKPhone = (v: string) => {
  const stripped = v.replace(/[\s\-()]+/g, '');
  if (/^\+44/.test(stripped)) {
    return /^\+44\d{9,11}$/.test(stripped);
  }
  return /^0[1-37]\d{8,10}$/.test(stripped);
};

/**
 * UK postcode: e.g. M1 1AA, M14 5RT, SW1A 1AA, EC1A 1BB
 * Allows with or without space.
 */
const isValidUKPostcode = (v: string) =>
  /^[A-Z]{1,2}\d[A-Z\d]?\s?\d[A-Z]{2}$/i.test(v.trim());

/* ------------------------------------------------------------------ */
/*  Custom SVG icons for Manual / Automatic                            */
/* ------------------------------------------------------------------ */

/** Classic H-pattern gearshift icon */
function ManualIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* H-pattern lines */}
      <line x1="16" y1="14" x2="16" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="32" y1="14" x2="32" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="48" y1="14" x2="48" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="16" y1="32" x2="32" y2="32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <line x1="32" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      {/* Gear dots */}
      <circle cx="16" cy="14" r="4" fill="currentColor" />
      <circle cx="16" cy="50" r="4" fill="currentColor" />
      <circle cx="32" cy="14" r="4" fill="currentColor" />
      <circle cx="32" cy="50" r="4" fill="currentColor" />
      <circle cx="48" cy="14" r="4" fill="currentColor" />
      <circle cx="48" cy="50" r="4" fill="currentColor" />
    </svg>
  );
}

/** Automatic drive selector icon (P R N D) */
function AutoIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Vertical selector rail */}
      <rect x="10" y="6" width="44" height="52" rx="8" stroke="currentColor" strokeWidth="3.5" />
      {/* Mode labels */}
      <text x="32" y="20" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="900" fontFamily="system-ui">P</text>
      <text x="32" y="32" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="900" fontFamily="system-ui">R</text>
      <text x="32" y="44" textAnchor="middle" fill="currentColor" fontSize="10" fontWeight="900" fontFamily="system-ui">N</text>
      {/* D is highlighted */}
      <rect x="16" y="48" width="32" height="2" rx="1" fill="currentColor" opacity="0.3" />
      <text x="32" y="56" textAnchor="middle" fill="currentColor" fontSize="11" fontWeight="900" fontFamily="system-ui">D</text>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Option data                                                        */
/* ------------------------------------------------------------------ */

const TRANSMISSION_OPTIONS: {
  value: Transmission;
  label: string;
  sub: string;
  Icon: typeof ManualIcon;
}[] = [
  {
    value: 'manual',
    label: 'Manual',
    sub: 'Learn with a gearstick',
    Icon: ManualIcon,
  },
  {
    value: 'automatic',
    label: 'Automatic',
    sub: 'No clutch, easier to learn',
    Icon: AutoIcon,
  },
];

const EXPERIENCE_OPTIONS: {
  value: Experience;
  label: string;
  sub: string;
}[] = [
  {
    value: 'beginner',
    label: 'Complete beginner',
    sub: "Never had a lesson before",
  },
  {
    value: 'some-lessons',
    label: 'Had some lessons',
    sub: 'Some experience but not test-ready',
  },
  {
    value: 'refresher',
    label: 'Refresher',
    sub: 'I have a licence, just need a brush-up',
  },
];

const URGENCY_OPTIONS: { value: Urgency; label: string; sub: string }[] = [
  { value: 'asap', label: 'ASAP', sub: 'I want to start this week' },
  {
    value: 'this-month',
    label: 'This month',
    sub: 'Within the next few weeks',
  },
  {
    value: 'just-exploring',
    label: 'Just exploring',
    sub: 'No rush, gathering info',
  },
];

/* ------------------------------------------------------------------ */
/*  Slide animation helpers                                            */
/* ------------------------------------------------------------------ */

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: 'relative' as const,
    top: 'auto',
    left: 'auto',
    right: 'auto',
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
  }),
};

const slideTransition = {
  x: { type: 'spring' as const, stiffness: 400, damping: 35 },
  opacity: { duration: 0.15 },
  position: { duration: 0 },
  top: { duration: 0 },
  left: { duration: 0 },
  right: { duration: 0 },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function BookPage() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [data, setData] = useState<FormData>({
    firstName: '',
    transmission: null,
    experience: null,
    urgency: null,
    email: '',
    phone: '',
    postcode: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  /* Auto-focus text inputs when their step appears */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (step === 1) nameRef.current?.focus();
      if (step === 5) emailRef.current?.focus();
    }, 350);
    return () => clearTimeout(timer);
  }, [step]);

  /* ---- Navigation ---- */
  const goNext = () => {
    setDirection(1);
    setStep((s) => Math.min(s + 1, TOTAL_STEPS));
  };
  const goBack = () => {
    setDirection(-1);
    setStep((s) => Math.max(s - 1, 1));
  };

  /* ---- Validation per step ---- */
  const canAdvance = (): boolean => {
    switch (step) {
      case 1:
        return isValidName(data.firstName);
      case 2:
        return data.transmission !== null;
      case 3:
        return data.experience !== null;
      case 4:
        return data.urgency !== null;
      case 5:
        return (
          isValidEmail(data.email) &&
          isValidUKPhone(data.phone) &&
          isValidUKPostcode(data.postcode)
        );
      default:
        return false;
    }
  };

  /* ---- Field-level error messages ---- */
  const getFieldError = (field: string): string | null => {
    if (!touched[field]) return null;
    switch (field) {
      case 'email':
        if (!data.email.trim()) return null;
        return isValidEmail(data.email) ? null : 'Please enter a valid email address';
      case 'phone':
        if (!data.phone.trim()) return null;
        return isValidUKPhone(data.phone) ? null : 'Please enter a valid UK phone number';
      case 'postcode':
        if (!data.postcode.trim()) return null;
        return isValidUKPostcode(data.postcode) ? null : 'Please enter a valid UK postcode';
      default:
        return null;
    }
  };

  /* ---- Submit ---- */
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // Mark all step 5 fields as touched to show errors
    setTouched({ email: true, phone: true, postcode: true });
    if (!canAdvance()) return;
    setSubmitting(true);

    // TODO: replace with Firebase Firestore write
    // eslint-disable-next-line no-console
    console.log('Lead submitted:', data);

    await new Promise((r) => setTimeout(r, 600));

    setSubmitting(false);
    setSubmitted(true);
  };

  /* ---- Handle Enter key on text steps ---- */
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && canAdvance() && step < TOTAL_STEPS) {
      e.preventDefault();
      goNext();
    }
  };

  /* ---- Auto-advance on card selection (steps 2-4) ---- */
  const selectAndAdvance = <K extends keyof FormData>(
    key: K,
    value: FormData[K],
  ) => {
    setData((d) => ({ ...d, [key]: value }));
    setTimeout(goNext, 300);
  };

  /* ---- Mark a field as touched on blur ---- */
  const markTouched = (field: string) => {
    setTouched((t) => ({ ...t, [field]: true }));
  };

  /* ---- Progress ---- */
  const progress = ((step - 1) / (TOTAL_STEPS - 1)) * 100;

  /* ---- Shared input class ---- */
  const inputBase =
    'w-full px-5 py-4 bg-white border-4 rounded-2xl font-bold text-secondary text-lg placeholder:text-slate-400 placeholder:font-medium focus:outline-none transition-colors';
  const inputOk = 'border-secondary focus:border-primary';
  const inputErr = 'border-red-400 focus:border-red-500';

  return (
    <section className="min-h-screen py-16 md:py-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-xl">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-secondary/60 hover:text-secondary font-black uppercase tracking-widest text-xs mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form-wizard"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* ── Progress bar ───────────────────────────────────── */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-black uppercase tracking-widest text-secondary/50">
                    Step {step} of {TOTAL_STEPS}
                  </span>
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-secondary/50 hover:text-secondary transition-colors"
                    >
                      <ArrowLeft className="w-3 h-3" />
                      Back
                    </button>
                  )}
                </div>
                <div className="h-2 bg-secondary/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                </div>
              </div>

              {/* ── Step slides ────────────────────────────────────── */}
              <div className="relative overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  {/* ──────── Step 1: Name ──────── */}
                  {step === 1 && (
                    <motion.div
                      key="step-1"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={slideTransition}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <User className="w-5 h-5 text-primary" strokeWidth={2.5} />
                        </span>
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px]">
                          About you
                        </span>
                      </div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-3">
                        What&apos;s your{' '}
                        <span className="text-primary italic">first name?</span>
                      </h1>
                      <p className="text-slate-500 font-medium mb-8">
                        So we know what to call you when we ring.
                      </p>

                      <input
                        ref={nameRef}
                        type="text"
                        required
                        autoComplete="given-name"
                        value={data.firstName}
                        onChange={(e) =>
                          setData({ ...data, firstName: e.target.value })
                        }
                        onKeyDown={handleKeyDown}
                        placeholder="e.g. Sarah"
                        className={`${inputBase} ${inputOk}`}
                      />

                      <button
                        type="button"
                        onClick={goNext}
                        disabled={!canAdvance()}
                        className="mt-6 w-full py-4 bg-primary text-secondary font-black uppercase tracking-widest rounded-full border-4 border-secondary text-sm shadow-[4px_4px_0_var(--color-secondary)] hover:-translate-y-0.5 hover:shadow-[3px_3px_0_var(--color-secondary)] active:translate-y-0 active:shadow-[2px_2px_0_var(--color-secondary)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[4px_4px_0_var(--color-secondary)] transition-all duration-200 inline-flex items-center justify-center gap-2"
                      >
                        Continue
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  )}

                  {/* ──────── Step 2: Transmission ──────── */}
                  {step === 2 && (
                    <motion.div
                      key="step-2"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={slideTransition}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Cog className="w-5 h-5 text-primary" strokeWidth={2.5} />
                        </span>
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px]">
                          Lesson type
                        </span>
                      </div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-3">
                        Manual or{' '}
                        <span className="text-primary italic">Automatic?</span>
                      </h1>
                      <p className="text-slate-500 font-medium mb-8">
                        Tap one — you can always change later.
                      </p>

                      <div className="grid grid-cols-2 gap-4">
                        {TRANSMISSION_OPTIONS.map((opt) => {
                          const selected = data.transmission === opt.value;
                          const { Icon } = opt;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() =>
                                selectAndAdvance('transmission', opt.value)
                              }
                              className={`group relative flex flex-col items-center gap-3 px-5 py-8 rounded-2xl border-4 cursor-pointer transition-all text-center ${
                                selected
                                  ? 'border-primary bg-primary/10 shadow-[4px_4px_0_var(--color-primary)]'
                                  : 'border-secondary bg-white hover:bg-slate-50 shadow-[4px_4px_0_var(--color-secondary)] hover:-translate-y-0.5'
                              }`}
                            >
                              <Icon
                                className={`w-12 h-12 transition-colors ${
                                  selected ? 'text-primary' : 'text-secondary'
                                }`}
                              />
                              <span className="font-black text-secondary uppercase tracking-tight text-base">
                                {opt.label}
                              </span>
                              <span className="text-secondary/50 text-xs font-bold">
                                {opt.sub}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* ──────── Step 3: Experience ──────── */}
                  {step === 3 && (
                    <motion.div
                      key="step-3"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={slideTransition}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <GraduationCap className="w-5 h-5 text-primary" strokeWidth={2.5} />
                        </span>
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px]">
                          Your experience
                        </span>
                      </div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-3">
                        Where are you{' '}
                        <span className="text-primary italic">starting?</span>
                      </h1>
                      <p className="text-slate-500 font-medium mb-8">
                        This helps us match you with the right instructor.
                      </p>

                      <div className="space-y-3">
                        {EXPERIENCE_OPTIONS.map((opt) => {
                          const selected = data.experience === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() =>
                                selectAndAdvance('experience', opt.value)
                              }
                              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border-4 cursor-pointer transition-all text-left ${
                                selected
                                  ? 'border-primary bg-primary/10'
                                  : 'border-secondary bg-white hover:bg-slate-50 hover:-translate-y-0.5'
                              }`}
                            >
                              <span
                                className={`w-5 h-5 rounded-full border-2 border-secondary shrink-0 flex items-center justify-center transition-colors ${
                                  selected ? 'bg-primary' : 'bg-white'
                                }`}
                              >
                                {selected && (
                                  <span className="w-2 h-2 rounded-full bg-secondary" />
                                )}
                              </span>
                              <span className="flex-1">
                                <span className="block font-black text-secondary uppercase tracking-tight text-sm">
                                  {opt.label}
                                </span>
                                <span className="block text-secondary/50 text-xs font-bold mt-0.5">
                                  {opt.sub}
                                </span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* ──────── Step 4: Urgency ──────── */}
                  {step === 4 && (
                    <motion.div
                      key="step-4"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={slideTransition}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Clock className="w-5 h-5 text-primary" strokeWidth={2.5} />
                        </span>
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px]">
                          Timing
                        </span>
                      </div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-3">
                        When do you want{' '}
                        <span className="text-primary italic">to start?</span>
                      </h1>
                      <p className="text-slate-500 font-medium mb-8">
                        No commitment — just helps us prioritise.
                      </p>

                      <div className="space-y-3">
                        {URGENCY_OPTIONS.map((opt) => {
                          const selected = data.urgency === opt.value;
                          return (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() =>
                                selectAndAdvance('urgency', opt.value)
                              }
                              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl border-4 cursor-pointer transition-all text-left ${
                                selected
                                  ? 'border-primary bg-primary/10'
                                  : 'border-secondary bg-white hover:bg-slate-50 hover:-translate-y-0.5'
                              }`}
                            >
                              <span
                                className={`w-5 h-5 rounded-full border-2 border-secondary shrink-0 flex items-center justify-center transition-colors ${
                                  selected ? 'bg-primary' : 'bg-white'
                                }`}
                              >
                                {selected && (
                                  <span className="w-2 h-2 rounded-full bg-secondary" />
                                )}
                              </span>
                              <span className="flex-1">
                                <span className="block font-black text-secondary uppercase tracking-tight text-sm">
                                  {opt.label}
                                </span>
                                <span className="block text-secondary/50 text-xs font-bold mt-0.5">
                                  {opt.sub}
                                </span>
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}

                  {/* ──────── Step 5: Contact details ──────── */}
                  {step === 5 && (
                    <motion.div
                      key="step-5"
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={slideTransition}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-primary" strokeWidth={2.5} />
                        </span>
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-[11px]">
                          Almost there
                        </span>
                      </div>
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-3">
                        How do we{' '}
                        <span className="text-primary italic">reach you?</span>
                      </h1>
                      <p className="text-slate-500 font-medium mb-8">
                        Last step, {data.firstName || 'mate'} — then we&apos;ll
                        match you with an instructor.
                      </p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email */}
                        <label className="block">
                          <span className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">
                            <Mail className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                            Email address
                          </span>
                          <input
                            ref={emailRef}
                            type="email"
                            required
                            autoComplete="email"
                            inputMode="email"
                            value={data.email}
                            onChange={(e) =>
                              setData({ ...data, email: e.target.value })
                            }
                            onBlur={() => markTouched('email')}
                            placeholder="sarah@example.com"
                            className={`${inputBase} ${
                              getFieldError('email') ? inputErr : inputOk
                            }`}
                          />
                          {getFieldError('email') && (
                            <span className="block text-[11px] font-bold text-red-500 mt-1.5">
                              {getFieldError('email')}
                            </span>
                          )}
                        </label>

                        {/* Phone */}
                        <label className="block">
                          <span className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">
                            <Phone className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                            Phone number
                          </span>
                          <input
                            type="tel"
                            required
                            autoComplete="tel"
                            inputMode="tel"
                            value={data.phone}
                            onChange={(e) =>
                              setData({ ...data, phone: e.target.value })
                            }
                            onBlur={() => markTouched('phone')}
                            placeholder="07700 900 000"
                            className={`${inputBase} ${
                              getFieldError('phone') ? inputErr : inputOk
                            }`}
                          />
                          {getFieldError('phone') ? (
                            <span className="block text-[11px] font-bold text-red-500 mt-1.5">
                              {getFieldError('phone')}
                            </span>
                          ) : (
                            <span className="block text-[11px] font-bold text-secondary/50 mt-1.5">
                              We&apos;ll only call you about your lessons.
                            </span>
                          )}
                        </label>

                        {/* Postcode */}
                        <label className="block">
                          <span className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">
                            <MapPin className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                            Your postcode
                          </span>
                          <input
                            type="text"
                            required
                            autoComplete="postal-code"
                            autoCapitalize="characters"
                            spellCheck={false}
                            value={data.postcode}
                            onChange={(e) =>
                              setData({ ...data, postcode: e.target.value })
                            }
                            onBlur={() => markTouched('postcode')}
                            placeholder="M14 5RT"
                            className={`${inputBase} font-black uppercase tracking-widest placeholder:normal-case placeholder:tracking-normal ${
                              getFieldError('postcode') ? inputErr : inputOk
                            }`}
                          />
                          {getFieldError('postcode') && (
                            <span className="block text-[11px] font-bold text-red-500 mt-1.5">
                              {getFieldError('postcode')}
                            </span>
                          )}
                        </label>

                        {/* Submit */}
                        <button
                          type="submit"
                          disabled={!canAdvance() || submitting}
                          className="mt-2 w-full py-5 bg-primary text-secondary font-black uppercase tracking-widest rounded-full border-4 border-secondary text-base md:text-lg shadow-[6px_6px_0_var(--color-secondary)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-secondary)] active:translate-y-0 active:shadow-[2px_2px_0_var(--color-secondary)] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-[6px_6px_0_var(--color-secondary)] transition-all duration-200"
                        >
                          {submitting ? 'Sending...' : 'Get matched'}
                        </button>

                        <p className="text-center text-[11px] font-bold text-secondary/50 leading-relaxed">
                          By tapping above you agree to our{' '}
                          <Link
                            to="/privacy"
                            className="underline hover:text-primary transition-colors"
                          >
                            Privacy Policy
                          </Link>{' '}
                          and{' '}
                          <Link
                            to="/terms"
                            className="underline hover:text-primary transition-colors"
                          >
                            Terms
                          </Link>
                          . We&apos;ll only contact you about your booking.
                        </p>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ) : (
            /* ── Success state ──────────────────────────────────── */
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 rounded-3xl bg-primary border-4 border-secondary flex items-center justify-center mx-auto mb-6 shadow-[6px_6px_0_var(--color-secondary)]">
                <CheckCircle2
                  className="w-10 h-10 text-secondary"
                  strokeWidth={2.5}
                />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-4">
                You&apos;re in,{' '}
                <span className="text-primary italic">
                  {data.firstName || 'mate'}.
                </span>
              </h1>
              <p className="text-slate-500 text-base md:text-lg font-medium mb-8 leading-relaxed max-w-md mx-auto">
                A real human from the Pass Guys team will call you{' '}
                <span className="text-secondary font-black">
                  within 24 hours
                </span>{' '}
                with an instructor matched to your area.
              </p>

              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-secondary text-white">
                <Phone className="w-4 h-4 text-primary" strokeWidth={2.5} />
                <span className="font-black uppercase tracking-widest text-xs">
                  We&apos;ll call from a Manchester number
                </span>
              </div>

              <div className="mt-12">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-secondary/60 hover:text-secondary font-black uppercase tracking-widest text-xs transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to home
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
