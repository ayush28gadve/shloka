import { motion } from 'framer-motion'
import { Phone, MessageCircle, MapPin, Clock, Navigation } from 'lucide-react'
import SectionHeading from './SectionHeading'
import Mandala from './decor/Mandala'
import { fadeUp, stagger, viewportOnce } from '../lib/motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-deepgreen overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgb(212_139_42/0.14),transparent_60%)]" />
      <div className="absolute -left-52 bottom-0 text-gold/8 pointer-events-none">
        <Mandala className="w-[600px] h-[600px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <SectionHeading
          dark
          eyebrow="Begin Your Journey"
          title={
            <>
              Your first class is
              <span className="italic text-gold"> our gift to you.</span>
            </>
          }
          subtitle="Walk in, call, or send a message — we will find the perfect batch for you or your child."
        />

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 sm:mt-20 grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-10 items-stretch"
        >
          {/* Contact actions */}
          <motion.div variants={fadeUp(0, 30)} className="flex flex-col gap-5">
            <a
              href="https://wa.me/919999999999?text=Namaste!%20I%20would%20like%20to%20know%20more%20about%20your%20classes."
              target="_blank"
              rel="noreferrer"
              className="group glass-dark rounded-3xl p-7 flex items-center gap-5 transition-all duration-700 hover:bg-forest/70 hover:-translate-y-1"
            >
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-[#25D366]/15 text-[#4ade80] shrink-0">
                <MessageCircle className="w-6 h-6" strokeWidth={1.6} />
              </span>
              <span>
                <span className="block font-display text-xl font-semibold text-cream">WhatsApp Us</span>
                <span className="block text-[13px] text-cream/60 mt-0.5">Quick replies, batch details & fees</span>
              </span>
            </a>

            <a
              href="tel:+919999999999"
              className="group glass-dark rounded-3xl p-7 flex items-center gap-5 transition-all duration-700 hover:bg-forest/70 hover:-translate-y-1"
            >
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-saffron/15 text-saffron shrink-0">
                <Phone className="w-6 h-6" strokeWidth={1.6} />
              </span>
              <span>
                <span className="block font-display text-xl font-semibold text-cream">+91 XXXXX XXXXX</span>
                <span className="block text-[13px] text-cream/60 mt-0.5">Call between 9 AM – 8 PM</span>
              </span>
            </a>

            <div className="glass-dark rounded-3xl p-7 flex items-start gap-5">
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-gold/15 text-gold shrink-0">
                <MapPin className="w-6 h-6" strokeWidth={1.6} />
              </span>
              <span>
                <span className="block font-display text-xl font-semibold text-cream">Visit Us</span>
                <span className="block text-[13px] text-cream/60 mt-1 leading-relaxed">
                  Popular Sanskrit Shloka Classes,
                  <br />
                  Osmanpura, Chhatrapati Sambhajinagar
                  <br />
                  (Aurangabad), Maharashtra
                </span>
              </span>
            </div>

            <div className="glass-dark rounded-3xl p-7 flex items-center gap-5">
              <span className="grid place-items-center w-14 h-14 rounded-2xl bg-cream/10 text-cream/80 shrink-0">
                <Clock className="w-6 h-6" strokeWidth={1.6} />
              </span>
              <span>
                <span className="block font-display text-xl font-semibold text-cream">Class Hours</span>
                <span className="block text-[13px] text-cream/60 mt-0.5">
                  Mon–Fri · 6–7:30 AM & 5:30–7:30 PM · Weekends · 8–10 AM
                </span>
              </span>
            </div>
          </motion.div>

          {/* Map placeholder — stylised illustrated map */}
          <motion.div
            variants={fadeUp(0.1, 30)}
            className="relative rounded-3xl overflow-hidden border border-cream/10 shadow-lift min-h-[420px]"
          >
            <svg viewBox="0 0 600 560" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
              <rect width="600" height="560" fill="#EFEAE0" />
              {/* stylised streets */}
              <g stroke="#D8D2C4" strokeWidth="14" strokeLinecap="round">
                <path d="M-20 140h640" />
                <path d="M-20 320h640" />
                <path d="M-20 470h640" />
                <path d="M150 -20v600" />
                <path d="M400 -20v600" />
              </g>
              <g stroke="#E4DFD3" strokeWidth="7" strokeLinecap="round">
                <path d="M-20 230h640" />
                <path d="M270 -20v600" />
                <path d="M520 -20v600" />
              </g>
              {/* park */}
              <rect x="420" y="150" width="160" height="150" rx="18" fill="#CBDCC6" />
              <circle cx="470" cy="200" r="14" fill="#9DBE97" />
              <circle cx="520" cy="240" r="18" fill="#9DBE97" />
              <circle cx="550" cy="190" r="10" fill="#9DBE97" />
              {/* blocks */}
              <rect x="40" y="40" width="80" height="70" rx="10" fill="#E2DCCE" />
              <rect x="180" y="40" width="60" height="70" rx="10" fill="#E2DCCE" />
              <rect x="40" y="360" width="80" height="80" rx="10" fill="#E2DCCE" />
              <rect x="180" y="350" width="60" height="90" rx="10" fill="#E2DCCE" />
              <rect x="40" y="170" width="80" height="120" rx="10" fill="#E2DCCE" />
              {/* label */}
              <text x="300" y="520" textAnchor="middle" fontFamily="Inter, sans-serif" fontSize="15" fill="#8A8474" letterSpacing="4">
                OSMANPURA
              </text>
            </svg>

            {/* Pulsing location pin */}
            <div className="absolute left-1/2 top-[44%] -translate-x-1/2 -translate-y-full flex flex-col items-center">
              <div className="relative">
                <span className="absolute inset-0 -m-4 rounded-full bg-saffron/30 animate-ping [animation-duration:2.5s]" />
                <span className="relative grid place-items-center w-12 h-12 rounded-full bg-saffron text-cream shadow-glow">
                  <MapPin className="w-6 h-6" fill="currentColor" strokeWidth={0} />
                </span>
              </div>
              <div className="mt-3 glass rounded-2xl px-5 py-3 shadow-soft text-center">
                <p className="text-[13px] font-semibold text-forest leading-tight">Popular Sanskrit Shloka Classes</p>
                <p className="text-[11px] text-mist">Osmanpura, Chh. Sambhajinagar</p>
              </div>
            </div>

            <div className="absolute bottom-5 right-5">
              <span className="inline-flex items-center gap-2 glass rounded-full px-4 py-2.5 text-[12px] font-semibold text-forest shadow-soft">
                <Navigation className="w-3.5 h-3.5 text-saffron" />
                Get Directions
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
