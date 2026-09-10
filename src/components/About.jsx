import { motion } from 'framer-motion'
import { Code2, Globe, Database, BarChart3, Brain, User } from 'lucide-react'

const STATS = [
  { value: '3+', label: 'Projects Completed' },
  { value: '8+', label: 'Technologies' },
  { value: 'Always', label: 'Learning' },
]

const FOCUS_AREAS = [
  { icon: Code2, label: 'Software Development' },
  { icon: Globe, label: 'Web Development' },
  { icon: Database, label: 'Database' },
  { icon: BarChart3, label: 'Data Processing' },
  { icon: Brain, label: 'Artificial Intelligence' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

/**
 * About
 * Main intro card: a small photo "hangs" from a thread on the left
 * (gently swaying), with the bio, tagline, and stats on the right —
 * all inside one bordered panel. A secondary focus-areas grid sits
 * below the card.
 */
export default function About() {
  return (
    <section id="about" className="section py-24 md:py-32">
      <motion.p
        className="section-tag"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
      >
        <span className="text-primary"></span> 01. about-me
      </motion.p>

      <motion.h2
        className="font-display text-3xl font-semibold text-text sm:text-4xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={fadeUp}
      >
        Tentang <span className="text-accent">Saya</span>
      </motion.h2>

      {/* Main bordered card: hanging photo + bio + stats */}
      <motion.div
        className="glass-panel mt-8 grid grid-cols-1 gap-8 rounded-3xl p-6 sm:p-8 md:grid-cols-[auto_1fr] md:gap-10 md:p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="flex justify-center md:justify-start">
          <HangingPhoto />
        </div>

        <div>
          {/* Personal tagline */}
          <p className="border-l-2 border-accent/60 pl-4 font-display text-base italic text-muted">
            Belajar membangun sesuatu yang bukan cuma jalan, tapi juga enak dipakai.
          </p>

          <p className="mt-5 leading-relaxed text-muted">
          
           Hai! Aku Febry 
           Aku mahasiswa Informatika yang suka banget ngulik hal-hal baru di dunia teknologi. Kadang lagi sibuk bikin tampilan web biar lebih enak dilihat, kadang ngulik database dan alur data, dan kadang juga penasaran sama dunia AI.
          Aku masih terus belajar dan belum jago di semuanya, tapi justru itu yang bikin aku senang ngoding. Buat aku, bikin sebuah project bukan cuma soal “yang penting jalan”, tapi juga gimana supaya hasilnya nyaman dipakai, kelihatan menarik, dan punya manfaat.
          Sekarang aku lagi banyak eksplor berbagai bidang di Informatika sambil mencari tahu, sebenarnya aku paling cocok dan paling enjoy di bagian mana. 🚀
          Masih belajar, masih nyoba, dan masih banyak project yang mau dibuat.

          </p>

          {/* Stats row */}
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-line pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-accent sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Secondary: focus areas */}
      <motion.ul
        className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {FOCUS_AREAS.map(({ icon: Icon, label }) => (
          <motion.li
            key={label}
            variants={fadeUp}
            whileHover={{ y: -3 }}
            className="flex items-center gap-3 rounded-xl border border-line bg-surface px-4 py-3 text-sm text-text transition-colors hover:border-accent/40"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-2 text-accent">
              <Icon size={15} />
            </span>
            {label}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}

/**
 * HangingPhoto
 * A small photo card that hangs from a thread and clip, like a
 * keychain/ID pendant, swaying gently and continuously.
 */
function HangingPhoto() {
  return (
    <div className="flex flex-col items-center">
      {/* Thread */}
      <div className="h-12 w-px bg-gradient-to-b from-line to-faint sm:h-16" />

      {/* Swinging photo card */}
      <motion.div
        style={{ transformOrigin: 'top center' }}
        animate={{ rotate: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative -mt-1 w-28 rounded-xl border border-line bg-surface-2 p-1.5 shadow-soft sm:w-32"
      >
        {/* Clip hole connecting to the thread */}
        <div className="absolute left-1/2 -top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border border-line bg-ink" />

        {/* Photo — replace the placeholder below with a real photo */}
        <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-gradient-to-br from-surface-2 to-surface grayscale">
          {/* TODO: ganti placeholder ini dengan foto asli Anda.
              Simpan foto di: src/assets/images/profile.jpg
              lalu ganti div di bawah dengan:
              <img src="/src/assets/images/profile.jpg" alt="Febry Nia" className="h-full w-full object-cover" /> */}
          <img src="src/assets/images/profilnia.jpeg" alt="Febry Nia" className="h-full w-full object-cover" />
        </div>
      </motion.div>
    </div>
  )
}
