/** Lightweight CSS/SVG 3D-printer printing a heart — no Three.js. */
export function PrinterHeart() {
  return (
    <div className="printer-scene pointer-events-none select-none" aria-hidden>
      <svg
        className="printer-svg"
        viewBox="0 0 280 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Bed */}
        <rect
          x="48"
          y="198"
          width="184"
          height="14"
          rx="3"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1.5"
        />
        <rect x="58" y="212" width="16" height="22" rx="2" fill="rgba(255,255,255,0.12)" />
        <rect x="206" y="212" width="16" height="22" rx="2" fill="rgba(255,255,255,0.12)" />

        {/* Frame rails */}
        <rect x="52" y="36" width="8" height="162" rx="2" fill="rgba(255,255,255,0.18)" />
        <rect x="220" y="36" width="8" height="162" rx="2" fill="rgba(255,255,255,0.18)" />
        <rect
          x="52"
          y="36"
          width="176"
          height="10"
          rx="2"
          fill="rgba(255,255,255,0.2)"
          stroke="rgba(255,255,255,0.15)"
        />

        {/* Heart being printed — slightly smaller, bottom near bed */}
        <g className="printer-heart" transform="translate(140 190) scale(0.84) translate(-140 -188)">
          <path
            className="printer-heart-fill"
            d="M140 188c-4-8-36-32-52-52-14-18-12-40 6-52 14-10 32-6 40 8 8-14 26-18 40-8 18 12 20 34 6 52-16 20-48 44-52 52z"
            fill="var(--color-accent)"
          />
          <path
            d="M140 188c-4-8-36-32-52-52-14-18-12-40 6-52 14-10 32-6 40 8 8-14 26-18 40-8 18 12 20 34 6 52-16 20-48 44-52 52z"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="1.5"
            fill="none"
          />
        </g>

        {/* Moving gantry + nozzle — home (top) tip ≈ heart top */}
        <g className="printer-gantry">
          <rect
            x="60"
            y="58"
            width="160"
            height="6"
            rx="2"
            fill="rgba(255,255,255,0.35)"
          />
          <g className="printer-head">
            <rect x="128" y="52" width="24" height="16" rx="3" fill="#c8ccd4" />
            <rect x="134" y="68" width="12" height="14" rx="2" fill="#9aa0ab" />
            {/* Compact nozzle tip (not a decorative arrow) */}
            <rect x="137" y="82" width="6" height="8" rx="1" fill="#6b7280" />
            <line
              className="printer-filament"
              x1="140"
              y1="90"
              x2="140"
              y2="104"
              stroke="#e85d04"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}
