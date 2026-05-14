export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-20 px-6 bg-gray-50 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-5 gap-12">
        <div>
          <img src="/logo.png" className="h-20 mb-6" alt="logo" />

          <p className="text-gray-600 leading-relaxed">
            Delivering smarter energy solutions across the Texas, USA.
          </p>
    <h3>  PUCT Broker License BR250165 </h3>
        </div>

        <div>
          <h3 className="font-black mb-5">Company</h3>

          <ul className="space-y-3 text-gray-600">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-black mb-5">Solutions</h3>

          <ul className="space-y-3 text-gray-600">
            <li>Business Energy</li>
            <li>Renewable Energy</li>
            <li>Energy Management</li>
          </ul>
        </div>

        <div>
          <h3 className="font-black mb-5">Resources</h3>

          <ul className="space-y-3 text-gray-600">
            <li>Blog</li>
            <li>Case Studies</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div>
          <h3 className="font-black mb-5">Contact</h3>

          <ul className="space-y-3 text-gray-600">
            <li>info@rizenergy.com</li>
            <li>Houston, Texas</li>
            <li>(888) 999-7485</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
