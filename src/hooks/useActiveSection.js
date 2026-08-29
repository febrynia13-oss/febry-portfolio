import { useEffect, useState } from 'react'

/**
 * useActiveSection
 * Tracks which section is currently in view using IntersectionObserver,
 * so the navbar can highlight the matching menu item as the user scrolls.
 *
 * @param {string[]} sectionIds - element ids to observe, e.g. ['home','about']
 * @returns {string} the id of the section currently most in view
 */
export default function useActiveSection(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
