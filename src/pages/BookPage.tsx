import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Phone } from 'lucide-react';

/**
 * BookPage — single-purpose lead capture form.
 *
 * Kept to 4 fields because every extra field reduces completion ~10%.
 * On submit we move to a success state telling the user what happens
 * next (managing expectations is part of conversion).
 *
 * No backend yet — wire this up to a webhook / form service / API as
 * soon as one is ready. Until then, the submit handler logs to console
 * so you can verify the data shape.
 */

type Urgency = 'asap' | 'this-month' | 'just-exploring';

interface FormData {
  firstName: string;
  phone: string;
  postcode: string;
  urgency: Urgency;
}

const URGENCY_OPTIONS: { value: Urgency; label: string; sub: string }[] = [
  { value: 'asap', label: 'ASAP', sub: 'I want to start this week' },
  { value: 'this-month', label: 'This month', sub: 'Within the next few weeks' },
  { value: 'just-exploring', label: 'Just exploring', sub: 'No rush, gathering info' },
];

export default function BookPage() {
  const [data, setData] = useState<FormData>({
    firstName: '',
    phone: '',
    postcode: '',
    urgency: 'asap',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // TODO: replace with real endpoint. For now, log the lead so it's
    // easy to verify the form works end-to-end.
    // eslint-disable-next-line no-console
    console.log('Lead submitted:', data);

    // Fake latency so the user sees the loading state
    await new Promise((r) => setTimeout(r, 600));

    setSubmitting(false);
    setSubmitted(true);
  };

  const canSubmit =
    data.firstName.trim().length >= 2 &&
    data.phone.trim().length >= 7 &&
    data.postcode.trim().length >= 2;

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
              key="form"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Header */}
              <span className="text-primary font-black uppercase tracking-[0.4em] text-xs block mb-4">
                Book your spot
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-4">
                Get matched.{' '}
                <span className="text-primary italic">Get driving.</span>
              </h1>
              <p className="text-slate-500 text-base md:text-lg font-medium mb-10 leading-relaxed">
                One short form. A real human calls you within 24 hours with
                your matched instructor.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First name */}
                <label className="block">
                  <span className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">
                    Your first name
                  </span>
                  <input
                    type="text"
                    required
                    autoComplete="given-name"
                    value={data.firstName}
                    onChange={(e) =>
                      setData({ ...data, firstName: e.target.value })
                    }
                    placeholder="e.g. Sarah"
                    className="w-full px-5 py-4 bg-white border-4 border-secondary rounded-2xl font-bold text-secondary placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:border-primary text-base"
                  />
                </label>

                {/* Phone */}
                <label className="block">
                  <span className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">
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
                    placeholder="07700 900 000"
                    className="w-full px-5 py-4 bg-white border-4 border-secondary rounded-2xl font-bold text-secondary placeholder:text-slate-400 placeholder:font-medium focus:outline-none focus:border-primary text-base"
                  />
                  <span className="block text-[11px] font-bold text-secondary/50 mt-2">
                    We&apos;ll only call you about your lessons.
                  </span>
                </label>

                {/* Postcode */}
                <label className="block">
                  <span className="block text-xs font-black uppercase tracking-widest text-secondary mb-2">
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
                    placeholder="M14 5RT"
                    className="w-full px-5 py-4 bg-white border-4 border-secondary rounded-2xl font-black uppercase tracking-widest text-secondary placeholder:text-slate-400 placeholder:font-medium placeholder:normal-case placeholder:tracking-normal focus:outline-none focus:border-primary text-base"
                  />
                </label>

                {/* Urgency — radio group as buttons */}
                <fieldset>
                  <legend className="block text-xs font-black uppercase tracking-widest text-secondary mb-3">
                    When do you want to start?
                  </legend>
                  <div className="space-y-2">
                    {URGENCY_OPTIONS.map((opt) => {
                      const selected = data.urgency === opt.value;
                      return (
                        <label
                          key={opt.value}
                          className={`flex items-start gap-3 px-5 py-4 rounded-2xl border-4 cursor-pointer transition-all ${
                            selected
                              ? 'border-primary bg-primary/10'
                              : 'border-secondary bg-white hover:bg-slate-50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="urgency"
                            value={opt.value}
                            checked={selected}
                            onChange={() =>
                              setData({ ...data, urgency: opt.value })
                            }
                            className="sr-only"
                          />
                          <span
                            className={`mt-1 w-5 h-5 rounded-full border-2 border-secondary shrink-0 flex items-center justify-center ${
                              selected ? 'bg-primary' : 'bg-white'
                            }`}
                            aria-hidden="true"
                          >
                            {selected && (
                              <span className="w-2 h-2 rounded-full bg-secondary" />
                            )}
                          </span>
                          <span className="flex-1">
                            <span className="block font-black text-secondary uppercase tracking-tight text-sm">
                              {opt.label}
                            </span>
                            <span className="block text-secondary/60 text-xs font-bold mt-0.5">
                              {opt.sub}
                            </span>
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className="w-full py-5 bg-primary text-secondary font-black uppercase tracking-widest rounded-full border-4 border-secondary text-base md:text-lg shadow-[6px_6px_0_var(--color-secondary)] hover:-translate-y-0.5 hover:shadow-[4px_4px_0_var(--color-secondary)] active:translate-y-0 active:shadow-[2px_2px_0_var(--color-secondary)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:-translate-y-0 disabled:hover:shadow-[6px_6px_0_var(--color-secondary)] transition-all duration-200"
                >
                  {submitting ? 'Sending…' : 'Get matched'}
                </button>

                <p className="text-center text-[11px] font-bold text-secondary/50 leading-relaxed">
                  By tapping above you agree we can call/text you about your
                  lesson booking. No spam, ever.
                </p>
              </form>
            </motion.div>
          ) : (
            // ── Success state ────────────────────────────────────────
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
                <span className="text-secondary font-black">within 24 hours</span>{' '}
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
