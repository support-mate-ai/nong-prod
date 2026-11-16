import Button from '../components/Button.jsx'
import { contact } from '../data/content.js'

const phoneIcon = <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
const mailIcon = <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>
const globeIcon = <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.3 3 14.7 0 18M12 3c-3 3.3-3 14.7 0 18" /></>
const playStoreIcon = <><defs><linearGradient id="play-store-gradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#34A853" /><stop offset=".5" stopColor="#4285F4" /><stop offset="1" stopColor="#EA4335" /></linearGradient></defs><path fill="url(#play-store-gradient)" d="M4 2.8c-.6.3-1 1-1 1.8v14.8c0 .8.4 1.5 1 1.8L14.8 12 4 2.8z" /><path fill="#FBBC04" d="m4 2.8 13.2 7.1L14.8 12 4 2.8z" /><path fill="#EA4335" d="m14.8 12 2.4 2.1L4 21.2 14.8 12z" /><path fill="#34A853" d="m17.2 9.9 2.2 1.2c.8.4.8 1.4 0 1.8l-2.2 1.2-2.4-2.1 2.4-2.1z" /></>
const appStoreIcon = <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.47-2.09-.49-3.24 0-1.44.63-2.2.45-3.07-.35C2.77 15.9 3.48 9.34 9.06 9.1c1.35.06 2.29.74 3.08.8 1.18-.24 2.31-.94 3.57-.84 1.51.12 2.65.72 3.4 1.81-3.11 1.87-2.37 5.98.49 7.13-.57 1.4-1.3 2.78-2.56 4.29zM12.03 8.95c-.15-2.08 1.16-3.8 3.24-3.95.29 2.4-2.2 4.2-3.24 3.95z" />

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
            <div className="store">
              <svg className="store-icon play-store-icon" viewBox="0 0 24 24" aria-hidden="true">{playStoreIcon}</svg>
              <div><b>Google Play</b><span>Coming soon</span></div>
            </div>
            <div className="store">
              <svg className="store-icon app-store-icon" viewBox="0 0 24 24" aria-hidden="true">{appStoreIcon}</svg>
              <div><b>App Store</b><span>Coming soon</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
