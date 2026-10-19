// Guide bodies are imported at build time (`?raw`) rather than fetched from the
// browser: the full text is then part of the server-rendered HTML, which is what
// the search engines index. Source of truth is `src/content/guides/*.md`;
// `scripts/sync-guides.ts` mirrors them into `public/guides/` so the raw markdown
// is also reachable at /guides/<id>.md.
import aspen from "~/content/guides/aspen.md?raw";
import charleston from "~/content/guides/charleston.md?raw";
import doorCounty from "~/content/guides/door-county.md?raw";
import grandTeton from "~/content/guides/grand-teton.md?raw";
import outerBanks from "~/content/guides/outer-banks.md?raw";

export const guides: Record<string, string> = {
  aspen,
  charleston,
  "door-county": doorCounty,
  "grand-teton": grandTeton,
  "outer-banks": outerBanks,
};
