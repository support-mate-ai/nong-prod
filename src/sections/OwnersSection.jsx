import AudienceCard from '../components/AudienceCard.jsx'
import FeatureCard from '../components/FeatureCard.jsx'
import { ownerCards } from '../data/content.js'

export default function OwnersSection() {
  return (
    <section className="aud" id="owners">
      <div className="wrap">
        <div className="head rv">
          <div>
            <span className="eyebrow">For shops</span>
            <h2>Salon owner.<br />Run your shop smart.</h2>
          </div>
          <p className="lead" style={{ margin: 0 }}>
            Everything your shop needs in one place, from customer records to daily payments.
          </p>
        </div>
        <div className="cards">
          {ownerCards.map((c) => <AudienceCard key={c.title} {...c} />)}
          <FeatureCard tag="01" title="Ready to start?" text="Join the waitlist and get 10% off at launch." cta="Join as a Salon Owner" />
        </div>
      </div>
    </section>
  )
}
