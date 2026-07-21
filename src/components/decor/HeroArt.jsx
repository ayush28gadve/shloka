import { motion, useReducedMotion } from 'framer-motion'
import { EASE } from '../../lib/motion'

/*
 * Layered sunrise-temple illustration.
 * Every layer is hand-built SVG — sun, mandala halo, temple silhouette,
 * hills, water and a foreground lotus that floats gently.
 */
export default function HeroArt() {
  const reduce = useReducedMotion()

  const float = reduce
    ? {}
    : {
        y: [0, -10, 0],
        transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
      }
  const floatSlow = reduce
    ? {}
    : {
        y: [0, -6, 0],
        transition: { duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
      }
  const breathe = reduce
    ? {}
    : {
        opacity: [0.5, 0.85, 0.5],
        transition: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
      }

  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none" aria-hidden="true">
      {/* Soft ambient glow behind the whole scene */}
      <div className="absolute inset-0 -m-10 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgb(212_139_42/0.18),transparent_65%)]" />

      <svg viewBox="0 0 560 620" fill="none" className="relative w-full h-auto drop-shadow-[0_40px_80px_rgb(30_48_40/0.18)]">
        <defs>
          <linearGradient id="sky" x1="280" y1="0" x2="280" y2="470" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#FFF6E6" />
            <stop offset="0.55" stopColor="#F8E5C4" />
            <stop offset="1" stopColor="#EED9B8" />
          </linearGradient>
          <linearGradient id="sun" x1="280" y1="150" x2="280" y2="330" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#E9A94E" />
            <stop offset="1" stopColor="#D48B2A" />
          </linearGradient>
          <linearGradient id="water" x1="280" y1="470" x2="280" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#DCE5D9" />
            <stop offset="1" stopColor="#C9D8CB" />
          </linearGradient>
          <linearGradient id="templeG" x1="280" y1="180" x2="280" y2="470" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#2C5040" />
            <stop offset="1" stopColor="#1E3028" />
          </linearGradient>
          <clipPath id="arch">
            {/* Temple-arch shaped frame */}
            <path d="M60 620V270C60 128 158 30 280 30s220 98 220 240v350H60Z" />
          </clipPath>
        </defs>

        <g clipPath="url(#arch)">
          {/* Sky */}
          <rect x="0" y="0" width="560" height="470" fill="url(#sky)" />

          {/* Mandala halo — breathes very slowly */}
          <motion.g animate={breathe} style={{ transformOrigin: '280px 250px' }}>
            <g stroke="#B79045" opacity="0.5">
              <circle cx="280" cy="250" r="150" strokeWidth="0.8" strokeDasharray="2 8" />
              <circle cx="280" cy="250" r="122" strokeWidth="0.6" />
              <circle cx="280" cy="250" r="184" strokeWidth="0.5" strokeDasharray="1 6" />
              {Array.from({ length: 16 }).map((_, i) => (
                <g key={i} transform={`rotate(${(i * 360) / 16} 280 250)`}>
                  <path d="M280 96c5 9 5 17 0 26-5-9-5-17 0-26Z" strokeWidth="0.7" />
                </g>
              ))}
            </g>
          </motion.g>

          {/* Rising sun */}
          <motion.circle
            cx="280"
            cy="250"
            r="86"
            fill="url(#sun)"
            initial={{ opacity: 0, cy: 290 }}
            animate={{ opacity: 1, cy: 250 }}
            transition={{ duration: 2.2, ease: EASE }}
          />

          {/* Distant hills */}
          <path d="M-20 470c90-70 170-96 260-84 40 5 90 24 140 24 60 0 120-22 200-10v70H-20Z" fill="#3E5C4B" opacity="0.35" />
          <path d="M-20 470c120-46 230-56 330-30 90 23 180 20 270 2v28H-20Z" fill="#2C5040" opacity="0.5" />

          {/* Temple silhouette */}
          <g fill="url(#templeG)">
            {/* main shikhara */}
            <path d="M280 178l6 22 8 12 6 26 8 14 6 34 10 18v166h-88V304l10-18 6-34 8-14 6-26 8-12 6-22Z" />
            {/* kalash finial */}
            <path d="M280 150c4 6 6 12 6 18h-12c0-6 2-12 6-18Z" fill="#B79045" />
            <circle cx="280" cy="146" r="3.4" fill="#D48B2A" />
            {/* side towers */}
            <path d="M198 300l5 14 6 10 5 24 7 14v108h-52V362l7-14 5-24 6-10 5-14Z" />
            <path d="M362 300l5 14 6 10 5 24 7 14v108h-52V362l7-14 5-24 6-10 5-14Z" />
            {/* base plinth */}
            <rect x="140" y="452" width="280" height="18" rx="2" />
            <rect x="120" y="468" width="320" height="14" rx="2" />
          </g>

          {/* Doorway glow */}
          <path d="M280 388c14 0 22 12 22 30v52h-44v-52c0-18 8-30 22-30Z" fill="#E9A94E" opacity="0.85" />

          {/* Water with gentle reflections */}
          <rect x="0" y="482" width="560" height="138" fill="url(#water)" />
          <motion.g stroke="#FFFDF8" strokeLinecap="round" animate={breathe}>
            <path d="M180 512h64" strokeWidth="3" opacity="0.7" />
            <path d="M300 530h84" strokeWidth="3" opacity="0.5" />
            <path d="M140 552h56" strokeWidth="3" opacity="0.45" />
            <path d="M330 572h60" strokeWidth="3" opacity="0.35" />
          </motion.g>
          <path d="M244 500h72c-6 10-16 14-36 14s-30-4-36-14Z" fill="#D48B2A" opacity="0.25" />
        </g>

        {/* Arch frame stroke */}
        <path
          d="M60 620V270C60 128 158 30 280 30s220 98 220 240v350"
          stroke="#B79045"
          strokeWidth="2"
          opacity="0.65"
        />
        <path
          d="M76 620V272C76 138 168 46 280 46s204 92 204 226v348"
          stroke="#B79045"
          strokeWidth="0.8"
          opacity="0.4"
        />
      </svg>

      {/* Floating Om glyph */}
      <motion.div
        animate={float}
        className="absolute left-[4%] top-[16%] glass rounded-2xl px-4 py-3 shadow-soft"
      >
        <span className="font-devanagari text-3xl text-forest leading-none">ॐ</span>
      </motion.div>

      {/* Floating shloka card */}
      <motion.div
        animate={floatSlow}
        className="absolute right-[-2%] sm:right-[-4%] top-[38%] glass rounded-2xl px-5 py-4 shadow-soft max-w-[210px]"
      >
        <p className="font-devanagari text-forest text-sm leading-relaxed">विद्या ददाति विनयम्</p>
        <p className="text-[11px] text-mist mt-1 tracking-wide">Knowledge bestows humility</p>
      </motion.div>

      {/* Floating lotus */}
      <motion.div animate={float} className="absolute left-[8%] bottom-[6%]">
        <svg viewBox="0 0 64 40" className="w-16 h-10 text-saffron" fill="none" aria-hidden="true">
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M32 2c-4.4 7.6-4.4 15.2 0 22.8 4.4-7.6 4.4-15.2 0-22.8Z" fill="currentColor" fillOpacity="0.15" />
            <path d="M17 8.5c.8 8.7 5.7 14.6 14.6 17.7C30.8 17.5 25.9 11.6 17 8.5Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M47 8.5c-.8 8.7-5.7 14.6-14.6 17.7.8-8.7 5.7-14.6 14.6-17.7Z" fill="currentColor" fillOpacity="0.1" />
            <path d="M4 20.5c5.8 9.8 14 14.7 28 14.7s22.2-4.9 28-14.7c-7.8-2-15-1-19.6 2.4-2.9-2-5.7-3-8.4-3s-5.5 1-8.4 3C19 19.5 11.8 18.5 4 20.5Z" fill="currentColor" fillOpacity="0.12" />
          </g>
        </svg>
      </motion.div>
    </div>
  )
}
