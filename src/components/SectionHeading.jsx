import { motion } from 'framer-motion'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function SectionHeading({ eyebrow, title, subtitle, dark = false, align = 'center' }) {
  const alignCls = align === 'center' ? 'text-center mx-auto items-center' : 'text-left items-start'
  return (
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex flex-col gap-5 max-w-2xl ${alignCls}`}
    >
      <motion.span
        variants={fadeUp(0, 20)}
        className={`inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.28em] uppercase ${
          dark ? 'text-gold' : 'text-saffron'
        }`}
      >
        <span className={`h-px w-8 ${dark ? 'bg-gold/60' : 'bg-saffron/50'}`} />
        {eyebrow}
        <span className={`h-px w-8 ${dark ? 'bg-gold/60' : 'bg-saffron/50'}`} />
      </motion.span>
      <motion.h2
        variants={fadeUp(0, 26)}
        className={`font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-medium text-balance ${
          dark ? 'text-cream' : 'text-forest'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp(0, 22)}
          className={`text-[15px] sm:text-base leading-relaxed text-balance ${
            dark ? 'text-cream/65' : 'text-mist'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
