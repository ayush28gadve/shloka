import Lotus from './decor/Lotus'
import { Phone, MessageCircle, MapPin } from 'lucide-react'

const LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Daily Routine', href: '#routine' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
]

export default function Footer() {
  return (
    <footer className="relative bg-deepgreen border-t border-cream/10">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 pt-16 pb-10">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-cream/10 text-gold">
                <Lotus className="w-7 h-[18px]" />
              </span>
              <span className="leading-tight">
                <span className="block font-display text-xl font-semibold text-cream tracking-wide">
                  Popular Sanskrit
                </span>
                <span className="block text-[10px] font-medium tracking-[0.3em] uppercase text-gold">
                  Shloka Classes
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[13.5px] leading-relaxed text-cream/55">
              Sanskrit Shlokas · Yoga · Meditation · Pranayama · Value-Based Education.
              Nurturing minds and hearts in Osmanpura since over a decade.
            </p>
            <p className="mt-6 font-devanagari text-gold/80 text-lg">
              ॐ सर्वे भवन्तु सुखिनः
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-5">Explore</h4>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13.5px] text-cream/60 hover:text-cream transition-colors duration-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.25em] uppercase text-gold mb-5">Reach Us</h4>
            <ul className="space-y-4 text-[13.5px] text-cream/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-gold/70 shrink-0" />
                Osmanpura, Chhatrapati Sambhajinagar (Aurangabad), Maharashtra
              </li>
              <li>
                <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-cream transition-colors duration-300">
                  <Phone className="w-4 h-4 text-gold/70 shrink-0" />
                  +91 98765 43210
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 hover:text-cream transition-colors duration-300"
                >
                  <MessageCircle className="w-4 h-4 text-gold/70 shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-cream/40">
            © {new Date().getFullYear()} Popular Sanskrit Shloka Classes. All rights reserved.
          </p>
          <p className="text-[12px] text-cream/40 italic font-display text-sm">
            विद्या परमं बलम् — Knowledge is the highest strength
          </p>
        </div>
      </div>
    </footer>
  )
}
