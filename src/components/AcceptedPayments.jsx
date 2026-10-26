import visa from '../assets/payments/visa.svg'
import mastercard from '../assets/payments/mastercard.svg'
import amex from '../assets/payments/amex.svg'
import discover from '../assets/payments/discover.svg'
import venmo from '../assets/payments/venmo.svg'
import cashapp from '../assets/payments/cashapp.svg'
import paypal from '../assets/payments/paypal.svg'
import stripe from '../assets/payments/stripe.svg'

const cards = [
  { name: 'Visa', logo: visa },
  { name: 'Mastercard', logo: mastercard },
  { name: 'American Express', logo: amex },
  { name: 'Discover', logo: discover },
]

const providers = [
  { name: 'Venmo', logo: venmo },
  { name: 'Cash App', logo: cashapp },
  { name: 'PayPal', logo: paypal },
  { name: 'Stripe', logo: stripe },
]

export default function AcceptedPayments() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <hr className="border-t border-gray-200 mb-10" />
        <h2 className="text-2xl font-bold text-[#1E5DB8] mb-8">Accepted Forms of Payment</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 items-center justify-items-center">
          {cards.map(({ name, logo }) => (
            <li key={name} className="w-full max-w-32">
              <img
                alt={name}
                className="w-full h-auto rounded-lg"
                width="780"
                height="500"
                decoding="async"
                loading="lazy"
                src={logo}
              />
            </li>
          ))}
        </ul>
        <p className="mt-5 mb-2 text-sm font-semibold">via</p>
        <ul aria-label="Payment platforms" className="mx-auto flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:gap-x-5">
          {providers.map(({ name, logo }) => (
            <li key={name} className="flex shrink-0 items-center justify-center gap-1 text-[10px] font-semibold text-black sm:gap-1.5 sm:text-sm">
              <img
                alt={name}
                src={logo}
                className={name === 'Cash App'
                  ? 'h-4 w-4 shrink-0 sm:h-6 sm:w-6'
                  : name === 'Venmo'
                    ? 'block h-3 w-auto max-w-none sm:h-[18px]'
                    : 'block h-4 w-auto max-w-none sm:h-6'}
              />
              {name === 'Cash App' && <span aria-hidden="true" className="whitespace-nowrap">Cash App</span>}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-5 max-w-sm text-base font-semibold leading-snug">
          We do not accept cash or checks, including eChecks and mobile check deposits.
        </p>
      </div>
    </section>
  )
}
