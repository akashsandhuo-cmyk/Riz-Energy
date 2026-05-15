'use client'

import { useState } from 'react'
import Turnstile from 'react-turnstile'

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
    <div>

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

        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
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
    📍 4615 Southwest Fwy, Suite 330
    <br />
    Houston, Texas USA 77027
  </p>

</div>

{/* SOCIAL MEDIA */}
<div className="mt-10">

  <h3 className="text-2xl font-black mb-6">
    Follow Us
  </h3>

  <div className="flex flex-wrap gap-4">

    <a
      href="https://www.facebook.com/rizenergy/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 hover:scale-105 transition text-white px-6 py-3 rounded-2xl font-bold"
    >
      Facebook
    </a>

    <a
      href="https://www.instagram.com/rizenergy/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-pink-500 hover:scale-105 transition text-white px-6 py-3 rounded-2xl font-bold"
    >
      Instagram
    </a>

    <a
      href="https://www.linkedin.com/company/riz-energy"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-800 hover:scale-105 transition text-white px-6 py-3 rounded-2xl font-bold"
    >
      LinkedIn
    </a>

    <a
      href="https://twitter.com/rizenergy?lang=en"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black hover:scale-105 transition text-white px-6 py-3 rounded-2xl font-bold"
    >
      X / Twitter
    </a>

    <a
      href="https://yelp.to/qTKq/H5OgPtRax3"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-red-600 hover:scale-105 transition text-white px-6 py-3 rounded-2xl font-bold"
    >
      Yelp
    </a>

  </div>

</div>

          </div>

          {/* FORM */}
          <div>

            {submitted ? (

              <div className="bg-green-50 border border-green-200 rounded-3xl p-10">

                <h3 className="text-3xl font-black text-green-600 mb-4">
                  Thank You!
                </h3>

                <p className="text-lg text-gray-700 leading-relaxed">
                  Thank you for your message. We will contact you shortly.
                </p>

              </div>

            ) : (

              <form
                onSubmit={handleSubmit}
                className="space-y-6"
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

                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  required
                  className="w-full border border-gray-300 rounded-2xl px-6 py-4"
                ></textarea>

                {/* CAPTCHA */}
                <div className="pt-2">

                  <Turnstile
                    sitekey="0x4AAAAAADOWhVKOm_-qaivB"
                    onVerify={() => setVerified(true)}
                  />

                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-2xl font-bold disabled:opacity-50"
                >
                  {loading ? 'Sending...' : 'SEND MESSAGE'}
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
