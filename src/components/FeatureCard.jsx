import Icon from './Icon.jsx'
import Button from './Button.jsx'

const arrow = '<path d="M5 12h14M13 6l6 6-6 6"/>'

export default function FeatureCard({ tag, title, text, cta }) {
  return (
    <div className="card feat rv">
      <span className="tag">{tag}</span>
      <div className="ic"><Icon markup={arrow} /></div>
      <h3>{title}</h3>
      <p style={{ marginBottom: 18 }}>{text}</p>
      <Button href="#join" variant="red" style={{ padding: '11px 22px', fontSize: 14 }}>{cta}</Button>
    </div>
  )
}
