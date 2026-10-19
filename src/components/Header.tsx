import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <nav className="sticky top-0 z-50 border-b border-stone-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-indigo-900">
              Stateside<span className="text-indigo-600">Scout</span>
            </span>
          </Link>
          <div className="hidden space-x-8 text-sm font-medium text-stone-600 md:flex">
            <a href="/#destinations" className="transition-colors hover:text-indigo-600">
              Destinations
            </a>
            <a href="/#why" className="transition-colors hover:text-indigo-600">
              Virtual Reviews
            </a>
            <a href="/#why" className="transition-colors hover:text-indigo-600">
              Travel Tips
            </a>
            <a href="/#why" className="transition-colors hover:text-indigo-600">
              About
            </a>
          </div>
          <a
            href="/#destinations"
            className="rounded-full bg-indigo-600 px-6 py-2.5 text-sm font-bold text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg active:scale-95"
          >
            Explore Now
          </a>
        </div>
      </div>
    </nav>
  );
}
