import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/disclosure")({
  component: DisclosurePage,
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure & Site Policies | StatesideScout" },
      {
        name: "description",
        content:
          "How StatesideScout makes money, the affiliate programs we participate in, and how we handle your privacy.",
      },
    ],
  }),
});

const sections = [
  {
    id: "disclosure",
    title: "Affiliate Disclosure",
    body: [
      "StatesideScout is an independent publisher. We pay for our research, photography, and hosting with affiliate commissions.",
      "When you click a booking link in one of our guides — for example a hotel link to Expedia or Booking.com, or a tour link to Viator — and complete a booking, we may earn a commission. You pay the same price you would if you had gone to that site directly.",
      "Commissions never change what we recommend. A property is in a scout report because we researched it and would send a friend there, not because of what it pays.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    body: [
      "We do not ask you to create an account and we do not sell personal information.",
      "Our pages are served with aggregate analytics that tell us which guides are useful (page views, referrers, country). Those tools set cookies in aggregate and are not used to identify you personally.",
      "Our booking links are third-party links. Once you follow one, the privacy policy of that partner — Expedia, Booking.com, Viator, or another program — applies to what they collect.",
    ],
  },
  {
    id: "terms",
    title: "Terms of Service",
    body: [
      "The guides on this site are editorial research, not a guarantee. Prices, opening hours, tours, and access rules change constantly, and businesses close or rebrand.",
      "Always confirm details — especially anything time-sensitive like shuttle reservations, ferry schedules, or park access — with the operator before you book.",
      "We are not responsible for third-party bookings made through affiliate partners.",
    ],
  },
];

function DisclosurePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20">
      <h1 className="mb-4 text-4xl font-extrabold text-stone-900">
        Affiliate Disclosure &amp; Site Policies
      </h1>
      <p className="mb-12 text-lg text-stone-600">
        Plain language, because you should know how a travel guide makes its money.
      </p>
      <div className="space-y-12">
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="mb-4 text-2xl font-bold text-stone-900">{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mb-4 leading-relaxed text-stone-600">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
      <p className="mt-16 text-sm text-stone-500">Last updated: June 2026.</p>
    </div>
  );
}
