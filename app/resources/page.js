import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ResourcesPage() {
  return (
    <div>
      <Navbar />

      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-r from-sky-50 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-6xl font-black mb-6">
            Resources
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Industry insights, energy news, and educational resources.
          </p>

        </div>
      </section>

      {/* BLOG CARDS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (

            <div
              key={item}
              className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >

              <img
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop"
                alt="Energy"
                className="h-60 w-full object-cover"
              />

              <div className="p-8">

                <p className="text-orange-500 font-bold text-sm mb-4">
                  ENERGY INSIGHTS
                </p>

                <h3 className="text-3xl font-black mb-4">
                  Energy Market Trends
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">
                  Learn about the latest energy market developments,
                  pricing strategies, and renewable energy opportunities.
                </p>

                <button className="text-orange-500 font-bold">
                  READ MORE →
                </button>

              </div>

            </div>

          ))}

        </div>
      </section>

      <Footer />
    </div>
  )
}