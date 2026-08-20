'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="mgn-page-shell">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="mgn-page-header">
          <div className="relative z-10 max-w-4xl">
            <div className="mgn-kicker">Contact Desk</div>
            <h1 className="mgn-text-strong mt-4 text-4xl font-black leading-[0.95] sm:text-5xl lg:text-6xl">
              Contact Us
            </h1>
            <p className="mgn-text-body mt-5 text-base leading-7 sm:text-lg">
              Get in touch with our team. We would love to hear from you.
            </p>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <section className="mgn-panel px-6 py-8 sm:px-8">
            <div className="mgn-kicker">Direct Reach</div>
            <h2 className="mgn-text-strong mt-4 text-2xl font-black">Get in Touch</h2>
            <p className="mgn-text-soft mt-4 text-sm leading-7">
              Have a question, suggestion, or want to collaborate? We are here to help and would love to hear from you.
            </p>

            <div className="mt-8 space-y-5">
              {[
                {
                  icon: Mail,
                  title: 'Email',
                  body: 'contact@mygamingnews.net'
                },
                {
                  icon: Phone,
                  title: 'Phone',
                  body: '+1 (555) 123-4567'
                },
                {
                  icon: MapPin,
                  title: 'Address',
                  body: '123 Gaming Street, Tech City, TC 12345'
                }
              ].map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/[0.03] px-4 py-4">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl border border-fuchsia-400/20 bg-fuchsia-500/10 text-fuchsia-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mgn-text-strong text-base font-black">{title}</h3>
                    <p className="mgn-text-soft mt-1 text-sm leading-6">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-8">
              <h3 className="text-sm font-black uppercase tracking-[0.18em] text-fuchsia-200">Follow Us</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {['Facebook', 'Twitter', 'Instagram'].map((platform) => (
                  <span
                    key={platform}
                    className="mgn-surface-chip rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:border-fuchsia-400/30 hover:text-[var(--mgn-text-strong)]"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section className="mgn-panel px-6 py-8 sm:px-8">
            <div className="mgn-kicker">Message Form</div>
            <h2 className="mgn-text-strong mt-4 text-2xl font-black">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="mgn-text-body mb-2 block text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mgn-input"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mgn-text-body mb-2 block text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mgn-input"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mgn-text-body mb-2 block text-sm font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mgn-input"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="mgn-text-body mb-2 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="mgn-input resize-none"
                  placeholder="Tell us more about your message..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  )
}
