import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";
import ReactMarkdown, { type Components } from "react-markdown";

/**
 * Text content of a React node tree — used to recognise the two signatures the
 * guides use instead of adding non-standard markdown syntax:
 *   `> **Scout Tip:** …`  → the amber callout box
 *   `**[Book … via Booking.com](…)**` → a full-width affiliate button
 */
function textOf(node: ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return textOf(props.children);
  }
  return "";
}

/** Removes the leading "Scout Tip:" label, since the callout renders its own. */
function stripScoutLabel(nodes: ReactNode): ReactNode {
  let stripped = false;
  const walk = (node: ReactNode): ReactNode => {
    if (stripped || node === null || node === undefined) return node;
    if (typeof node === "string") {
      if (!/scout\s*tip/i.test(node)) return node;
      stripped = true;
      return node.replace(/^\s*scout\s*tip:?\s*/i, "");
    }
    if (Array.isArray(node)) return node.map((child) => walk(child));
    if (isValidElement(node)) {
      const element = node as ReactElement<{ children?: ReactNode }>;
      if (element.props?.children === undefined) return element;
      return cloneElement(element, { children: walk(element.props.children) });
    }
    return node;
  };
  return walk(nodes);
}

function isScoutTip(children: ReactNode): boolean {
  return /^scout\s*tip/i.test(textOf(children).trim());
}

const AFFILIATE_MARKERS = ["via", "book", "check availability"];

function isAffiliateLink(children: ReactNode): boolean {
  const text = textOf(children).toLowerCase();
  return AFFILIATE_MARKERS.some((marker) => text.includes(marker));
}

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-[18px] w-[18px] transition-transform group-hover:translate-x-1"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </svg>
  );
}

function InfoIcon() {
  return (
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
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

const components: Components = {
  // The hero already renders an <h1> with the destination name; demoting the
  // guide's own title keeps one <h1> per page for the crawlers.
  h1: ({ children }) => <h2>{children}</h2>,
  blockquote: ({ children }) => {
    if (isScoutTip(children)) {
      return (
        <div className="not-prose my-8 flex gap-4 rounded-r-2xl border-l-4 border-amber-400 bg-amber-50 p-6 shadow-sm">
          <span className="h-fit rounded-full bg-amber-400 p-1.5 text-white">
            <InfoIcon />
          </span>
          <div>
            <strong className="mb-1 block text-amber-900">Scout Tip</strong>
            <span className="italic text-amber-800">{stripScoutLabel(children)}</span>
          </div>
        </div>
      );
    }
    return <blockquote className="my-8 border-l-4 border-stone-200 pl-6 italic">{children}</blockquote>;
  },
  a: ({ href, children }) => {
    if (isAffiliateLink(children)) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="not-prose group my-6 inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-8 py-4 font-bold text-white shadow-md transition-all hover:bg-indigo-700 hover:shadow-lg"
        >
          {children}
          <ExternalLinkIcon />
        </a>
      );
    }
    const isExternal = typeof href === "string" && /^https?:\/\//.test(href);
    return (
      <a href={href} {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  },
  img: ({ src, alt }) => (
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt ?? ""}
      loading="lazy"
      decoding="async"
      className="mx-auto rounded-2xl shadow-lg"
    />
  ),
};

export function GuideMarkdown({ markdown }: { markdown: string }) {
  return <ReactMarkdown components={components}>{markdown}</ReactMarkdown>;
}
