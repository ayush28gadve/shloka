import { motion } from 'framer-motion'
import { Sunrise, Sunset, CalendarHeart } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const SLOTS = [
  {
    icon: Sunrise,
    period: 'Morning Sadhana',
    time: '6:00 — 7:30 AM',
    items: ['Surya Namaskar & Asanas', 'Pranayama practice', 'Morning shloka chanting'],
    note: 'Begin the day in stillness, before the world wakes up.',
  },
  {
    icon: Sunset,
    period: 'Evening Classes',
    time: '5:30 — 7:30 PM',
    items: ['Shloka learning for children', 'Meaning & pronunciation sessions', 'Guided meditation'],
    note: 'The most loved batch — after school, before dinner.',
  },
  {
    icon: CalendarHeart,
    period: 'Weekend Immersion',
    time: 'Sat & Sun · 8:00 — 10:00 AM',
    items: ['Full yoga & pranayama flow', 'Gita chanting circle', 'Values & culture discussions'],
    note: 'Longer, deeper sessions for families and working adults.',
  },
]

export default function Routine() {
  return (
    <section id="routine" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Daily Routine"
          title={
            <>
              A rhythm designed around
              <span className="italic text-saffron"> your day.</span>
            </>
          }
          subtitle="Choose the hour that fits your life. Each batch keeps the same gentle structure — breath, practice, verse, silence."
        />

        <motion.div
          variants={stagger(0.14)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-16 sm:mt-24 grid lg:grid-cols-3 gap-10 lg:gap-8"
        >
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-7 left-[16%] right-[16%] h-px bg-gradient-to-r from-gold/10 via-gold/40 to-gold/10" />

          {SLOTS.map((s, i) => (
            <motion.article key={s.period} variants={fadeUp(0, 34)} className="relative">
              {/* Node */}
              <div className="relative z-10 mx-auto lg:mx-0 flex lg:justify-center">
                <div className="grid place-items-center w-14 h-14 rounded-full bg-cream border border-gold/30 text-saffron shadow-soft">
                  <s.icon className="w-6 h-6" strokeWidth={1.6} />
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-cream border border-gold/15 p-8 shadow-soft transition-all duration-700 hover:shadow-lift hover:-translate-y-1.5 lg:text-center">
                <span className="text-[11px] font-semibold tracking-[0.22em] uppercase text-saffron">
                  {`0${i + 1}`}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-forest">{s.period}</h3>
                <p className="mt-1 text-[13px] font-semibold text-gold tracking-wide">{s.time}</p>
                <ul className="mt-5 space-y-2.5 text-[13.5px] text-mist lg:text-left">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-start gap-2.5">
                      <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-saffron/60 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 pt-5 border-t border-gold/15 text-[12.5px] italic text-mist/80 font-display text-base">
                  {s.note}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
