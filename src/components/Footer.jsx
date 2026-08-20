import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import google from '../assets/ze.png'
import nextdoor from '../assets/xe.png'
import yelp from '../assets/yelp-circle.png'

const socials = [
  { src: facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1C2oddjbmE/?mibextid=wwXIfr' },
  { src: instagram, label: 'Instagram', href: 'https://www.instagram.com/cleanqu33nz?igsi=MWVscGIxa2xzNnVq' },
  { src: google, label: 'Google', href: 'https://share.google/LFZNNBtRFJ8DrrCB4' },
  { src: nextdoor, label: 'Nextdoor', href: 'https://www.nextdoor.com' },
  { src: yelp, label: 'Yelp', href: 'https://m.yelp.com/biz/clean-queens-huntsville' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand"><img src={logo} alt="Clean Queens" /><p>A clean you can see. A standard you can trust.</p><span><ShieldCheck /> Trusted. Reliable. The Queen standard.</span></div>
        <div><h2>Quick links</h2><Link to="/services">Services</Link><Link to="/gallery">Our work</Link><Link to="/about-us">About us</Link><Link to="/join-our-team">Careers</Link><Link to="/booking">Schedule an estimate</Link><Link to="/quote">Request a free quote</Link></div>
        <div><h2>Contact us</h2><a href="tel:8442567691"><Phone /><span className="footer-toll-free"><strong>Toll-free:</strong><span className="footer-toll-free__number"><span className="footer-toll-free__prefix">844-</span><span className="footer-toll-free__vanity"><span>C</span><span>L</span><span>N</span><span>-</span><span>Q</span><span>N</span><span>Z</span><span>1</span><small>2</small><small>5</small><small>6</small><small>-</small><small>7</small><small>6</small><small>9</small><small>1</small></span></span></span></a><a href="tel:9365817119"><Phone /><span><strong>Local call or text:</strong> 936-581-7119</span></a><a href="mailto:info@cleanqueens.net"><Mail /> info@cleanqueens.net</a><span><MapPin /> Serving homes & businesses across Texas</span></div>
        <div><h2>Follow us</h2><div className="site-footer__socials">{socials.map(item => <a className={`social-${item.label.toLowerCase()}`} key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer"><img src={item.src} alt="" /></a>)}</div></div>
      </div>
      <div className="site-footer__bottom">© 2026 Trent Holdings, LLC. All Rights Reserved.</div>
    </footer>
  )
}
