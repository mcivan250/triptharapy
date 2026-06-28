import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-16 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-white text-2xl font-bold mb-6 block">
              Stateside<span className="text-indigo-500">Scout</span>
            </Link>
            <p className="text-stone-500 max-w-sm leading-relaxed">
              Helping American families discover their next favorite domestic getaway through immersive virtual reviews and data-driven guides.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-white transition-colors">Destinations</Link></li>
              <li><a href="#" className="hover:text-white transition-colors">Virtual Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Travel Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Disclosure</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-wider">
          <div className="text-stone-600 uppercase font-bold">
            © 2026 StatesideScout. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>Built for adventurers, by adventurers.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
