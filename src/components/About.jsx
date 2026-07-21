import { motion } from 'framer-motion'
import { Compass, Eye, BookOpenText, HeartHandshake } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Mandala from './decor/Mandala'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const PILLARS = [
  {
    icon: Compass,
    title: 'Our Mission',
    text: 'To bring the depth of Sanskrit and the discipline of Yoga into everyday life — so every student grows with clarity, character and calm.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    text: 'A generation that carries India’s timeless wisdom with confidence — rooted in values, yet ready for the modern world.',
  },
  {
    icon: BookOpenText,
    title: 'Traditional Teaching',
    text: 'Shlokas are taught the way they were meant to be — with correct pronunciation, meaning, rhythm and reverence, passed on face to face.',
  },
  {
    icon: HeartHandshake,
    title: 'Indian Values',
    text: 'Respect, gratitude, discipline and seva are woven into every class — values that stay with a student for a lifetime.',
  },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute -right-48 top-10 text-gold/10 pointer-events-none">
        <Mandala className="w-[560px] h-[560px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Sanskriti · Sanskaar · Sanskrit"
          title={
            <>
              Where tradition is not taught,
              <span className="italic text-saffron"> it is lived.</span>
            </>
          }
          subtitle="Popular Sanskrit Shloka Classes is a home for seekers of every age — from young children learning their first shloka to elders deepening a lifelong practice."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 sm:mt-20 grid sm:grid-cols-2 gap-6 lg:gap-8"
        >
          {PILLARS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp(0, 30)}
              className="group relative rounded-3xl bg-cream border border-gold/15 p-8 sm:p-10 shadow-soft transition-all duration-700 hover:shadow-lift hover:-translate-y-1.5"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="grid place-items-center w-14 h-14 rounded-2xl bg-forest/5 text-forest transition-colors duration-500 group-hover:bg-saffron/10 group-hover:text-saffron">
                <p.icon className="w-6 h-6" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-display text-2xl sm:text-[1.7rem] font-semibold text-forest">
                {p.title}
              </h3>
              <p className="mt-3 text-[14.5px] leading-relaxed text-mist">{p.text}</p>
            </motion.article>
          ))}
        </motion.div>

        {/* Shloka strip */}
        <motion.div
          variants={fadeUp(0.1, 26)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 sm:mt-20 rounded-[2rem] bg-forest text-center px-8 py-12 sm:py-14 shadow-lift relative overflow-hidden"
        >
          <div className="absolute inset-0 texture-paper opacity-20" />
          <p className="relative font-devanagari text-2xl sm:text-3xl text-gold leading-relaxed">
            सा विद्या या विमुक्तये
          </p>
          <p className="relative mt-3 text-cream/60 text-sm tracking-wide italic font-display text-lg">
            “True knowledge is that which liberates.”
          </p>
        </motion.div>
      </div>
    </section>
  )
}
