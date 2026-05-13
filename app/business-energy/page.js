import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function BusinessEnergyPage() {
  return (
    <div>
      <Navbar />

      <section className="py-24 px-6 bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-6">
            Business Energy Solutions
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Customized procurement strategies designed to reduce operational
            energy costs.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            'Electricity Procurement',
            'Natural Gas Solutions',
            'Energy Cost Optimization',
          ].map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-3xl p-10 shadow-sm"
            >
              <div className="text-5xl mb-6">⚡</div>

              <h3 className="text-3xl font-black mb-4">{item}</h3>

              <p className="text-gray-600 leading-relaxed">
                Tailored solutions to improve energy efficiency and reduce costs.
              </p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}