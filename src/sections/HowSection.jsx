import Toggle from '../components/Toggle.jsx'
import Tokens from '../components/Tokens.jsx'
import OrderCard from '../components/OrderCard.jsx'
import { steps } from '../data/content.js'

function PhoneMock() {
  return (
    <div className="phone">
      <div className="screen">
        <div className="top">
          <div className="row"><b>NONG</b><span>No wait. No let.</span></div>
          <div className="me">
            <div className="av">RP</div>
            <div><b>Rohan Patil</b><span>Service partner</span></div>
          </div>
          <div className="toggle">
            <div>
              <span className="on-dot"></span><b>You are online</b>
              <small>Ready for orders</small>
            </div>
            <Toggle />
          </div>
        </div>
        <div className="body">
          <div className="q">
            <div className="big">3<small>WAITING</small></div>
            <div><b>Queue</b><Tokens /></div>
          </div>
          <OrderCard sub={<>Token 01 &middot; Walk-in</>} />
          <div className="book">Book now &rarr;</div>
        </div>
      </div>
    </div>
  )
}

export default function HowSection() {
  return (
    <section className="how" id="how">
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow">How it works</span>
          <h2>Three taps.<br />Zero waiting.</h2>
          <div className="steps">
            {steps.map((s, i) => (
              <div className="step" key={s.title}>
                <div className="n">{i + 1}</div>
                <div><h3>{s.title}</h3><p>{s.text}</p></div>
              </div>
            ))}
          </div>
          <div className="fair"><b>Fair queue.</b> The shop sets the waiting limit. Nobody gets stuck behind a crowd.</div>
        </div>
        <div className="phone-wrap rv"><PhoneMock /></div>
      </div>
    </section>
  )
}
