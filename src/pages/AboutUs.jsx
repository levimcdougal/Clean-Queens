import FadeIn from '../components/FadeIn'
import ceo from '../assets/ceo.jpg'
import president from '../assets/opt-president.jpg'

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
    <div className="about-page w-full overflow-x-clip">
      <section className="royal-hero about-hero text-white text-center">
        <FadeIn className="about-container">
          <h1 className="about-title font-bold">Meet the Clean Queens Team</h1>
          <p className="about-intro text-white/85 mx-auto">
            We're a small, local team that genuinely cares about the people and communities we serve.
          </p>
        </FadeIn>
      </section>

      <section className="color-wash-blue about-team-section bg-white">
        <div className="about-container about-team-list">
          {team.map(({ image, name, role, bio, reverse }, i) => (
            <FadeIn key={name} delay={i * 100}>
              <article className={`about-team-member${reverse ? ' about-team-member--reverse' : ''}`}>
                <div className="about-portrait-wrap">
                  <img
                    alt={name}
                    className="royal-frame about-portrait object-cover object-top rounded-2xl"
                    decoding="async"
                    loading="lazy"
                    src={image}
                  />
                </div>
                <div className="about-copy space-y-4">
                  <div>
                    <h2 className="about-name font-bold text-[#1E5DB8]">{name}</h2>
                    <span className="inline-block mt-1 px-4 py-1 bg-[#5BC85A] text-white text-sm font-semibold rounded-full">
                      {role}
                    </span>
                  </div>
                  <p className="about-bio text-gray-700 leading-relaxed">{bio}</p>
                </div>
              </article>
              {i < team.length - 1 && <hr className="about-divider border-gray-200" />}
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  )
}
