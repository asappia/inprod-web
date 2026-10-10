import { CopyFeed } from "@/components/CopyFeed";
import { ListenBadges } from "@/components/ListenBadges";
import { formatDuration, formatPubDate, getLatestEpisode } from "@/lib/feed";
import { FEED_URL } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 300;

const steps = [
  {
    n: "01",
    title: "One story",
    body: "The pipeline picks a single decision-forcing tech story. Not a roundup. Not a vibe check.",
  },
  {
    n: "02",
    title: "One call",
    body: "The script is about six minutes and ~900 words. Each line advances. The recap does not replay the body.",
  },
  {
    n: "03",
    title: "A cloned voice",
    body: "Spoken British English, cloned from a reference recording of Alessandro, then assembled and published the same morning.",
  },
];

export default async function Home() {
  const latest = await getLatestEpisode();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
      <section id="listen" className="grid items-center gap-8 py-10 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-12 sm:py-16">
        <div className="mx-auto w-fit max-w-full pb-3 pr-3">
          <Image
            src="/cover.jpg"
            alt="In Prod. show artwork: three pale faces and one orange face on black."
            width={800}
            height={800}
            priority
            className="w-[min(100%,240px)] shadow-[8px_8px_0_#fe591f] sm:w-full sm:max-w-none sm:shadow-[12px_12px_0_#fe591f]"
          />
        </div>
        <div>
          <h1 className="font-display text-[clamp(3rem,16vw,6.5rem)] leading-[0.82] tracking-wide">
            IN
            <br />
            PROD.
          </h1>
          <p className="mt-4 max-w-md text-lg font-medium">
            One (tech) story a day, and the call I’d actually make.
          </p>
          <div className="mt-6 max-w-2xl">
            <ListenBadges />
            <CopyFeed />
            <p className="mt-2 text-sm text-muted">
              Or paste that URL into any app that takes an RSS feed.
            </p>
          </div>
        </div>
      </section>

      <section id="latest" className="border-t border-[#1c1a16] py-10 sm:py-14">
        <p className="text-xs font-semibold tracking-[0.14em] text-orange uppercase">Latest episode</p>
        {latest ? (
          <>
            <h2 className="mt-2 text-2xl font-medium sm:text-3xl">{latest.title}</h2>
            <p className="mt-1 text-sm text-muted">
              {[formatPubDate(latest.pubDate), formatDuration(latest.durationSec)].filter(Boolean).join(" · ")}
            </p>
            <p className="mt-3 max-w-prose">{latest.description}</p>
            {latest.enclosure ? (
              <audio className="mt-4 w-full max-w-xl" controls preload="none" src={latest.enclosure} />
            ) : null}
          </>
        ) : (
          <>
            <h2 className="mt-2 text-2xl font-medium">Open the RSS feed in your app</h2>
            <p className="mt-3">
              <a href={FEED_URL} className="text-orange">
                {FEED_URL}
              </a>
            </p>
          </>
        )}
      </section>

      <section id="how" className="border-t border-[#1c1a16] py-10 sm:py-14">
        <p className="text-xs font-semibold tracking-[0.14em] text-orange uppercase">How it works</p>
        <h2 className="mt-2 text-2xl sm:text-3xl">Weekdays. Six minutes. One decision.</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <article key={step.n}>
              <p className="font-display text-3xl text-orange">{step.n}</p>
              <h3 className="mt-2 text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-muted">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="border-t border-[#1c1a16] py-10 sm:py-14">
        <p className="text-xs font-semibold tracking-[0.14em] text-orange uppercase">The show</p>
        <p className="mt-3 max-w-prose text-lg">
          A weekday podcast for people who build and run software in production. Each episode turns one
          tech-industry story into a concrete call: ship vs rollback, architecture, security, reliability,
          cost, on-call, migrations, or AI in prod.
        </p>
        <p className="mt-4 max-w-prose text-muted">
          Hosted by Alessandro Sappia. Produced by an autonomous pipeline. The voice is his, synthesised
          from a reference recording.
        </p>
        <p className="mt-6">
          <Link href="/about" className="text-orange">
            About the host and the pipeline
          </Link>
        </p>
      </section>
    </div>
  );
}
