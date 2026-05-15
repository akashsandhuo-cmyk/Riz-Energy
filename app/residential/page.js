import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ResidentialPage() {
  return (
    <div className="bg-white text-black min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-50 to-yellow-50">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-6xl font-black mb-6">
            Residential Clients
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Helping homeowners find smarter electricity and natural gas solutions.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>

            <img
              src="https://rizenergy.com/images/s2.png"
              alt="Residential Energy"
              className="rounded-[40px] shadow-2xl w-full"
            />

          </div>

          {/* TEXT */}
          <div>

            <h2 className="text-5xl font-black mb-8">
              Residential Energy Solutions
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              There are a lot of companies that will try to offer you a teaser
              rate with hard to understand pricing conditions. The customer is
              left alone to figure out the fine print and terms of service of
              their plan.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We help our customers find the lowest rates for their electricity
              and natural gas service.
            </p>

            {/* PARTNERS */}
            <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 mb-10">

              <h3 className="text-2xl font-black mb-8">
                You can select one of our energy partners from below
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

                {/* APG&E */}
                <a
                  href="https://www.apge.com/partners/rizenergy/?utm_source=riz%20energy&utm_medium=referral&utm_campaign=broker&utm_content=resi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/APG&E.jpg"
                    alt="APG&E"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* FRONTIER */}
                <a
                  href="https://www.frontierutilities.com/rizenergytx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/g2.jpg"
                    alt="Frontier Utilities"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* CHARIOT */}
                <a
                  href="https://signup.chariotenergy.com/Home/?Promocode=RIZENERGY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/g3.3-1.jpg"
                    alt="Chariot Energy"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* BUDGET POWER */}
                <a
                  href="https://signup.budgetpowertx.com/Home/Promo?Promocode=Rizenergy425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/budget-power.png"
                    alt="Budget Power"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* IRON HORSE */}
                <a
                  href="https://signup.ironhorsepowerservices.com/riz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/iron-horse.png"
                    alt="Iron Horse"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* TRUE POWER */}
                <a
                  href="https://www.truepower.com/partner/riz-energy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/truepower.png"
                    alt="True Power"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* CONSTELLATION */}
                <a
                  href="https://www.constellation.com/campaigns/riz-energy.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/constellation.png"
                    alt="Constellation"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* ATLANTIC ENERGY */}
                <a
                  href="https://enroll.atlantexpower.com/Enrollment/Default.aspx?zipCode=&promoCode=RIZENERGY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/atlanticenergy.png"
                    alt="Atlantic Energy"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* BRANCH POWER */}
                <a
                  href="https://www.branchenergy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/branch-power.png"
                    alt="Branch Power"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* THINK ENERGY */}
                <a
                  href="https://signup.thinkenergy.com/zipcode?channel=RizEnergy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/think-energy.png"
                    alt="Think Energy"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* SHELL ENERGY */}
                <a
                  href="https://www.shellenergy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/shell-energy.png"
                    alt="Shell Energy"
                    className="max-h-16 object-contain"
                  />
                </a>

                {/* CLEAN SKY */}
                <a
                  href="https://signup.cleanskyenergy.com/?promocode=RIZR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl p-5 border border-gray-200 hover:shadow-xl transition flex items-center justify-center"
                >
                  <img
                    src="https://rizenergy.com/images/cleanskyenergy.png"
                    alt="Clean Sky Energy"
                    className="max-h-16 object-contain"
                  />
                </a>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <a
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition"
              >
                CONTACT US
              </a>

              <a
                href="/business-energy"
                className="border border-gray-300 hover:border-black px-8 py-4 rounded-2xl font-bold transition"
              >
                BUSINESS SOLUTIONS
              </a>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}
