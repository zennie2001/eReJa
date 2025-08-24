export default function Footer() {
  return (
    <div className=" text-gray-300 py-10 mt-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Description */}
        <div>
          <h2 className="text-2xl font-bold text-purple-500">eReJa</h2>
          <p className="mt-3 text-sm leading-relaxed">
            Discover and book the best restaurants with ease.  
            eReJa makes dining simple, fast, and enjoyable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="/about" className="hover:text-purple-400">About</a></li>
            <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
            <li><a href="/privacy" className="hover:text-purple-400">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-purple-400">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white">Stay Connected</h3>
          <div className="flex gap-4 mt-3">
            <a href="#" className="hover:text-purple-400">🌐</a>
            <a href="#" className="hover:text-purple-400">🐦</a>
            <a href="#" className="hover:text-purple-400">📷</a>
            <a href="#" className="hover:text-purple-400">▶️</a>
          </div>

          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md text-gray-900 text-sm w-full outline-none"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} eReJa. All rights reserved.
      </div>
    </div>
  );
}
