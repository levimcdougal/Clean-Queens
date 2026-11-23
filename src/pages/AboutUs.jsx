import FadeIn from '../components/FadeIn'
import ceo from '../assets/ceo.jpg'
import president from '../assets/IMG_1145.jpg'

const team = [
  {
    image: ceo,
    name: 'Guy Trent',
    role: 'Founder & CEO',
    bio: 'Guy Trent conceived the idea for Clean Queens while supervising an inmate cleanup detail crew as part of his duties at a Texas prison unit. He founded the company in September 2025 and serves as its Founder and CEO. Guy oversees the company’s finances and logistics.',
    reverse: false,
  },
  {
    image: president,
    name: 'Jennifer Holloway',
    role: 'President',
    bio: 'Jennifer Holloway joined Clean Queens in November 2025 as a Cleaning Specialist. Bringing five years of cleaning experience and ten years of management and leadership experience, she quickly distinguished herself through her high-quality work, exceptional customer service, and support in training other cleaners. In June 2026, she was promoted to President and now leads the company’s day-to-day operations.',
    reverse: true,
  },
]

export default function AboutUs() {
  return (
    <div className="site-page about-page w-full overflow-x-clip">
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
                  {Array.isArray(bio) ? (
                    <div className="about-bio space-y-4 text-gray-700 leading-relaxed">
                      {bio.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  ) : (
                    <p className="about-bio text-gray-700 leading-relaxed">{bio}</p>
                  )}
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
