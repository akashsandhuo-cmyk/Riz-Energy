'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">

      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/logo.png"
            className="h-14 w-auto"
            alt="RIZ Energy"
          />
        </a>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">

          <a href="/" className="hover:text-orange-500 transition">
            Home
          </a>

          <a href="/about" className="hover:text-orange-500 transition">
            About
          </a>

          <a href="/Residential" className="hover:text-orange-500 transition">
            Residential
          </a>

          <a href="/Commercial" className="hover:text-orange-500 transition">
            Commercial
          </a>

          <a href="/our-partners" className="hover:text-orange-500 transition">
            Our-Partners
          </a>

          <a href="/careers" className="hover:text-orange-500 transition">
            Careers
          </a>

          <a href="/contact" className="hover:text-orange-500 transition">
            Contact
          </a>

        </nav>

        {/* DESKTOP BUTTON */}
        <a
          href="/contact"
          className="hidden lg:inline-block bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-xl font-bold"
        >
          GET A QUOTE
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden flex flex-col gap-1"
        >

          <span className="w-7 h-1 bg-black rounded-full"></span>
          <span className="w-7 h-1 bg-black rounded-full"></span>
          <span className="w-7 h-1 bg-black rounded-full"></span>

        </button>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="lg:hidden border-t border-gray-100 bg-white">

          <div className="px-6 py-6 flex flex-col gap-5 text-lg font-medium">

            <a href="/" onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a href="/about" onClick={() => setMenuOpen(false)}>
              About
            </a>

            <a href="/business-energy" onClick={() => setMenuOpen(false)}>
              Business Energy
            </a>

            <a href="/renewable-energy" onClick={() => setMenuOpen(false)}>
              Renewable Energy
            </a>

            <a href="/resources" onClick={() => setMenuOpen(false)}>
              Resources
            </a>

            <a href="/careers" onClick={() => setMenuOpen(false)}>
              Careers
            </a>

            <a href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>

            <a
              href="/contact"
              className="bg-orange-500 text-white px-6 py-4 rounded-2xl text-center font-bold mt-3"
            >
              GET A QUOTE
            </a>

          </div>

        </div>

      )}

    </header>
  )
}
