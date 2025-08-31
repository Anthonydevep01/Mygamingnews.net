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
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-white text-gray-900 mb-6">
            Advertise With Us
          </h1>
          <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-700 max-w-3xl mx-auto">
            Reach passionate gamers and grow your brand with MyGamingNews.net. Connect with our engaged community 
            through targeted advertising opportunities.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-8 shadow-lg text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-2">
              500K+
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-gray-700">
              Monthly Active Users
            </p>
          </div>

          <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-8 shadow-lg text-center">
            <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-2">
              2M+
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-gray-700">
              Monthly Page Views
            </p>
          </div>

          <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-8 shadow-lg text-center">
            <Target className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-2">
              85%
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-gray-700">
              Engaged Gaming Audience
            </p>
          </div>
        </div>

        {/* Advertising Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white dark:text-white text-gray-900 text-center mb-12">
            Advertising Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Banner Advertising</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700 mb-4">
                High-visibility banner placements across our website with premium positioning options.
              </p>
              <ul className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 space-y-1">
                <li>• Header/Footer banners</li>
                <li>• Sidebar placements</li>
                <li>• In-article advertising</li>
                <li>• Mobile-optimized formats</li>
              </ul>
            </div>

            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Sponsored Content</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700 mb-4">
                Native advertising through sponsored articles and product reviews that engage our audience.
              </p>
              <ul className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 space-y-1">
                <li>• Sponsored game reviews</li>
                <li>• Product showcases</li>
                <li>• Industry insights</li>
                <li>• Brand storytelling</li>
              </ul>
            </div>

            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Newsletter Sponsorship</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700 mb-4">
                Direct access to our subscriber base through newsletter sponsorships and dedicated sends.
              </p>
              <ul className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 space-y-1">
                <li>• Newsletter header/footer</li>
                <li>• Dedicated email campaigns</li>
                <li>• Product announcements</li>
                <li>• Event promotions</li>
              </ul>
            </div>

            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Video Integration</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700 mb-4">
                Video advertising opportunities including pre-roll, mid-roll, and custom video content.
              </p>
              <ul className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 space-y-1">
                <li>• Video pre-roll ads</li>
                <li>• Custom video content</li>
                <li>• Product demonstrations</li>
                <li>• Gaming tutorials</li>
              </ul>
            </div>

            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Event Partnerships</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700 mb-4">
                Partner with us for gaming events, tournaments, and industry conferences.
              </p>
              <ul className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 space-y-1">
                <li>• Event coverage</li>
                <li>• Tournament sponsorship</li>
                <li>• Live streaming</li>
                <li>• Community events</li>
              </ul>
            </div>

            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-4">Custom Packages</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700 mb-4">
                Tailored advertising solutions designed specifically for your brand and campaign goals.
              </p>
              <ul className="text-sm text-gray-400 dark:text-gray-400 text-gray-600 space-y-1">
                <li>• Multi-platform campaigns</li>
                <li>• Brand integrations</li>
                <li>• Long-term partnerships</li>
                <li>• Performance tracking</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Why Advertise With Us */}
          <div>
            <h2 className="text-3xl font-bold text-white dark:text-white text-gray-900 mb-8">
              Why Choose MyGamingNews.net?
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-2">
                    Targeted Gaming Audience
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                    Reach passionate gamers who are actively engaged with gaming content and products.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-2">
                    High Engagement Rates
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                    Our community actively engages with content, leading to higher click-through and conversion rates.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-2">
                    Flexible Campaign Options
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                    From small budget campaigns to large-scale brand partnerships, we have options for every need.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-2">
                    Detailed Analytics
                  </h3>
                  <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                    Comprehensive reporting and analytics to track your campaign performance and ROI.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700 dark:border-gray-700 border-gray-300">
              <h3 className="text-lg font-semibold text-white dark:text-white text-gray-900 mb-4">
                Contact Our Advertising Team
              </h3>
              <div className="space-y-2 text-gray-300 dark:text-gray-300 text-gray-700">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-blue-400" />
                  <span>advertising@mygamingnews.net</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-white dark:text-white text-gray-900 mb-6">
              Get Started Today
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 dark:text-gray-300 text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-700 bg-gray-50 border border-gray-600 dark:border-gray-600 border-gray-300 rounded-lg text-white dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 dark:text-gray-300 text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-700 bg-gray-50 border border-gray-600 dark:border-gray-600 border-gray-300 rounded-lg text-white dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 dark:text-gray-300 text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-700 bg-gray-50 border border-gray-600 dark:border-gray-600 border-gray-300 rounded-lg text-white dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-medium text-gray-300 dark:text-gray-300 text-gray-700 mb-2">
                  Advertising Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-700 bg-gray-50 border border-gray-600 dark:border-gray-600 border-gray-300 rounded-lg text-white dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 dark:text-gray-300 text-gray-700 mb-2">
                  Campaign Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-700 dark:bg-gray-700 bg-gray-50 border border-gray-600 dark:border-gray-600 border-gray-300 rounded-lg text-white dark:text-white text-gray-900 placeholder-gray-400 dark:placeholder-gray-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your advertising goals, target audience, and campaign requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Inquiry</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}