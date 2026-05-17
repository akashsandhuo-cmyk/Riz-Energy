'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import Turnstile from 'react-turnstile'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CommercialPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [verified, setVerified] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    if (!verified) {
      alert('Please verify you are human.')
      return
    }

    setLoading(true)

    try {
      await emailjs.sendForm(
        'service_nic9gvb',
        'template_iersmrp',
        e.target,
        'WyOzwhIozwA2Yghg2'
      )

      setSubmitted(true)
      e.target.reset()
      setVerified(false)

    } catch (error) {
      console.error(error)
      alert('Something went wrong. Please try again.')
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
            Upload your latest electricity bill and receive a custom quote for your business.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>

            <img
              src="https://rizenergy.com/images/electric-bill.png"
              alt="Commercial Energy"
              className="rounded-[40px] shadow-2xl w-full"
            />

          </div>

          {/* FORM SECTION */}
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

                <p className="text-lg text-gray-700 leading-relaxed">
                  Your request has been submitted successfully.
                  Our team will contact you shortly.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-gray-50 border border-gray-200 rounded-[40px] p-8 shadow-sm"
              >

                {/* FULL NAME */}
                <div>

                  <label className="block font-bold mb-3">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none focus:border-orange-500"
                  />

                </div>

                {/* EMAIL */}
                <div>

                  <label className="block font-bold mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none focus:border-orange-500"
                  />

                </div>

                {/* PHONE */}
                <div>

                  <label className="block font-bold mb-3">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 (713) 000-0000"
                    required
                    className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none focus:border-orange-500"
                  />

                </div>

                {/* BUSINESS */}
                <div>

                  <label className="block font-bold mb-3">
                    Business Name
                  </label>

                  <input
                    type="text"
                    name="business"
                    placeholder="Business Name"
                    required
                    className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none focus:border-orange-500"
                  />

                </div>

                {/* MESSAGE */}
                <div>

                  <label className="block font-bold mb-3">
                    Additional Information
                  </label>

                  <textarea
                    name="message"
                    placeholder="Tell us more about your business energy needs"
                    rows="5"
                    className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none focus:border-orange-500"
                  ></textarea>

                </div>

                {/* FILE UPLOAD */}
                <div>

                  <label className="block font-bold mb-3">
                    Upload Electricity Bill
                  </label>

                  <input
                    type="file"
                    name="attachment"
                    accept=".pdf,image/*"
                    className="w-full border border-gray-300 rounded-2xl px-6 py-4 bg-white"
                  />

                  <p className="text-sm text-gray-500 mt-2">
                    Accepted formats: PDF, JPG, PNG
                  </p>

                </div>

                {/* TURNSTILE */}
                <div className="pt-2">

                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onVerify={() => setVerified(true)}
                  />

                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-5 rounded-2xl font-black text-lg disabled:opacity-50"
                >
                  {loading ? 'Submitting...' : 'SUBMIT BILL'}
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
