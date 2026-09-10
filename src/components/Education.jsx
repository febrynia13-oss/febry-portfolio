import { motion } from 'framer-motion'
import { School, BookOpen, GraduationCap, University } from 'lucide-react'

// Update the placeholder school names/years below with your real history.
const TIMELINE = [
  {
    level: 'SD',
    icon: School,
    school: 'SDN 01 Alang Lawas', // TODO: ganti dengan nama SD asli
    period: '2013 — 2018', // TODO: ganti tahun
  },
  {
    level: 'SMP',
    icon: BookOpen,
    school: 'Mtsn 04 Parak Laweh', // TODO: ganti dengan nama SMP asli
    period: '2019 — 2021', // TODO: ganti tahun
  },
  {
    level: 'SMA / SMK',
    icon: GraduationCap,
    school: 'SMK Kartika ', // TODO: ganti dengan nama SMA/SMK asli
    period: '2022 — 2024', // TODO: ganti tahun
  },
  {
    level: 'Kuliah',
    icon: University,
    school: 'Universitas Adzkia, Padang',
    period: '2024 — Sekarang', // TODO: ganti tahun masuk
    note: 'Program Studi Informatika',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariant = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

/**
 * Education
 * Vertical timeline of school history (SD → SMP → SMA/SMK → Kuliah),
 * each node with an icon, connected by a running line. Reveals as the
 * section scrolls into view.
 */
export default function Education() {
  return (
    <section id="education" className="section py-24 md:py-32">
      <motion.p
        className="section-tag"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={itemVariant}
      >
        <span className="text-primary"></span> 02. education
      </motion.p>

      <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
        Riwayat Pendidikan
      </h2>
      <p className="mt-4 max-w-lg text-muted">
        Perjalanan akademik saya dari sekolah dasar sampai ke bangku kuliah.
      </p>

      <motion.ol
        className="relative mt-14 space-y-10 border-l border-line pl-8 sm:pl-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        {TIMELINE.map(({ level, icon: Icon, school, period, note }) => (
          <motion.li key={level} variants={itemVariant} className="relative">
            {/* Timeline node */}
            <span className="absolute -left-[calc(2rem+1px)] top-0 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-line bg-surface text-accent sm:-left-[calc(2.5rem+1px)]">
              <Icon size={15} />
            </span>

            <div className="rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-accent/40 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="badge">{level}</span>
                <span className="font-mono text-xs text-muted">{period}</span>
              </div>
              <h3 className="mt-3 font-display text-lg font-semibold text-text">{school}</h3>
              {note && <p className="mt-1 text-sm text-muted">{note}</p>}
            </div>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
