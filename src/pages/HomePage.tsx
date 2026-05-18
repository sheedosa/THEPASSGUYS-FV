import { useRef, useEffect, useState } from 'react';
import { motion, MotionConfig } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Sparkles, ShieldCheck, Clock, Users } from 'lucide-react';
import SEO from '../components/SEO';
import ImmersiveHero from '../components/ImmersiveHero';
import SectionLabel from '../components/ui/SectionLabel';
import FinalCTA from '../components/FinalCTA';
import Pricing from '../components/Pricing';

/**
 * Homepage — immersive video hero + cinematic editorial sections.
 * Brand: Bebas Neue headlines, DM Sans body, Barlow Condensed accents.
 * Palette: Pass Yellow (#FFD500) primary, Jet Black (#0A0A0A) secondary, Light Grey (#F5F5F5) bg.
 */

/**
 * Force-autoplay a video when it enters the viewport, pause when it leaves.
 *
 * Loading strategy (priority-aware):
 *  1. Markup ships with `preload="none"` and an empty <source>, so the browser
 *     does NOT fetch these videos during initial page load — keeping bandwidth
 *     reserved for the hero video and LCP.
 *  2. As soon as the element gets within ~one screen of the viewport, an
 *     IntersectionObserver promotes the source and calls .load(). This is the
 *     happy path: just-in-time fetching.
 *  3. As a safety net (e.g. user never scrolls, or IO is throttled), an
 *     `requestIdleCallback` fallback fires ~3s after mount and loads the
 *     source while the browser is idle. Hero is always done by then.
 */
function useLazyAutoplayVideo(src: string) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    let loadedOnce = false;

    const ensureSource = () => {
      if (loadedOnce) return;
      loadedOnce = true;
      const source = video.querySelector('source');
      if (source && !source.getAttribute('src')) {
        source.setAttribute('src', src);
        video.preload = 'auto';
        video.load();
      }
    };

    const play = () => {
      video.muted = true;
      video.play().catch(() => {});
    };

    // Primary path: load when near the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ensureSource();
          if (video.readyState >= 2) play();
          else video.addEventListener('canplay', play, { once: true });
        } else {
          video.pause();
        }
      },
      { threshold: 0, rootMargin: '400px 0px 400px 0px' },
    );
    observer.observe(video);

    // Fallback: kick off loading during idle time after the hero has had its
    // chance. This guarantees the videos are ready even if the user never
    // scrolls, or if IO fires late.
    type IdleWindow = Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    const w = window as IdleWindow;
    const schedule = w.requestIdleCallback ?? ((cb: () => void) => window.setTimeout(cb, 3000));
    const cancel = w.cancelIdleCallback ?? window.clearTimeout;
    const idleHandle = schedule(() => ensureSource(), { timeout: 4000 });

    return () => {
      observer.disconnect();
      cancel(idleHandle as number);
    };
  }, [src]);

  return ref;
}

const EASE = [0.22, 1, 0.36, 1] as const;

/* ═══════════════════════════════════════════════════════════════════════════
 * SECTION: Stats Marquee — Continuous horizontal scroll of operational facts
 * ═══════════════════════════════════════════════════════════════════════════ */
const MARQUEE_ITEMS: {
  value: string;
  label: string;
  /** Shorter label used on small screens so the stat fits in view. */
  shortLabel?: string;
  accent?: boolean;
}[] = [
  { value: '10', label: 'Greater Manchester boroughs', shortLabel: 'Boroughs' },
  { value: '48hr', label: 'Typical match time', shortLabel: 'Match time', accent: true },
  { value: 'Manual', label: 'Or automatic', shortLabel: '+ Auto' },
  { value: '£35', label: 'Per hour, all-in', shortLabel: 'Per hour', accent: true },
  { value: 'DVSA', label: 'Approved instructors', shortLabel: 'Approved' },
  { value: 'Zero', label: 'Hidden fees', shortLabel: 'Hidden fees', accent: true },
];

function StatsMarquee() {
  // Duplicate items so the loop is seamless when animation hits -50%
  const loop = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section
      data-section="stats"
      className="relative bg-secondary overflow-hidden border-y border-white/5"
      aria-label="The Pass Guys at a glance"
    >
      {/* Ambient yellow glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[480px] h-[480px] bg-primary rounded-full blur-[140px]" />
      </div>

      {/* Eyebrow */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 pt-8 md:pt-14 pb-5 md:pb-8 flex items-center justify-center gap-3">
        <span className="w-6 sm:w-8 h-px bg-primary/60" aria-hidden="true" />
        <span className="font-accent text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.32em] sm:tracking-[0.4em] text-white/70">
          At a glance
        </span>
        <span className="w-6 sm:w-8 h-px bg-primary/60" aria-hidden="true" />
      </div>

      {/* Marquee track */}
      <div className="relative z-10 pb-10 md:pb-16">
        <div className="trustbar-track flex whitespace-nowrap items-center will-change-transform">
          {loop.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 sm:gap-8 md:gap-14 px-3 sm:px-6 md:px-12 shrink-0"
            >
              {/* Mobile: stacked value+label. Desktop (md+): inline baseline */}
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 md:gap-6 items-center text-center sm:text-left">
                <span
                  className={`font-display tracking-[0.02em] leading-[0.85] text-[clamp(2.5rem,11vw,8rem)] ${
                    item.accent ? 'text-primary' : 'text-white'
                  }`}
                >
                  {item.value}
                </span>
                {/* Short label on mobile, full label on sm+ */}
                <span className="font-accent text-[10px] md:text-sm font-bold uppercase tracking-[0.24em] sm:tracking-[0.3em] text-white/60 sm:max-w-[10rem] whitespace-nowrap sm:whitespace-normal leading-tight">
                  <span className="sm:hidden">{item.shortLabel ?? item.label}</span>
                  <span className="hidden sm:inline">{item.label}</span>
                </span>
              </div>
              <span
                className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 rounded-full bg-primary shrink-0"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Edge fades to mask the loop seam */}
      <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 md:w-32 bg-gradient-to-r from-secondary to-transparent pointer-events-none z-20" />
      <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 md:w-32 bg-gradient-to-l from-secondary to-transparent pointer-events-none z-20" />
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * SECTION: How It Works — 3 numbered steps
 * ═══════════════════════════════════════════════════════════════════════════ */
const STEPS = [
  {
    n: '01',
    icon: Users,
    title: 'Tell us what you need',
    desc: 'Your postcode, manual or automatic, when you can drive, and how you like to learn.',
  },
  {
    n: '02',
    icon: ShieldCheck,
    title: 'We match you',
    desc: 'Our team finds a vetted local instructor who fits your area, schedule, and learning style.',
  },
  {
    n: '03',
    icon: ArrowRight,
    title: 'Start driving',
    desc: 'Confirm your match, jump in the car, and focus on passing — we handle the rest.',
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" data-section="how-it-works" className="py-24 md:py-36 bg-bg-page">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-20">
          <SectionLabel number="01" label="Process" />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.3, ease: EASE }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
          >
            THREE STEPS.
            <br />
            <span className="text-primary">NO FUSS.</span>
          </motion.h2>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.0, delay: i * 0.12, ease: EASE }}
              className="group relative bg-white border border-secondary/8 rounded-lg p-8 md:p-10 hover:border-primary/40 hover:shadow-ambient transition-all duration-500"
            >
              {/* Step number */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-primary">
                  {step.n}
                </span>
                <step.icon className="w-5 h-5 text-secondary/20 group-hover:text-primary transition-colors duration-500" />
              </div>

              <h3 className="text-2xl md:text-3xl font-display text-secondary tracking-[0.01em] leading-tight mb-3">
                {step.title}
              </h3>
              <p className="text-secondary leading-relaxed text-sm md:text-base font-sans">
                {step.desc}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/40 transition-all duration-700" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          className="mt-12 md:mt-16 text-center"
        >
          <Link
            to="/get-matched"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-secondary font-accent font-bold uppercase tracking-[0.08em] rounded-sm text-sm hover:bg-primary-hover hover:shadow-yellow hover:-translate-y-0.5 transition-all duration-300"
          >
            Get Matched — It's Free
            <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * SECTION: Why Us — Alternating feature blocks
 * ═══════════════════════════════════════════════════════════════════════════ */

const VIDEOS = {
  tracking:
    'https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260518_111647_737fc679-2ac4-40a0-bcf0-632f741d80bd.mp4',
  interior:
    'https://d8j0ntlcm91z4.cloudfront.net/user_3CZmSrapB7IYHyQar1KNZhNGQ6X/hf_20260518_111650_48116c4c-582a-4a82-ac99-1d997693e216.mp4',
};

function WhyUs() {
  const trackingRef = useLazyAutoplayVideo(VIDEOS.tracking);
  const interiorRef = useLazyAutoplayVideo(VIDEOS.interior);

  return (
    <section data-section="why-us" className="py-24 md:py-36 bg-bg-page overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
          <SectionLabel number="02" label="Why us" />
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.3, ease: EASE }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
          >
            MORE THAN LESSONS.
            <br />
            <span className="text-primary">A BETTER WAY TO LEARN.</span>
          </motion.h2>
        </div>

        {/* Feature 1: Manual or automatic */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 md:mb-32">
          {/* Video */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="relative rounded-lg overflow-hidden aspect-video bg-secondary/5"
          >
            <video
              ref={trackingRef}
              className="w-full h-full object-cover bg-secondary/10"
              muted
              loop
              playsInline
              preload="none"
              aria-label="Driving lesson footage"
            >
              {/* src is injected by the IntersectionObserver hook so it does not
                  compete with the hero video's bandwidth on first paint. */}
              <source type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
          >
            <span className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-primary mb-4 block">
              Your choice
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-secondary tracking-[0.01em] leading-[0.92] mb-5">
              MANUAL OR AUTOMATIC.
              <br />
              <span className="text-primary">SAME PRICE.</span>
            </h3>
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-md font-sans">
              Every lesson is in a modern dual-control car with a fully vetted, DVSA-approved instructor. Your choice of transmission, no premium.
            </p>
            <div className="flex flex-wrap gap-2.5">
              {['Manual', 'Automatic', 'DVSA-approved', 'Dual-control'].map((tag) => (
                <span
                  key={tag}
                  className="font-accent px-4 py-2 rounded-sm border border-secondary/10 text-secondary text-xs font-semibold uppercase tracking-[0.1em]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Feature 2: Expert instructors */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Copy — left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, ease: EASE }}
            className="order-2 md:order-1"
          >
            <span className="font-accent text-[10px] font-bold uppercase tracking-[0.35em] text-primary mb-4 block">
              Expert guidance
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-display text-secondary tracking-[0.01em] leading-[0.92] mb-5">
              PATIENT, PROFESSIONAL,
              <br />
              <span className="text-primary">AND LOCAL.</span>
            </h3>
            <p className="text-secondary text-base md:text-lg leading-relaxed mb-8 max-w-md font-sans">
              Every instructor on our platform is fully qualified, DVSA-approved, and matched to your area. They know the local test routes and what examiners look for.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span className="font-accent text-xs font-semibold text-secondary uppercase tracking-wider">Vetted</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="font-accent text-xs font-semibold text-secondary uppercase tracking-wider">Flexible hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="font-accent text-xs font-semibold text-secondary uppercase tracking-wider">5-star rated</span>
              </div>
            </div>
          </motion.div>

          {/* Video — right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.2, delay: 0.1, ease: EASE }}
            className="relative rounded-lg overflow-hidden aspect-video bg-secondary/5 order-1 md:order-2"
          >
            <video
              ref={interiorRef}
              className="w-full h-full object-cover bg-secondary/10"
              muted
              loop
              playsInline
              preload="none"
              aria-label="Instructor and student in dual-control car"
            >
              {/* src is injected lazily — see useLazyAutoplayVideo */}
              <source type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * SECTION: Testimonial — Dark, editorial quote carousel
 * ═══════════════════════════════════════════════════════════════════════════ */
const REVIEWS = [
  {
    quote: "I was dreading learning to drive. The Pass Guys matched me with Sarah in two days — she was so patient and I passed first time.",
    name: "Amira K.",
    location: "Manchester · Passed first time",
    highlight: "two days",
  },
  {
    quote: "Booked the intensive course and passed in under two weeks. My instructor knew all the Salford test routes inside out. Worth every penny.",
    name: "Josh R.",
    location: "Salford · Intensive course",
    highlight: "two weeks",
  },
  {
    quote: "Switched from another school where I felt stuck. Got matched with Dave and everything clicked. Passed with only three minors.",
    name: "Priya S.",
    location: "Stockport · Switched and passed",
    highlight: "three minors",
  },
];

/** Render a quote string with the highlight phrase wrapped in a styled span. */
function renderQuoteWithHighlight(quote: string, highlight: string) {
  const upper = highlight.toUpperCase();
  const idx = quote.toLowerCase().indexOf(highlight.toLowerCase());
  if (idx === -1) return quote;
  const before = quote.slice(0, idx);
  const after = quote.slice(idx + highlight.length);
  return (
    <>
      {before}
      <span className="text-primary not-italic font-display tracking-[0.02em]">{upper}</span>
      {after}
    </>
  );
}

function Testimonial() {
  const [active, setActive] = useState(0);
  const [intervalKey, setIntervalKey] = useState(0);

  // Auto-rotate every 6 seconds; reset when user clicks a dot
  useEffect(() => {
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 6000);
    return () => clearInterval(id);
  }, [intervalKey]);

  const goTo = (i: number) => {
    setActive(i);
    setIntervalKey((k) => k + 1); // reset interval
  };

  const review = REVIEWS[active];

  return (
    <section data-section="testimonial" className="py-24 md:py-36 bg-secondary overflow-hidden relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[180px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel number="03" label="Stories" tone="dark" />

          {/* Reviews badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-xs font-accent font-semibold uppercase tracking-[0.2em]">
              <span className="text-primary" aria-hidden="true">&#9733;</span>
              200+ five-star reviews
            </span>
          </motion.div>

          {/* Quote mark */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.0, ease: EASE }}
            className="text-primary/20 text-[120px] md:text-[160px] font-display leading-none -mb-14 md:-mb-20"
            aria-hidden="true"
          >
            &ldquo;
          </motion.div>

          <motion.blockquote
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans italic text-white leading-snug tracking-tight font-medium"
          >
            {renderQuoteWithHighlight(review.quote, review.highlight)}
          </motion.blockquote>

          <motion.div
            key={`attr-${active}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: EASE }}
            className="mt-8 md:mt-10"
          >
            <p className="text-white font-sans font-medium text-sm sm:text-base">
              {review.name}
            </p>
            <p className="text-white/70 font-accent text-xs sm:text-sm mt-1 uppercase tracking-wider">
              {review.location}
            </p>
          </motion.div>

          {/* Dot indicators — tap area is 44x44 but visual dot stays small */}
          <div className="mt-8 flex items-center justify-center gap-1">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Show review ${i + 1} of ${REVIEWS.length}`}
                className="p-3 inline-flex items-center justify-center group/dot"
              >
                <span
                  className={`block w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                    i === active ? 'bg-primary' : 'bg-white/30 group-hover/dot:bg-white/50'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * SECTION: Coverage — Borough grid
 * ═══════════════════════════════════════════════════════════════════════════ */
const BOROUGHS = [
  'Manchester', 'Salford', 'Trafford', 'Stockport', 'Tameside',
  'Oldham', 'Rochdale', 'Bury', 'Bolton', 'Wigan',
];

function Coverage() {
  return (
    <section data-section="coverage" className="py-24 md:py-36 bg-bg-page">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto md:flex md:items-start md:gap-16 lg:gap-24">
          {/* Left — heading (sticky on desktop) */}
          <div className="md:flex-1 md:sticky md:top-32 text-center md:text-left mb-12 md:mb-0">
            <SectionLabel number="04" label="Local" align="left" />
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.2, ease: EASE }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display text-secondary tracking-[0.02em] leading-[0.92]"
            >
              LOCAL INSTRUCTORS.
              <br />
              <span className="text-primary">NEAR YOU.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.0, delay: 0.15, ease: EASE }}
              className="mt-5 font-accent text-secondary/80 text-[11px] uppercase tracking-[0.3em]"
            >
              10 boroughs · Matched to your area
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, delay: 0.25, ease: EASE }}
              className="mt-8"
            >
              <Link
                to="/areas"
                className="inline-flex items-center gap-2 font-accent text-sm font-semibold uppercase tracking-[0.08em] text-secondary/50 hover:text-primary transition-colors duration-300"
              >
                View all areas
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/get-matched"
                className="mt-4 inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-secondary font-accent font-bold uppercase tracking-[0.08em] rounded-sm text-sm hover:bg-primary-hover hover:shadow-yellow hover:-translate-y-0.5 transition-all duration-300"
              >
                Find an instructor near you
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right — borough grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
            className="md:flex-1 grid grid-cols-2 gap-3"
          >
            {BOROUGHS.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: i * 0.04, ease: EASE }}
                className="group flex items-center gap-3 px-5 py-4 rounded-lg border border-secondary/8 bg-white/60 hover:border-primary/30 hover:bg-white transition-all duration-400 cursor-default"
              >
                <MapPin className="w-4 h-4 text-primary/60 group-hover:text-primary flex-shrink-0 transition-colors duration-300" />
                <span className="text-secondary/70 text-sm font-sans font-medium group-hover:text-secondary transition-colors duration-300">
                  {b}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 * HOMEPAGE
 * ═══════════════════════════════════════════════════════════════════════════ */
export default function HomePage() {
  return (
    <MotionConfig reducedMotion="never">
      <SEO />
      <div className="bg-bg-page">
        <ImmersiveHero />
        <StatsMarquee />
        <HowItWorks />
        <WhyUs />
        <Testimonial />
        <Pricing />
        <Coverage />
        <FinalCTA />
      </div>
    </MotionConfig>
  );
}
