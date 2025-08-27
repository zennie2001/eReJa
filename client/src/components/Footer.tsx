"use client";

import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white via-gray-50 to-purple-50 text-gray-700 py-12 mt-16 shadow-inner">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo + Description */}
        <div className="md:px-16">
          <h2 className="text-3xl font-extrabold text-purple-600 tracking-wide">
            eReJa
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-600">
            Discover and book the best restaurants with ease.  
            eReJa makes dining simple, fast, and enjoyable.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              { name: "About", href: "/about" },
              { name: "Contact", href: "/contact" },
              { name: "Privacy Policy", href: "/privacy" },
              { name: "Terms of Service", href: "/terms" },
            ].map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  className="hover:text-purple-600 transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Stay Connected</h3>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-purple-600 transition-transform transform hover:scale-110">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-purple-600 transition-transform transform hover:scale-110">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-purple-600 transition-transform transform hover:scale-110">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-purple-600 transition-transform transform hover:scale-110">
              <Youtube size={20} />
            </a>
          </div>

          <form className="mt-6 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-l-md text-gray-700 border border-gray-300 text-sm w-full outline-none focus:ring-2 focus:ring-purple-400"
            />
            <button
              type="submit"
              className="bg-purple-500 text-white px-4 py-2 rounded-r-md hover:bg-purple-600 text-sm transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-200 mt-10 pt-5 flex flex-col md:flex-row items-center text-center justify-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} eReJa. All rights reserved.</p>
        <div className="flex gap-6 mt-3 md:mt-0">
          {/* <a href="/privacy" className="hover:text-purple-600">Privacy</a>
          <a href="/terms" className="hover:text-purple-600">Terms</a> */}
        </div>
      </div>
    </footer>
  );
}
