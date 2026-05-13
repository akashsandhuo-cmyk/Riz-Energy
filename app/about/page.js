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
            src="https://met.com/media/qx1bry3t/generating-electricity-from-natural-gas.jpg"
            className="rounded-[40px]"
          />

          <div>
            <h2 className="text-5xl font-black mb-8">
              Smart Energy Solutions
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Founded in 2016, Riz Energy has been helping homes and businesses across Texas find smarter electricity and natural gas solutions at competitive rates. 
              As a trusted energy broker, we work with leading energy providers to compare plans, secure lower rates, and simplify the switching process for our customers.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our goal is to make energy shopping easy, transparent, and cost-effective, so you can focus on what matters most while saving on your monthly utility bills. 
              With years of industry experience
              and a commitment to customer satisfaction, Riz Energy continues to serve Texans with reliable energy options tailored to their needs.ates.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
