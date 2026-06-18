'use client'

import { useState } from 'react'
import Turnstile from 'react-turnstile'
import emailjs from '@emailjs/browser'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [verified, setVerified] = useState(false)
  const [loading, setLoading] = useState(false)

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
            Contact Us
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Speak with our energy experts today.
          </p>

        </div>

      </section>

      {/* CONTACT */}
      <section className="py-24 px-6">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* LEFT SIDE */}
          <div>

            <h2 className="text-4xl font-black mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6 text-lg text-gray-600">

              <p>
                📧 info@rizenergy.com
              </p>

              <p>
                📞 +1 (713) 503-3098
              </p>

              <p>
                📠 +1 (713) 559-8580
              </p>

              <p>
                📍 10765 Gulf Freeway
                <br />
                Houston, Texas USA 77034
              </p>

            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-12">

              <h3 className="text-2xl font-black mb-6">
                Follow Us
              </h3>

              <div className="flex items-center gap-5 flex-wrap">

                <a
                  href="https://www.facebook.com/rizenergy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                    alt="Facebook"
                    className="w-12 h-12"
                  />
                </a>

                <a
                  href="https://www.instagram.com/rizenergy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                    alt="Instagram"
                    className="w-12 h-12"
                  />
                </a>

                <a
                  href="https://www.linkedin.com/company/riz-energy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                    alt="LinkedIn"
                    className="w-12 h-12"
                  />
                </a>

                <a
                  href="https://twitter.com/rizenergy?lang=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5968/5968830.png"
                    alt="Twitter X"
                    className="w-12 h-12"
                  />
                </a>

                <a
                  href="https://yelp.to/qTKq/H5OgPtRax3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174882.png"
                    alt="Yelp"
                    className="w-12 h-12"
                  />
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            {submitted ? (

              <div className="bg-green-50 border border-green-200 rounded-[40px] p-10">

                <h3 className="text-4xl font-black text-green-600 mb-4">
                  Thank You!
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Your message has been sent successfully.
                  Our team will contact you shortly.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6 bg-white border border-gray-200 rounded-[40px] p-10 shadow-sm"
              >

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

                <div>

                  <label className="block font-bold mb-3">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    placeholder="How can we help you?"
                    rows="6"
                    required
                    className="w-full border border-gray-300 rounded-2xl px-6 py-4 outline-none focus:border-orange-500"
                  ></textarea>

                </div>

                {/* TURNSTILE */}
                <div className="pt-2">

                  <Turnstile
                    sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                    onVerify={() => setVerified(true)}
                  />

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-5 rounded-2xl font-black text-lg disabled:opacity-50"
                >
                  {loading ? 'Sending Message...' : 'SEND MESSAGE'}
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
