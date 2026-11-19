import { images } from '../data/images.js'

export default function HeroSection() {
  return (
    <header className="landing-hero" id="top">
      <img className="landing-hero-image" src={images.landingSection} alt="" />
      <div className="landing-hero-top">
        <span className="problem-count">Problem 01 / 05</span>
        <img className="landing-hero-logo" src={images.logo} alt="The NonG" />
      </div>
      <div className="wait-timer" aria-label="30 minutes and counting">
        <span className="wait-timer-value">30<small>min</small></span>
        <span className="wait-timer-caption">And counting...</span>
      </div>
      <div className="landing-hero-content">
        <div className="landing-hero-copy">
          <span className="landing-hero-eyebrow">Customer waiting</span>
          <h1>Still<br /><span>waiting?</span></h1>
          <p>Customers stand in line, lose patience and walk out — before the haircut even starts.</p>
        </div>
        <div className="landing-hero-bottom">
          <a className="landing-hero-next-label" href="#how">Swipe <span aria-hidden="true">→</span> The NonG Fix</a>
          <a className="landing-hero-next" href="#how" aria-label="See the NonG fix">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  )
}
