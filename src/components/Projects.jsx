import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

// Each project's `image` must match a real file placed in src/assets/images/.
const PROJECTS = [
  {
    title: 'SIBIMBINGAN',
    tech: ['Laravel', 'PHP', 'MySQL', 'Tailwind CSS'],
    description:
      'Sistem manajemen bimbingan skripsi online untuk mahasiswa dan dosen pembimbing, dengan fitur pengajuan judul, upload file bimbingan, dan pemantauan status/riwayat pengajuan.',
    image: 'sibimbingan.jpg',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Data Mining SPMB',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'K-Means'],
    description:
      'Analisis data penerimaan mahasiswa baru menggunakan preprocessing data, normalisasi, clustering K-Means, Elbow Method, Silhouette Score, dan Davies-Bouldin Index.',
    image: 'data-mining-spmb.jpg',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Kopi & Rasa',
    tech: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Website pemesanan menu kafe dengan e-menu interaktif, keranjang belanja, dan simulasi transaksi real-time untuk pengalaman pemesanan yang modern.',
    image: 'kopi-rasa.jpg',
    demoUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Sistem Peminjaman Ruangan',
    tech: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    description:
      'Sistem informasi untuk mengelola peminjaman ruangan dengan fitur authentication, pengajuan peminjaman, pengelolaan ruangan, approval admin, dan riwayat peminjaman.',
    image: 'peminjaman-ruangan.jpg',
    demoUrl: '#',
    githubUrl: '#',
  },
]

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

/**
 * Projects
 * "Featured Projects" showcase. Each card shows its own real thumbnail
 * (from src/assets/images/, matched via project.image), a short
 * description, technology badges, and Live Demo / GitHub links.
 * Cards lift and reveal a subtle overlay on hover.
 */
export default function Projects() {
  return (
    <section id="projects" className="section py-24 md:py-32">
      <p className="section-tag">
        <span className="text-primary"></span> 03. projects
      </p>
      <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
        Featured Projects
      </h2>
      <p className="mt-4 max-w-lg text-muted">
        Beberapa proyek yang mencerminkan proses belajar saya, dari sistem informasi
        berbasis web hingga eksperimen data.
      </p>

      <motion.div
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.12 }}
      >
        {PROJECTS.map((project) => (
          <motion.article
            key={project.title}
            variants={item}
            whileHover={{ y: -8 }}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-shadow duration-300 hover:border-accent/40 hover:shadow-glow-accent"
          >
            {/* Thumbnail — pulls the file named in project.image, so each card shows its own screenshot */}
            <div className="relative h-44 overflow-hidden bg-surface-2">
              <img
                src={`/src/assets/images/${project.image}`}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold text-text">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="badge">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  Live Demo <ExternalLink size={14} />
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-text"
                >
                  GitHub <Github size={14} />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
