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
            Join our growing team & help shape the future of energy across Texas.
          </p>

        </div>

      </section>

      {/* JOB OPENINGS */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <div className="bg-white border border-gray-200 rounded-[40px] p-10 shadow-sm">

            {/* TOP */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

              <div>

                <h2 className="text-4xl font-black mb-3">
                  Sales Consultant
                </h2>

                <p className="text-gray-500 text-lg">
                  Full Time • Texas, USA
                </p>

              </div>

              <a
                href="/images/sales_consultant.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 transition text-white px-8 py-4 rounded-2xl font-bold inline-block text-center"
              >
                VIEW FULL DESCRIPTION →
              </a>

            </div>

            {/* DESCRIPTION */}
            <div className="space-y-6">

              <div>

                <h3 className="text-2xl font-black mb-4">
                  Job Description and Requirements
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  As a B2B (business-to-business) outside sales position,
                  building long-term relationships with our clients as a trusted
                  advisor on electricity is significant.
                </p>

              </div>

              <div>

                <h3 className="text-2xl font-black mb-4">
                  Apply Now
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
                  To apply, send your resume to:
                </p>

                <a
                  href="mailto:careers@rizenergy.com"
                  className="text-orange-500 font-bold text-xl hover:text-orange-600 transition"
                >
                  careers@rizenergy.com
                </a>

                <p className="text-gray-500 mt-3">
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
