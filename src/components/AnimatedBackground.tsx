/**
 * AnimatedBackground — two stacked layers behind every page:
 *
 *   1. Aurora sweep — heavily-blurred linear gradients in mint/emerald
 *      that slowly oscillate position. Gives the white canvas a soft,
 *      premium "lights drifting" quality.
 *
 *   2. Road stripes — faint dashed motorway lane markings drift
 *      horizontally at five different speeds. Reads as a watermark,
 *      adds quiet driving-school narrative without being literal.
 *
 * Pure CSS animations (defined in index.css). Honours
 * prefers-reduced-motion automatically. No JS per-frame cost.
 */
export default function AnimatedBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
    >
      {/* Aurora colour wash */}
      <div className="bg-aurora" />

      {/* Road-stripe watermark */}
      <div className="bg-road-stripes">
        <span className="bg-road-stripe bg-road-stripe-1" />
        <span className="bg-road-stripe bg-road-stripe-2" />
        <span className="bg-road-stripe bg-road-stripe-3" />
        <span className="bg-road-stripe bg-road-stripe-4" />
        <span className="bg-road-stripe bg-road-stripe-5" />
      </div>
    </div>
  );
}
