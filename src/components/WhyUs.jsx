import { motion } from 'framer-motion'
import { ShieldCheck, Brain, Smile, Mic2, Focus, HeartPulse } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: 'Discipline',
    text: 'Daily practice builds quiet self-discipline that flows into studies, work and life.',
  },
  {
    icon: Brain,
    title: 'Sharper Memory',
    text: 'Chanting and recitation are proven exercises for memory, retention and recall.',
  },
  {
    icon: Smile,
    title: 'Confidence',
    text: 'Reciting on stage, speaking clearly, standing tall — confidence grows verse by verse.',
  },
  {
    icon: Mic2,
    title: 'Pure Pronunciation',
    text: 'Precise Sanskrit uccharan strengthens speech clarity in every language a student speaks.',
  },
  {
    icon: Focus,
    title: 'Deep Concentration',
    text: 'Meditation and mantra train the mind to hold attention — a superpower in a distracted world.',
  },
  {
    icon: HeartPulse,
    title: 'Healthy Lifestyle',
    text: 'Yoga and pranayama nurture the body, calm the nervous system and build lifelong wellness.',
  },
]

export default function WhyUs() {
  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-deepgreen overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_0%,rgb(212_139_42/0.12),transparent_60%),radial-gradient(ellipse_50%_40%_at_90%_100%,rgb(183_144_69/0.1),transparent_60%)]" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          dark
          eyebrow="Why Choose Us"
          title={
            <>
              The quiet transformation
              <span className="italic text-gold"> every parent notices.</span>
            </>
          }
          subtitle="These are not promises — they are patterns we have watched unfold in over a thousand students."
        />

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 sm:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
        >
          {BENEFITS.map((b) => (
            <motion.article
              key={b.title}
              variants={fadeUp(0, 28)}
              className="group glass-dark rounded-3xl p-8 transition-all duration-700 hover:bg-forest/70 hover:-translate-y-1.5"
            >
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-gold/15 text-gold transition-all duration-500 group-hover:bg-saffron/25 group-hover:text-saffron">
                <b.icon className="w-[22px] h-[22px]" strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 font-display text-[1.55rem] font-semibold text-cream">{b.title}</h3>
              <p className="mt-2.5 text-[13.5px] leading-relaxed text-cream/60">{b.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
