import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const links = [
  { to: '/', label: 'Home', color: '#1E5DB8' },
  { to: '/services', label: 'Services', color: '#5BC85A' },
  { to: '/about-us', label: 'About Us', color: '#1E5DB8' },
  { to: '/gallery', label: 'Gallery', color: '#5BC85A' },
  { to: '/join-our-team', label: 'Join Our Team', color: '#D946A6' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <nav className="bg-white/95 shadow-lg sticky top-0 z-50 backdrop-blur-md border-b border-[#1E5DB8]/10">
      <div className="brand-ribbon" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img alt="Clean Queens Logo" className="h-16 w-auto" src={logo} />
          </Link>

          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-5 lg:gap-8">
            {links.map(({ to, label, color }) => {
              const active = pathname === to
              return (
                <Link
                  key={to}
                  to={to}
                  className={`transition-all font-bold rounded-full px-3 py-2 ${active ? 'bg-[#EAF4FF] shadow-sm' : 'hover:bg-gray-50'}`}
                  style={{ color: active ? color : '#374151' }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.color = color }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.color = '#374151' }}
                >
                  {label}
                </Link>
              )
            })}
          </div>

          <div className="hidden md:flex flex-col items-center gap-1">
            <span className="text-xs font-medium text-gray-600 whitespace-nowrap">
              Ready to Experience Royal Service?
            </span>
            <Link
              to="/booking"
              className={
                pathname === '/booking'
                  ? 'royal-button px-5 py-2 text-white rounded-full transition-transform hover:scale-105 whitespace-nowrap text-sm ring-2 ring-[#5BC85A]'
                  : 'royal-button px-5 py-2 text-white rounded-full transition-transform hover:scale-105 whitespace-nowrap text-sm'
              }
            >
              Book Your Service Now
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setOpen(o => !o)}
          >
            <span className={open ? 'block w-6 h-0.5 bg-gray-700 transition-transform duration-300 origin-center rotate-45 translate-y-2' : 'block w-6 h-0.5 bg-gray-700 transition-transform duration-300 origin-center'} />
            <span className={open ? 'block w-6 h-0.5 bg-gray-700 transition-opacity duration-300 opacity-0' : 'block w-6 h-0.5 bg-gray-700 transition-opacity duration-300'} />
            <span className={open ? 'block w-6 h-0.5 bg-gray-700 transition-transform duration-300 origin-center -rotate-45 -translate-y-2' : 'block w-6 h-0.5 bg-gray-700 transition-transform duration-300 origin-center'} />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 flex flex-col gap-4">
            {links.map(({ to, label, color }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="font-medium"
                style={{ color: pathname === to ? color : '#374151' }}
              >
                {label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="royal-button px-5 py-2 text-white rounded-full text-center text-sm font-medium"
            >
              Book Your Service Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
