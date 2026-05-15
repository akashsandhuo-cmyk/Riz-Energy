'use client'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function RizEnergyHomepage() {
  const services = [
    {
      title: 'Business Energy Plans',
      desc: 'Competitive rates and flexible plans designed to reduce operational costs.',
      color: 'text-orange-500',
      icon: '⚡',
    },
    {
      title: 'Energy Management',
      desc: 'Data-driven insights to optimize usage and improve efficiency.',
      color: 'text-sky-500',
      icon: '📈',
    },
    {
      title: 'Renewable Energy',
      desc: 'Sustainable energy solutions that help your business and the environment.',
      color: 'text-lime-500',
      icon: '🌱',
    },
    {
      title: 'Dedicated Support',
      desc: 'Expert support every step of the way to ensure a seamless energy experience.',
      color: 'text-orange-500',
      icon: '🎧',
    },
  ]

  return (
    <div className="bg-white text-black min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 border border-lime-400 bg-lime-50 text-lime-700 rounded-full px-4 py-2 text-sm font-semibold mb-8">
              ⚡ POWERING ACROSS TEXAS
            </div>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight mb-8">
              Smarter Energy.
              <br />
              Stronger{' '}
              <span className="text-orange-500">
                Business.
              </span>
            </h1>

            <p className="text-gray-600 text-xl leading-relaxed mb-10 max-w-xl">
              Riz Energy helps everyone across Texas reduce energy costs
              with custom electricity and natural gas solutions.
            </p>

            <div className="flex flex-wrap gap-5 mb-12">

              <a
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-5 rounded-2xl font-bold shadow-xl transition"
              >
                GET A FREE QUOTE →
              </a>

              <a
                href="/about"
                className="border border-gray-300 hover:border-black px-8 py-5 rounded-2xl font-bold transition"
              >
                LEARN MORE →
              </a>

            </div>

            <div className="flex flex-wrap gap-8 text-sm font-medium text-gray-700">
              <div>✅ No Hidden Fees</div>
              <div>👥 Trusted Energy Experts</div>
              <div>📉 Save More On Energy</div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">

            <div className="absolute -top-10 -right-10 w-40 h-40 bg-lime-400 rotate-12 rounded-3xl opacity-80"></div>

            <div className="absolute top-40 -right-20 w-56 h-56 bg-yellow-400 rotate-12 rounded-3xl opacity-90"></div>

            <div className="absolute bottom-0 right-10 w-52 h-52 bg-sky-500 rotate-12 rounded-3xl opacity-80"></div>

            <img
              src="https://www.rizenergy.com/images/riz-new-banner.png"
              className="relative z-10 rounded-[40px] shadow-2xl"
              alt="Energy"
            />

          </div>

        </div>
      </section>

   {/* PARTNER LOGOS SLIDER */}
<section className="border-y border-gray-200 bg-gray-50 overflow-hidden">

  <div className="max-w-7xl mx-auto px-6 py-10">

    <p className="text-center text-sm font-bold text-gray-500 mb-10">
      OUR BUSINESS PARTNERS ACROSS TEXAS
    </p>

    <div className="relative overflow-hidden">

      {/* SLIDER */}
      <div className="flex gap-16 animate-marquee whitespace-nowrap items-center">

        {[
          'https://rizenergy.com/images/g2.jpg',
          'https://rizenergy.com/images/APG&E.jpg',
          'https://rizenergy.com/images/g3.3-1.jpg',
          'https://rizenergy.com/images/budget-power.png',
          'https://rizenergy.com/images/iron-horse.png',
          'https://rizenergy.com/images/truepower.png',
          'https://rizenergy.com/images/constellation.png',
          'https://rizenergy.com/images/atlanticenergy.png',
          'https://rizenergy.com/images/branch-power.png',
          'https://rizenergy.com/images/think-energy.png',
          'https://rizenergy.com/images/shell-energy.png',
          'https://rizenergy.com/images/cleanskyenergy.png',

          // DUPLICATE FOR SMOOTH LOOP
          'https://rizenergy.com/images/g2.jpg',
          'https://rizenergy.com/images/APG&E.jpg',
          'https://rizenergy.com/images/g3.3-1.jpg',
          'https://rizenergy.com/images/budget-power.png',
          'https://rizenergy.com/images/iron-horse.png',
          'https://rizenergy.com/images/truepower.png',
          'https://rizenergy.com/images/constellation.png',
          'https://rizenergy.com/images/atlanticenergy.png',
          'https://rizenergy.com/images/branch-power.png',
          'https://rizenergy.com/images/think-energy.png',
          'https://rizenergy.com/images/shell-energy.png',
          'https://rizenergy.com/images/cleanskyenergy.png',
        ].map((logo, index) => (

          <div
            key={index}
            className="flex-shrink-0"
          >

            <img
              src={logo}
              alt="Partner Logo"
              className="h-20 md:h-24 lg:h-28 w-auto object-contain"
            />

          </div>

        ))}

      </div>

    </div>

  </div>

  {/* ANIMATION STYLE */}
  <style jsx>{`
    .animate-marquee {
      animation: marquee 35s linear infinite;
      width: max-content;
    }

    @keyframes marquee {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }
  `}</style>

</section>

      {/* SERVICES */}
      <section className="py-28 px-6 bg-white">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-500 font-bold uppercase tracking-widest mb-4">
              Tailored Energy Solutions
            </p>

            <h2 className="text-5xl font-black">
              Energy Solutions Built For Your Business
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (

              <div
                key={index}
                className="border border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition duration-300 bg-white"
              >

                <div className={`text-5xl mb-6 ${service.color}`}>
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.desc}
                </p>

                <button className={`font-bold ${service.color}`}>
                  LEARN MORE →
                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="px-6 mb-28">

        <div className="max-w-7xl mx-auto bg-gradient-to-r from-orange-500 via-yellow-400 to-sky-500 rounded-[40px] p-10 text-white">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            <div>
              <h3 className="text-5xl font-black mb-3">
                1,000+
              </h3>

              <p className="font-medium">
                Businesses Served
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-3">
                10B+
              </h3>

              <p className="font-medium">
                kWh Managed
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-3">
                $250M+
              </h3>

              <p className="font-medium">
                Saved for Clients
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-black mb-3">
                Texas
              </h3>

              <p className="font-medium">
                Energy Coverage
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-20 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10 items-center">

          {/* IMAGE */}
          <div className="lg:col-span-1">

            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop"
              alt="Buildings"
              className="rounded-[40px] shadow-xl"
            />

          </div>

          {/* TEXT */}
          <div>

            <p className="text-orange-500 font-bold uppercase tracking-widest mb-5">
              About Us
            </p>

            <h2 className="text-5xl font-black mb-8">
              A Partner You Can Count On
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Riz Energy is a trusted Texas energy partner helping businesses reduce
              costs through customized procurement strategies and renewable
              solutions.
            </p>

            <div className="space-y-4 mb-10">
              <div>✅ Independent and Unbiased</div>
              <div>✅ Access to Top Energy Suppliers</div>
              <div>✅ Transparent Pricing</div>
              <div>✅ Long-Term Partnership</div>
            </div>

            <a
              href="/about"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition px-8 py-4 rounded-2xl font-bold inline-block"
            >
              LEARN MORE ABOUT US →
            </a>

          </div>

          {/* TESTIMONIAL */}
          <div className="border border-gray-200 rounded-[40px] p-10 shadow-sm">

            <div className="text-orange-500 text-5xl mb-6">
              “
            </div>

            <p className="text-2xl leading-relaxed mb-8">
              Highly recommended company - Riz ENERGY always works hard to get you the best deal out there.
            </p>

            <div className="flex items-center gap-4">

              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="User"
                className="w-14 h-14 rounded-full"
              />

              <div>
                <h4 className="font-bold">
                  Manni Munir
                </h4>

                <p className="text-gray-500">
                  Our Client
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="px-6 py-24">

        <div className="max-w-7xl mx-auto bg-gradient-to-r from-orange-500 via-yellow-400 to-sky-500 rounded-[40px] p-12 flex flex-col lg:flex-row items-center justify-between gap-8">

          <div>

            <h2 className="text-5xl font-black text-white mb-4">
              Ready To Lower Your Energy Costs?
            </h2>

            <p className="text-white/90 text-xl">
              Get a free, no-obligation quote and see how much you can save.
            </p>

          </div>

          <a
            href="/contact"
            className="bg-white text-black px-10 py-5 rounded-2xl font-black hover:scale-105 transition inline-block"
          >
            GET YOUR FREE QUOTE →
          </a>

        </div>

      </section>

      <Footer />

    </div>
  )
}
