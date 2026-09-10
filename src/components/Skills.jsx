import { motion } from 'framer-motion'
import { Layout, Server, Database, Code2, Wrench } from 'lucide-react'

const SKILL_GROUPS = [
  {
    icon: Layout,
    title: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    icon: Server,
    title: 'Backend',
    items: ['PHP', 'Laravel'],
  },
  {
    icon: Database,
    title: 'Database',
    items: ['MySQL'],
  },
  {
    icon: Code2,
    title: 'Programming',
    items: ['Python'],
  },
  {
    icon: Wrench,
    title: 'Tools',
    items: ['Git', 'GitHub', 'VS Code'],
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

/**
 * Skills
 * Grid of skill-category cards. Each card lifts and picks up a subtle
 * accent glow on hover. Reveal is staggered as the section scrolls in.
 */
export default function Skills() {
  return (
    <section id="skills" className="section py-24 md:py-32">
      <p className="section-tag">
        <span className="text-primary"></span> 03. skills
      </p>
      <h2 className="font-display text-3xl font-semibold text-text sm:text-4xl">
      Yang lagi aku pelajari & kuasai
      </h2>
      <p className="mt-4 max-w-lg text-muted">
      Aku suka eksplor berbagai hal di dunia teknologi 
      mulai dari bikin tampilan web, ngoding, sampai ngurusin data di belakangnya. Ini beberapa tools yang sering aku pakai buat ngerjain project.
      </p>

      <motion.div
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SKILL_GROUPS.map(({ icon: Icon, title, items }) => (
          <motion.div
            key={title}
            variants={item}
            whileHover={{ y: -6 }}
            className="group rounded-2xl border border-line bg-surface p-6 transition-shadow duration-300 hover:border-accent/40 hover:shadow-glow-accent"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface-2 text-accent transition-transform duration-300 group-hover:scale-110">
              <Icon size={20} />
            </div>
            <h3 className="mt-5 font-display text-lg font-semibold text-text">{title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((skill) => (
                <span key={skill} className="badge">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
