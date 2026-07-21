// Shared motion language — slow, calm, luxurious. No bounce, no spin.
export const EASE = [0.22, 1, 0.36, 1]

export const fadeUp = (delay = 0, distance = 32) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE, delay },
  },
})

export const fade = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.1, ease: EASE, delay } },
})

export const stagger = (staggerChildren = 0.1, delayChildren = 0.1) => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})

export const viewportOnce = { once: true, margin: '-80px' }
