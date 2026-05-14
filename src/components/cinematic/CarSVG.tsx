/**
 * Placeholder cinematic car — premium side-view sedan silhouette.
 *
 * To swap for the real asset: replace this entire component's return with
 *   <img src="/path/to/car.png" alt="" className="w-full h-auto" />
 * or
 *   <img src="https://your.cdn/car.png" alt="" className="w-full h-auto" />
 *
 * Keep the surrounding wrapper untouched so GSAP transforms continue to
 * drive scale/rotation/translation against the car layer.
 */
export default function CarSVG() {
  return (
    <svg
      viewBox="0 0 640 240"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto block"
      style={{
        filter:
          'drop-shadow(0 30px 35px rgba(0,0,0,0.55)) drop-shadow(0 8px 14px rgba(0,210,111,0.18))',
      }}
    >
      <defs>
        <linearGradient id="cinCarBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#454b4d" />
          <stop offset="45%" stopColor="#23282a" />
          <stop offset="100%" stopColor="#0a0c0d" />
        </linearGradient>
        <linearGradient id="cinCarLower" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1d1f" />
          <stop offset="100%" stopColor="#050606" />
        </linearGradient>
        <linearGradient id="cinCarGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9aa3a7" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#3a4144" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#1e2224" stopOpacity="0.95" />
        </linearGradient>
        <radialGradient id="cinCarShadow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="rgba(0,0,0,0.55)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>
      </defs>

      {/* Ground shadow */}
      <ellipse cx="320" cy="215" rx="265" ry="14" fill="url(#cinCarShadow)" />

      {/* Cabin (greenhouse) — drawn first so body overlaps lower edge */}
      <path
        d="M 178 118
           Q 184 92 222 88
           L 408 88
           Q 448 92 462 118
           L 462 132
           L 178 132 Z"
        fill="#06080a"
      />

      {/* Windshield */}
      <path
        d="M 210 96
           L 300 96
           L 286 128
           L 210 128 Z"
        fill="url(#cinCarGlass)"
        opacity="0.95"
      />
      {/* Rear window */}
      <path
        d="M 326 96
           L 415 96
           L 432 128
           L 340 128 Z"
        fill="url(#cinCarGlass)"
        opacity="0.95"
      />
      {/* Side window (between) */}
      <path
        d="M 302 96 L 324 96 L 326 128 L 290 128 Z"
        fill="#06080a"
      />

      {/* Main body */}
      <path
        d="M 60 168
           L 130 168
           Q 142 132 178 122
           L 245 110
           Q 280 92 320 90
           L 400 90
           Q 442 94 470 112
           L 510 124
           Q 545 134 560 168
           L 580 168
           Q 590 170 590 178
           L 590 192
           Q 590 196 584 196
           L 56 196
           Q 50 196 50 192
           L 50 178
           Q 50 170 60 168 Z"
        fill="url(#cinCarBody)"
      />

      {/* Lower rocker panel — depth */}
      <path
        d="M 50 192 L 590 192 L 590 200 Q 590 204 584 204 L 56 204 Q 50 204 50 200 Z"
        fill="url(#cinCarLower)"
      />

      {/* Body highlight — long subtle */}
      <path
        d="M 70 162 L 555 162"
        stroke="rgba(255,255,255,0.10)"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 130 168 Q 290 158 470 168"
        stroke="rgba(255,255,255,0.06)"
        strokeWidth="1"
        fill="none"
      />

      {/* Headlight (front, right) */}
      <ellipse cx="555" cy="156" rx="16" ry="6" fill="#fff8d8" />
      <ellipse cx="555" cy="156" rx="26" ry="10" fill="rgba(255,248,216,0.18)" />

      {/* Taillight (rear, left) */}
      <rect x="56" y="150" width="16" height="11" rx="2" fill="#ff3a3a" />
      <rect
        x="52"
        y="148"
        width="22"
        height="15"
        rx="3"
        fill="rgba(255,58,58,0.20)"
      />

      {/* Door handles — minimal */}
      <rect x="240" y="146" width="36" height="3.5" rx="1.5" fill="rgba(255,255,255,0.10)" />
      <rect x="360" y="146" width="36" height="3.5" rx="1.5" fill="rgba(255,255,255,0.10)" />

      {/* Wheels — front + rear */}
      <g transform="translate(460,192)">
        <circle r="38" fill="#06080a" />
        <circle r="36" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle r="22" fill="#1a1d1f" />
        {/* spokes */}
        <g stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeLinecap="round">
          <line x1="0" y1="-18" x2="0" y2="18" />
          <line x1="-18" y1="0" x2="18" y2="0" />
          <line x1="-13" y1="-13" x2="13" y2="13" />
          <line x1="-13" y1="13" x2="13" y2="-13" />
        </g>
        <circle r="6" fill="#0a0d0e" />
      </g>
      <g transform="translate(165,192)">
        <circle r="38" fill="#06080a" />
        <circle r="36" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
        <circle r="22" fill="#1a1d1f" />
        <g stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" strokeLinecap="round">
          <line x1="0" y1="-18" x2="0" y2="18" />
          <line x1="-18" y1="0" x2="18" y2="0" />
          <line x1="-13" y1="-13" x2="13" y2="13" />
          <line x1="-13" y1="13" x2="13" y2="-13" />
        </g>
        <circle r="6" fill="#0a0d0e" />
      </g>

      {/* Headlight beam — faint green wash to tie to brand */}
      <ellipse
        cx="600"
        cy="158"
        rx="42"
        ry="14"
        fill="rgba(0,210,111,0.18)"
        style={{ filter: 'blur(10px)' }}
      />
    </svg>
  );
}
