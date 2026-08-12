import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import logo from '../assets/logo.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import google from '../assets/google.png'
import nextdoor from '../assets/nextdoor.png'
import yelp from '../assets/yelp.png'

const socials = [
  { src: facebook, label: 'Facebook', href: 'https://www.facebook.com' },
  { src: instagram, label: 'Instagram', href: 'https://www.instagram.com' },
  { src: google, label: 'Google', href: 'https://www.google.com' },
  { src: nextdoor, label: 'Nextdoor', href: 'https://www.nextdoor.com' },
  { src: yelp, label: 'Yelp', href: 'https://www.yelp.com' },
]

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div className="site-footer__brand"><img src={logo} alt="Clean Queens" /><p>A clean you can see. A standard you can trust.</p><span><ShieldCheck /> Trusted. Reliable. The Queen standard.</span></div>
        <div><h2>Quick links</h2><Link to="/services">Services</Link><Link to="/gallery">Our work</Link><Link to="/about-us">About us</Link><Link to="/join-our-team">Careers</Link><Link to="/booking">Book a cleaning</Link></div>
        <div><h2>Contact us</h2><a href="tel:8442567691"><Phone /> 844-CLN-QNZ1</a><a href="tel:9365817119"><Phone /> 936-581-7119</a><a href="mailto:info@cleanqueens.net"><Mail /> info@cleanqueens.net</a><span><MapPin /> Serving homes & businesses across Texas</span></div>
        <div><h2>Follow us</h2><div className="site-footer__socials">{socials.map(item => <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer"><img src={item.src} alt="" /></a>)}</div></div>
      </div>
      <div className="site-footer__bottom">© 2026 Trent Holdings, LLC. All Rights Reserved.</div>
    </footer>
  )
}
