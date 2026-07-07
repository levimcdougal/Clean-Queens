import FadeIn from '../components/FadeIn'
import ceo from '../assets/ceo.jpg'
import president from '../assets/president.jpg'

const team = [
  {
    image: ceo,
    name: 'Guy Trent',
    role: 'Founder & CEO',
    bio: "Guy Trent, founder and CEO, devised the idea to form a cleaning business while supervising an inmate cleanup detail crew during his duties at a Texas Prison Unit. During his time supervising the crew, he moved forward, and founded Clean Queens in September 2025.",
    reverse: false,
  },
  {
    image: president,
    name: 'Jennifer Holloway',
    role: 'President',
    bio: 'Jennifer Holloway joined Clean Queens in November 2025. She began as a top performing Cleaning Specialist. She performed so well in that role — training other cleaners and providing exceptional customer service — that in June 2026 she was promoted to President of the company.',
    reverse: true,
  },
]

export default function AboutUs() {
  return (
    <div className="w-full">
      <section className="py-14 bg-gradient-to-br from-[#1E5DB8] to-[#1a4da0] text-white text-center px-4">
        <FadeIn>
          <h1 className="text-3xl sm:text-5xl font-bold mb-4">Meet the Clean Queens Team</h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto">
            We're a small, local team that genuinely cares about the people and communities we serve.
          </p>
        </FadeIn>
      </section>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-16">
          {team.map(({ image, name, role, bio, reverse }, i) => (
            <FadeIn key={name} delay={i * 100}>
              <div className={reverse ? 'flex flex-col lg:flex-row-reverse gap-10 items-center' : 'flex flex-col lg:flex-row gap-10 items-center'}>
                <div className="w-full max-w-sm mx-auto lg:max-w-none lg:w-2/5 lg:mx-0 flex-shrink-0">
                  <img
                    alt={name}
                    className="w-full aspect-[4/5] lg:aspect-auto lg:max-h-[420px] object-cover object-top rounded-2xl shadow-xl"
                    src={image}
                  />
                </div>
                <div className="w-full lg:w-3/5 space-y-4">
                  <div>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#1E5DB8]">{name}</h2>
                    <span className="inline-block mt-1 px-4 py-1 bg-[#5BC85A] text-white text-sm font-semibold rounded-full">
                      {role}
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">{bio}</p>
                </div>
              </div>
              {i < team.length - 1 && <hr className="mt-16 border-gray-200" />}
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  )
}
