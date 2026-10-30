import Button from './Button.jsx'
import { images } from '../data/images.js'
import { navLinks } from '../data/content.js'

export default function Header() {
  return (
    <nav>
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
