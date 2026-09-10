import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Loader
 * A short "welcome" screen shown on first paint: the brand mark fades
 * in, followed by a greeting line and a thin progress bar, then the
 * whole overlay dismisses on its own so it never blocks real usage.
 */
export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Ambient glow, matching the hero's background treatment */}
          <div className="pointer-events-none absolute inset-0 bg-grid-fade" />

          <div className="relative flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl"
            >
              Febry<span className="text-accent">.</span>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
              className="mt-3 font-mono text-sm text-muted"
            >
              Selamat datang di portofolio saya
            </motion.p>

            {/* Progress bar */}
            <div className="mt-8 h-[3px] w-40 overflow-hidden rounded-full bg-surface-2">
              <motion.div
                className="h-full bg-gradient-to-r from-primary to-accent"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.4, delay: 0.3, ease: 'easeInOut' }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}