'use client'

import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CommercialPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.target)

    const response = await fetch(
      'https://formsubmit.co/ajax/riz.nabi@rizenergy.com',
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
            Commercial Clients & Business Owners
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Upload your latest electricity or natural gas bill and receive a custom quote for your business.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>

            <img
              src="https://rizenergy.com/images/s1.png"
              alt="Commercial Energy"
              className="rounded-[40px] shadow-2xl w-full"
            />

          </div>

          {/* TEXT + FORM */}
          <div>

            <h2 className="text-5xl font-black mb-8">
              Commercial Energy Solutions
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Please upload or email us a copy of your most recent bill so we can provide you with a quote for your business.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              Our email is:
              <span className="font-bold text-orange-500 ml-2">
                info@rizenergy.com
              </span>
            </p>

            {submitted ? (

              <div className="bg-green-50 border border-green-200 rounded-3xl p-10">

                <h3 className="text-3xl font-black text-green-600 mb-4">
                  Thank You!
                </h3>

                <p className="text-lg text-gray-700">
                  Your file has been submitted successfully. Our team will contact you shortly.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-gray-50 border border-gray-200 rounded-3xl p-8"
              >

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full border border-gray-300 rounded-2xl px-6 py-4"
                />

                <input
  type="email"
  name="email"
  placeholder="Email Address"
  required
  className="w-full border border-gray-300 rounded-2xl px-6 py-4"
/>

<input
  type="tel"
  name="phone"
  placeholder="Phone Number"
  required
  className="w-full border border-gray-300 rounded-2xl px-6 py-4"
/>

<input
  type="text"
  name="business"
  placeholder="Business Name"
  required
  className="w-full border border-gray-300 rounded-2xl px-6 py-4"
/>

                <textarea
                  name="message"
                  placeholder="Additional Information"
                  rows="5"
                  className="w-full border border-gray-300 rounded-2xl px-6 py-4"
                ></textarea>

                {/* FILE UPLOAD */}
                <div>

                  <label className="block font-bold mb-3">
                    Upload Electricity / Gas Bill (PDF or Image)
                  </label>

                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,image/*"
                    required
                    className="w-full border border-gray-300 rounded-2xl px-6 py-4 bg-white"
                  />

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-2xl font-bold disabled:opacity-50"
                >
                  {loading ? 'Uploading...' : 'SUBMIT BILL'}
                </button>

              </form>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}
