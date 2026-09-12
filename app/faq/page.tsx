import { FEED_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "How to subscribe to In Prod., how often it publishes, how the voice is made, and where the RSS feed lives.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    q: "What is In Prod.?",
    a: "A weekday British English podcast for people who build and run software in production. Each episode takes one tech story and turns it into a concrete engineering or operational call.",
  },
  {
    q: "How do I subscribe?",
    a: `Add ${FEED_URL} in any podcast app that accepts an RSS URL. Apple Podcasts, Overcast, Pocket Casts, and most others.`,
  },
  {
    q: "How long is an episode?",
    a: "About six minutes, around 900 words. One idea. The recap does not repeat the body.",
  },
  {
    q: "Is the voice a real person?",
    a: "Yes. The host is Alessandro Sappia. The spoken audio is synthesised from his reference recording by a self-hosted clone. Each episode says so in the sign-off.",
  },
  {
    q: "How often does it publish?",
    a: "Weekdays. One episode per run. Re-running a date overwrites, it does not duplicate.",
  },
  {
    q: "Where is the feed hosted?",
    a: "Cloudflare R2 at media.inprod.fm. This website is only the landing and documentation. The canonical subscribe URL is the RSS file.",
  },
];

export default function FaqPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold tracking-[0.14em] text-orange uppercase">FAQ</p>
      <h1 className="mt-2 font-display text-5xl sm:text-6xl">Questions</h1>
      <p className="mt-4 max-w-prose text-muted">
        Direct answers about the show, the feed, and how the episodes are made.
      </p>
      <div className="mt-10 space-y-3">
        {faqs.map((item) => (
          <details key={item.q} className="border border-[#1c1a16] px-4 py-3">
            <summary className="cursor-pointer font-medium">{item.q}</summary>
            <p className="mt-2 text-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </article>
  );
}
