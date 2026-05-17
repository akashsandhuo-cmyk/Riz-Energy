import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CareersPage() {
  return (
    <div className="bg-white text-black min-h-screen">

      <Navbar />

      {/* HERO */}
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

      {/* JOB POSTING */}
      <section className="py-24 px-6">

        <div className="max-w-4xl mx-auto">

          <div className="bg-white border border-gray-200 rounded-[40px] p-10 md:p-14 shadow-sm">

            <div className="mb-10">

              <p className="text-orange-500 font-bold uppercase tracking-widest mb-4">
                Open Position
              </p>

              <h2 className="text-5xl font-black mb-4">
                Sales Consultant
              </h2>

              <p className="text-gray-500 text-lg">
                Full Time • Houston, Texas
              </p>

            </div>

            <div className="space-y-8">

              <div>

                <h3 className="text-2xl font-black mb-4">
                  Job Description and Requirements
                </h3>

                <p className="text-lg text-gray-600 leading-relaxed">
                  As a B2B (business-to-business) outside sales position,
                  building long-term relationships with our clients as a
                  trusted advisor on electricity is significant.
                </p>

              </div>

              <div className="bg-orange-50 rounded-[32px] p-8 border border-orange-100">

                <h4 className="text-2xl font-black mb-4">
                  How To Apply
                </h4>

                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To apply, send your resume to:
                </p>

                <a
                  href="mailto:careers@rizenergy.com"
                  className="text-2xl font-black text-orange-500 hover:text-orange-600 transition break-all"
                >
                  careers@rizenergy.com
                </a>

                <p className="text-gray-600 mt-6">
                  Please mention the position name in the subject field.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}
