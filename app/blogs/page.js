import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const blogs = [
  {
    title: 'Texas built a weak electricity grid and it failed',
    date: 'February 17, 2021',
    link: 'https://lnkd.in/eEErMFB',
    image:
      'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1400&auto=format&fit=crop',
    excerpt:
      'The Texas energy crisis exposed major weaknesses in the state’s isolated electricity grid during extreme winter weather.',
  },
  {
    title: 'Texas’s Power Market Is $1.3 Billion Short After Energy Crisis',
    date: 'February 26, 2021',
    link:
      'https://www.bloomberg.com/news/articles/2021-02-27/texas-s-power-market-is-1-3-billion-short-after-energy-crisis',
    image:
      'https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1400&auto=format&fit=crop',
    excerpt:
      'Texas power markets suffered massive financial disruption following the winter storm and statewide outages.',
  },
  {
    title:
      'Texas Power Retailers to Customers in Face of Freeze: Please, Leave Us',
    date: 'February 16, 2021',
    link:
      'https://www.bloomberg.com/news/articles/2021-02-15/texas-power-retailers-in-face-of-freeze-please-leave-us?utm_source=url_link',
    image:
      'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1400&auto=format&fit=crop',
    excerpt:
      'Retail energy providers struggled during the freeze as customers searched for stable electricity providers.',
  },
]

export default function BlogPage() {
  return (
    <div className="bg-white text-black min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-50 to-yellow-50">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Riz Energy Blog
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Latest energy news, industry insights, and updates from Riz Energy.
          </p>

        </div>

      </section>

      {/* BLOGS */}
      <section className="py-24 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {blogs.map((blog, index) => (

              <div
                key={index}
                className="bg-white border border-gray-200 rounded-[40px] overflow-hidden hover:shadow-2xl transition duration-300"
              >

                {/* IMAGE */}
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-64 object-cover"
                />

                {/* CONTENT */}
                <div className="p-8">

                  <p className="text-orange-500 font-bold mb-4">
                    {blog.date}
                  </p>

                  <h2 className="text-2xl font-black leading-tight mb-5">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed mb-8">
                    {blog.excerpt}
                  </p>

                  <a
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-4 rounded-2xl font-bold"
                  >
                    READ ARTICLE →
                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-24 px-6">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-orange-500 via-yellow-400 to-sky-500 rounded-[40px] p-12 text-center text-white">

          <h2 className="text-5xl font-black mb-6">
            Stay Updated
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto">
            Follow Riz Energy for the latest energy market news, updates,
            and industry insights.
          </p>

          <a
            href="/contact"
            className="inline-block bg-white text-black hover:scale-105 transition px-10 py-5 rounded-2xl font-black"
          >
            CONTACT US
          </a>

        </div>

      </section>

      <Footer />

    </div>
  )
}
