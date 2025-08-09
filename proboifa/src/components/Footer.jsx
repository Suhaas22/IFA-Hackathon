export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-800 text-gray-300 dark:text-gray-400 border-t border-gray-700 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-4">Probo</h2>
            <p className="text-sm leading-relaxed">
              Making event predictions fun, engaging, and insightful.
              Stay ahead with real-time updates and join the conversation.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-yellow-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-yellow-400 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/faq" className="hover:text-yellow-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/help" className="hover:text-yellow-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-yellow-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-yellow-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-3">Stay Updated</h3>
            <p className="text-sm mb-3">
              Subscribe to get the latest events and updates.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-3 py-2 rounded-l-lg bg-gray-800 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-r-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Probo Clone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
