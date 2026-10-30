import Icon from './Icon.jsx'

export default function AudienceCard({ title, text, icon }) {
  return (
    <div className="card rv">
      <div className="ic"><Icon markup={icon} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}
