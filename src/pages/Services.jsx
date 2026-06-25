import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import deepClean from '../assets/service-deep-clean.png'
import weekly from '../assets/service-weekly.png'
import biweekly from '../assets/service-biweekly.png'
import monthly from '../assets/service-monthly.png'
import moveOut from '../assets/service-moveout.png'
import postConstruction from '../assets/service-postconstruction.png'
import subscription from '../assets/service-subscription.png'
import venmo from '../assets/venmo.png'
import cashapp from '../assets/cashapp.png'
import paypal from '../assets/paypal.png'
import stripe from '../assets/stripe.png'

const services = [
  {
    image: deepClean,
    title: 'Deep Clean',
    desc: 'A deep clean of an occupied home or business, for first time customers.',
  },
  {
    image: weekly,
    title: 'Weekly',
    desc: 'A routine clean of your home or business, scheduled weekly.',
  },
  {
    image: biweekly,
    title: 'Bi-Weekly',
    desc: 'A routine clean of your home or business, scheduled once every 2 weeks.',
  },
  {
    image: monthly,
    title: 'Monthly',
    desc: 'A routine clean of your home or business, scheduled once per month.',
  },
  {
    image: moveOut,
    title: 'Move Out Clean',
    desc: 'A thorough clean of an unoccupied home after a tenant moves out, leaving the space spotless for the next occupant or for listing.',
  },
  {
    image: postConstruction,
    title: 'Post Construction / Move In Clean',
    desc: 'A deep clean for spaces after a remodel or new build, removing construction dust and debris so the space is move-in ready.',
  },
  {
    image: subscription,
    title: 'Subscription Clean Plan',
    desc: 'Pay a flat monthly rate and choose your cleaning schedule — weekly, bi-weekly, or monthly. Like a car wash membership, but for your home.',
    extraClass: 'md:col-span-2 md:flex md:justify-center lg:flex lg:col-span-1 lg:col-start-2',
    cardClass: 'md:max-w-[calc(50%-1rem)] lg:max-w-none',
  },
]

export default function Services() {
  return (
    <div className="w-full">
      <section className="bg-gradient-to-br from-[#1E5DB8] to-[#1a4da0] text-white py-12">
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

      <section className="pt-12 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {services.map(({ image, title, desc, extraClass, cardClass = '' }, i) => (
              <FadeIn key={title} delay={(i % 3) * 100} className={extraClass}>
                <div className={`bg-white border-2 border-gray-100 rounded-lg p-8 hover:shadow-xl transition-shadow text-center flex flex-col w-full ${cardClass}`}>
                  <div className="mb-6 flex justify-center items-center h-[200px]">
                    <img alt={title} className="w-auto h-full max-w-[300px] object-contain" src={image} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-[#1E5DB8]">{title}</h3>
                  <p className="text-gray-600 mb-4 min-h-[60px]">{desc}</p>
                  <div className="mt-auto">
                    <button className="px-5 py-2 bg-[#1E5DB8] text-white rounded-full text-sm font-semibold hover:bg-[#1a4da0] transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <hr className="border-t border-gray-200 mb-10" />
          <h2 className="text-2xl font-bold text-[#1E5DB8] mb-8">Accepted Forms of Payment</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center items-center justify-items-center">
            <img alt="Venmo" className="h-24 object-contain" src={venmo} />
            <img alt="Cash App" className="h-24 object-contain" src={cashapp} />
            <img alt="PayPal" className="h-20 object-contain" src={paypal} />
            <img alt="Stripe" className="h-20 object-contain" src={stripe} />
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
