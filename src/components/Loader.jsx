import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Loader
 * Simple boot-style loading screen shown briefly on first paint.
 * Mimics a terminal compiling, tying into the "developer" theme.
 * Auto-dismisses after a short delay so it never blocks real usage.
 */
export default function Loader() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1200)
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
          <div className="font-mono text-sm text-muted md:text-base">
            <span className="text-primary">$</span> building portfolio
            <span className="text-accent">
              <AnimatedDots />
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function AnimatedDots() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setCount((c) => (c + 1) % 4), 250)
    return () => clearInterval(id)
  }, [])
  return <>{'.'.repeat(count)}</>
}
