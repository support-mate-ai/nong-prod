import AudienceCard from '../components/AudienceCard.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { crewCards } from '../data/content.js'

export default function CrewSection() {
  return (
    <section id="crew">
      <div className="wrap">
        <div className="head rv">
          <span className="eyebrow">For teams</span>
          <h2>Crew member.<br />Grow, earn, stay secure.</h2>
        </div>
        <div className="cards">
          {crewCards.map((c) => <AudienceCard key={c.title} {...c} />)}
          <FeatureCard tag="02" title="Your craft. Your time." text="Join as a crew member." cta="Join as a Crew Member" />
        </div>
      </div>
    </section>
  )
}
