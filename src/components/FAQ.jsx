import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'
import SectionHeading from './SectionHeading'
import { EASE, fadeUp, stagger, viewportOnce } from '../lib/motion'

const FAQS = [
  {
    q: 'What age can my child start learning shlokas?',
    a: 'Children as young as 5 join our Bal Varg. At that age, the focus is on joyful listening and repetition — meaning and pronunciation refinement come naturally as they grow.',
  },
  {
    q: 'Do I need to know Sanskrit or be religious to join?',
    a: 'Not at all. Most students begin with zero Sanskrit background. Our classes are about culture, wellness and self-development — everyone is welcome, whatever their background.',
  },
  {
    q: 'Are yoga classes suitable for seniors and beginners?',
    a: 'Yes. Every asana is adapted to the individual. Our senior batches move gently, with chair-supported options, and pranayama forms the heart of the practice.',
  },
  {
    q: 'What are the fees and batch timings?',
    a: 'We keep fees modest and accessible — please call or WhatsApp us for the current structure. Batches run morning (6:00 AM), evening (5:30 PM) and weekends.',
  },
  {
    q: 'Is there a trial class before enrolling?',
    a: 'Of course. Your first class is always free. Come, sit with us, experience the atmosphere — then decide at your own pace.',
  },
]

function FaqItem({ q, a, open, onToggle }) {
  return (
    <motion.div
      variants={fadeUp(0, 24)}
      className={`rounded-2xl border transition-all duration-500 ${
        open ? 'bg-cream border-gold/30 shadow-soft' : 'bg-transparent border-gold/15 hover:border-gold/30'
      }`}
    >
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
      >
        <span className="font-display text-lg sm:text-xl font-semibold text-forest">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className={`grid place-items-center w-9 h-9 rounded-full shrink-0 transition-colors duration-500 ${
            open ? 'bg-saffron text-cream' : 'bg-forest/5 text-forest'
          }`}
        >
          <Plus className="w-4 h-4" />
        </motion.span>
      </button>
      <AnimatePresence mode="wait" initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="px-7 pb-7 text-[14px] leading-relaxed text-mist max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-cream">
      <div className="absolute inset-0 texture-paper" />
      <div className="relative mx-auto max-w-4xl px-6 sm:px-10">
        <SectionHeading
          eyebrow="Questions"
          title={
            <>
              Everything you may
              <span className="italic text-saffron"> wish to ask.</span>
            </>
          }
        />
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 flex flex-col gap-4"
        >
          {FAQS.map((f, i) => (
            <FaqItem
              key={f.q}
              {...f}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
