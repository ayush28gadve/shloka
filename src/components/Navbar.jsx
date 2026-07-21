import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import Lotus from './decor/Lotus'
import { EASE } from '../lib/motion'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Routine', href: '#routine' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <motion.header
      initial={{ y: reduce ? 0 : -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`mx-auto transition-all duration-700 ${
          scrolled
            ? 'mt-3 max-w-5xl rounded-full glass shadow-soft px-5 sm:px-7'
            : 'max-w-7xl px-6 sm:px-10'
        }`}
      >
        <div className="flex items-center justify-between h-[68px]">
          <a href="#top" className="flex items-center gap-3 group">
            <span className="grid place-items-center w-10 h-10 rounded-full bg-forest text-gold shadow-soft transition-transform duration-500 group-hover:scale-105">
              <Lotus className="w-6 h-4" />
            </span>
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-forest tracking-wide">
                Popular Sanskrit
              </span>
              <span className="block text-[10px] font-medium tracking-[0.3em] uppercase text-saffron">
                Shloka Classes
              </span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[13.5px] font-medium text-ink/70 hover:text-forest transition-colors duration-300 after:absolute after:left-0 after:-bottom-1.5 after:h-px after:w-0 after:bg-saffron after:transition-all after:duration-500 hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 text-[13.5px] font-semibold text-forest hover:text-saffron transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              +91 XXXXX XXXXX
            </a>
            <a
              href="#contact"
              className="ml-2 inline-flex items-center rounded-full bg-forest px-6 py-2.5 text-[13.5px] font-semibold text-cream shadow-soft transition-all duration-500 hover:bg-deepgreen hover:shadow-lift hover:-translate-y-0.5"
            >
              Join Classes
            </a>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden grid place-items-center w-10 h-10 rounded-full glass text-forest"
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="fixed inset-0 z-50 bg-deepgreen/60 backdrop-blur-sm lg:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: reduce ? 0 : 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: reduce ? 0 : 60, opacity: 0 }}
              transition={{ duration: 0.5, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 h-full w-[82%] max-w-sm bg-cream shadow-lift px-8 py-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-display text-xl font-semibold text-forest">Namaste 🙏</span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid place-items-center w-10 h-10 rounded-full bg-parchment text-forest"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {LINKS.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: reduce ? 0 : 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: EASE, delay: 0.08 + i * 0.06 }}
                    className="font-display text-3xl text-forest/85 hover:text-saffron py-3 border-b border-gold/15 transition-colors duration-300"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex justify-center rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream shadow-soft"
                >
                  Join Classes
                </a>
                <a
                  href="tel:+919999999999"
                  className="inline-flex justify-center items-center gap-2 rounded-full border border-forest/20 px-6 py-3.5 text-sm font-semibold text-forest"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
