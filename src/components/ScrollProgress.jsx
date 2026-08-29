import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * ScrollProgress
 * Thin gradient bar fixed at the very top of the viewport that fills
 * as the user scrolls down the page.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-primary via-accent to-primary"
      style={{ scaleX }}
    />
  )
}
