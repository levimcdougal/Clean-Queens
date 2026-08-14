import { useMemo, useState } from 'react'
import CalEmbed from '../components/CalEmbed'
import venmo from '../assets/venmo.png'
import cashapp from '../assets/cashapp.png'
import paypal from '../assets/paypal.png'
import stripe from '../assets/stripe.png'

const faqs = [
  {
    q: 'Do I need to be home during the cleaning?',
    a: "No, you don't need to be home. Many of our clients provide a key or entry code. We treat every home with the utmost care and respect whether you're there or not.",
  },
  {
    q: "What's included in a Deep Clean?",
    a: "Our Deep Clean covers everything in a standard clean plus detailed attention to baseboards, inside appliances, window sills, light fixtures, and hard-to-reach areas. It's the ideal starting point for first-time customers.",
  },
  {
    q: 'Do you bring your own supplies and equipment?',
    a: "Yes, we bring everything needed to get the job done. If you have a preferred product you'd like us to use, just let us know.",
  },
  {
    q: 'How do I prepare for my cleaning appointment?',
    a: "Simply tidy up any clutter so our team can focus on deep cleaning surfaces. Secure pets and make sure we have access to the areas you'd like cleaned.",
  },
  {
    q: 'Can I customize my cleaning plan?',
    a: "Absolutely. We work with you to build a plan around your schedule, space, and specific needs — whether that's focusing on certain rooms or adjusting the frequency of visits.",
  },
  {
    q: 'What is the Subscription Clean Plan?',
    a: 'Our Subscription Clean Plan lets you pay a flat monthly rate and choose your preferred cleaning frequency — weekly, bi-weekly, or monthly. Think of it like a membership for a consistently clean home.',
  },
  {
    q: 'Are you insured and bonded?',
    a: 'Yes, we are insured and bonded to protect our company from liabilities and risk, as well as protect our clients from any malfeasance.',
  },
]

// Starting estimate assumptions. Keep these values together so the owner can
// adjust pricing without changing the calculator logic.
const estimateRates = {
  base: 95,
  bedroom: 18,
  bathroom: 32,
  squareFootBands: [
    { upTo: 1000, amount: 0 },
    { upTo: 1500, amount: 25 },
    { upTo: 2000, amount: 50 },
    { upTo: 2500, amount: 80 },
    { upTo: 3000, amount: 115 },
    { upTo: Infinity, amount: 155 },
  ],
  serviceMultipliers: {
    standard: 1,
    deep: 1.45,
    move: 1.6,
  },
  frequencyDiscounts: {
    once: 0,
    weekly: 0.15,
    biweekly: 0.1,
    monthly: 0.05,
  },
  rangeVariance: 0.12,
}

function QuoteEstimator() {
  const [bedrooms, setBedrooms] = useState(2)
  const [bathrooms, setBathrooms] = useState(1)
  const [squareFeet, setSquareFeet] = useState(1200)
  const [service, setService] = useState('standard')
  const [frequency, setFrequency] = useState('once')

  const estimate = useMemo(() => {
    const sizeCharge = estimateRates.squareFootBands.find(band => squareFeet <= band.upTo)?.amount ?? 0
    const subtotal = estimateRates.base + (bedrooms * estimateRates.bedroom) + (bathrooms * estimateRates.bathroom) + sizeCharge
    const adjusted = subtotal * estimateRates.serviceMultipliers[service] * (1 - estimateRates.frequencyDiscounts[frequency])
    const low = Math.round((adjusted * (1 - estimateRates.rangeVariance)) / 5) * 5
    const high = Math.round((adjusted * (1 + estimateRates.rangeVariance)) / 5) * 5
    return { low: Math.max(low, 95), high: Math.max(high, 110) }
  }, [bathrooms, bedrooms, frequency, service, squareFeet])

  return (
    <section className="booking-estimator" aria-labelledby="estimate-title">
      <div className="booking-estimator__intro">
        <p className="home-kicker">Plan your cleaning</p>
        <h2 id="estimate-title">Instant Quote Estimator</h2>
        <p>Enter a few details to see a preliminary price range for one cleaning visit.</p>
      </div>
      <div className="booking-estimator__layout">
        <div className="booking-estimator__fields">
          <label>Cleaning type<select value={service} onChange={event => setService(event.target.value)}><option value="standard">Standard cleaning</option><option value="deep">Deep cleaning</option><option value="move">Move-in / move-out</option></select></label>
          <label>Bedrooms<input type="number" min="0" max="12" value={bedrooms} onChange={event => setBedrooms(Math.max(0, Number(event.target.value)))} /></label>
          <label>Bathrooms<input type="number" min="0" max="12" step="0.5" value={bathrooms} onChange={event => setBathrooms(Math.max(0, Number(event.target.value)))} /></label>
          <label>Approx. square feet<input type="number" min="300" max="10000" step="100" value={squareFeet} onChange={event => setSquareFeet(Math.max(300, Number(event.target.value)))} /></label>
          <label>Frequency<select value={frequency} onChange={event => setFrequency(event.target.value)}><option value="once">One-time</option><option value="weekly">Weekly</option><option value="biweekly">Every two weeks</option><option value="monthly">Monthly</option></select></label>
        </div>
        <aside className="booking-estimator__result" aria-live="polite">
          <span>Your estimated range</span>
          <strong>${estimate.low}–${estimate.high}</strong>
          <small>per visit</small>
          <a href="#schedule-cleaning">Schedule an estimate</a>
        </aside>
      </div>
      <p className="booking-estimator__disclaimer">This is just an estimate. For more accurate information, schedule an in-person consultation or email interior photos to us at <a href="mailto:quotes@cleanqueens.net">quotes@cleanqueens.net</a>. Final pricing may vary based on the home’s condition, requested tasks, accessibility, and add-on services.</p>
    </section>
  )
}

export default function Booking() {
  return (
    <div className="site-page booking-page w-full">
      <section className="royal-hero bg-gradient-to-br from-[#1E5DB8] to-[#1a4da0] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Book a Service</h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Schedule your free in-person consultation and estimate with Clean Queens.
          </p>
        </div>
      </section>

      <section className="color-wash-blue bg-white pt-8 pb-0 -mb-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a
            href="#faq"
            className="inline-block px-6 py-3 bg-[#1E5DB8] text-white rounded-full hover:bg-[#1a4da0] transition-colors font-semibold mt-6"
          >
            Have Questions? View Our FAQ
          </a>
        </div>
      </section>

      <div className="booking-estimator-shell"><QuoteEstimator /></div>

      <section className="color-wash-blue bg-white py-8" id="schedule-cleaning">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <CalEmbed calLink="cleanqueens/in-person-consultation-estimate" namespace="in-person-consultation-estimate" />
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

      <section className="py-12 bg-[#E3F2FD]" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#1E5DB8] text-center mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-white rounded-lg shadow-sm border border-gray-100">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-gray-800 group-open:text-[#1E5DB8] list-none">
                  {q}
                  <span className="ml-4 text-xl text-[#1E5DB8] group-open:rotate-45 transition-transform duration-200 flex-shrink-0">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
