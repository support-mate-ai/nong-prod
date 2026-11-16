const planData = [
  {
    id: 'basic',
    tone: 'light',
    title: '1 • BASIC PLAN',
    subtitle: 'For Small Salons',
    price: 299,
    features: [
      { label: 'Token Management', detail: 'Limited Tokens' },
      { label: 'Live Token Number List', detail: '' },
      { label: 'Add Up to 2 Crew Members', detail: '' },
      { label: 'Payment Details', detail: '' },
    ],
    addOn: 'Extra Crew Member: + ₹199/month for every additional 2 members (C-2 Pack).',
  },
  {
    id: 'growth',
    tone: 'featured',
    badge: 'RECOMMENDED PLAN',
    title: '2 • GROWTH PLAN',
    subtitle: 'For Growing Salons',
    price: 599,
    features: [
      { label: 'Token Management', detail: 'Unlimited Tokens' },
      { label: 'Live Token Number List', detail: '' },
      { label: 'Add Up to 4 Crew Members', detail: '' },
      { label: 'Free Marketing Support', detail: '' },
      { label: 'Payment & Bill Management', detail: 'Weekly / Monthly' },
    ],
    info: {
      title: 'BEST FOR',
      text: 'Salons looking to manage customers efficiently and grow their business.',
    },
  },
  {
    id: 'premium',
    tone: 'dark',
    title: '3 • PREMIUM PLAN',
    subtitle: 'For Premium & Multi-Team Salons',
    price: 1099,
    features: [
      { label: 'Token Management', detail: 'Unlimited Tokens' },
      { label: 'Live Token Number List', detail: '' },
      { label: 'Add Up to 8 Crew Members', detail: '★' },
      { label: 'Free Marketing Support', detail: '' },
      { label: 'Payment & Bill Management', detail: 'Weekly / Monthly' },
      { label: 'Add 1 Additional Branch', detail: '' },
    ],
    info: {
      title: 'BEST FOR',
      text: 'Premium salons that want better team management and multi-branch expansion.',
    },
  },
]

const reasons = [
  { title: 'Manage Token Easily', tag: 'A' },
  { title: 'Reduce Customer Waiting', tag: 'B' },
  { title: 'Manage Your Crew', tag: 'C' },
  { title: 'Track Payments & Bills', tag: 'D' },
  { title: 'Promote Your Salon', tag: 'E' },
  { title: 'Manage Additional Branches', tag: 'F' },
]

function PlanCard({ plan }) {
  return (
    <article className={`plan-card plan-card--${plan.tone} ${plan.tone === 'featured' ? 'is-featured' : ''}`}>
      {plan.badge && (
        <div className="plan-badge">
          <span aria-hidden="true">★</span>
          {plan.badge}
        </div>
      )}

      <div className="plan-heading">
        <div className="plan-title">{plan.title}</div>
        <div className="plan-subtitle">{plan.subtitle}</div>
      </div>

      <div className="plan-price-row">
        <span className="currency">₹</span>
        <span className="price-value">{plan.price}</span>
        <span className="price-period">/ Month</span>
      </div>

      <div className="plan-divider" />

      <ul className="plan-features">
        {plan.features.map((feature) => (
          <li key={`${plan.id}-${feature.label}`}>
            <span className="feature-check" aria-hidden="true">✓</span>
            <div className="feature-copy">
              <strong>{feature.label}</strong>
              {feature.detail && <small>{feature.detail}</small>}
            </div>
          </li>
        ))}
      </ul>

      {plan.addOn && <div className="plan-extra">{plan.addOn}</div>}

      {plan.info && (
        <div className="plan-info-box">
          <div className="plan-info-title">{plan.info.title}</div>
          <div className="plan-info-text">{plan.info.text}</div>
        </div>
      )}
    </article>
  )
}

export default function SubscriptionPlans() {
  return (
    <div className="pricing-shell">
      <div className="pricing-header">
        <div className="pricing-brand">
          <span className="pricing-brand-name">NONG</span>
          <span className="pricing-brand-tag">App</span>
        </div>
        <div className="pricing-app-tag">No wait, no let.</div>
      </div>

      <div className="pricing-hero-copy">
        <span className="pricing-eyebrow">Smart Salon Management</span>
        <h2>
          Less Waiting.<br />
          Better Management.<br />
          <span>More Growth.</span>
        </h2>
        <p>Choose the right plan for your salon.</p>
      </div>

      <div className="price-shell">
        {planData.map((plan) => (
          <PlanCard key={plan.id} plan={plan} />
        ))}
      </div>

      <div className="reasons-wrap">
        <h3>— Why choose NONG?</h3>
        <div className="reasons-grid">
          {reasons.map((reason) => (
            <div className="reason-card" key={reason.title}>
              <span className="reason-icon" aria-hidden="true">{reason.tag}</span>
              <span>{reason.title}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="pricing-footer-line">
        <span>Your Salon. Your Team. Your Growth.</span>
        <small>NONG App — Smart Management for Salon Owners.</small>
      </div>
    </div>
  )
}
