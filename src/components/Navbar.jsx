import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/gallery', label: 'Our Work' },
  { to: '/about-us', label: 'About' },
  { to: '/join-our-team', label: 'Careers' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <>
      <div className="site-topbar"><div>We don’t cut corners. We clean them.</div><span>Now hiring! <Link to="/join-our-team">Join the Clean Queens team →</Link></span></div>
      <nav className="site-nav">
        <div className="site-nav__inner">
          <Link to="/" className="site-nav__logo" aria-label="Clean Queens home"><img alt="Clean Queens" src={logo} /></Link>
          <div className="site-nav__links">
            {links.map(link => <Link className={pathname === link.to ? 'active' : ''} key={link.to} to={link.to}>{link.label}</Link>)}
          </div>
          <Link className={`site-nav__book${pathname === '/booking' ? ' active' : ''}`} to="/booking">Schedule estimate</Link>
          <div className="site-nav__contact"><Phone /><div><span>Call toll-free</span><a href="tel:8442567691">844-CLN-QNZ1</a></div></div>
          <button className="site-nav__toggle" onClick={() => setOpen(value => !value)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
        </div>
        {open && <div className="site-nav__mobile">{links.map(link => <Link onClick={() => setOpen(false)} key={link.to} to={link.to}>{link.label}</Link>)}<Link onClick={() => setOpen(false)} to="/booking">Schedule estimate</Link><Link onClick={() => setOpen(false)} to="/quote">Request a quote</Link></div>}
      </nav>
    </>
  )
}
