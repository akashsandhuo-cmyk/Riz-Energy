export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-20 px-6 bg-gray-50 mt-20">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* LOGO */}
        <div>

          <img
            src="/logo.png"
            className="h-20 mb-6"
            alt="logo"
          />

          <p className="text-gray-600 leading-relaxed mb-5">
            Delivering smarter energy solutions across Texas, USA.
          </p>

          <h5 className="font-semibold text-gray-700">
            PUCT Broker License BR250165
          </h5>

        </div>

        {/* COMPANY */}
        <div>

          <h3 className="font-black mb-5">
            Company
          </h3>

          <ul className="space-y-3 text-gray-600">

            <li>
              <a href="/about" className="hover:text-orange-500 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="/careers" className="hover:text-orange-500 transition">
                Careers
              </a>
            </li>

            <li>
              <a href="/contact" className="hover:text-orange-500 transition">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* SOLUTIONS */}
        <div>

          <h3 className="font-black mb-5">
            Solutions
          </h3>

          <ul className="space-y-3 text-gray-600">

            <li>Residential</li>

            <li>Commercial</li>


          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="font-black mb-5">
            Contact
          </h3>

          <ul className="space-y-4 text-gray-600 leading-relaxed">

            <li>
              📧 info@rizenergy.com
            </li>

            <li>
              📞 +1 (713) 503-3098
            </li>

            <li>
              📍 4615 Southwest Fwy, Suite 330
              <br />
              Houston, Texas USA 77027
            </li>

          </ul>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto border-t border-gray-200 mt-16 pt-8 text-center text-gray-500">

        <p>
          © 2016-2026 Riz Energy LLC. All Rights Reserved.
        </p>

      </div>

    </footer>
  )
}
