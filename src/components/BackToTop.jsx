import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

/**
 * BackToTop
 * Floating button that appears after the user scrolls past the hero
 * and smoothly scrolls the page back to the top when clicked.
 */
export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          onClick={scrollToTop}
          aria-label="Kembali ke atas"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ y: -3 }}
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center
                     rounded-full border border-line bg-surface/90 text-text shadow-soft
                     backdrop-blur-sm hover:border-accent/60 hover:text-accent"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
