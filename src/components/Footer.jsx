import { contact } from '../data/content.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <b>THE NONG</b>
        <span>No wait. No let.</span>
        <b>{contact.web}</b>
      </div>
    </footer>
  )
}
