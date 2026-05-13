import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function RenewablePage() {
  return (
    <div>
      <Navbar />

      <section className="py-24 px-6 bg-gradient-to-r from-lime-50 to-green-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-6">
            Renewable Energy Solutions
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sustainable energy solutions for modern businesses.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8">
              Cleaner Energy For The Future
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Riz Energy helps organizations transition toward renewable and
              sustainable energy systems.
            </p>

            <button className="bg-lime-500 text-white px-8 py-4 rounded-2xl font-bold">
              GET STARTED
            </button>
          </div>

          <img
            src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[40px]"
          />
        </div>
      </section>

      <Footer />
    </div>
  )
}