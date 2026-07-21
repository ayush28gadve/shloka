import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { EASE } from '../lib/motion'

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false)
  const reduce = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.a
          key="floating-cta"
          href="https://wa.me/919876543210?text=Namaste!%20I%20would%20like%20to%20join%20your%20classes."
          target="_blank"
          rel="noreferrer"
          initial={{ opacity: 0, y: reduce ? 0 : 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: reduce ? 0 : 24, scale: 0.9 }}
          transition={{ duration: 0.6, ease: EASE }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-forest pl-4 pr-6 py-3.5 text-cream shadow-lift"
          aria-label="Chat on WhatsApp"
        >
          <span className="relative grid place-items-center w-9 h-9 rounded-full bg-[#25D366]/20 text-[#4ade80]">
            <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping [animation-duration:3s]" />
            <MessageCircle className="relative w-[18px] h-[18px]" strokeWidth={1.8} />
          </span>
          <span className="text-[13.5px] font-semibold">Chat with us</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
