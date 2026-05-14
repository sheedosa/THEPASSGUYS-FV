/**
 * The Pass Guys journey scene.
 *
 * Abstract S-curve route line connecting four milestones:
 *   ① Postcode chip → ② L plate → ③ Instructor match → ④ Pass tick
 *
 * The route draws itself segment-by-segment on load, then a glowing
 * primary-green pulse dot continuously travels the full path.
 *
 * No outlines. Cream / dark / primary green palette. Editorial.
 */

const FULL_PATH =
  'M 60 246 Q 110 226 170 196 Q 230 168 290 116 Q 340 76 408 50';

export default function JourneyScene({ className = '' }: { className?: string }) {
  return (
    <div className={`journey-scene ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 460 280"
        xmlns="http://www.w3.org/2000/svg"
        className="journey-svg"
      >
        <defs>
          <radialGradient id="journey-shadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0E1112" stopOpacity="0.18" />
            <stop offset="70%" stopColor="#0E1112" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#0E1112" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="match-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00d26f" />
            <stop offset="100%" stopColor="#00a85a" />
          </linearGradient>
          <radialGradient id="pass-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00d26f" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00d26f" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="card-bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#F4EEE4" />
          </linearGradient>
        </defs>

        {/* ---------- Route line (draws on load) ---------- */}
        <path
          className="journey-path"
          d={FULL_PATH}
          fill="none"
          stroke="#1E2326"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 9"
          opacity="0.35"
        />

        {/* Glowing pulse trail (a wider faint dot trailing the head) */}
        <circle className="journey-trail" r="14" fill="url(#pass-glow)">
          <animateMotion
            dur="6.5s"
            repeatCount="indefinite"
            keyTimes="0;1"
            keyPoints="0;1"
            calcMode="linear"
            path={FULL_PATH}
          />
        </circle>

        {/* Bright traveling head dot */}
        <circle className="journey-head" r="5.5" fill="#00d26f">
          <animateMotion
            dur="6.5s"
            repeatCount="indefinite"
            keyTimes="0;1"
            keyPoints="0;1"
            calcMode="linear"
            path={FULL_PATH}
          />
        </circle>

        {/* ---------- Day labels along the route ---------- */}
        <g
          className="journey-label journey-label-1"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          fontWeight="900"
          fill="#0E1112"
          opacity="0.4"
          letterSpacing="0.5"
        >
          <text x="92" y="218" textAnchor="middle">DAY 1</text>
        </g>
        <g
          className="journey-label journey-label-2"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          fontWeight="900"
          fill="#0E1112"
          opacity="0.4"
          letterSpacing="0.5"
        >
          <text x="222" y="156" textAnchor="middle">DAY 7</text>
        </g>
        <g
          className="journey-label journey-label-3"
          fontFamily="Inter, sans-serif"
          fontSize="9"
          fontWeight="900"
          fill="#0E1112"
          opacity="0.4"
          letterSpacing="0.5"
        >
          <text x="356" y="80" textAnchor="middle">DAY 42</text>
        </g>

        {/* ============================================
            NODE 1 — Postcode chip
            ============================================ */}
        <g className="journey-node journey-node-1" transform="translate(60, 246)">
          {/* Node shadow */}
          <ellipse cx="0" cy="22" rx="58" ry="6" fill="url(#journey-shadow)" />

          {/* Pill */}
          <rect x="-58" y="-18" width="116" height="36" rx="18" fill="url(#card-bg)" />
          <rect x="-58" y="-18" width="116" height="36" rx="18" fill="none" stroke="#1E2326" strokeOpacity="0.08" strokeWidth="1" />

          {/* Pin icon */}
          <g transform="translate(-40, 0)">
            <path
              d="M 0 -8 C 4 -8 6 -5 6 -2 C 6 2 0 7 0 7 C 0 7 -6 2 -6 -2 C -6 -5 -4 -8 0 -8 Z"
              fill="#00d26f"
            />
            <circle cx="0" cy="-2" r="2" fill="#FFFFFF" />
          </g>

          {/* Postcode */}
          <text
            x="6" y="4"
            fontFamily="Inter, sans-serif"
            fontSize="13" fontWeight="900"
            fill="#1E2326"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            M14 8AB
          </text>
        </g>

        {/* ============================================
            NODE 2 — L plate (red on white)
            ============================================ */}
        <g
          className="journey-node journey-node-2"
          transform="translate(170, 196) rotate(-6)"
        >
          <rect x="-26" y="22" width="50" height="6" rx="2" fill="url(#journey-shadow)" opacity="0.5" />
          <rect x="-22" y="-22" width="44" height="44" rx="4" fill="#FFFFFF" />
          <rect x="-22" y="-22" width="44" height="44" rx="4" fill="none" stroke="#1E2326" strokeOpacity="0.12" strokeWidth="1.5" />
          <text
            x="0" y="14"
            fontFamily="Inter, sans-serif"
            fontSize="38" fontWeight="900"
            fill="#E63946"
            textAnchor="middle"
          >
            L
          </text>
        </g>

        {/* ============================================
            NODE 3 — Match card with avatar
            ============================================ */}
        <g className="journey-node journey-node-3" transform="translate(290, 116)">
          <ellipse cx="0" cy="32" rx="42" ry="5" fill="url(#journey-shadow)" />

          {/* Avatar (with green ring) */}
          <circle cx="0" cy="0" r="22" fill="url(#match-ring)" />
          <circle cx="0" cy="0" r="18" fill="url(#card-bg)" />
          <text
            x="0" y="6"
            fontFamily="Inter, sans-serif"
            fontSize="14" fontWeight="900"
            fill="#1E2326"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            AK
          </text>

          {/* Check badge */}
          <g transform="translate(16, 14)">
            <circle r="7" fill="#00d26f" />
            <circle r="7" fill="none" stroke="#FFFFFF" strokeWidth="2" />
            <path
              d="M -3 0 L -1 2 L 3 -2"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>

          {/* Name label */}
          <g transform="translate(0, 42)">
            <rect x="-30" y="-9" width="60" height="18" rx="4" fill="url(#card-bg)" />
            <rect x="-30" y="-9" width="60" height="18" rx="4" fill="none" stroke="#1E2326" strokeOpacity="0.08" strokeWidth="1" />
            <text
              x="0" y="3"
              fontFamily="Inter, sans-serif"
              fontSize="9" fontWeight="900"
              fill="#1E2326"
              textAnchor="middle"
              letterSpacing="0.8"
            >
              MATCHED
            </text>
          </g>
        </g>

        {/* ============================================
            NODE 4 — Pass tick (destination)
            ============================================ */}
        <g className="journey-node journey-node-4" transform="translate(408, 50)">
          {/* Outer glow halo (pulses) */}
          <circle className="journey-pass-halo" r="34" fill="url(#pass-glow)" />

          {/* Main green disc */}
          <circle r="22" fill="#00d26f" />
          <circle r="22" fill="none" stroke="#FFFFFF" strokeWidth="2" />

          {/* Big check */}
          <path
            d="M -8 0 L -2 6 L 9 -6"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* "PASSED" label below */}
          <g transform="translate(0, 42)">
            <rect x="-32" y="-9" width="64" height="20" rx="4" fill="#1E2326" />
            <text
              x="0" y="4"
              fontFamily="Inter, sans-serif"
              fontSize="10" fontWeight="900"
              fill="#FFFFFF"
              textAnchor="middle"
              letterSpacing="1.2"
            >
              PASSED
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
