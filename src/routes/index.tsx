import { Link, createFileRoute } from "@tanstack/react-router";

import { destinations } from "~/data/destinations";

export const Route = createFileRoute("/")({
  component: Home,
});

const valueProps = [
  {
    title: "Verified Insights",
    body: "We only review places we've scouted or researched deeply through trusted local networks.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
  {
    title: "Virtual Reviews",
    body: "Experience the destination through high-quality visuals and immersive descriptions before you book.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
      />
    ),
  },
  {
    title: "Booking Savings",
    body: "Access exclusive deals through our curated affiliate partnerships with Expedia and Booking.com.",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    ),
  },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex h-[80vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero-travel.png"
            alt="Scenic Landscape"
            className="h-full w-full object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 max-w-4xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-extrabold text-white drop-shadow-lg md:text-7xl">
            Discover the Best of the <span className="text-indigo-300">USA</span>
          </h1>
          <p className="mb-10 text-xl text-stone-100 drop-shadow-md md:text-2xl">
            Immersive virtual reviews and curated guides for your next domestic getaway.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#destinations"
              className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-indigo-900 shadow-lg transition-colors hover:bg-stone-100"
            >
              Browse Destinations
            </a>
            <Link
              to="/destination/$id"
              params={{ id: "charleston" }}
              className="rounded-xl bg-indigo-600/90 px-8 py-4 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-indigo-700"
            >
              Latest Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section id="destinations" className="scroll-mt-16 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Explore Destinations</h2>
            <p className="max-w-2xl text-lg text-stone-600">
              From historic southern cities to the rugged peaks of the Rockies, find your next
              adventure with our detailed scout reports.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <div
                key={dest.id}
                className="group relative overflow-hidden rounded-3xl border border-stone-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {dest.tag ? (
                    <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
                      {dest.tag}
                    </span>
                  ) : null}
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-900 shadow-sm backdrop-blur-sm">
                    {dest.category}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="mb-2 text-2xl font-bold transition-colors group-hover:text-indigo-600">
                    {dest.title}
                  </h3>
                  <p className="mb-8 line-clamp-2 text-sm leading-relaxed text-stone-600">
                    {dest.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-stone-100 pt-4">
                    <Link
                      to="/destination/$id"
                      params={{ id: dest.id }}
                      className="flex items-center gap-1 text-sm font-bold text-indigo-600 transition-transform hover:translate-x-1"
                    >
                      Read Virtual Review &rarr;
                    </Link>
                    <div className="flex flex-col items-end">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                        Affiliates:
                      </span>
                      <span className="text-[10px] font-medium text-stone-500">
                        Expedia • Booking
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust/About Section */}
      <section id="why" className="scroll-mt-16 border-t border-stone-200 bg-stone-50 py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-12 text-4xl font-bold">Why StatesideScout?</h2>
          <div className="grid grid-cols-1 gap-12 text-left md:grid-cols-3">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100">
                  <svg
                    aria-hidden
                    className="h-8 w-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {prop.icon}
                  </svg>
                </div>
                <h4 className="mb-3 text-xl font-bold">{prop.title}</h4>
                <p className="text-sm leading-relaxed text-stone-600">{prop.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
