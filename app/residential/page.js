import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const partners = [
  {
    name: 'APG&E',
    image: 'https://rizenergy.com/images/APG&E.jpg',
    link: 'https://www.apge.com/partners/rizenergy/?utm_source=riz%20energy&utm_medium=referral&utm_campaign=broker&utm_content=resi',
  },
  {
    name: 'Frontier Utilities',
    image: 'https://rizenergy.com/images/g2.jpg',
    link: 'https://www.frontierutilities.com/rizenergytx',
  },
  {
    name: 'Chariot Energy',
    image: 'https://rizenergy.com/images/g3.3-1.jpg',
    link: 'https://signup.chariotenergy.com/Home/?Promocode=RIZENERGY',
  },
  {
    name: 'Budget Power',
    image: 'https://rizenergy.com/images/budget-power.png',
    link: 'https://signup.budgetpowertx.com/Home/Promo?Promocode=Rizenergy425',
  },
  {
    name: 'Iron Horse',
    image: 'https://rizenergy.com/images/iron-horse.png',
    link: 'https://signup.ironhorsepowerservices.com/riz',
  },
  {
    name: 'True Power',
    image: 'https://rizenergy.com/images/truepower.png',
    link: 'https://www.truepower.com/partner/riz-energy/',
  },
  {
    name: 'Constellation',
    image: 'https://rizenergy.com/images/constellation.png',
    link: 'https://www.constellation.com/campaigns/riz-energy.html',
  },
  {
    name: 'Atlantic Energy',
    image: 'https://rizenergy.com/images/atlanticenergy.png',
    link: 'https://enroll.atlantexpower.com/Enrollment/Default.aspx?zipCode=&promoCode=RIZENERGY',
  },
  {
    name: 'Branch Power',
    image: 'https://rizenergy.com/images/branch-power.png',
    link: 'https://www.branchenergy.com/',
  },
  {
    name: 'Think Energy',
    image: 'https://rizenergy.com/images/think-energy.png',
    link: 'https://signup.thinkenergy.com/zipcode?channel=RizEnergy',
  },
  {
    name: 'Shell Energy',
    image: 'https://rizenergy.com/images/shell-energy.png',
    link: 'https://www.shellenergy.com/',
  },
  {
    name: 'Clean Sky Energy',
    image: 'https://rizenergy.com/images/cleanskyenergy.png',
    link: 'https://signup.cleanskyenergy.com/?promocode=RIZR',
  },
]

export default function ResidentialPage() {
  return (
    <div className="bg-white text-black min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-50 to-yellow-50">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Residential Clients
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Helping homeowners find smarter electricity and natural gas solutions.
          </p>

        </div>

      </section>

      {/* IMAGE + TEXT */}
      <section className="py-20 md:py-24 px-6">

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

            <h2 className="text-4xl md:text-5xl font-black mb-8">
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

            <div className="flex flex-wrap gap-5">

              <a
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold transition shadow-lg"
              >
                CONTACT US
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* PARTNERS */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="bg-gray-50 rounded-[40px] p-6 md:p-10">

            <div className="text-center mb-16">

              <h3 className="text-4xl md:text-5xl font-black mb-4">
                Our Energy Partners
              </h3>

              <p className="text-gray-600 text-lg">
                Select one of our trusted residential energy providers below.
              </p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 items-center">

              {partners.map((partner, index) => (

                <a
                  key={index}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center hover:scale-105 transition duration-300"
                >

                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px] h-auto object-contain"
                  />

                </a>

              ))}

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}
