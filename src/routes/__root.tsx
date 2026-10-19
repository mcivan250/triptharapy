import { HeadContent, Link, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";

import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import appCss from "~/styles/app.css?url";

const SITE_NAME = "StatesideScout";
const DEFAULT_DESCRIPTION =
  "Immersive virtual reviews and curated guides to the best US vacation destinations — where to stay, where to eat, and what to do, minus the listicles.";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE_NAME} — Immersive Virtual Reviews of US Destinations` },
      { name: "description", content: DEFAULT_DESCRIPTION },
      { name: "theme-color", content: "#4f46e5" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:title", content: `${SITE_NAME} — Immersive Virtual Reviews of US Destinations` },
      { property: "og:description", content: DEFAULT_DESCRIPTION },
      { property: "og:image", content: "/hero-travel.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    ],
  }),
  notFoundComponent: NotFound,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <div className="flex min-h-screen flex-col bg-stone-50 font-sans text-stone-900">
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </RootDocument>
  );
}

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-indigo-600">404</p>
      <h1 className="mb-4 mt-2 text-3xl font-extrabold text-stone-900">
        We couldn&rsquo;t find that destination
      </h1>
      <p className="mb-8 max-w-md text-stone-600">
        The page you were scouting doesn&rsquo;t exist — but our five destination guides do.
      </p>
      <Link
        to="/"
        className="rounded-xl bg-indigo-600 px-8 py-3 font-bold text-white shadow-md transition-colors hover:bg-indigo-700"
      >
        Back to all destinations
      </Link>
    </div>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
