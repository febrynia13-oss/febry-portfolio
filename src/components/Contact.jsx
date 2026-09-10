import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react'

const CONTACT_LINKS = [
  { icon: Mail, label: 'Email', value: 'febry.nia@example.com', href: 'febrynia13@gmail.com' },
  { icon: Github, label: 'GitHub', value: 'https://github.com/febrynia13-oss', href: 'https://github.com/' },
  { icon: Linkedin, label: 'LinkedIn', value: 'https://www.linkedin.com/in/febry-nia-3696593b8/', href: 'https://linkedin.com/' },
  { icon: Instagram, label: 'Instagram', value: 'fbrytniazhra.13', href: 'https://www.instagram.com/fbrytniazhra.13?igsi=MXVqa3p6ZDIzc2V6bg%3D%3D&utm_source=qr' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/**
 * Contact
 * Closing section inviting visitors to reach out, with direct links
 * to email and social profiles (update the placeholder values above
 * with real contact details).
 */
export default function Contact() {
  return (
    <section id="contact" className="section py-24 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="glass-panel relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16"
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-glow-cyan blur-3xl" />

        <p className="section-tag justify-center">
          <span className="text-primary"></span> 06. contact
        </p>
        <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold text-text sm:text-4xl">
          Mari berkolaborasi pada proyek berikutnya.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          Terbuka untuk diskusi seputar magang, kolaborasi proyek, atau sekadar
          bertukar ide seputar teknologi.
        </p>

        <a href="mailto:febry.nia@example.com" className="btn-primary mt-8 inline-flex">
          Kirim Email <Send size={16} />
        </a>

        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-left transition-colors hover:border-accent/40"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface-2 text-accent">
                <Icon size={16} />
              </span>
              <span>
                <span className="block font-mono text-xs text-faint">{label}</span>
                <span className="block text-sm text-text">{value}</span>
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
