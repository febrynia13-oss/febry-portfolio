import { motion } from 'framer-motion'
import { Code2, Globe, Database, BarChart3, Brain } from 'lucide-react'

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
 * Personal introduction with a short tagline, a narrative bio with
 * inline highlighted keywords, an icon-based grid of focus areas, and
 * a quick stats panel. Reveals as the user scrolls it into view.
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
        <span className="text-primary">//</span> 01. about-me
      </motion.p>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
        <motion.div
          className="md:col-span-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
            Tentang Saya
          </h2>

          {/* Personal tagline — quick, quotable line under the heading */}
          <p className="mt-4 border-l-2 border-accent/60 pl-4 font-display text-base italic text-muted">
            Belajar membangun sesuatu yang bukan cuma jalan, tapi juga enak dipakai.
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-muted">
            Saya mahasiswa Informatika yang penasaran sama hampir semua sisi teknologi
            — dari merapikan <span className="text-text">tampilan antarmuka</span>,
            merancang <span className="text-accent">alur data</span>, sampai
            bereksperimen dengan <span className="text-primary">kecerdasan buatan</span>.
            Buat saya, setiap baris kode adalah cara untuk mengubah ide jadi sesuatu
            yang benar-benar bisa dipakai orang lain.
          </p>

          <motion.ul
            className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
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
        </motion.div>

        {/* Stats card */}
        <motion.div
          className="glass-panel flex flex-col justify-center gap-6 rounded-2xl p-8 md:col-span-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="flex items-baseline justify-between border-b border-line pb-4 last:border-0 last:pb-0">
              <span className="font-display text-3xl font-semibold text-accent">{stat.value}</span>
              <span className="text-right font-mono text-xs uppercase tracking-wide text-muted">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
