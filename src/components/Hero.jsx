import fotoSaya from "../assets/images/foto-saya.jpeg";
import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, ArrowRight, Mail, User } from 'lucide-react'

/**
 * Hero
 * First section of the page. Left column: identity, tagline, CTAs and
 * social links. Right column: a full-bleed profile photo card with the
 * name/role overlaid and a floating "online + Contact Me" status bar —
 * the page's signature visual.
 */
export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20 md:pt-32"
    >
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute inset-0 bg-grid-fade" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-glow-cyan blur-3xl" />

      <div className="section relative grid grid-cols-1 items-center gap-14 md:grid-cols-2 md:gap-10">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="section-tag">
            <span className="h-px w-6 bg-accent/60" /> HALO, SAYA
          </p>

          <h1 className="font-display text-4xl font-semibold leading-tight text-text sm:text-5xl lg:text-6xl">
            Febry Tania Zahra
          </h1>

          <p className="mt-3 font-mono text-base text-accent md:text-lg">
            Informatics Student &amp; Software Engineer
          </p>

          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            Saya adalah mahasiswa Informatika yang sedang menempa diri menjadi seorang
            Software Engineer — fokus membangun aplikasi web dengan fondasi kode yang
            rapi, terstruktur, dan siap berkembang, tanpa mengabaikan pengalaman
            pengguna yang nyaman digunakan.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Projects <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact Me <Mail size={16} />
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4">
            {[
              { icon: Github, href: 'https://github.com/febrynia13-oss', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/febry-nia-3696593b8/', label: 'LinkedIn' },
              { icon: Instagram, href: 'https://www.instagram.com/fbrytniazhra.13?igsi=MXVqa3p6ZDIzc2V6bg%3D%3D&utm_source=qr', label: 'Instagram' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent/60 hover:text-accent"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: profile photo card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="flex justify-center md:justify-end"
        >
          <ProfileCard />
        </motion.div>
      </div>
    </section>
  )
}

/**
 * ProfileCard
 * Full-bleed photo card: name and role are overlaid directly on the
 * photo (top, over a dark gradient for legibility), and a floating
 * status bar sits at the bottom with an "online" indicator plus a
 * quick Contact Me action — the page's signature visual.
 */
function ProfileCard() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="group relative aspect-[3/4] w-72 overflow-hidden rounded-[28px] border border-line bg-surface shadow-glow-primary sm:w-80"
    >
      {/* Shine sweep — a soft white diagonal band that glides across the
          card on hover, like light reflecting off glass */}
      <div className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-[28px]">
        <div className="absolute -inset-y-12 -left-1/3 w-1/3 -translate-x-[160%] rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
      </div>

      {/* Photo — replace the placeholder below with a real photo */}
      {/* TODO: ganti placeholder ini dengan foto asli Anda.
          Simpan foto di: src/assets/images/profile.jpg
          lalu ganti div di bawah dengan:
          <img src="/src/assets/images/profile.jpg" alt="Febry Nia" className="h-full w-full object-cover" /> */}
      <img
    src={fotoSaya}
    alt="Febry Nia"
    className="h-full w-full object-cover"
/>

      {/* Top gradient + name/role overlay */}
      <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-ink/85 via-ink/20 to-transparent px-6 pb-10 pt-6">
        <p className="font-display text-xl font-semibold text-white drop-shadow-sm">
          Febry Nia
        </p>
        <p className="mt-1 font-mono text-xs text-white/70">Software Engineer</p>
      </div>

      {/* Bottom gradient, keeps the status bar legible against any photo */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink/90 to-transparent" />

      {/* Floating status bar */}
      <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-2xl border border-white/10 bg-ink/70 px-3 py-2.5 backdrop-blur-md">
        <div className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-2 text-accent">
            <User size={14} />
          </span>
          <div className="leading-tight">
            <p className="font-body text-xs text-white/90">@febrynia</p>
            <p className="flex items-center gap-1 font-mono text-[10px] text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Online
            </p>
          </div>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-white px-3 py-1.5 font-body text-[11px] font-medium text-ink transition-colors hover:bg-accent"
        >
          Contact Me
        </a>
      </div>
    </motion.div>
  )
}
