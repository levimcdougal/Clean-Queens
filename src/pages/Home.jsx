import { Link } from 'react-router-dom'
import {
  Building2,
  CalendarCheck,
  Check,
  Home as HomeIcon,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  Truck,
} from 'lucide-react'
import FadeIn from '../components/FadeIn'
import heroPhoto from '../assets/backk.jpg'
import cleanHome from '../assets/con1.jpg'

const services = [
  { icon: HomeIcon, title: 'Residential', subtitle: 'Cleaning' },
  { icon: Building2, title: 'Commercial', subtitle: 'Cleaning' },
  { icon: SprayCan, title: 'Deep', subtitle: 'Cleaning' },
  { icon: CalendarCheck, title: 'Recurring', subtitle: 'Cleaning' },
  { icon: Truck, title: 'Move In /', subtitle: 'Move Out' },
  { icon: Sparkles, title: 'Specialty', subtitle: 'Cleaning' },
]

const benefits = [
  'Background checked & trained professionals',
  'Customized cleaning plans',
  'Quality products & equipment',
  'Easy online booking & payments',
  'On-time, every time',
  '100% satisfaction guaranteed',
]

const reviews = [
  { quote: 'Just had my first cleaning from them and Jasmine did an AMAZING JOB! They were quick, efficient, and detailed. I was very impressed, and the prices are more than reasonable, especially for having a 2,500 sq. ft. home!', name: 'Donna', source: 'Google' },
  { quote: 'Booked them for a move-out deep clean and they absolutely nailed it. The place looked better than when I moved in. Fast, detailed, and professional.', name: 'Hunter Roberts', source: 'Google' },
  { quote: 'They did a great job on my house getting it rental ready. They did a deep clean and the house looks dang near brand new. Thanks again, guys!', name: 'Robert B.', source: 'Yelp' },
  { quote: "Jennifer was amazing! She was very kind and thorough. She made his apartment look like he had just moved in. It smells so much better and is so clean. I can't say enough good things about her and this company. I'll be calling them again.", name: 'Janelle T.', source: 'Yelp' },
  { quote: 'Amazing service done by Guy, the owner, with cleaning and taking care of my home. It was a last-minute appointment and he was able to make it.', name: 'Daranijo T.', source: 'Yelp' },
]

export default function Home() {
  return (
    <main>
      <section className="home-hero">
        <div className="home-shell home-hero__grid">
          <FadeIn className="home-hero__copy">
            <p className="home-eyebrow">Professional residential & commercial cleaning</p>
            <h1>
              <span className="home-hero__line">A <span>clean</span></span>
              <span className="home-hero__line">You can see.</span>
              <span className="home-hero__line">A standard</span>
              <span className="home-hero__line">You can <span>trust.</span></span>
            </h1>
            <p className="home-hero__intro">Quality, consistency, and genuine care—delivered by a local team that treats your space like their own.</p>
            <div className="home-trust-row">
              <span><ShieldCheck /> Fully insured</span>
              <span><Star /> Satisfaction guaranteed</span>
              <span><Check /> Licensed & reliable</span>
            </div>
            <div className="home-actions">
              <Link className="home-primary" to="/services">Explore our services <span>→</span></Link>
              <Link className="home-secondary" to="/quote">Get a free quote</Link>
            </div>
          </FadeIn>
          <FadeIn className="home-hero__visual" delay={100}>
            <div className="home-photo-frame">
              <img src={heroPhoto} alt="The Clean Queens team cleaning a bright living room" fetchPriority="high" />
              <div className="home-photo-badge"><Sparkles /> <span>We don’t cut corners.<strong> We clean them.</strong></span></div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="home-services" aria-label="Cleaning services">
        <div className="home-shell">
          <h2><span>Clean spaces.</span> Happy places.</h2>
          <div className="home-service-grid">
            {services.map(({ icon: Icon, title, subtitle }) => (
              <Link to="/services" className="home-service" key={`${title}-${subtitle}`}>
                <Icon aria-hidden="true" />
                <strong>{title}</strong><span>{subtitle}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="home-why">
        <div className="home-shell home-why__grid">
          <FadeIn className="home-why__photo">
            <img src={cleanHome} alt="A beautifully cleaned home interior" loading="lazy" />
            <div className="home-rating"><div>★★★★★</div><strong>5.0 out of 5</strong><span>Our customers love the clean</span></div>
          </FadeIn>
          <FadeIn className="home-why__copy" delay={100}>
            <p className="home-kicker">The Queen standard</p>
            <h2>Why choose <span>Clean Queens?</span></h2>
            <p>We go beyond the basics to deliver a cleaning experience you’ll love. Our trained professionals treat your home or business like royalty.</p>
            <ul>{benefits.map(item => <li key={item}><Check /> {item}</li>)}</ul>
          </FadeIn>
        </div>
      </section>

      <section className="home-offer">
        <div className="home-shell home-offer__inner">
          <div className="home-offer__crown">♛</div>
          <div><span>New customer offer</span><strong>$25 OFF</strong><p>Your first cleaning</p></div>
          <div className="home-offer__code"><span>Use code</span><strong>CLEAN25</strong></div>
          <Link to="/quote">Claim this offer <span>→</span></Link>
        </div>
      </section>

      <section className="home-reviews">
        <div className="home-shell">
          <div className="home-section-heading"><div><p>Real words. Real sparkle.</p><h2>What our clients are saying</h2></div><Link to="/gallery">See our work →</Link></div>
          <div className="home-review-grid">
            {reviews.map(review => (
              <article key={review.name}><div className="home-review-stars">★★★★★</div><blockquote>“{review.quote}”</blockquote><div className="home-review-author"><strong>— {review.name}</strong><span>{review.source} review</span></div></article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
