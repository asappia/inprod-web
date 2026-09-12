import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "In Prod. is hosted by Alessandro Sappia and produced by an autonomous weekday pipeline: one story, a cloned voice, a self-hosted RSS feed.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold tracking-[0.14em] text-orange uppercase">About</p>
      <h1 className="mt-2 font-display text-5xl sm:text-6xl">The host and the pipeline</h1>
      <p className="mt-6 text-lg">
        Alessandro Sappia hosts In Prod. The spoken voice is his, cloned from a short reference recording
        and synthesised each weekday. The show is not a newsletter with a microphone bolted on. It is a
        production system that has to ship.
      </p>
      <p className="mt-4 text-muted">
        Every weekday the pipeline selects one decision-forcing tech story, writes a ~900 word script,
        speaks it, assembles the episode with ffmpeg, and publishes to a self-hosted RSS feed on Cloudflare
        R2. Listeners subscribe at{" "}
        <a href="https://media.inprod.fm/podcast.xml" className="text-orange">
          media.inprod.fm/podcast.xml
        </a>
        .
      </p>
      <p className="mt-4 text-muted">
        No companion email list. No paid podcast host. The site exists so a human can find the feed, the
        latest episode, and how the thing is made.
      </p>
      <p className="mt-8">
        <Link href="/faq" className="text-orange">
          Questions
        </Link>
      </p>
    </article>
  );
}
