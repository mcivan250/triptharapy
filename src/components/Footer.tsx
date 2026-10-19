import { Link } from "@tanstack/react-router";

const legalLinks = [
  { label: "Affiliate Disclosure", hash: "disclosure" },
  { label: "Privacy Policy", hash: "privacy" },
  { label: "Terms of Service", hash: "terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-900 py-16 text-stone-400">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="mb-6 block text-2xl font-bold text-white">
              Stateside<span className="text-indigo-500">Scout</span>
            </Link>
            <p className="max-w-sm leading-relaxed text-stone-500">
              Helping American families discover their next favorite domestic getaway through
              immersive virtual reviews and data-driven guides.
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-white">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Destinations
                </Link>
              </li>
              <li>
                <a href="/#why" className="transition-colors hover:text-white">
                  Virtual Reviews
                </a>
              </li>
              <li>
                <a href="/#why" className="transition-colors hover:text-white">
                  Travel Tips
                </a>
              </li>
              <li>
                <a href="/#why" className="transition-colors hover:text-white">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-white">Legal</h4>
            <ul className="space-y-4 text-sm">
              {legalLinks.map((link) => (
                <li key={link.hash}>
                  <Link
                    to="/disclosure"
                    hash={link.hash}
                    className="transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-stone-800 pt-8 text-xs tracking-wider md:flex-row">
          <div className="font-bold uppercase text-stone-600">
            © 2026 StatesideScout. All rights reserved.
          </div>
          <div className="flex gap-6">
            <span>Built for adventurers, by adventurers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
