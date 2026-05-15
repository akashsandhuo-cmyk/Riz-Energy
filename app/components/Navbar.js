'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Residential', href: '/residential' },
    { name: 'Commercial', href: '/commercial' },
    { name: 'Our Partners', href: '/our-partners' },
    { name: 'Blogs', href: '/blogss' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            className="h-14 w-auto"
            alt="RIZ Energy"
          />
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold">

          {navLinks.map((link, index) => (

            <a
              key={index}
              href={link.href}
              className="hover:text-orange-500 transition"
            >
              {link.name}
            </a>

          ))}

        </nav>

        {/* DESKTOP BUTTON */}
        <a
          href="/contact"
          className="hidden lg:inline-flex bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl font-bold shadow-lg"
        >
          GET A QUOTE
        </a>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl border border-gray-200"
        >

          <div className="flex flex-col gap-1.5">

            <span
              className={`w-6 h-0.5 bg-black rounded-full transition ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>

            <span
              className={`w-6 h-0.5 bg-black rounded-full transition ${
                menuOpen ? 'opacity-0' : ''
              }`}
            ></span>

            <span
              className={`w-6 h-0.5 bg-black rounded-full transition ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>

          </div>

        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >

        <div className="px-6 pb-8 pt-2 bg-white border-t border-gray-100">

          <div className="flex flex-col gap-2">

            {navLinks.map((link, index) => (

              <a
                key={index}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-semibold py-4 px-4 rounded-2xl hover:bg-orange-50 hover:text-orange-500 transition"
              >
                {link.name}
              </a>

            ))}

          </div>

          <a
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 w-full bg-orange-500 hover:bg-orange-600 transition text-white py-4 rounded-2xl font-bold text-center block shadow-lg"
          >
            GET A QUOTE
          </a>

        </div>

      </div>

    </header>
  )
}
