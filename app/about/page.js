import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <div>
      <Navbar />

      <section className="py-24 px-6 bg-gradient-to-r from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-6xl font-black mb-6">About Riz Energy</h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Riz Energy helps businesses and homeowners reduce energy costs
            through customized electricity and natural gas solutions.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?q=80&w=1200&auto=format&fit=crop"
            className="rounded-[40px]"
          />

          <div>
            <h2 className="text-5xl font-black mb-8">
              Smart Energy Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We specialize in helping businesses navigate deregulated energy
              markets with transparency and efficiency.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our mission is to deliver lower energy costs while supporting
              sustainable energy adoption across the United States.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}