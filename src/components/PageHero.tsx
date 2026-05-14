import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ReactNode } from 'react';

interface PageHeroProps {
  eyebrow: string;
  title: string;
  accent: string;
  description?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  meta?: string[];
  aside?: ReactNode;
}

/**
 * PageHero — the standard hero for every non-homepage page.
 *
 * Visual hierarchy (top → bottom, in descending weight):
 *
 *   1. Eyebrow         — small caps, tracked, secondary/55              (the context)
 *   2. Headline line 1 — large, font-medium, secondary/55               (the setup)
 *   3. Headline line 2 — XL, font-semibold, primary green               (the payoff — visual anchor)
 *   4. Description     — body, secondary/65                              (the explanation)
 *   5. CTAs            — primary green pill + ghost outline              (the action)
 *   6. Meta strip      — micro caps, tracked, secondary/45               (the proof)
 *
 * Responsive sizing is keyed to clean breakpoints (no arbitrary rems on
 * mobile) so the headline always sits comfortably above the fold:
 *
 *   base:  5xl / 6xl   →  6rem total
 *   sm:    6xl / 7xl   →  ~8rem total
 *   md:    7xl / 8xl   →  ~10rem total
 *   lg:    6rem / 7.5rem → 13.5rem total
 */
export default function PageHero({
  eyebrow,
  title,
  accent,
  description,
  primaryCta,
  secondaryCta,
  meta,
  aside,
}: PageHeroProps) {
  return (
    <section className="relative bg-bg-page text-secondary overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-16 md:pb-24 px-6">
      <div
        className={`container mx-auto relative ${
          aside ? 'grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center max-w-6xl' : 'max-w-5xl'
        }`}
      >
        <div className={aside ? 'lg:col-span-7 text-center lg:text-left' : 'text-center mx-auto'}>
          {/* ── 1. Eyebrow ─────────────────────────────────────────────────── */}
          <div
            className={`hero-fade hero-fade-delay-1 flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8 text-secondary/55 ${
              aside ? 'justify-center lg:justify-start' : 'justify-center'
            }`}
          >
            <span className="inline-block w-8 sm:w-10 h-px bg-secondary/30" aria-hidden="true" />
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.32em]">
              {eyebrow}
            </span>
            <span className="inline-block w-8 sm:w-10 h-px bg-secondary/30" aria-hidden="true" />
          </div>

          {/* ── 2 + 3. Headline (the visual anchor) ────────────────────────── */}
          <h1 className="leading-[0.85] mb-6 sm:mb-8 md:mb-10">
            {/* Line 1 — setup: small, light, muted — reads as a label/preamble */}
            <span className="block overflow-hidden pb-[0.1em]">
              <span
                className="hero-line hero-line-1 block font-display
                  text-3xl sm:text-4xl md:text-5xl lg:text-[4.5rem]
                  font-light text-secondary/40"
              >
                {title}
              </span>
            </span>
            {/* Line 2 — payoff: dominant, bold Fraunces serif in brand green */}
            <span className="block overflow-hidden pb-[0.1em]">
              <span
                className="hero-line hero-line-2 block font-display
                  text-6xl sm:text-7xl md:text-8xl lg:text-[7.5rem]
                  font-bold text-primary"
                style={{ letterSpacing: '-0.02em' }}
              >
                {accent}
              </span>
            </span>
          </h1>

          {/* ── 4. Description ─────────────────────────────────────────────── */}
          {description && (
            <p
              className={`hero-fade hero-fade-delay-2 text-base sm:text-lg text-secondary/65 leading-relaxed max-w-xl mb-8 sm:mb-10 ${
                aside ? 'mx-auto lg:mx-0' : 'mx-auto'
              }`}
            >
              {description}
            </p>
          )}

          {/* ── 5. CTAs ────────────────────────────────────────────────────── */}
          {(primaryCta || secondaryCta) && (
            <div
              className={`hero-fade hero-fade-delay-3 flex items-center gap-3 flex-wrap ${
                aside ? 'justify-center lg:justify-start' : 'justify-center'
              }`}
            >
              {primaryCta && (
                <Link
                  to={primaryCta.href}
                  className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-secondary text-sm font-semibold tracking-wide hover:brightness-105 hover:scale-[1.02] transition-all duration-300 shadow-sm"
                >
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="px-7 py-3.5 rounded-full border border-secondary/25 text-secondary text-sm font-semibold tracking-wide hover:bg-secondary/5 transition-colors duration-300"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {/* ── 6. Meta strip ──────────────────────────────────────────────── */}
          {meta && meta.length > 0 && (
            <div
              className={`hero-fade hero-fade-delay-4 mt-10 sm:mt-12 md:mt-14 pt-6 border-t border-secondary/10 flex flex-wrap items-center gap-x-5 gap-y-2 sm:gap-x-7 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary/45 ${
                aside ? 'justify-center lg:justify-start' : 'justify-center'
              }`}
            >
              {meta.map((m, i) => (
                <span key={i} className="flex items-center gap-x-5 sm:gap-x-7">
                  {i > 0 && <span className="w-1 h-1 rounded-full bg-primary/60" aria-hidden="true" />}
                  <span>{m}</span>
                </span>
              ))}
            </div>
          )}
        </div>

        {aside && (
          <div className="lg:col-span-5 relative mt-2 lg:mt-0">
            <div className="hero-fade hero-fade-delay-2 relative max-w-[440px] mx-auto lg:ml-auto">
              {aside}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
