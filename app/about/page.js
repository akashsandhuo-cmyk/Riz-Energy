import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div className="bg-white text-black">
      <Navbar />

      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-50 to-yellow-50">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-6xl font-black mb-6">
            About Riz Energy
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Riz Energy helps businesses and homeowners reduce energy costs
            through customized electricity and natural gas solutions.
          </p>

        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

          <img
            src="https://www.airclim.org/sites/default/files/acid-news/2025-07/shutterstock_2388393651_900.jpg"
            className="rounded-[60px]"
            alt="Energy"
          />

          <div>

            <h2 className="text-5xl font-black mb-8">
              Smart Energy Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2016, Riz Energy is a trusted electricity and natural
              gas consulting firm serving residential and commercial customers
              across deregulated energy markets in Texas.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Our mission is to help customers find competitive energy rates
              while making the process simple, transparent, and stress-free.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We compare plans from leading energy providers to ensure you get
              the best option for your home or business. With years of industry
              expertise, our team understands the energy market and works hard
              to help customers lower their monthly energy costs.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Today, customers have more choices than ever beyond their local
              utility company, and shopping for the right provider can lead to
              significant savings. Riz Energy acts as your trusted partner by
              guiding you through the process and helping you choose the energy
              solution that fits your needs and budget.
            </p>

          </div>

        </div>

      </section>

      {/* TEAM SECTION */}
      <section className="py-24 px-6 bg-gray-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="text-orange-500 font-bold uppercase tracking-widest mb-4">
              Leadership Team
            </p>

            <h2 className="text-5xl font-black">
              Meet Our Team
            </h2>

            <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering smarter energy solutions.
            </p>

          </div>

          {/* 2 MEMBERS PER ROW */}
          <div className="grid md:grid-cols-2 gap-10">

            {/* TEAM MEMBER 1 */}
            <div className="bg-white border border-gray-200 rounded-[40px] p-10 shadow-sm hover:shadow-xl transition">

              <div className="flex items-center gap-6">

                <img
                  src="https://rizenergy.com/images/tt101.png"
                  alt="Riz Nabi"
                  className="w-28 h-28 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-3xl font-black mb-2">
                    Riz Nabi
                  </h3>

                  <p className="text-orange-500 font-bold text-lg">
                    Chief Executive Officer
                  </p>

                </div>

              </div>

              <p className="text-gray-600 leading-relaxed mt-8 mb-8">
                Riz Nabi leads Riz Energy with a focus on innovation,
                customer satisfaction, and strategic growth across Texas deregulated energy markets.
              </p>

              <div className="flex flex-col gap-4">

                <a
                  href="mailto:riz.nabi@rizenergy.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition"
                >

                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    ✉️
                  </div>

                  <span className="font-medium">
                    riz.nabi@rizenergy.com
                  </span>

                </a>

                <a
                  href="https://www.linkedin.com/in/rizwan-nabi-b941a47?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKry6RkNeTvuetaB%2FUUXPNw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-sky-600 transition"
                >

                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center">
                    in
                  </div>

                  <span className="font-medium">
                    LinkedIn Profile
                  </span>

                </a>

              </div>

            </div>

            {/* TEAM MEMBER 2 */}
            <div className="bg-white border border-gray-200 rounded-[40px] p-10 shadow-sm hover:shadow-xl transition">

              <div className="flex items-center gap-6">

                <img
                  src="https://rizenergy.com/images/akk.jpg"
                  alt="Akash Sandhuo"
                  className="w-28 h-28 rounded-full object-cover"
                />

                <div>

                  <h3 className="text-3xl font-black mb-2">
                    Akash Sandhuo
                  </h3>

                  <p className="text-sky-500 font-bold text-lg">
                    Chief Technology Officer
                  </p>

                </div>

              </div>

              <p className="text-gray-600 leading-relaxed mt-8 mb-8">
                Akash Sandhuo oversees technology and digital innovation,
                ensuring scalable systems and modern customer experiences for Riz Energy.
              </p>

              <div className="flex flex-col gap-4">

                <a
                  href="mailto:akash@rizenergy.com"
                  className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition"
                >

                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    ✉️
                  </div>

                  <span className="font-medium">
                    akash@rizenergy.com
                  </span>

                </a>

                <a
                  href="https://www.linkedin.com/in/akash-sandhuo-72a1a990/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-700 hover:text-sky-600 transition"
                >

                  <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center font-bold">
                    in
                  </div>

                  <span className="font-medium">
                    LinkedIn Profile
                  </span>

                </a>

              </div>

            </div>

            
            {/* TEAM MEMBER  3*/}
<div className="bg-white border border-gray-200 rounded-[40px] p-10 shadow-sm hover:shadow-xl transition">

  <div className="flex items-center gap-6">

    <img
      src="https://rizenergy.com/images/Camille.png"
      alt="Camille Alexander"
      className="w-28 h-28 rounded-full object-cover"
    />

    <div>

      <h3 className="text-3xl font-black mb-2">
        Camille Alexander
      </h3>

      <p className="text-pink-600 font-bold text-lg">
        Director of Marketing
      </p>

    </div>

  </div>

  <p className="text-gray-600 leading-relaxed mt-8 mb-8">
    Camille Alexander leads our marketing campaigns and is responsible
    for growing the Riz Energy brand, increasing customer engagement,
    and expanding our client base across Texas.
  </p>

  <div className="flex flex-col gap-4">

    <a
      href="mailto:camille@rizenergy.com"
      className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition"
    >

      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        ✉️
      </div>

      <span className="font-medium">
        camille@rizenergy.com
      </span>

    </a>

    <a
      href="https://www.linkedin.com/in/camille-alexander-247b293a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAg4gcFw7TiKmZkuZ3FDcvA%3D%3D"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-gray-700 hover:text-sky-600 transition"
    >

      <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center font-bold">
        in
      </div>

      <span className="font-medium">
        LinkedIn Profile
      </span>

    </a>

  </div>

</div>
    {/* TEAM MEMBER 4 */}
<div className="bg-white border border-gray-200 rounded-[40px] p-10 shadow-sm hover:shadow-xl transition">

  <div className="flex items-center gap-6">

    <img
      src="https://rizenergy.com/images/Juliana.jpeg"
      alt="Juliana Herrera"
      className="w-28 h-28 rounded-full object-cover"
    />

    <div>

      <h3 className="text-3xl font-black mb-2">
        Juliana Herrera
      </h3>

      <p className="text-purple-600 font-bold text-lg">
        Director of Sales
      </p>

    </div>

  </div>

  <p className="text-gray-600 leading-relaxed mt-8 mb-8">
    Juliana Herrera is responsible for growing our commercial business
    across Texas by providing low rates and superior customer service.
  </p>

  <div className="flex flex-col gap-4">

    <a
      href="mailto:juliana@rizenergy.com"
      className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition"
    >

      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        ✉️
      </div>

      <span className="font-medium">
        juliana@rizenergy.com
      </span>

    </a>

    <a
      href="https://www.linkedin.com/in/juliana-herrera-b45a08415"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-gray-700 hover:text-sky-600 transition"
    >

      <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center font-bold">
        in
      </div>

      <span className="font-medium">
        LinkedIn Profile
      </span>

    </a>

  </div>

</div>

        {/* TEAM MEMBER 5 */}
<div className="bg-white border border-gray-200 rounded-[40px] p-10 shadow-sm hover:shadow-xl transition">

  <div className="flex items-center gap-6">

    <img
      src="https://rizenergy.com/images/Khalissa.jpeg"
      alt="Khalissa Zelilef"
      className="w-28 h-28 rounded-full object-cover"
    />

    <div>

      <h3 className="text-3xl font-black mb-2">
        Khalissa Zelilef
      </h3>

      <p className="text-emerald-600 font-bold text-lg">
        Sales Manager
      </p>

    </div>

  </div>

  <p className="text-gray-600 leading-relaxed mt-8 mb-8">
    Khalissa Zelilef heads our customer service department and interacts
    with our customers on a daily basis. She is responsible for managing
    client contracts, renewals, and ensuring an exceptional customer
    experience throughout the entire energy enrollment process.
  </p>

  <div className="flex flex-col gap-4">

    <a
      href="mailto:khalissa@rizenergy.com"
      className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition"
    >

      <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
        ✉️
      </div>

      <span className="font-medium">
        khalissa@rizenergy.com
      </span>

    </a>

    <a
      href="https://www.linkedin.com/in/khalissa-zelilef-544246176"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 text-gray-700 hover:text-sky-600 transition"
    >

      <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center font-bold">
        in
      </div>

      <span className="font-medium">
        LinkedIn Profile
      </span>

    </a>

  </div>

</div>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}
