import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Image as ImageIcon, X } from 'lucide-react'

// Replace each `image` with a real file placed in src/assets/images/gallery/,
// and update the caption/date to match. The first item renders large (bento
// layout) — put your best/favorite photo there.
const ACTIVITIES = [
  {
    title: 'Projek UAS Web Desaign',
    date: '2025',
    image: 'dokumentasi.jpeg',
    span: 'tall', // large tile on the left
  },
  {
    title: 'pkl Lintas Arta',
    date: '2024',
    image: 'pkl.jpeg',
    span: 'tall', // wide tile spanning the bottom-right
  },
  {
    title: 'bem Universitas Adzkia',
    date: '2025',
    image: 'bem.jpeg',
    span: 'normal',
  },
  {
    title: 'HIMIF',
    date: '2024',
    image: 'himif.jpeg',
    span: 'normal',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}

/**
 * Gallery
 * Bento-style grid of activity photos. Every tile is greyscale by
 * default and turns to full colour with a caption overlay on hover
 * (or tap, on touch devices) — click a tile to open it larger.
 */
export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="section py-24 md:py-32">
      <motion.p
        className="section-tag"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        variants={item}
      >
        <span className="text-primary"></span> 05. gallery
      </motion.p>

      <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
        Gallery
      </h2>
      <p className="mt-4 max-w-lg text-muted">
      dokumentasi kegiatan atau kebersamaan
      </p>

      <motion.div
        className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2 md:[grid-auto-rows:1fr]"
        style={{ minHeight: '520px' }}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {ACTIVITIES.map((activity) => (
          <motion.button
            key={activity.title}
            variants={item}
            onClick={() => setSelected(activity)}
            className={`group relative overflow-hidden rounded-2xl border border-line bg-surface-2 text-left ${
              activity.span === 'tall'
                ? 'md:row-span-2'
                : activity.span === 'wide'
                ? 'md:col-span-2'
                : ''
            }`}
          >
            {/* Placeholder tile — replace with:
                <img src={`/src/assets/images/gallery/${activity.image}`} alt={activity.title}
                     className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105" /> */}
            <img src={`/src/assets/images/gallery/${activity.image}`} alt={activity.title} className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105" />

            {/* Dark gradient + caption, revealed on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
              <p className="font-display text-sm font-semibold text-white">{activity.title}</p>
              <p className="font-mono text-xs text-white/70">{activity.date}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <button
                onClick={() => setSelected(null)}
                aria-label="Tutup"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-ink/70 text-white hover:bg-ink"
              >
                <X size={16} />
              </button>
              {/* Replace with the real <img> once photos are added */}
              <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-surface-2 to-surface text-faint">
                <ImageIcon size={48} strokeWidth={1.2} />
              </div>
              <div className="p-5">
                <p className="font-display text-lg font-semibold text-text">{selected.title}</p>
                <p className="font-mono text-xs text-muted">{selected.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
