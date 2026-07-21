import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

/*
 * Every gallery tile is an original SVG composition — no stock imagery.
 * Tiles share a soft, hand-illustrated visual language.
 */

const Tile = ({ children, label, sub, tall = false }) => (
  <motion.figure
    variants={fadeUp(0, 30)}
    className="group relative mb-6 break-inside-avoid rounded-3xl overflow-hidden shadow-soft border border-gold/15 transition-all duration-700 hover:shadow-lift hover:-translate-y-1.5"
  >
    <div className={`relative w-full ${tall ? 'aspect-[3/4]' : 'aspect-[4/3]'} overflow-hidden`}>
      <div className="absolute inset-0 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]">
        {children}
      </div>
      {/* Hover veil */}
      <div className="absolute inset-0 bg-gradient-to-t from-deepgreen/70 via-deepgreen/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <figcaption className="absolute inset-x-0 bottom-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
        <p className="font-display text-xl font-semibold text-cream">{label}</p>
        <p className="text-[12px] text-cream/70 tracking-wide">{sub}</p>
      </figcaption>
    </div>
  </motion.figure>
)

/* ---------- individual artworks ---------- */

const DiyaArt = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="300" fill="#1E3028" />
    <circle cx="200" cy="130" r="90" fill="#D48B2A" opacity="0.08" />
    <circle cx="200" cy="130" r="55" fill="#D48B2A" opacity="0.1" />
    {/* flame */}
    <path d="M200 92c14 18 20 32 20 44 0 14-9 24-20 24s-20-10-20-24c0-12 6-26 20-44Z" fill="#E9A94E" />
    <path d="M200 110c7 10 10 18 10 25 0 8-4 13-10 13s-10-5-10-13c0-7 3-15 10-25Z" fill="#FFF6E6" />
    {/* diya bowl */}
    <path d="M120 170c20 26 46 38 80 38s60-12 80-38c-26-8-52-10-80-4-28-6-54-4-80 4Z" fill="#B79045" />
    <path d="M132 176c18 18 40 26 68 26s50-8 68-26" stroke="#8E6E30" strokeWidth="3" fill="none" opacity="0.5" />
    <ellipse cx="200" cy="230" rx="110" ry="10" fill="#D48B2A" opacity="0.15" />
  </svg>
)

const OmArt = () => (
  <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="500" fill="#FAF8F3" />
    <circle cx="200" cy="250" r="150" fill="none" stroke="#B79045" strokeWidth="1" strokeDasharray="2 8" />
    <circle cx="200" cy="250" r="120" fill="#D48B2A" opacity="0.07" />
    <text
      x="200" y="300" textAnchor="middle"
      fontFamily="'Noto Serif Devanagari', serif" fontSize="170" fill="#254336"
    >
      ॐ
    </text>
    {Array.from({ length: 12 }).map((_, i) => (
      <g key={i} transform={`rotate(${(i * 360) / 12} 200 250)`}>
        <path d="M200 84c5 9 5 17 0 26-5-9-5-17 0-26Z" fill="none" stroke="#B79045" strokeWidth="1" opacity="0.5" />
      </g>
    ))}
  </svg>
)

const LotusPondArt = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="300" fill="#DCE5D9" />
    <rect y="150" width="400" height="150" fill="#C9D8CB" />
    <ellipse cx="130" cy="220" rx="70" ry="16" fill="#254336" opacity="0.15" />
    <ellipse cx="300" cy="250" rx="60" ry="14" fill="#254336" opacity="0.12" />
    {/* lotus */}
    <g transform="translate(140 130)">
      <path d="M60 10c-8 14-8 28 0 42 8-14 8-28 0-42Z" fill="#D48B2A" opacity="0.8" />
      <path d="M32 22c2 16 11 27 27 33-2-16-11-27-27-33Z" fill="#E9A94E" opacity="0.8" />
      <path d="M88 22c-2 16-11 27-27 33 2-16 11-27 27-33Z" fill="#E9A94E" opacity="0.8" />
      <path d="M8 44c11 18 27 27 52 27s41-9 52-27c-15-4-28-2-37 5-5-4-10-6-15-6s-10 2-15 6c-9-7-22-9-37-5Z" fill="#D48B2A" />
    </g>
    <path d="M60 260h60M250 275h70M120 285h44" stroke="#FFFDF8" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
  </svg>
)

const ManuscriptArt = () => (
  <svg viewBox="0 0 400 500" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="500" fill="#254336" />
    <rect x="60" y="80" width="280" height="340" rx="10" fill="#FAF8F3" />
    <rect x="60" y="80" width="280" height="340" rx="10" fill="none" stroke="#B79045" strokeWidth="2" opacity="0.6" />
    <text x="200" y="150" textAnchor="middle" fontFamily="'Noto Serif Devanagari', serif" fontSize="28" fill="#254336">
      कर्मण्येवाधिकारस्ते
    </text>
    <text x="200" y="190" textAnchor="middle" fontFamily="'Noto Serif Devanagari', serif" fontSize="28" fill="#254336">
      मा फलेषु कदाचन
    </text>
    {[230, 258, 286, 314, 342].map((y, i) => (
      <line key={y} x1="100" y1={y} x2={i % 2 ? 270 : 300} y2={y} stroke="#B79045" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
    ))}
    <circle cx="200" cy="390" r="4" fill="#D48B2A" />
  </svg>
)

const MudraArt = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="300" fill="#EED9B8" />
    <circle cx="200" cy="150" r="110" fill="#FFF6E6" opacity="0.7" />
    {/* meditating figure */}
    <g fill="#254336">
      <circle cx="200" cy="96" r="26" />
      <path d="M200 126c-34 0-56 22-62 56l-24 34c-4 6 0 12 8 12h156c8 0 12-6 8-12l-24-34c-6-34-28-56-62-56Z" />
      <path d="M116 216c22-12 50-18 84-18s62 6 84 18c4 8-2 14-10 14H126c-8 0-14-6-10-14Z" opacity="0.9" />
    </g>
    <circle cx="200" cy="96" r="42" fill="none" stroke="#D48B2A" strokeWidth="2" opacity="0.6" />
    <circle cx="200" cy="96" r="56" fill="none" stroke="#D48B2A" strokeWidth="1" strokeDasharray="2 6" opacity="0.5" />
  </svg>
)

const TempleArt = () => (
  <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
    <rect width="400" height="300" fill="#F8E5C4" />
    <circle cx="200" cy="140" r="70" fill="#D48B2A" opacity="0.35" />
    <path d="M0 300V240c60-30 120-40 200-40s140 10 200 40v60H0Z" fill="#2C5040" />
    <g fill="#1E3028">
      <path d="M200 96l5 16 6 9 5 19 6 10 4 25 8 13v52h-68v-52l8-13 4-25 6-10 5-19 6-9 5-16Z" />
      <path d="M140 180l4 10 4 7 4 17 5 10v16h-40v-16l5-10 4-17 4-7 4-10Z" transform="translate(4 0)" />
      <path d="M240 180l4 10 4 7 4 17 5 10v16h-40v-16l5-10 4-17 4-7 4-10Z" transform="translate(12 0)" />
    </g>
    <path d="M200 78c3 5 5 9 5 13h-10c0-4 2-8 5-13Z" fill="#B79045" />
    <path d="M60 270h60M280 280h56" stroke="#FFFDF8" strokeWidth="3" strokeLinecap="round" opacity="0.4" />
  </svg>
)

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-24 sm:py-32 bg-cream">
      <div className="absolute inset-0 texture-paper" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Glimpses"
          title={
            <>
              Moments from
              <span className="italic text-saffron"> our sanctuary.</span>
            </>
          }
          subtitle="Illustrated glimpses of life at the class — chanting circles, morning yoga, festival evenings and quiet study."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 sm:mt-20 columns-1 sm:columns-2 lg:columns-3 gap-6"
        >
          <Tile label="Sandhya Deepam" sub="Evening lamp lighting before class"><DiyaArt /></Tile>
          <Tile tall label="The Sacred Syllable" sub="Where every session begins"><OmArt /></Tile>
          <Tile label="Lotus Pond Courtyard" sub="Our peaceful learning space"><LotusPondArt /></Tile>
          <Tile label="Morning Dhyana" sub="Silence before the sunrise batch"><MudraArt /></Tile>
          <Tile tall label="Gita Chanting" sub="Verses learnt line by line"><ManuscriptArt /></Tile>
          <Tile label="Temple Visits" sub="Heritage walks with students"><TempleArt /></Tile>
        </motion.div>
      </div>
    </section>
  )
}
