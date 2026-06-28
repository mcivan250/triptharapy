import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-indigo-900">Stateside<span className="text-indigo-600">Scout</span></span>
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-stone-600">
            <Link to="/" className="hover:text-indigo-600 transition-colors">Destinations</Link>
            <a href="#" className="hover:text-indigo-600 transition-colors">Virtual Reviews</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Travel Tips</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">About</a>
          </div>
          <button className="bg-indigo-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg active:scale-95">
            Explore Now
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
