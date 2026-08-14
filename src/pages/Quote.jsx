import { useState } from 'react'

const serviceOptions = [
  'Residential cleaning',
  'Commercial cleaning',
  'Deep cleaning',
  'Recurring cleaning',
  'Move-in / move-out cleaning',
  'Specialty cleaning',
]

export default function Quote() {
  const [submitted, setSubmitted] = useState(false)

  function sendQuoteRequest(event) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const subject = `Free quote request from ${data.get('name')}`
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Phone: ${data.get('phone')}`,
      `Service: ${data.get('service')}`,
      `Property address: ${data.get('address')}`,
      `Approximate square footage: ${data.get('squareFootage') || 'Not provided'}`,
      `Bedrooms: ${data.get('bedrooms') || 'Not provided'}`,
      `Bathrooms: ${data.get('bathrooms') || 'Not provided'}`,
      `Preferred date or timing: ${data.get('timing') || 'Not provided'}`,
      '',
      'Cleaning details:',
      data.get('details') || 'No additional details provided.',
    ].join('\n')

    setSubmitted(true)
    window.location.href = `mailto:quotes@cleanqueens.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="site-page quote-page">
      <section className="royal-hero">
        <div className="quote-shell quote-hero">
          <p>Tell us about your space</p>
          <h1>Request a Free Quote</h1>
          <p>Share a few details and we’ll help you choose the right cleaning service.</p>
        </div>
      </section>
      <section className="quote-section">
        <div className="quote-shell quote-layout">
          <form className="quote-form" onSubmit={sendQuoteRequest}>
            <div className="quote-field"><label htmlFor="quote-name">Full name *</label><input id="quote-name" name="name" autoComplete="name" required /></div>
            <div className="quote-field"><label htmlFor="quote-email">Email *</label><input id="quote-email" name="email" type="email" autoComplete="email" required /></div>
            <div className="quote-field"><label htmlFor="quote-phone">Phone *</label><input id="quote-phone" name="phone" type="tel" autoComplete="tel" required /></div>
            <div className="quote-field"><label htmlFor="quote-service">Cleaning service *</label><select id="quote-service" name="service" defaultValue="" required><option value="" disabled>Select a service</option>{serviceOptions.map(service => <option key={service}>{service}</option>)}</select></div>
            <div className="quote-field quote-field--wide"><label htmlFor="quote-address">Property address *</label><input id="quote-address" name="address" autoComplete="street-address" required /></div>
            <div className="quote-field"><label htmlFor="quote-size">Approx. square footage</label><input id="quote-size" name="squareFootage" inputMode="numeric" /></div>
            <div className="quote-field"><label htmlFor="quote-bedrooms">Bedrooms</label><input id="quote-bedrooms" name="bedrooms" type="number" min="0" inputMode="numeric" /></div>
            <div className="quote-field"><label htmlFor="quote-bathrooms">Bathrooms</label><input id="quote-bathrooms" name="bathrooms" type="number" min="0" step="0.5" inputMode="decimal" /></div>
            <div className="quote-field"><label htmlFor="quote-timing">Preferred date or timing</label><input id="quote-timing" name="timing" placeholder="Example: Next week" /></div>
            <div className="quote-field quote-field--wide"><label htmlFor="quote-details">What would you like cleaned?</label><textarea id="quote-details" name="details" rows="6" placeholder="Tell us about the rooms, condition, special requests, pets, or access details." /></div>
            <button className="quote-submit" type="submit">Send quote request <span>→</span></button>
            {submitted && <p className="quote-note" role="status">Your email app is opening with your completed request. Review it and press Send.</p>}
            <p className="quote-disclaimer">This is just an estimate. For more accurate information, schedule an in-person consultation or email interior photos to us at <a href="mailto:quotes@cleanqueens.net">quotes@cleanqueens.net</a>.</p>
          </form>
          <aside className="quote-contact">
            <p className="home-kicker">Prefer to talk?</p>
            <p><strong>Toll-free calling</strong><a href="tel:8442567691">844-CLN-QNZ1</a><span>844-256-7691</span></p>
            <p><strong>Local call or text</strong><a href="tel:9365817119">936-581-7119</a></p>
            <p><strong>Quote email</strong><a href="mailto:quotes@cleanqueens.net">quotes@cleanqueens.net</a></p>
            <a className="quote-schedule" href="/booking">Ready to choose a time? Schedule an estimate</a>
          </aside>
        </div>
      </section>
    </div>
  )
}
