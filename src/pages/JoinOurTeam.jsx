import FadeIn from '../components/FadeIn'
import iconPay from '../assets/icon-pay.png'
import iconSchedule from '../assets/icon-schedule.png'
import iconCrown from '../assets/icon-crown.png'
import iconGrowth from '../assets/icon-growth.png'
import iconSupplies from '../assets/icon-supplies.png'
import iconLocation from '../assets/icon-location.png'
import teamPhoto from '../assets/IMG_0366.jpg'

const perks = [
  {
    image: iconPay,
    imgClass: 'w-24 h-auto',
    title: 'Competitive Pay',
    desc: 'We offer competitive pay and tips that reflect the quality of your work.',
  },
  {
    image: iconSchedule,
    imgClass: 'w-14 h-14',
    title: 'Flexible Scheduling',
    desc: 'Choose shifts that fit your lifestyle. We offer weekday and weekend availability to work around your needs.',
  },
  {
    image: iconCrown,
    imgClass: 'w-14 h-14',
    title: 'Supportive Team Culture',
    desc: 'Join a team that feels like family. We uplift each other and celebrate every win together.',
  },
  {
    image: iconGrowth,
    imgClass: 'w-20 h-auto',
    title: 'Growth Opportunities',
    desc: 'We invest in our people. Start with a few clients and grow your schedule over time by taking on more clients and building a steady cleaning route. Promotion to managerial positions available.',
  },
  {
    image: iconSupplies,
    imgClass: 'w-14 h-14',
    title: 'Supplies & Equipment',
    desc: 'We provide all the supplies and equipment you need and reimburse you for approved supplies you purchase and use.',
  },
  {
    image: iconLocation,
    imgClass: 'w-14 h-14',
    title: 'Local Texas Work',
    desc: 'Serve clients in your local community across Texas. No long commutes, we match you to nearby jobs.',
  },
]

const requirements = [
  'Reliable transportation to job sites across your local Texas area',
  'Strong attention to detail and a pride in delivering quality results',
  'Excellent time management and punctuality',
  'Professional, friendly demeanor with clients',
  'Ability to work independently and as part of a team',
  'Prior cleaning experience is a plus but not required — we train!',
]

export default function JoinOurTeam() {
  return (
    <div className="site-page careers-page w-full">
      <section className="royal-hero bg-gradient-to-br from-[#1E5DB8] to-[#1a4da0] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-5 leading-tight">
              Join the Clean Queens Team
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              We're a local team that loves what we do, and we're looking for people who feel the same. If you take pride in your work and care about your community, we'd love to have you.
            </p>
          </FadeIn>
          <FadeIn delay={250}>
            <span className="inline-block px-10 py-4 bg-[#5BC85A] text-white rounded-md text-lg font-semibold shadow-lg">
              Call or Text — Toll Free: 844-CLN-QNZ1 · Local: 936-581-7119
            </span>
          </FadeIn>
          <FadeIn delay={325}>
            <img className="careers-hero-photo" src={teamPhoto} alt="The original Clean Queens team celebrating together" />
          </FadeIn>
        </div>
      </section>

      <section className="color-wash-blue py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E5DB8] text-center mb-4">
              Why Work With Clean Queens?
            </h2>
            <p className="text-gray-600 text-center text-lg max-w-2xl mx-auto mb-12">
              We take care of our people — because when our team feels valued, that shows in everything they do.
            </p>
          </FadeIn>
          <div className="color-card-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map(({ image, imgClass, title, desc }, i) => (
              <FadeIn key={title} delay={i * 80}>
                <div className="bg-[#E3F2FD] rounded-xl px-6 pt-3 pb-5 flex flex-col gap-0 h-full shadow-sm hover:shadow-md transition-shadow">
                  <img alt={title} className={`${imgClass} object-contain mb-1`} decoding="async" loading="lazy" src={image} />
                  <h3 className="text-xl font-bold text-[#1E5DB8] mb-1">{title}</h3>
                  <p className="text-gray-700 leading-relaxed">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-[#E3F2FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <div>
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E5DB8] mb-6 leading-tight">
                  What We're Looking For
                </h2>
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  We're not just looking for cleaners — we're looking for people who genuinely care. If you take pride in a job well done and enjoy making a difference in someone's day, you'll fit right in. Here's what we look for:
                </p>
                <ul className="space-y-3">
                  {requirements.map(req => (
                    <li key={req} className="flex items-start gap-3 text-gray-700">
                      <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-[#5BC85A] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                        </svg>
                      </span>
                      <span className="text-base leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <img alt="Crown" className="w-24 h-auto object-contain mx-auto" decoding="async" loading="lazy" src={iconCrown} />
                  <h3 className="text-2xl font-bold text-[#1E5DB8] mt-3">Ready to Wear the Crown?</h3>
                  <p className="text-gray-600 mt-2">
                    We're a small local team and every person matters here. Come grow with us.
                  </p>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-center gap-3 p-3 bg-[#E3F2FD] rounded-lg">
                    <span className="text-2xl">📱</span>
                    <div>
                      <p className="font-semibold text-[#1E5DB8]">Call or Text</p>
                      <a className="block text-gray-700 hover:text-[#1E5DB8] transition-colors font-medium" href="tel:8442567691">
                        Toll Free: 844-CLN-QNZ1
                      </a>
                      <a className="block text-gray-700 hover:text-[#1E5DB8] transition-colors font-medium" href="tel:9365817119">
                        Local: 936-581-7119
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-[#E3F2FD] rounded-lg">
                    <span className="text-2xl">✉️</span>
                    <div>
                      <p className="font-semibold text-[#1E5DB8]">Email Us</p>
                      <a
                        className="text-gray-700 hover:text-[#1E5DB8] transition-colors font-medium break-all"
                        href="mailto:careers@cleanqueens.net"
                      >
                        careers@cleanqueens.net
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
