import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Riz Nabi',
      designation: 'Chief Executive Officer',
      image: 'https://rizenergy.com/images/tt101.png',
      description:
        'Riz Nabi leads Riz Energy with a focus on innovation, customer satisfaction, and strategic growth across Texas deregulated energy markets.',
      email: 'riz.nabi@rizenergy.com',
      linkedin:
        'https://www.linkedin.com/in/rizwan-nabi-b941a47?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKry6RkNeTvuetaB%2FUUXPNw%3D%3D',
      color: 'text-orange-500',
    },

    {
      name: 'Akash Sandhuo',
      designation: 'Chief Technology Officer',
      image: 'https://rizenergy.com/images/akk.jpg',
      description:
        'Akash Sandhuo oversees technology and digital innovation, ensuring scalable systems and modern customer experiences for Riz Energy.',
      email: 'akash@rizenergy.com',
      linkedin:
        'https://www.linkedin.com/in/akash-sandhuo-72a1a990/',
      color: 'text-sky-500',
    },

    {
      name: 'Zayan Rizvi',
      designation: 'Senior Vice President',
      image: 'https://rizenergy.com/images/Zayan-Rizvi.jpeg',
      description:
        'Mr. Rizvi is responsible for growing our Texas market with a focus on our commercial business. Prior to joining Riz Energy, he owned and operated his own energy brokerage. Based in Houston, he brings valuable industry experience and market knowledge to our team.',
      email: 'zayan@rizenergy.com',
      linkedin:
        'https://www.linkedin.com/in/zayan-r-3284b3408/',
      color: 'text-orange-500',
    },

    {
      name: 'Saira Rizvi',
      designation: 'Vice President',
      image: 'https://www.rizenergy.com/images/Sara-Rizvi.jpg',
      description:
        'Saira Rizvi leads our East Coast operations and is based out of Philadelphia. Ms. Rizvi is responsible for growing our customer base in all North East deregulated markets.',
      email: 'saira@rizenergy.com',
      linkedin:
        'https://www.linkedin.com/in/saira-rizvi-27a7b8181/',
      color: 'text-sky-500',
    },

    {
      name: 'Camille Alexander',
      designation: 'Director of Marketing',
      image: 'https://rizenergy.com/images/Camille.png',
      description:
        'Camille Alexander leads our marketing campaigns and is responsible for growing the Riz Energy brand, increasing customer engagement, and expanding our client base across Texas.',
      email: 'camille@rizenergy.com',
      linkedin:
        'https://www.linkedin.com/in/camille-alexander-247b293a4?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAg4gcFw7TiKmZkuZ3FDcvA%3D%3D',
      color: 'text-pink-600',
    },

    {
      name: 'Juliana Herrera',
      designation: 'Director of Sales',
      image: 'https://rizenergy.com/images/Juliana.jpeg',
      description:
        'Juliana Herrera is responsible for growing our commercial business across Texas by providing low rates and superior customer service. Fluent in both English and Spanish, she works closely with clients to deliver personalized energy solutions and an exceptional customer experience.',
      email: 'juliana@rizenergy.com',
      linkedin:
        'https://www.linkedin.com/in/juliana-herrera-b45a08415',
      color: 'text-purple-600',
    },

    {
      name: 'Khalissa Zelilef',
      designation: 'Sales Manager',
      image: 'https://rizenergy.com/images/Khalissa.jpeg',
      description:
        'Khalissa Zelilef heads our customer service department and interacts with our customers on a daily basis. She is responsible for managing client contracts, renewals, and ensuring an exceptional customer experience throughout the entire energy enrollment process.',
      email: 'khalissa@rizenergy.com',
      linkedin:
        'https://www.linkedin.com/in/khalissa-zelilef-544246176',
      color: 'text-emerald-600',
    },
  ]

  return (
    <div className="bg-white text-black">

      <Navbar />

      {/* HERO */}
      <section className="py-24 px-6 bg-gradient-to-r from-orange-50 to-yellow-50">

        <div className="max-w-7xl mx-auto text-center">

          <h1 className="text-5xl md:text-6xl font-black mb-6">
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
            className="rounded-[60px] w-full"
            alt="Energy solutions"
          />

          <div>

            <h2 className="text-4xl md:text-5xl font-black mb-8">
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

          {/* TEAM HEADING */}
          <div className="text-center mb-20">

            <p className="text-orange-500 font-bold uppercase tracking-widest mb-4">
              Leadership Team
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Meet Our Team
            </h2>

            <p className="text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
              Experienced professionals dedicated to delivering smarter energy
              solutions.
            </p>

          </div>

          {/* 2 MEMBERS PER ROW */}
          <div className="grid md:grid-cols-2 gap-10">

            {teamMembers.map((member) => (

              <div
                key={member.email}
                className="bg-white border border-gray-200 rounded-[40px] p-8 md:p-10 shadow-sm hover:shadow-xl transition duration-300"
              >

                {/* MEMBER HEADER */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-28 h-28 rounded-full object-cover flex-shrink-0"
                  />

                  <div>

                    <h3 className="text-3xl font-black mb-2">
                      {member.name}
                    </h3>

                    <p className={`${member.color} font-bold text-lg`}>
                      {member.designation}
                    </p>

                  </div>

                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-600 leading-relaxed mt-8 mb-8">
                  {member.description}
                </p>

                {/* CONTACT */}
                <div className="flex flex-col gap-4">

                  {/* EMAIL */}
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition break-all"
                  >

                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                      ✉️
                    </div>

                    <span className="font-medium">
                      {member.email}
                    </span>

                  </a>

                  {/* LINKEDIN */}
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-700 hover:text-sky-600 transition"
                  >

                    <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center font-bold flex-shrink-0">
                      in
                    </div>

                    <span className="font-medium">
                      LinkedIn Profile
                    </span>

                  </a>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <Footer />

    </div>
  )
}
