import { useEffect, useState } from 'react'
import Button from './Button.jsx'
import { images } from '../data/images.js'
import { navLinks } from '../data/content.js'

export default function Header() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hero = document.querySelector('.landing-hero')
    if (!hero) {
      setIsVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(!entry.isIntersecting)
    }, { rootMargin: '-68px 0px 0px 0px' })

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <nav className={isVisible ? 'nav-visible' : ''} aria-hidden={!isVisible}>
      <div className="wrap">
        <a className="brand" href="#top">
          <img src={images.logo} alt="The NonG logo" />
          <span>
            THE NONG<small>No wait. No let.</small>
          </span>
        </a>
        <div className="links">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </div>
        <Button href="#join" variant="red">Join waitlist</Button>
      </div>
    </nav>
  )
}
