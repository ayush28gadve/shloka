import { motion } from 'framer-motion'
import { ScrollText, Flower2, BrainCircuit, Wind, Baby, Users } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const PROGRAMS = [
  {
    icon: ScrollText,
    sanskrit: 'श्लोक',
    title: 'Sanskrit Shlokas',
    text: 'Learn timeless verses with perfect pronunciation, meaning and melody — from the Bhagavad Gita, Upanishads and stotras.',
    tag: 'Signature',
  },
  {
    icon: Flower2,
    sanskrit: 'योग',
    title: 'Yoga',
    text: 'Classical asana practice for strength, flexibility and balance — adapted gently for every age and body.',
    tag: 'All Ages',
  },
  {
    icon: BrainCircuit,
    sanskrit: 'ध्यान',
    title: 'Meditation',
    text: 'Guided dhyana sessions that quiet the mind, sharpen focus and bring a deep, lasting sense of peace.',
    tag: 'Calm',
  },
  {
    icon: Wind,
    sanskrit: 'प्राणायाम',
    title: 'Pranayama',
    text: 'The ancient science of breath — Anulom-Vilom, Bhramari, Kapalbhati — taught safely and progressively.',
    tag: 'Breath',
  },
  {
    icon: Baby,
    sanskrit: 'बाल वर्ग',
    title: 'Children’s Classes',
    text: 'Joyful, story-rich sessions where children absorb shlokas, values and discipline through play and repetition.',
    tag: 'Ages 5–14',
  },
  {
    icon: Users,
    sanskrit: 'प्रौढ वर्ग',
    title: 'Adult & Senior Classes',
    text: 'Unhurried batches for working adults and seniors — wellness, community and wisdom at a comfortable pace.',
    tag: 'Ages 15+',
  },
]

export default function Programs() {
  return (
    <section id="programs" className="relative py-24 sm:py-32 bg-cream">
      <div className="absolute inset-0 texture-paper" />
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Our Programs"
          title={
            <>
              Six paths.
              <span className="italic text-saffron"> One journey inward.</span>
            </>
          }
          subtitle="Every program is thoughtfully structured — small batches, personal attention and a pace that honours each student."
        />

        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7"
        >
          {PROGRAMS.map((p) => (
            <motion.article
              key={p.title}
              variants={fadeUp(0, 32)}
              className="group relative flex flex-col rounded-3xl bg-parchment border border-gold/15 p-8 shadow-soft overflow-hidden transition-all duration-700 hover:shadow-lift hover:-translate-y-2"
            >
              {/* Watermark sanskrit */}
              <span className="absolute -right-2 -top-5 font-devanagari text-[5.5rem] leading-none text-forest/[0.05] select-none transition-all duration-700 group-hover:text-saffron/10">
                {p.sanskrit}
              </span>

              <div className="flex items-start justify-between">
                <div className="grid place-items-center w-14 h-14 rounded-2xl bg-forest text-gold shadow-soft transition-transform duration-500 group-hover:scale-105">
                  <p.icon className="w-6 h-6" strokeWidth={1.6} />
                </div>
                <span className="rounded-full bg-saffron/10 text-saffron text-[10.5px] font-semibold tracking-[0.14em] uppercase px-3 py-1.5">
                  {p.tag}
                </span>
              </div>

              <h3 className="mt-7 font-display text-2xl font-semibold text-forest">{p.title}</h3>
              <p className="mt-3 text-[14px] leading-relaxed text-mist flex-1">{p.text}</p>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-forest/70 group-hover:text-saffron transition-colors duration-500"
              >
                Enquire about this class
                <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
              </a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
