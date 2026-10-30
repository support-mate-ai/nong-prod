import Button from '../components/Button.jsx'
import { pricingModels, plans } from '../data/content.js'

function PlanCard({ plan }) {
  const { k, name, popular, btn, cta, price } = plan
  return (
    <article className={`plan${popular ? ' pop' : ''} rv`}>
      <div className="plan-top">
        <div className="k">{k}</div>
        {popular && <span className="badge">MOST POPULAR</span>}
      </div>
      <h3>{name}</h3>
      <div className="for">{plan.for}</div>
      <div className="amt"><span>₹{price}</span><small>/ shop / month</small></div>
      <div className="gst">Billed monthly · GST as applicable</div>
      <ul>
        {plan.features.map((f) => <li key={f}>{f}</li>)}
      </ul>
      <Button href="#join" variant={btn}>{cta}</Button>
    </article>
  )
}

export default function PricingSection() {
  return (
    <section className="price" id="pricing">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow">Pricing format</span>
          <h2>Pay for value.<br />Not time.</h2>
          <p className="lead">Clear pricing for salon owners and crew, with simple monthly plans and per-customer charges.</p>
        </div>

        <div className="models">
          {pricingModels.map((m) => (
            <div className="model rv" key={m.no}>
              <div className="no">{m.no}</div>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
              <code>{m.price}</code>
            </div>
          ))}
        </div>

        <div className="subscription-head rv">
          <div>
            <span className="eyebrow">Model 01</span>
            <h2>Subscription plans</h2>
            <p className="lead">One simple monthly price for your shop. Choose the tools that fit the way you work.</p>
          </div>
          <div className="billing-note"><span aria-hidden="true">✓</span> Monthly billing</div>
        </div>

        <div className="plans">
          {plans.map((p) => <PlanCard key={p.name} plan={p} />)}
        </div>

      </div>
    </section>
  )
}
