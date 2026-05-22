import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * Privacy Policy — UK GDPR compliant.
 *
 * Covers: personal data collection (form + Stripe), Firebase storage,
 * cookies, third-party processors, data rights, retention, and
 * future analytics provision.
 *
 * Last updated date is hardcoded — update when the policy changes.
 */
export default function PrivacyPage() {
  return (
    <section className="pt-28 md:pt-36 pb-16 md:pb-24 px-4 sm:px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Back link */}
        <Link
          to="/"
          className="group inline-flex items-center gap-2 text-secondary/60 font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to home
        </Link>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-secondary uppercase tracking-tighter leading-[0.9] mb-4">
          Privacy <span className="text-primary italic">Policy.</span>
        </h1>
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-12">
          Last updated: 22 May 2026
        </p>

        <div className="prose-policy space-y-10 text-secondary/80 text-[15px] md:text-base leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              1. Who we are
            </h2>
            <p>
              The Pass Guys is a driving school operating across Greater
              Manchester and the North West of England. For the purposes of UK
              data protection law (UK GDPR and the Data Protection Act 2018),
              The Pass Guys is the data controller.
            </p>
            <p className="mt-3">
              <strong>Contact:</strong> info@thepassguys.co.uk
              <br />
              <strong>Location:</strong> Greater Manchester, United Kingdom
            </p>
          </div>

          {/* 2 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              2. What data we collect
            </h2>
            <p>We collect the following personal data when you use our website:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Booking enquiry form:</strong> first name, phone number,
                postcode, and urgency preference.
              </li>
              <li>
                <strong>Payment information:</strong> when you make a payment,
                your card details are collected and processed directly by{' '}
                <a
                  href="https://stripe.com/gb/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  Stripe
                </a>
                . We do not see or store your full card number. We receive only a
                transaction reference, the last four digits of your card, and
                confirmation of payment.
              </li>
              <li>
                <strong>Technical data:</strong> your IP address, browser type,
                and device information are collected automatically when you visit
                our website. This data is not linked to your identity.
              </li>
            </ul>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              3. How we use your data
            </h2>
            <p>We use your personal data for the following purposes:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>To process your booking enquiry</strong> and match you
                with a local instructor (legal basis: contract performance).
              </li>
              <li>
                <strong>To process payments</strong> for lessons and course
                bookings (legal basis: contract performance).
              </li>
              <li>
                <strong>To contact you</strong> about your specific booking
                enquiry only — we will not send marketing emails or SMS unless
                you have separately opted in (legal basis: legitimate interest).
              </li>
              <li>
                <strong>To improve our website</strong> and understand how
                visitors use it (legal basis: legitimate interest).
              </li>
              <li>
                <strong>To comply with legal obligations</strong> such as tax
                and accounting requirements (legal basis: legal obligation).
              </li>
            </ul>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              4. Third-party services
            </h2>
            <p>
              We use the following third-party services to operate our website.
              Each processes data in accordance with their own privacy policies:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Google Firebase</strong> (Firestore) — stores booking
                enquiry data. Data is held on servers within the EU/UK.{' '}
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  Firebase Privacy Policy
                </a>
              </li>
              <li>
                <strong>Stripe</strong> — processes card payments securely. Stripe
                is PCI DSS Level 1 certified.{' '}
                <a
                  href="https://stripe.com/gb/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  Stripe Privacy Policy
                </a>
              </li>
              <li>
                <strong>Google Fonts</strong> — loads the Inter typeface. Google
                may collect your IP address when fonts are loaded.{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-bold hover:underline"
                >
                  Google Privacy Policy
                </a>
              </li>
            </ul>
            <p className="mt-3">
              We may add analytics services (such as Google Analytics) in the
              future. If we do, this policy will be updated and any tracking will
              respect your cookie preferences.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              5. Cookies
            </h2>
            <p>
              Our website uses only essential cookies required for the site to
              function (such as session management and payment processing). We do
              not currently use advertising or analytics cookies.
            </p>
            <p className="mt-3">
              If we introduce non-essential cookies in the future, we will add a
              cookie consent banner and update this policy accordingly.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              6. Data retention
            </h2>
            <p>We retain your personal data for the following periods:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Booking enquiries:</strong> 12 months from the date of
                submission, unless you become a customer (in which case, see
                below).
              </li>
              <li>
                <strong>Customer records:</strong> for the duration of our
                business relationship plus 6 years, as required by HMRC for tax
                and accounting purposes.
              </li>
              <li>
                <strong>Payment records:</strong> retained by Stripe in
                accordance with their data retention policy and financial
                regulations.
              </li>
            </ul>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              7. Your rights
            </h2>
            <p>
              Under UK GDPR, you have the following rights regarding your
              personal data:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Right of access</strong> — request a copy of the data we
                hold about you.
              </li>
              <li>
                <strong>Right to rectification</strong> — ask us to correct
                inaccurate or incomplete data.
              </li>
              <li>
                <strong>Right to erasure</strong> — ask us to delete your
                personal data (subject to legal retention requirements).
              </li>
              <li>
                <strong>Right to restrict processing</strong> — ask us to limit
                how we use your data.
              </li>
              <li>
                <strong>Right to data portability</strong> — request your data in
                a machine-readable format.
              </li>
              <li>
                <strong>Right to object</strong> — object to processing based on
                legitimate interest.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email us at{' '}
              <a
                href="mailto:info@thepassguys.co.uk"
                className="text-primary font-bold hover:underline"
              >
                info@thepassguys.co.uk
              </a>
              . We will respond within 30 days.
            </p>
            <p className="mt-3">
              If you are unsatisfied with how we handle your data, you have the
              right to lodge a complaint with the{' '}
              <a
                href="https://ico.org.uk/make-a-complaint/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                Information Commissioner&apos;s Office (ICO)
              </a>
              .
            </p>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              8. Data security
            </h2>
            <p>
              We take reasonable technical and organisational measures to protect
              your personal data. All payment data is handled by Stripe using
              industry-standard encryption (TLS). Booking data stored in Firebase
              is protected by Google&apos;s security infrastructure, including
              encryption at rest and in transit.
            </p>
            <p className="mt-3">
              However, no method of transmission over the internet is 100%
              secure. While we strive to protect your data, we cannot guarantee
              its absolute security.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              9. Children
            </h2>
            <p>
              Our services are intended for individuals aged 17 and over, in line
              with UK driving licence requirements. We do not knowingly collect
              personal data from anyone under 17. If you believe a child has
              submitted data through our website, please contact us and we will
              delete it promptly.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              10. Changes to this policy
            </h2>
            <p>
              We may update this privacy policy from time to time. Any changes
              will be posted on this page with an updated &quot;Last updated&quot;
              date. We encourage you to review this page periodically.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              11. Contact us
            </h2>
            <p>
              If you have any questions about this privacy policy or how we
              handle your data, contact us at:
            </p>
            <p className="mt-3 font-bold text-secondary">
              The Pass Guys
              <br />
              info@thepassguys.co.uk
              <br />
              Greater Manchester, United Kingdom
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
