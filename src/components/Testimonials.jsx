import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const TESTIMONIALS = [
  {
    quote:
      'My daughter now recites the entire Gita Chapter 12 from memory — but what moves me most is how calm and respectful she has become at home.',
    name: 'Mrs. Deshpande',
    role: 'Parent · Osmanpura',
    initials: 'SD',
  },
  {
    quote:
      'I joined for yoga at 61. The teachers adjusted every posture for me with such patience. My knees, my sleep, my mind — everything is better.',
    name: 'Shri. Kulkarni',
    role: 'Senior Citizen Batch',
    initials: 'RK',
  },
  {
    quote:
      'As an engineering student, the pranayama and meditation sessions helped me through exam season more than anything else. This place is a blessing.',
    name: 'Aditya Joshi',
    role: 'College Student',
    initials: 'AJ',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Voices"
          title={
            <>
              Words from
              <span className="italic text-saffron"> our family.</span>
            </>
          }
          subtitle="Parents, students and seniors — hear what a few of them say about their journey with us."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 sm:mt-20 grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              variants={fadeUp(0, 32)}
              className={`group relative flex flex-col rounded-3xl bg-cream border border-gold/15 p-9 shadow-soft transition-all duration-700 hover:shadow-lift hover:-translate-y-2 ${
                i === 1 ? 'md:-mt-6' : ''
              }`}
            >
              <Quote className="w-9 h-9 text-saffron/25 group-hover:text-saffron/50 transition-colors duration-700" strokeWidth={1.4} />
              <blockquote className="mt-5 flex-1 font-display text-[1.2rem] leading-relaxed text-forest/90 italic">
                “{t.quote}”
              </blockquote>
              <div className="mt-7 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="w-3.5 h-3.5 fill-saffron text-saffron" />
                ))}
              </div>
              <figcaption className="mt-4 pt-5 border-t border-gold/15 flex items-center gap-3.5">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-forest text-gold text-[13px] font-semibold tracking-wide">
                  {t.initials}
                </span>
                <span>
                  <span className="block text-[14px] font-semibold text-forest">{t.name}</span>
                  <span className="block text-[12px] text-mist">{t.role}</span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
