export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <img src="/logo.png" className="h-16" alt="logo" />

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <a href="/" className="hover:text-orange-500">Home</a>
          <a href="/about" className="hover:text-orange-500">About</a>
          <a href="/business-energy" className="hover:text-orange-500">Business Energy</a>
          <a href="/renewable-energy" className="hover:text-orange-500">Renewable Energy</a>
          <a href="/resources" className="hover:text-orange-500">Resources</a>
          <a href="/careers" className="hover:text-orange-500">Careers</a>
          <a href="/contact" className="hover:text-orange-500">Contact</a>
        </nav>

        <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold">
          GET A QUOTE
        </button>
      </div>
    </header>
  )
}