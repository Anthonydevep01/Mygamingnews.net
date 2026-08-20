'use client'

import { useState } from 'react'
import { TrendingUp, Users, Target, Mail, Phone, Send } from 'lucide-react'

export default function AdvertisePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Advertising inquiry submitted:', formData)
    alert('Thank you for your interest! We\'ll get back to you within 24 hours.')
    setFormData({ name: '', email: '', company: '', budget: '', message: '' })
  }

  return (
    <div className="mgn-page-shell">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="mgn-page-header">
          <div className="relative z-10 max-w-4xl">
            <div className="mgn-kicker">Partner Network</div>
            <h1 className="mgn-text-strong mt-4 text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
              Advertise With Us
            </h1>
            <p className="mgn-text-body mt-5 text-base leading-7 sm:text-lg">
              Reach passionate gamers and grow your brand with MyGamingNews.net. Connect with our engaged community
              through targeted advertising opportunities.
            </p>
          </div>
        </header>

        <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { icon: Users, value: '500K+', label: 'Monthly Active Users' },
            { icon: TrendingUp, value: '2M+', label: 'Monthly Page Views' },
            { icon: Target, value: '85%', label: 'Engaged Gaming Audience' }
          ].map(({ icon: Icon, value, label }) => (
            <article key={label} className="mgn-panel px-6 py-8 text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-200">
                <Icon className="h-8 w-8" />
              </div>
              <h2 className="mgn-text-strong mt-5 text-4xl font-black">{value}</h2>
              <p className="mgn-text-soft mt-2 text-sm uppercase tracking-[0.16em]">{label}</p>
            </article>
          ))}
        </section>

        <section className="mgn-panel px-6 py-8 sm:px-8 lg:px-10">
          <div className="mb-8 text-center">
            <div className="mgn-kicker">Inventory</div>
            <h2 className="mgn-text-strong mt-4 text-3xl font-black">Advertising Options</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              ['Banner Advertising', 'High-visibility banner placements across our website with premium positioning options.', ['Header/Footer banners', 'Sidebar placements', 'In-article advertising', 'Mobile-optimized formats']],
              ['Sponsored Content', 'Native advertising through sponsored articles and product reviews that engage our audience.', ['Sponsored game reviews', 'Product showcases', 'Industry insights', 'Brand storytelling']],
              ['Newsletter Sponsorship', 'Direct access to our subscriber base through newsletter sponsorships and dedicated sends.', ['Newsletter header/footer', 'Dedicated email campaigns', 'Product announcements', 'Event promotions']],
              ['Video Integration', 'Video advertising opportunities including pre-roll, mid-roll, and custom video content.', ['Video pre-roll ads', 'Custom video content', 'Product demonstrations', 'Gaming tutorials']],
              ['Event Partnerships', 'Partner with us for gaming events, tournaments, and industry conferences.', ['Event coverage', 'Tournament sponsorship', 'Live streaming', 'Community events']],
              ['Custom Packages', 'Tailored advertising solutions designed specifically for your brand and campaign goals.', ['Multi-platform campaigns', 'Brand integrations', 'Long-term partnerships', 'Performance tracking']]
            ].map(([title, text, bullets]) => (
              <article key={title as string} className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-5 py-5">
                <h3 className="text-xl font-black text-fuchsia-200">{title}</h3>
                <p className="mgn-text-soft mt-3 text-sm leading-7">{text}</p>
                <ul className="mgn-text-body mt-4 space-y-2 text-sm leading-6">
                  {(bullets as string[]).map((item) => (
                    <li key={item}>- {item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="mgn-panel px-6 py-8 sm:px-8">
            <div className="mgn-kicker">Why Us</div>
            <h2 className="mgn-text-strong mt-4 text-3xl font-black">Why Choose MyGamingNews.net?</h2>

            <div className="mt-8 space-y-5">
              {[
                ['1', 'Targeted Gaming Audience', 'Reach passionate gamers who are actively engaged with gaming content and products.'],
                ['2', 'High Engagement Rates', 'Our community actively engages with content, leading to higher click-through and conversion rates.'],
                ['3', 'Flexible Campaign Options', 'From small budget campaigns to large-scale brand partnerships, we have options for every need.'],
                ['4', 'Detailed Analytics', 'Comprehensive reporting and analytics to track your campaign performance and ROI.']
              ].map(([index, title, text]) => (
                <div key={title as string} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-4">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-sm font-black text-white">
                    {index}
                  </div>
                  <div>
                    <h3 className="mgn-text-strong text-lg font-black">{title}</h3>
                    <p className="mgn-text-soft mt-2 text-sm leading-7">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-fuchsia-200">
                Contact Our Advertising Team
              </h3>
              <div className="mgn-text-body mt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-fuchsia-300" />
                  <span>advertising@mygamingnews.net</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-fuchsia-300" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </section>

          <section className="mgn-panel px-6 py-8 sm:px-8">
            <div className="mgn-kicker">Inquiry Form</div>
            <h2 className="mgn-text-strong mt-4 text-2xl font-black">Get Started Today</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="mgn-text-body mb-2 block text-sm font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mgn-input"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mgn-text-body mb-2 block text-sm font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mgn-input"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="mgn-text-body mb-2 block text-sm font-medium">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="mgn-input"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="budget" className="mgn-text-body mb-2 block text-sm font-medium">
                  Advertising Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="mgn-input"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k-plus">$50,000+</option>
                  <option value="custom">Custom/Discuss</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="mgn-text-body mb-2 block text-sm font-medium">
                  Campaign Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="mgn-input resize-none"
                  placeholder="Tell us about your advertising goals, target audience, and campaign requirements..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                <Send className="h-4 w-4" />
                Submit Inquiry
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
