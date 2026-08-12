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
import heroPhoto from '../assets/back.jpg'
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
  { quote: 'The Clean Queens are amazing! My house has never looked better. Professional, thorough, and so kind.', name: 'Jessica R.' },
  { quote: 'Reliable, consistent and worth every penny. I highly recommend their team!', name: 'Michael T.' },
  { quote: "They don’t cut corners, they clean them! Best cleaning service we’ve ever used.", name: 'Amanda K.' },
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
              <Link className="home-primary" to="/booking">Book a cleaning <span>→</span></Link>
              <Link className="home-secondary" to="/booking">Get a free quote</Link>
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
          <Link to="/booking">Book now & save <span>→</span></Link>
        </div>
      </section>

      <section className="home-reviews">
        <div className="home-shell">
          <div className="home-section-heading"><div><p>Real words. Real sparkle.</p><h2>What our clients are saying</h2></div><Link to="/gallery">See our work →</Link></div>
          <div className="home-review-grid">
            {reviews.map(review => (
              <article key={review.name}><div className="home-review-stars">★★★★★</div><blockquote>“{review.quote}”</blockquote><strong>— {review.name}</strong></article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
