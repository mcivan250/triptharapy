import { Link } from 'react-router-dom'
import { destinations } from '../data/destinations'

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-travel.png"
            alt="Scenic Landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
            Discover the Best of the <span className="text-indigo-300">USA</span>
          </h1>
          <p className="text-xl md:text-2xl text-stone-100 mb-10 drop-shadow-md">
            Immersive virtual reviews and curated guides for your next domestic getaway.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#destinations" className="bg-white text-indigo-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-stone-100 transition-colors shadow-lg">
              Browse Destinations
            </a>
            <Link to="/destination/charleston" className="bg-indigo-600/90 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-indigo-700 transition-colors backdrop-blur-sm shadow-lg">
              Latest Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="destinations" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Destinations</h2>
            <p className="text-lg text-stone-600 max-w-2xl">
              From historic southern cities to the rugged peaks of the Rockies, find your next adventure with our detailed scout reports.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest) => (
              <div key={dest.id} className="group relative bg-white border border-stone-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {dest.tag && (
                    <span className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                      {dest.tag}
                    </span>
                  )}
                  <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-stone-900 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {dest.category}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-indigo-600 transition-colors">{dest.title}</h3>
                  <p className="text-stone-600 text-sm mb-8 line-clamp-2 leading-relaxed">
                    {dest.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                    <Link 
                      to={`/destination/${dest.id}`}
                      className="text-indigo-600 font-bold text-sm hover:translate-x-1 transition-transform flex items-center gap-1"
                    >
                      Read Virtual Review &rarr;
                    </Link>
                    <div className="flex flex-col items-end">
                       <span className="text-[10px] text-stone-400 uppercase font-bold tracking-wider">Affiliates:</span>
                       <span className="text-[10px] text-stone-500 font-medium">Expedia • Booking</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/About Section */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">Why StatesideScout?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Verified Insights</h4>
              <p className="text-stone-600 text-sm leading-relaxed">We only review places we've scouted or researched deeply through trusted local networks.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Virtual Reviews</h4>
              <p className="text-stone-600 text-sm leading-relaxed">Experience the destination through high-quality visuals and immersive descriptions before you book.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h4 className="text-xl font-bold mb-3">Booking Savings</h4>
              <p className="text-stone-600 text-sm leading-relaxed">Access exclusive deals through our curated affiliate partnerships with Expedia and Booking.com.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
