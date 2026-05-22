import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * Terms & Conditions — UK consumer law compliant.
 *
 * Covers: service description, booking process, payments (Stripe),
 * 48h cancellation policy, block booking refunds, lesson conduct,
 * liability, age requirements, and dispute resolution.
 *
 * Last updated date is hardcoded — update when the terms change.
 */
export default function TermsPage() {
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
          Terms &amp;{' '}
          <span className="text-primary italic">Conditions.</span>
        </h1>
        <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-12">
          Last updated: 22 May 2026
        </p>

        <div className="prose-policy space-y-10 text-secondary/80 text-[15px] md:text-base leading-relaxed">
          {/* 1 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              1. About these terms
            </h2>
            <p>
              These terms and conditions (&quot;Terms&quot;) govern your use of
              the website thepassguys.co.uk (&quot;the Website&quot;) and any
              driving lesson services (&quot;Services&quot;) booked through it.
              By using the Website or booking a Service, you agree to these
              Terms.
            </p>
            <p className="mt-3">
              The Pass Guys is a driving school operating across Greater
              Manchester and the North West of England.
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
              2. Eligibility
            </h2>
            <p>To book driving lessons with The Pass Guys, you must:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Be at least 17 years of age.</li>
              <li>
                Hold a valid UK provisional driving licence (or full licence if
                taking refresher lessons).
              </li>
              <li>
                Be legally entitled to drive in the United Kingdom.
              </li>
              <li>
                Provide accurate and truthful information when booking.
              </li>
            </ul>
            <p className="mt-3">
              You must bring your provisional or full driving licence to every
              lesson. Your instructor may refuse to conduct a lesson if you
              cannot produce a valid licence.
            </p>
          </div>

          {/* 3 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              3. Booking &amp; matching
            </h2>
            <p>
              When you submit a booking enquiry through our Website, we will
              contact you to confirm availability and match you with a suitable
              local instructor. Submitting an enquiry does not guarantee a
              booking — it is confirmed only once we have matched you with an
              instructor and you have agreed to the lesson schedule.
            </p>
            <p className="mt-3">
              We aim to respond to all enquiries within 24 hours. Lesson times
              and instructor availability are subject to change.
            </p>
          </div>

          {/* 4 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              4. Pricing &amp; payments
            </h2>
            <p>
              All prices are listed on our Website in pounds sterling (GBP) and
              include VAT where applicable. We reserve the right to change
              prices at any time, but changes will not affect bookings already
              confirmed.
            </p>
            <p className="mt-3">Our current pricing structure:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                <strong>Pay As You Go:</strong> charged per hour at the
                advertised rate.
              </li>
              <li>
                <strong>Block Bookings (10 lessons):</strong> charged as a
                single upfront payment at a discounted rate.
              </li>
              <li>
                <strong>Fast Track Intensive:</strong> charged as a single
                all-inclusive payment.
              </li>
            </ul>
            <p className="mt-3">
              Payments are processed securely by{' '}
              <a
                href="https://stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-bold hover:underline"
              >
                Stripe
              </a>
              . We do not store your card details. All transactions are encrypted
              and PCI DSS compliant.
            </p>
          </div>

          {/* 5 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              5. Cancellation &amp; rescheduling
            </h2>
            <p>
              We understand that plans change. Our cancellation policy is as
              follows:
            </p>

            <h3 className="text-lg font-black text-secondary uppercase tracking-tight mt-5 mb-2">
              Individual lessons (pay as you go)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>48+ hours&apos; notice:</strong> cancel or reschedule
                free of charge.
              </li>
              <li>
                <strong>Less than 48 hours&apos; notice:</strong> the full
                lesson fee will be charged.
              </li>
              <li>
                <strong>No-show:</strong> the full lesson fee will be charged.
              </li>
            </ul>

            <h3 className="text-lg font-black text-secondary uppercase tracking-tight mt-5 mb-2">
              Block bookings
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Block bookings are <strong>non-refundable</strong> once
                purchased.
              </li>
              <li>
                Individual lessons within a block may be rescheduled with 48+
                hours&apos; notice at no extra cost.
              </li>
              <li>
                Lessons missed with less than 48 hours&apos; notice or no-shows
                will be deducted from the remaining block balance.
              </li>
              <li>
                Block bookings are non-transferable and must be used by the
                original purchaser.
              </li>
            </ul>

            <h3 className="text-lg font-black text-secondary uppercase tracking-tight mt-5 mb-2">
              Fast Track intensive courses
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Fast Track courses are <strong>non-refundable</strong> once the
                course start date has been confirmed.
              </li>
              <li>
                If you need to postpone before the start date, contact us as
                soon as possible and we will do our best to accommodate a new
                date, subject to availability.
              </li>
            </ul>

            <h3 className="text-lg font-black text-secondary uppercase tracking-tight mt-5 mb-2">
              Cancellations by The Pass Guys
            </h3>
            <p>
              If we or your instructor need to cancel a lesson, we will give you
              as much notice as possible and offer a replacement lesson at no
              extra cost. If we are unable to provide a replacement, you will
              receive a full refund for that lesson.
            </p>
          </div>

          {/* 6 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              6. Your statutory rights
            </h2>
            <p>
              Under the Consumer Rights Act 2015, you have the right to receive
              services that are carried out with reasonable care and skill, as
              described, and within a reasonable time. Nothing in these Terms
              affects your statutory rights.
            </p>
            <p className="mt-3">
              Under the Consumer Contracts Regulations 2013, if you book online
              you may have a 14-day cooling-off period for certain purchases.
              However, this right is lost once the service has been fully
              performed (i.e. a lesson has taken place) if you agreed to this
              when booking.
            </p>
          </div>

          {/* 7 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              7. Lesson conduct
            </h2>
            <p>
              For the safety of both students and instructors, the following
              rules apply during all lessons:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                You must not attend a lesson under the influence of alcohol,
                drugs, or any substance that impairs your ability to drive.
              </li>
              <li>
                You must follow the reasonable instructions of your instructor at
                all times during the lesson.
              </li>
              <li>
                Abusive, threatening, or discriminatory behaviour towards your
                instructor will not be tolerated and may result in immediate
                termination of your lessons without refund.
              </li>
              <li>
                You must be at the agreed pickup location at the agreed time.
                Lessons start and end at the scheduled time regardless of late
                arrival.
              </li>
              <li>
                If your instructor reasonably believes you are unfit to drive for
                any reason, they may terminate the lesson early. The full fee
                will still apply.
              </li>
            </ul>
          </div>

          {/* 8 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              8. Driving tests
            </h2>
            <p>
              Where a practical driving test is included in your package (e.g.
              Fast Track), The Pass Guys will book the test on your behalf,
              subject to DVSA availability. We cannot guarantee a specific test
              date or test centre.
            </p>
            <p className="mt-3">
              Passing your driving test is not guaranteed. The outcome depends on
              your performance on the day as assessed by the DVSA examiner. The
              Pass Guys accepts no liability for test results.
            </p>
          </div>

          {/* 9 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              9. Liability
            </h2>
            <p>
              All lessons are conducted in vehicles with full insurance cover,
              including learner driver cover. Your instructor&apos;s vehicle is
              insured for use during tuition.
            </p>
            <p className="mt-3">
              The Pass Guys shall not be liable for:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>
                Any indirect or consequential loss arising from the use of our
                Services.
              </li>
              <li>
                Failure to pass your driving test.
              </li>
              <li>
                Delays or cancellations caused by circumstances beyond our
                reasonable control (including severe weather, road closures,
                vehicle breakdowns, or illness).
              </li>
            </ul>
            <p className="mt-3">
              Nothing in these Terms excludes or limits our liability for death
              or personal injury caused by our negligence, fraud or fraudulent
              misrepresentation, or any other liability that cannot be excluded
              by law.
            </p>
          </div>

          {/* 10 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              10. Intellectual property
            </h2>
            <p>
              All content on this Website — including text, graphics, logos,
              images, and videos — is owned by or licensed to The Pass Guys and
              is protected by copyright law. You may not reproduce, distribute,
              or use any content from this Website without our written
              permission.
            </p>
          </div>

          {/* 11 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              11. Complaints
            </h2>
            <p>
              If you are unhappy with any aspect of our service, please contact
              us at{' '}
              <a
                href="mailto:info@thepassguys.co.uk"
                className="text-primary font-bold hover:underline"
              >
                info@thepassguys.co.uk
              </a>{' '}
              and we will do our best to resolve the issue promptly.
            </p>
            <p className="mt-3">
              If we are unable to resolve your complaint, you may refer the
              matter to an alternative dispute resolution provider or take legal
              action through the courts of England and Wales.
            </p>
          </div>

          {/* 12 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              12. Changes to these terms
            </h2>
            <p>
              We may update these Terms from time to time. Any changes will be
              posted on this page with an updated &quot;Last updated&quot; date.
              Continued use of our Website or Services after changes are posted
              constitutes your acceptance of the revised Terms.
            </p>
          </div>

          {/* 13 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              13. Governing law
            </h2>
            <p>
              These Terms are governed by the laws of England and Wales. Any
              disputes will be subject to the exclusive jurisdiction of the
              courts of England and Wales.
            </p>
          </div>

          {/* 14 */}
          <div>
            <h2 className="text-xl md:text-2xl font-black text-secondary uppercase tracking-tight mb-3">
              14. Contact us
            </h2>
            <p>
              If you have any questions about these Terms, contact us at:
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
