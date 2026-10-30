import { useEffect } from 'react'

// Adds .in to every .rv element as it scrolls into view (same behavior as the original page).
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv')
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!('IntersectionObserver' in window) || reduce) {
      els.forEach((e) => e.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    const h = window.innerHeight
    els.forEach((e) => {
      if (e.getBoundingClientRect().top < h) e.classList.add('in')
      else io.observe(e)
    })
    return () => io.disconnect()
  }, [])
}
