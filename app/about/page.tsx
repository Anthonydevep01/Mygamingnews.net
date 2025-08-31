import { Users, Target, Award, Heart } from 'lucide-react'

export const metadata = {
  title: 'About Us - MyGamingNews.net',
  description: 'Learn about MyGamingNews.net, our mission, and the passionate team behind the latest gaming news and reviews.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-white text-gray-900 mb-6">
            About MyGamingNews.net
          </h1>
          <p className="text-xl text-gray-300 dark:text-gray-300 text-gray-700 max-w-3xl mx-auto">
            Your ultimate destination for gaming news, reviews, and industry insights.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-16">
          <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-blue-400 mr-4" />
              <h2 className="text-3xl font-bold text-white dark:text-white text-gray-900">
                Our Mission
              </h2>
            </div>
            <p className="text-lg text-gray-300 dark:text-gray-300 text-gray-700 leading-relaxed">
              At MyGamingNews.net, we're passionate about bringing you the latest and most comprehensive gaming content. 
              Our mission is to keep gamers informed, entertained, and connected to the ever-evolving world of video games. 
              From breaking news and in-depth reviews to exclusive features and eSports coverage, we strive to be your 
              trusted source for everything gaming.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg text-center">
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white dark:text-white text-gray-900 mb-3">
              Quality Content
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-gray-700">
              We deliver high-quality, well-researched content that gamers can trust and rely on for accurate information.
            </p>
          </div>

          <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg text-center">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white dark:text-white text-gray-900 mb-3">
              Community First
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-gray-700">
              Our gaming community is at the heart of everything we do. We listen, engage, and create content that matters to you.
            </p>
          </div>

          <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg text-center">
            <Heart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white dark:text-white text-gray-900 mb-3">
              Passion for Gaming
            </h3>
            <p className="text-gray-300 dark:text-gray-300 text-gray-700">
              We're gamers ourselves, and our genuine love for gaming drives us to share the best content with fellow enthusiasts.
            </p>
          </div>
        </div>

        {/* What We Cover Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white dark:text-white text-gray-900 text-center mb-12">
            What We Cover
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Breaking News</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                Stay updated with the latest gaming industry news, announcements, and developments.
              </p>
            </div>

            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Game Reviews</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                Comprehensive reviews of the latest games across all platforms and genres.
              </p>
            </div>

            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Release Coverage</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                Everything you need to know about upcoming game releases and launch dates.
              </p>
            </div>

            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-3">eSports</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                Tournament coverage, player profiles, and competitive gaming insights.
              </p>
            </div>

            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Technology</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                Gaming hardware reviews, tech innovations, and industry developments.
              </p>
            </div>

            <div className="bg-gray-800 dark:bg-gray-800 bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-400 mb-3">Features</h3>
              <p className="text-gray-300 dark:text-gray-300 text-gray-700">
                In-depth analysis, opinion pieces, and exclusive gaming content.
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Gaming Community
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Have questions, suggestions, or want to contribute? We'd love to hear from you!
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  )
}