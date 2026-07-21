import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Phone, ArrowRight, Sparkles } from 'lucide-react'
import { useRef } from 'react'
import HeroArt from './decor/HeroArt'
import Mandala from './decor/Mandala'
import { EASE, fadeUp, stagger } from '../lib/motion'

const STATS = [
  { value: '15+', label: 'Years of Teaching' },
  { value: '1200+', label: 'Students Guided' },
  { value: '100+', label: 'Shlokas in Curriculum' },
]

export default function Hero() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const yArt = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60])
  const yMandala = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90])

  return (
    <section id="top" ref={ref} className="relative overflow-hidden">
      {/* Sunrise wash */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgb(212_139_42/0.14),transparent_60%),radial-gradient(ellipse_60%_50%_at_10%_10%,rgb(37_67_54/0.07),transparent_55%)]" />
      {/* Faint Sanskrit texture */}
      <div className="absolute inset-0 texture-paper opacity-70" />
      <motion.div style={{ y: yMandala }} className="absolute -left-40 -top-24 text-forest/8 pointer-events-none">
        <Mandala className="w-[520px] h-[520px]" />
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 pt-36 sm:pt-44 pb-20 sm:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 lg:gap-10 items-center">
          {/* Copy */}
          <motion.div variants={stagger(0.14, 0.35)} initial="hidden" animate="visible">
            <motion.div
              variants={fadeUp(0, 24)}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-[12px] font-medium tracking-wide text-forest shadow-soft mb-8"
            >
              <Sparkles className="w-3.5 h-3.5 text-saffron" />
              Osmanpura · Chhatrapati Sambhajinagar
            </motion.div>

            <motion.h1
              variants={fadeUp(0, 34)}
              className="font-display font-medium text-forest text-[3.1rem] sm:text-7xl lg:text-[5.2rem] leading-[1.02] tracking-tight"
            >
              Ancient Wisdom.
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-saffron via-gold to-saffron italic">
                Modern Living.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp(0, 28)}
              className="mt-7 max-w-lg text-mist text-[15.5px] sm:text-lg leading-relaxed text-balance"
            >
              Discover the timeless beauty of Sanskrit Shlokas, Yoga, Meditation and
              Value-Based Learning — taught with love, in a peaceful environment.
            </motion.p>

            <motion.div variants={fadeUp(0, 26)} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2.5 rounded-full bg-forest px-8 py-4 text-[14.5px] font-semibold text-cream shadow-lift transition-all duration-500 hover:bg-deepgreen hover:-translate-y-0.5"
              >
                Join Classes
                <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
              </a>
              <a
                href="tel:+919999999999"
                className="inline-flex items-center gap-2.5 rounded-full glass px-8 py-4 text-[14.5px] font-semibold text-forest shadow-soft transition-all duration-500 hover:shadow-lift hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4 text-saffron" />
                Call Now
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeUp(0, 24)}
              className="mt-14 grid grid-cols-3 max-w-md divide-x divide-gold/20"
            >
              {STATS.map((s) => (
                <div key={s.label} className="px-4 first:pl-0">
                  <p className="font-display text-3xl sm:text-4xl font-semibold text-forest">{s.value}</p>
                  <p className="mt-1 text-[11.5px] text-mist tracking-wide leading-snug">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Illustration */}
          <motion.div
            style={{ y: yArt }}
            initial={{ opacity: 0, y: reduce ? 0 : 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: EASE, delay: 0.5 }}
          >
            <HeroArt />
          </motion.div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-parchment" />
    </section>
  )
}
