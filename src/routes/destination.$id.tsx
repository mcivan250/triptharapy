import { Link, createFileRoute, notFound } from "@tanstack/react-router";

import { GuideMarkdown } from "~/components/GuideMarkdown";
import { getDestination } from "~/data/destinations";
import { guides } from "~/data/guides";

export const Route = createFileRoute("/destination/$id")({
  component: DestinationPage,
  loader: ({ params }) => {
    const destination = getDestination(params.id);
    if (!destination) throw notFound();
    return { destination };
  },
  head: ({ params }) => {
    const destination = getDestination(params.id);
    if (!destination) return {};
    const title = `${destination.seoTitle} | StatesideScout`;
    return {
      meta: [
        { title },
        { name: "description", content: destination.description },
        { property: "og:title", content: title },
        { property: "og:description", content: destination.description },
        { property: "og:image", content: destination.image },
        { property: "og:type", content: "article" },
      ],
    };
  },
});

function DestinationPage() {
  const { destination } = Route.useLoaderData();
  const guide = guides[destination.id];

  return (
    <div className="min-h-screen bg-stone-50 pb-24 font-sans text-stone-900">
      {/* Hero Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img src={destination.image} alt={destination.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
          <Link
            to="/"
            className="absolute left-8 top-8 flex items-center gap-2 rounded-full bg-black/20 px-4 py-2 text-white/80 backdrop-blur-sm transition-colors hover:text-white"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Destinations
          </Link>
          <span className="mb-4 rounded-full bg-indigo-600 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            {destination.category}
          </span>
          <h1 className="mb-4 text-4xl font-extrabold text-white drop-shadow-lg md:text-6xl">
            {destination.title}
          </h1>
          <p className="max-w-2xl text-lg text-stone-100 drop-shadow-md md:text-xl">
            {destination.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto mt-12 max-w-4xl px-4">
        <div className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
          <article
            className="prose prose-stone prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-stone-900
              prose-p:text-stone-600 prose-p:leading-relaxed
              prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-stone-900
              prose-img:rounded-2xl prose-img:shadow-lg prose-img:mx-auto"
          >
            {guide ? (
              <GuideMarkdown markdown={guide} />
            ) : (
              <p className="text-stone-600">
                Our full scout report for this destination is still in the field. Check back soon.
              </p>
            )}
          </article>
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3 text-sm font-bold text-stone-700 shadow-sm transition-colors hover:border-indigo-300 hover:text-indigo-600"
          >
            &larr; Explore another destination
          </Link>
        </div>
      </div>
    </div>
  );
}
