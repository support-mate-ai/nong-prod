import Toggle from '../components/Toggle.jsx'
import Tokens from '../components/Tokens.jsx'
import OrderCard from '../components/OrderCard.jsx'
import { images } from '../data/images.js'

export default function ProviderSection() {
  return (
    <section className="prov" style={{ background: 'var(--soft)' }}>
      <div className="wrap">
        <div className="rv">
          <span className="eyebrow">Service provider app</span>
          <h2>3 steps.<br />Zero wait.</h2>
          <p className="lead">From switch-on to service done.</p>
        </div>
        <div className="grid">
          <div className="pcard rv">
            <div className="num">1</div>
            <h3>Go online</h3>
            <p>Turn on your status. You are live and ready for orders.</p>
            <div className="mock dark">
              <div className="l">
                <span className="on-dot"></span>
                <div>
                  You are online
                  <small style={{ display: 'block', fontWeight: 400, color: '#a8abb3', fontSize: 11 }}>Ready for orders</small>
                </div>
                <Toggle />
              </div>
            </div>
          </div>
          <div className="pcard rv">
            <div className="num">2</div>
            <h3>Watch the queue</h3>
            <p>Tokens line up in order. You set how many can wait.</p>
            <div className="mock">
              <div className="waitrow"><b>3<small>/3</small></b><Tokens /></div>
              <small className="n">Next up: token 01 &middot; only 3 wait at a time</small>
            </div>
          </div>
          <div className="pcard rv">
            <div className="num">3</div>
            <h3>Confirm &amp; serve</h3>
            <p>Accept the order, do your best work, take the next token.</p>
            <div className="mock" style={{ padding: 12 }}>
              <OrderCard heading={<>New order &middot; Token 01</>} style={{ border: 0, padding: 0 }} />
            </div>
          </div>
        </div>
        <div className="mission rv">
          <img src={images.logo} alt="No wait. No let. logo" />
          <div>
            <span className="eyebrow">The mission</span>
            <h3>No wait. No let.</h3>
            <p>Your time stays yours, and so does your customer's.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
