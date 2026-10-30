import { marqueeWords } from '../data/content.js'

// Words repeated 4x; the CSS animation scrolls by -50% for a seamless loop.
const items = Array.from({ length: 4 }, () => marqueeWords).flat()

export default function Marquee() {
  return (
    <div className="marq" aria-hidden="true">
      <div>
        {items.map((w, i) => (
          <span key={i}>{w}</span>
        ))}
      </div>
    </div>
  )
}
