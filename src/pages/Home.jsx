import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'
import heroBg from '../assets/hero-bg.png'
import cleanerPhoto from '../assets/cleaner-photo.png'
import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'
import cleaningSupplies from '../assets/cleaning-supplies.png'

export default function Home() {
  return (
    <div className="w-full">
      <section className="relative h-[420px] sm:h-[600px] flex items-center justify-center overflow-hidden">
        <img
          alt="Professional cleaning team"
          className="absolute inset-0 w-full h-full object-cover object-[center_65%]"
          src={heroBg}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <FadeIn>
            <h1 className="text-2xl sm:text-4xl lg:text-7xl font-bold text-white mb-5 sm:mb-8 leading-tight">
              Let Clean Queens transform your space. Book your service today!
            </h1>
          </FadeIn>
          <FadeIn delay={150}>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/booking"
                className="px-7 sm:px-10 py-3 sm:py-4 bg-[#1E5DB8] text-white rounded-md hover:bg-[#1a4d99] transition-colors text-base sm:text-lg font-semibold shadow-lg"
              >
                Book Your Service Now
              </Link>
              <Link
                to="/services"
                className="px-7 sm:px-10 py-3 sm:py-4 bg-[#5BC85A] text-white rounded-md hover:bg-[#4ab449] transition-colors text-base sm:text-lg font-semibold shadow-lg"
              >
                Explore Our Cleaning Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E5DB8] leading-tight">
                  We're Your Neighbors, Not Just Your Cleaners
                </h2>
                <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                  <p>
                    At Clean Queens, we believe a clean home or business is something everyone in our community deserves. Proudly serving Huntsville / Walker County, Houston, and Tyler, Texas, and the surrounding areas, we're your neighbors, and we treat every space we clean with the same care we'd give our own.
                  </p>
                  <p>
                    We use eco-friendly products that are safe for your kids, your pets, and the planet. Whether it's your living room or your office, we show up consistently and leave things genuinely clean, not just surface-level tidy.
                  </p>
                  <p>
                    Every person on our team takes real pride in what they do, because your home and your business matter to us, not just as a job, but as a part of the community we all share.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative flex justify-center">
                <img
                  alt="Professional cleaner"
                  className="max-w-full h-auto max-h-[500px] rounded-lg shadow-2xl"
                  src={cleanerPhoto}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-20 bg-[#E3F2FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E5DB8] text-center mb-10 lg:mb-16">
              Cleaning That Fits Your Life
            </h2>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <div className="grid grid-cols-2 gap-3">
                <img alt="Clean home" className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-lg" src={house1} />
                <img alt="Clean home" className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-lg" src={house2} />
                <img alt="Clean home" className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-lg" src={house3} />
                <img alt="Clean home" className="w-full h-32 sm:h-48 object-cover rounded-lg shadow-lg" src={house4} />
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  No two homes or businesses are the same, and we get that. We'll work with you to find a schedule and plan that actually makes sense for your life, not just what's easiest for us.
                </p>
                <p>
                  Whether you need us once a month or every week, whether it's a small apartment or a busy office, we're here to help. We're flexible, reliable, and always happy to adjust as your needs change.
                </p>
                <p>
                  We notice the little things, the corners, the baseboards, the spots most people miss, because that's what makes a space feel truly cared for.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-[#1E5DB8] text-center mb-10 lg:mb-16">
              We Clean Like It's Our Own Home
            </h2>
          </FadeIn>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <FadeIn>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  When you let us into your space, we don't take that lightly. We show up on time, treat your belongings with respect, and clean with the kind of care that makes a real difference.
                </p>
                <p>
                  A clean space isn't just about looks, it's about how it feels to walk through the door. We want your home to feel like a breath of fresh air, and your business to feel like a place people love to be.
                </p>
                <p>
                  We're a small, local team that genuinely cares about the people we serve. That's what makes Clean Queens different.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative">
                <img
                  alt="Professional cleaning supplies"
                  className="w-full h-auto object-cover rounded-lg shadow-2xl"
                  src={cleaningSupplies}
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  )
}
