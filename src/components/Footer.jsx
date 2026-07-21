import { Link } from 'react-router-dom'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import google from '../assets/google.png'
import nextdoor from '../assets/nextdoor.png'
import yelp from '../assets/yelp.png'
import insuredBadge from '../assets/insured-badge.png'

export default function Footer() {
  return (
    <footer className="relative py-8 bg-gradient-to-br from-[#052c78] via-[#0746a8] to-[#062b70] text-white border-t-[7px] border-[#5BC85A]">
      <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#5BC85A] via-[#D946A6] to-[#F7B928]" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-3">
          <h2 className="text-xl font-bold mb-1">Ready to Experience Royal Service?</h2>
          <p className="text-base text-white/90">Let Clean Queens transform your space. Book your service today!</p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <div className="text-center">
            <p className="text-white text-base font-semibold leading-none">Call or Text Us</p>
            <a className="block text-lg font-bold text-white hover:text-white/80 transition-colors" href="tel:8442567691">
              Toll Free: 844-CLN-QNZ1
            </a>
            <a className="block text-lg font-bold text-white hover:text-white/80 transition-colors" href="tel:9365817119">
              Local: 936-581-7119
            </a>
          </div>
          <div className="hidden sm:block w-px h-10 bg-white/30" />
          <Link
            to="/booking"
            className="royal-button inline-block px-8 py-2.5 text-white rounded-full transition-transform hover:scale-105 text-lg font-semibold"
          >
            Book Your Service Now
          </Link>
          <div className="hidden sm:block w-px h-10 bg-white/30" />
          <div className="text-center">
            <p className="text-white text-base font-semibold leading-none">Email Us</p>
            <a className="text-lg font-bold text-white hover:text-white/80 transition-colors" href="mailto:info@cleanqueens.net">
              info@cleanqueens.net
            </a>
          </div>
        </div>

        <div className="mt-5 pt-4 border-t border-white/20 text-center">
          <p className="text-white text-sm font-semibold mb-3">Find Us On</p>
          <div className="flex items-center justify-center gap-2 sm:gap-5 flex-nowrap">
            <a aria-label="Facebook" className="hover:opacity-80 transition-opacity" href="https://www.facebook.com" rel="noopener noreferrer" target="_blank">
              <img alt="Facebook" className="h-10 w-10 sm:h-16 sm:w-16 object-contain" decoding="async" loading="lazy" src={facebook} />
            </a>
            <a aria-label="Instagram" className="hover:opacity-80 transition-opacity" href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
              <img alt="Instagram" className="h-10 w-10 sm:h-16 sm:w-16 object-contain" decoding="async" loading="lazy" src={instagram} />
            </a>
            <a aria-label="Google" className="hover:opacity-80 transition-opacity" href="https://www.google.com" rel="noopener noreferrer" target="_blank">
              <img alt="Google" className="h-12 w-12 sm:h-20 sm:w-20 object-contain" decoding="async" loading="lazy" src={google} />
            </a>
            <a aria-label="Nextdoor" className="hover:opacity-80 transition-opacity ml-3" href="https://www.nextdoor.com" rel="noopener noreferrer" target="_blank">
              <img alt="Nextdoor" className="h-12 w-12 sm:h-20 sm:w-20 object-contain" decoding="async" loading="lazy" src={nextdoor} />
            </a>
            <a aria-label="Yelp" className="hover:opacity-80 transition-opacity" href="https://www.yelp.com" rel="noopener noreferrer" target="_blank">
              <img alt="Yelp" className="h-12 w-12 sm:h-20 sm:w-20 object-contain" decoding="async" loading="lazy" src={yelp} />
            </a>
          </div>
          <div className="mt-4 pt-4 border-t border-white/20 flex justify-center">
            <img alt="Insured and Bonded" className="h-24 object-contain" decoding="async" loading="lazy" src={insuredBadge} />
          </div>
        </div>

        <div className="text-center text-white/70 text-xs mt-3">
          © 2026 Trent Holdings, LLC. All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}
