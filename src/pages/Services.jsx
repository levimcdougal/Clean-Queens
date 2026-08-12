import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import deepClean from '../assets/service-deep-clean-pink.png'
import weekly from '../assets/service-weekly-pink.png'
import biweekly from '../assets/service-biweekly-pink.png'
import monthly from '../assets/service-monthly-pink.png'
import moveOut from '../assets/service-moveout-pink.png'
import postConstruction from '../assets/service-postconstruction-pink.png'
import subscription from '../assets/service-subscription-pink.png'
import carpetCleaning from '../assets/service-carpet-pink.png'
import venmo from '../assets/venmo.png'
import cashapp from '../assets/cashapp.png'
import paypal from '../assets/paypal.png'
import stripe from '../assets/stripe.png'

const services = [
  {
    image: deepClean,
    title: 'Deep Clean',
    desc: 'A deep clean of an occupied home or business, for first time customers.',
    details: 'Our most detailed top-to-bottom cleaning covers the areas that need extra attention, including buildup, baseboards, fixtures, cabinet exteriors, and other commonly missed surfaces. It creates a fresh starting point before recurring service begins.',
  },
  {
    image: weekly,
    title: 'Weekly',
    desc: 'A routine clean of your home or business, scheduled weekly.',
    details: 'Weekly service keeps dust, floors, kitchens, bathrooms, and high-use areas consistently clean. It is a great fit for busy households, families with pets, and businesses that need dependable upkeep.',
  },
  {
    image: biweekly,
    title: 'Bi-Weekly',
    desc: 'A routine clean of your home or business, scheduled once every 2 weeks.',
    details: 'Our most popular recurring schedule provides a thorough routine cleaning every other week. We maintain the essential areas of your space so dirt and clutter do not have time to build up.',
  },
  {
    image: monthly,
    title: 'Monthly',
    desc: 'A routine clean of your home or business, scheduled once per month.',
    details: 'Monthly service gives your home or business a regular refresh with focused attention on kitchens, bathrooms, floors, dusting, and general surfaces. It works well for lower-traffic spaces that still need professional care.',
  },
  {
    image: moveOut,
    title: 'Move Out Clean',
    desc: 'A thorough clean of an unoccupied home after a tenant moves out, leaving the space spotless for the next occupant or for listing.',
    details: 'We clean the empty space from top to bottom, paying special attention to kitchens, bathrooms, floors, baseboards, cabinets, and the areas normally hidden by furniture. The result is a clean, welcoming property ready for its next chapter.',
  },
  {
    image: postConstruction,
    title: 'Post Construction / Move In Clean',
    desc: 'A deep clean for spaces after a remodel or new build, removing construction dust and debris so the space is move-in ready.',
    details: 'This detailed service removes fine construction dust and residue from accessible surfaces, fixtures, trim, cabinets, and floors. It is also ideal before moving in, giving you a fresh and professionally cleaned space to settle into.',
  },
  {
    image: carpetCleaning,
    title: 'Carpet Cleaning',
    desc: 'Professional carpet cleaning that lifts dirt, stains, and odors to leave your carpets looking and feeling refreshed.',
    details: 'Our carpet cleaning service targets embedded dirt, everyday stains, and lingering odors to restore a cleaner, fresher feel. It is a great addition to a full-home clean or a simple way to refresh high-traffic areas.',
  },
  {
    image: subscription,
    title: 'Subscription Clean Plan',
    desc: 'Pay a flat monthly rate and choose your cleaning schedule — weekly, bi-weekly, or monthly. Like a car wash membership, but for your home.',
    details: 'Choose the recurring frequency that fits your household and enjoy predictable monthly billing. Your plan makes it simple to keep professional cleaning on the calendar without booking every visit separately.',
  },
]

export default function Services() {
  const [expandedService, setExpandedService] = useState(null)

  const toggleService = (title) => {
    setExpandedService((current) => (current === title ? null : title))
  }

  return (
    <div className="site-page services-page w-full">
      <section className="royal-hero bg-gradient-to-br from-[#1E5DB8] to-[#1a4da0] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Our Services</h1>
              <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto">
                Professional cleaning solutions designed to meet your specific needs. We deliver excellence in every service.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="color-wash-blue pt-12 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="color-card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-stretch">
            {services.map(({ image, title, desc, details, extraClass, cardClass = '' }, i) => {
              const isExpanded = expandedService === title
              const detailsId = `service-details-${i}`
              const centeredFinalRow = i === 6 ? 'lg:col-start-2' : i === 7 ? 'lg:col-start-4' : ''

              return (
              <FadeIn key={title} delay={(i % 3) * 100} className={`h-full lg:col-span-2 ${centeredFinalRow} ${extraClass || ''}`}>
                <div className={`bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-xl transition-shadow text-center flex flex-col w-full h-full ${cardClass}`}>
                  <div className="mb-6 flex justify-center items-center h-[200px]">
                    <img alt={title} className="w-auto h-full max-w-[300px] object-contain" decoding="async" loading="lazy" src={image} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-[#1E5DB8]">{title}</h3>
                  <p className="text-gray-600 mb-4 min-h-[60px]">{desc}</p>
                  {isExpanded && (
                    <p id={detailsId} className="text-gray-600 mb-5 text-left leading-relaxed">
                      {details}
                    </p>
                  )}
                  <div className="mt-auto">
                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={detailsId}
                      onClick={() => toggleService(title)}
                      className="px-5 py-2 bg-[#1E5DB8] text-white rounded-full text-sm font-semibold hover:bg-[#1a4da0] transition-colors"
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                    </button>
                  </div>
                </div>
              </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <hr className="border-t border-gray-200 mb-10" />
          <h2 className="text-2xl font-bold text-[#1E5DB8] mb-8">Accepted Forms of Payment</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center items-center justify-items-center">
            <img alt="Venmo" className="h-24 object-contain" decoding="async" loading="lazy" src={venmo} />
            <img alt="Cash App" className="h-24 object-contain" decoding="async" loading="lazy" src={cashapp} />
            <img alt="PayPal" className="h-20 object-contain" decoding="async" loading="lazy" src={paypal} />
            <img alt="Stripe" className="h-20 object-contain" decoding="async" loading="lazy" src={stripe} />
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#E3F2FD] text-center">
        <FadeIn>
          <h2 className="text-xl sm:text-2xl font-bold text-[#1E5DB8] mb-2">Have Questions About Our Services?</h2>
          <p className="text-gray-600 mb-6">We've got answers. Check out our FAQ before you book.</p>
          <Link
            to="/booking#faq"
            className="inline-block px-8 py-3 bg-[#1E5DB8] text-white rounded-full hover:bg-[#1a4da0] transition-colors font-semibold text-lg"
          >
            View Our FAQ
          </Link>
        </FadeIn>
      </section>
    </div>
  )
}
