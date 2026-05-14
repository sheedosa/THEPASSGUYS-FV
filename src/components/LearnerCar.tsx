/**
 * The Pass Guys learner car — minimal silhouette for the hero.
 * Strong white body on dark, restrained detail. Continuously drives
 * across the hero from left to right (animation lives in CSS).
 */
export default function LearnerCar({ className = '' }: { className?: string }) {
  return (
    <div className={`car-stage ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 420 170"
        xmlns="http://www.w3.org/2000/svg"
        className="learner-car"
      >
        <defs>
          <linearGradient id="lc-body" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFCF1" />
            <stop offset="60%" stopColor="#F4EEE4" />
            <stop offset="100%" stopColor="#D9CFBC" />
          </linearGradient>
          <linearGradient id="lc-glass" x1="0" y1="0" x2="0.3" y2="1">
            <stop offset="0%" stopColor="#1F2A37" />
            <stop offset="100%" stopColor="#0E1418" />
          </linearGradient>
          <linearGradient id="lc-glass-hl" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lc-sill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1E2326" />
            <stop offset="100%" stopColor="#0A0C0D" />
          </linearGradient>
          <radialGradient id="lc-rim" cx="50%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#8B939A" />
            <stop offset="60%" stopColor="#4E555B" />
            <stop offset="100%" stopColor="#1A1D20" />
          </radialGradient>
          <radialGradient id="lc-headlight" cx="35%" cy="50%" r="55%">
            <stop offset="0%" stopColor="#FFF6CC" />
            <stop offset="50%" stopColor="#FFD23F" />
            <stop offset="100%" stopColor="#E89B00" />
          </radialGradient>
          <radialGradient id="lc-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
            <stop offset="70%" stopColor="#000" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="210" cy="158" rx="175" ry="6" fill="url(#lc-shadow)" />

        {/* Roof topper */}
        <g>
          <rect x="152" y="22" width="3" height="10" fill="#1E2326" />
          <rect x="265" y="22" width="3" height="10" fill="#1E2326" />
          <rect x="140" y="6" width="140" height="16" rx="2" fill="#FFD23F" />
          <text
            x="210" y="17" textAnchor="middle"
            fontSize="8" fontWeight="900"
            fill="#1E2326"
            fontFamily="Inter, sans-serif"
            letterSpacing="1"
          >
            THE PASS GUYS
          </text>
        </g>

        {/* Main body silhouette */}
        <path
          d="M 32 116
             Q 26 114 26 104
             L 26 92
             Q 26 84 36 82
             L 60 76
             Q 76 70 84 60
             L 106 36
             Q 116 28 134 28
             L 280 28
             Q 296 28 306 38
             L 326 60
             Q 334 70 350 74
             L 388 82
             Q 398 84 398 94
             L 398 112
             Q 398 116 394 116
             L 372 116
             Q 366 100 354 94
             Q 340 86 326 86
             Q 312 86 298 94
             Q 286 100 280 116
             L 138 116
             Q 132 100 120 94
             Q 106 86 92 86
             Q 78 86 64 94
             Q 52 100 46 116
             Z"
          fill="url(#lc-body)"
        />

        {/* Lower sill (dark band) */}
        <path
          d="M 26 104 L 26 112 Q 26 116 30 116 L 46 116 Q 52 100 64 94 Q 78 86 92 86 Q 106 86 120 94 Q 132 100 138 116 L 280 116 Q 286 100 298 94 Q 312 86 326 86 Q 340 86 354 94 Q 366 100 372 116 L 394 116 Q 398 116 398 112 L 398 104 L 372 102 Q 360 92 326 92 Q 292 92 280 102 L 138 102 Q 126 92 92 92 Q 58 92 46 102 Z"
          fill="url(#lc-sill)"
        />

        {/* Glass band */}
        <path
          d="M 112 38 Q 120 32 134 32 L 280 32 Q 292 32 300 40 L 318 58 Q 322 64 316 64 L 100 64 Q 96 64 100 60 Z"
          fill="url(#lc-glass)"
        />
        <rect x="200" y="32" width="3" height="32" fill="#0A0C0D" />
        {/* Glass highlight */}
        <path d="M 116 34 L 196 34 L 196 46 L 110 46 Z" fill="url(#lc-glass-hl)" />
        <path d="M 206 34 L 296 34 Q 304 34 310 42 L 220 50 Z" fill="url(#lc-glass-hl)" />

        {/* Wing mirror */}
        <path d="M 102 58 L 96 55 L 92 60 L 100 63 Z" fill="url(#lc-body)" />

        {/* Door cuts and handles */}
        <line x1="166" y1="64" x2="166" y2="98" stroke="#C0B79F" strokeWidth="0.8" opacity="0.7" />
        <line x1="236" y1="64" x2="236" y2="98" stroke="#C0B79F" strokeWidth="0.8" opacity="0.7" />
        <rect x="146" y="84" width="14" height="3" rx="1.5" fill="#1E2326" opacity="0.5" />
        <rect x="212" y="84" width="14" height="3" rx="1.5" fill="#1E2326" opacity="0.5" />
        <rect x="282" y="84" width="14" height="3" rx="1.5" fill="#1E2326" opacity="0.5" />

        {/* Brake light cluster */}
        <rect x="28" y="92" width="10" height="9" rx="1.5" fill="#C0392B" />
        <rect x="28" y="92" width="10" height="2.5" rx="0.5" fill="#FF6B5C" />

        {/* Headlight */}
        <ellipse cx="390" cy="96" rx="7" ry="9" fill="url(#lc-headlight)" />
        <ellipse cx="388" cy="93" rx="2.5" ry="3" fill="#FFF8DC" opacity="0.9" />

        {/* L plate */}
        <g transform="translate(38, 50)">
          <rect width="22" height="22" rx="2" fill="#FFFFFF" />
          <text x="11" y="18" textAnchor="middle" fontSize="18" fontWeight="900" fill="#E63946" fontFamily="Inter, sans-serif">L</text>
        </g>

        {/* Rear wheel */}
        <g transform="translate(92, 116)">
          <circle r="20" fill="#0A0C0D" />
          <circle r="19" fill="none" stroke="#1E2326" strokeWidth="1" />
          <g className="car-wheel-spokes">
            <circle r="13" fill="url(#lc-rim)" />
            <g fill="#B8C0C7">
              <path d="M 0 -11 L 1.5 -3 L -1.5 -3 Z" />
              <g transform="rotate(72)"><path d="M 0 -11 L 1.5 -3 L -1.5 -3 Z" /></g>
              <g transform="rotate(144)"><path d="M 0 -11 L 1.5 -3 L -1.5 -3 Z" /></g>
              <g transform="rotate(216)"><path d="M 0 -11 L 1.5 -3 L -1.5 -3 Z" /></g>
              <g transform="rotate(288)"><path d="M 0 -11 L 1.5 -3 L -1.5 -3 Z" /></g>
            </g>
            <circle r="3" fill="#1A1D20" />
          </g>
        </g>

        {/* Front wheel */}
        <g transform="translate(326, 116)">
          <circle r="20" fill="#0A0C0D" />
          <circle r="19" fill="none" stroke="#1E2326" strokeWidth="1" />
          <g className="car-wheel-spokes">
            <circle r="13" fill="url(#lc-rim)" />
            <g fill="#B8C0C7">
              <path d="M 0 -11 L 1.5 -3 L -1.5 -3 Z" />
              <g transform="rotate(72)"><path d="M 0 -11 L 1.5 -3 L -1.5 -3 Z" /></g>
              <g transform="rotate(144)"><path d="M 0 -11 L 1.5 -3 L -1.5 -3 Z" /></g>
              <g transform="rotate(216)"><path d="M 0 -11 L 1.5 -3 L -1.5 -3 Z" /></g>
              <g transform="rotate(288)"><path d="M 0 -11 L 1.5 -3 L -1.5 -3 Z" /></g>
            </g>
            <circle r="3" fill="#1A1D20" />
          </g>
        </g>
      </svg>
    </div>
  );
}
