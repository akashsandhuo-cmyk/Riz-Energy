import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CareersPage() {
  return (
    <div>
      <Navbar />

      <section className="py-24 px-6 bg-gradient-to-r from-orange-50 to-sky-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-6">
            Careers at Riz Energy
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our growing team and help shape the future of energy.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-8">

          {[
            'Energy Consultant',
            'Sales Representative',
            'Business Development Manager',
          ].map((job, index) => (

            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-8 flex justify-between items-center"
            >

              <div>
                <h3 className="text-3xl font-black mb-2">
                  {job}
                </h3>

                <p className="text-gray-600">
                  Full Time • Houston, Texas
                </p>
              </div>

              <button className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold">
                Apply Now
              </button>

            </div>

          ))}

        </div>
      </section>

      <Footer />
    </div>
  )
}