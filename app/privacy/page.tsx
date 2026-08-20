export const metadata = {
  title: 'Privacy Policy - MyGamingNews.net',
  description: 'Learn about how MyGamingNews.net collects, uses, and protects your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="mgn-page-shell">
      <div className="mx-auto max-w-5xl">
        <header className="mgn-page-header">
          <div className="relative z-10 max-w-3xl">
            <div className="mgn-kicker">Legal Information</div>
            <h1 className="mgn-text-strong mt-4 text-4xl font-black leading-[0.95] sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mgn-text-body mt-4 text-base leading-7">
              Last updated: December 2024
            </p>
          </div>
        </header>

        <div className="mt-10 space-y-6">
          {[
            {
              title: 'Introduction',
              content: (
                <p className="mgn-text-body">
                  At MyGamingNews.net, we are committed to protecting your privacy and ensuring the security of your
                  personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                  information when you visit our website.
                </p>
              )
            },
            {
              title: 'Information We Collect',
              content: (
                <div className="mgn-text-body space-y-5">
                  <div>
                    <h3 className="text-xl font-black text-fuchsia-200">Personal Information</h3>
                    <p className="mt-2">
                      We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 marker:text-fuchsia-300 list-disc">
                      <li>Subscribe to our newsletter</li>
                      <li>Contact us through our contact form</li>
                      <li>Comment on articles</li>
                      <li>Create an account on our website</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-fuchsia-200">Automatically Collected Information</h3>
                    <p className="mt-2">
                      When you visit our website, we may automatically collect certain information about your device,
                      including:
                    </p>
                    <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 marker:text-fuchsia-300 list-disc">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Operating system</li>
                      <li>Pages visited and time spent on our site</li>
                      <li>Referring website</li>
                    </ul>
                  </div>
                </div>
              )
            },
            {
              title: 'How We Use Your Information',
              content: (
                <div className="mgn-text-body">
                  <p>We use the information we collect for various purposes, including:</p>
                  <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 marker:text-fuchsia-300 list-disc">
                    <li>Providing and maintaining our website</li>
                    <li>Sending newsletters and updates</li>
                    <li>Responding to your inquiries and comments</li>
                    <li>Improving our website and user experience</li>
                    <li>Analyzing website usage and trends</li>
                    <li>Preventing fraud and ensuring security</li>
                  </ul>
                </div>
              )
            },
            {
              title: 'Cookies and Tracking Technologies',
              content: (
                <div className="mgn-text-body">
                  <p>
                    We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are
                    small data files stored on your device that help us:
                  </p>
                  <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 marker:text-fuchsia-300 list-disc">
                    <li>Remember your preferences</li>
                    <li>Analyze website traffic</li>
                    <li>Provide personalized content</li>
                    <li>Improve website functionality</li>
                  </ul>
                  <p className="mt-4">You can control cookie settings through your browser preferences.</p>
                </div>
              )
            },
            {
              title: 'Information Sharing and Disclosure',
              content: (
                <div className="mgn-text-body">
                  <p>
                    We do not sell, trade, or otherwise transfer your personal information to third parties without your
                    consent, except in the following circumstances:
                  </p>
                  <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 marker:text-fuchsia-300 list-disc">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and safety</li>
                    <li>With trusted service providers who assist in website operations</li>
                  </ul>
                </div>
              )
            },
            {
              title: 'Data Security',
              content: (
                <p className="mgn-text-body">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure, and we cannot guarantee absolute security.
                </p>
              )
            },
            {
              title: 'Your Rights',
              content: (
                <div className="mgn-text-body">
                  <p>You have the right to:</p>
                  <ul className="mt-3 space-y-2 pl-5 text-sm leading-7 marker:text-fuchsia-300 list-disc">
                    <li>Access your personal information</li>
                    <li>Correct inaccurate information</li>
                    <li>Request deletion of your information</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Object to processing of your information</li>
                  </ul>
                </div>
              )
            },
            {
              title: 'Changes to This Privacy Policy',
              content: (
                <p className="mgn-text-body">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                </p>
              )
            },
            {
              title: 'Contact Us',
              content: (
                <div className="mgn-text-body">
                  <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                  <div className="mt-4 space-y-1 text-fuchsia-200">
                    <p>Email: privacy@mygamingnews.net</p>
                    <p>Phone: +1 (555) 123-4567</p>
                  </div>
                </div>
              )
            }
          ].map(({ title, content }) => (
            <section key={title} className="mgn-panel px-6 py-7 sm:px-8">
              <h2 className="mgn-text-strong text-2xl font-black">{title}</h2>
              <hr className="mgn-divider mb-5 mt-3" />
              <div className="space-y-4 text-base leading-8">{content}</div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
