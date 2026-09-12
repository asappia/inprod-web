import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy",
  description: "In Prod. does not run user accounts. Analytics are Plausible. The RSS feed is public.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold tracking-[0.14em] text-orange uppercase">Privacy</p>
      <h1 className="mt-2 font-display text-5xl sm:text-6xl">Privacy</h1>
      <p className="mt-6">This site has no accounts, no comments, and no checkout.</p>
      <p className="mt-4 text-muted">
        Page views are counted with Plausible, which does not use cookies for advertising profiles. The
        podcast feed and MP3s are public files on media.inprod.fm. Optional download counts go through OP3
        when a player hits an enclosure URL.
      </p>
      <p className="mt-4 text-muted">
        Contact: the owner email on the RSS feed is the address to use for privacy questions.
      </p>
    </article>
  );
}
