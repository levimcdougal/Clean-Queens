import visa from '../assets/payments/visa.svg'
import mastercard from '../assets/payments/mastercard.svg'
import amex from '../assets/payments/amex.svg'
import discover from '../assets/payments/discover.svg'

const cards = [
  { name: 'Visa', logo: visa },
  { name: 'Mastercard', logo: mastercard },
  { name: 'American Express', logo: amex },
  { name: 'Discover', logo: discover },
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
      </div>
    </section>
  )
}
