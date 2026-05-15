'use client'

import { useState } from 'react'
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

export default function EnergyPartnersPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.target)

    const response = await fetch(
      'https://formsubmit.co/ajax/info@rizenergy.com',
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      }
    )

    if (response.ok) {
      setSubmitted(true)
      e.target.reset()
    }

    setLoading(false)
  }

  return (
    <div className="bg-white text-black min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-50 to-yellow-50">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-6xl font-black mb-6">
            Our Energy Partners
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Explore our trusted residential and commercial energy providers.
          </p>

        </div>

      </section>

      {/* PARTNERS */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

            {partners.map((partner, index) => (

              <a
                key={index}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-[32px] border border-gray-200 p-10 hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex items-center justify-center min-h-[220px]"
              >

                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-32 object-contain"
                />

              </a>

            ))}

          </div>

        </div>

      </section>

      {/* SUBSCRIBE */}
      <section className="pb-24 px-6">

        <div className="max-w-4xl mx-auto bg-gradient-to-r from-orange-500 to-yellow-400 rounded-[40px] p-12 text-center text-white">

          <h2 className="text-5xl font-black mb-6">
            Subscribe Us
          </h2>

          <p className="text-xl text-white/90 mb-10">
            Subscribe Us for our latest updates and News
          </p>

          {submitted ? (

            <div className="bg-white/20 border border-white/30 rounded-3xl p-8">

              <h3 className="text-3xl font-black mb-4">
                Thank You!
              </h3>

              <p className="text-lg">
                You have been subscribed successfully.
              </p>

            </div>

          ) : (

            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4 justify-center"
            >

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="flex-1 px-6 py-4 rounded-2xl text-black outline-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="bg-black hover:bg-gray-900 transition px-8 py-4 rounded-2xl font-bold text-white disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'SUBSCRIBE'}
              </button>

            </form>

          )}

        </div>

      </section>

      <Footer />

    </div>
  )
}
