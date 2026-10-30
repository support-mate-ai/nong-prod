import Button from '../components/Button.jsx'
import { contact } from '../data/content.js'

const phoneIcon = <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
const mailIcon = <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>
const globeIcon = <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.3 3 14.7 0 18M12 3c-3 3.3-3 14.7 0 18" /></>

function ContactLink({ href, className, icon, children }) {
  return (
    <a href={href} className={className}>
      <svg viewBox="0 0 24 24" aria-hidden="true">{icon}</svg>
      {children}
    </a>
  )
}

export default function LaunchSection() {
  return (
    <section className="launch" id="join">
      <div className="wrap">
        <div>
          <span className="eyebrow">Launch offer</span>
          <h2 style={{ marginTop: 14 }}>Be first<br />in line.</h2>
          <div className="offer">
            <b>10%<small>OFF</small></b>
            <p>at launch for everyone who joins the waitlist, plus early access to our community.</p>
          </div>
          <div className="btns">
            <Button href="#join" variant="dark" style={{ justifyContent: 'center' }}>Join as a Salon Owner &rarr;</Button>
            <Button href="#join" variant="ghost" style={{ justifyContent: 'center', color: 'var(--red-deep)' }}>Join as a Crew Member &rarr;</Button>
          </div>
        </div>
        <div className="cbox" id="contact">
          <span className="eyebrow">Get in touch</span>
          <div className="ct">
            <ContactLink href={contact.phoneHref} icon={phoneIcon}>{contact.phone}</ContactLink>
            <ContactLink href={contact.emailHref} icon={mailIcon}>{contact.email}</ContactLink>
            <ContactLink href={contact.webHref} className="web" icon={globeIcon}>{contact.web}</ContactLink>
          </div>
          <div className="stores" style={{ marginTop: 0 }}>
            <div className="store"><b>Google Play</b><span>Coming soon</span></div>
            <div className="store"><b>App Store</b><span>Coming soon</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
