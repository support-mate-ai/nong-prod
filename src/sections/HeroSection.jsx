import Button from '../components/Button.jsx'
import { ArrowIcon } from '../components/Icon.jsx'
import { images } from '../data/images.js'
import { heroStats } from '../data/content.js'

export default function HeroSection() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div>
          <span className="pill"><i></i>Salon + Crew &middot; Coming soon</span>
          <h1>No wait.<br />No <span className="r u">let.</span></h1>
          <p className="sub">
            The queue and shop management platform for salons. <b>Pay for value, not time.</b> Your time stays yours, and so does your customer's.
          </p>
          <div className="cta-row">
            <Button href="#join" variant="dark">Join as a Salon Owner <ArrowIcon /></Button>
            <Button href="#join" variant="ghost">Join as a Crew Member</Button>
          </div>
          <div className="mini">
            {heroStats.map((s) => (
              <div key={s.value}><b>{s.value}</b><span>{s.label}</span></div>
            ))}
          </div>
        </div>
        <div className="stage" aria-hidden="true">
          <div className="ring"></div>
          <div className="ring b"></div>
          <div className="dot d1"></div>
          <div className="dot d2"></div>
          <div className="logo-card"><img src={images.logo} alt="" /></div>
          <div className="chip c1"><i></i>Token 01 ready</div>
          <div className="chip c2"><i></i>Queue 3 / 3</div>
          <div className="chip c3"><i></i>0 min wait</div>
        </div>
      </div>
    </header>
  )
}
