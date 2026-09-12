import { AUTHOR, COVER_URL, DESCRIPTION, FEED_URL, SITE_URL, TITLE } from "./site";

export function seoGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: TITLE,
        url: `${SITE_URL}/`,
        description: DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#person` },
        creator: { "@id": `${SITE_URL}/#person` },
        inLanguage: "en-GB",
      },
      {
        "@type": "Brand",
        "@id": `${SITE_URL}/#brand`,
        name: TITLE,
        url: `${SITE_URL}/`,
        logo: COVER_URL,
      },
      {
        "@type": "PodcastSeries",
        "@id": `${SITE_URL}/#podcast`,
        name: TITLE,
        alternateName: "In Prod",
        description: DESCRIPTION,
        url: `${SITE_URL}/`,
        webFeed: FEED_URL,
        image: COVER_URL,
        inLanguage: "en-GB",
        author: { "@id": `${SITE_URL}/#person` },
        creator: { "@id": `${SITE_URL}/#person` },
        brand: { "@id": `${SITE_URL}/#brand` },
      },
      {
        "@type": "Person",
        "@id": `${SITE_URL}/#person`,
        name: AUTHOR,
        jobTitle: "Host",
        description: `${AUTHOR} is the host of In Prod., a weekday podcast about the calls you actually make when shipping software.`,
        url: `${SITE_URL}/about`,
        sameAs: ["https://www.linkedin.com/in/asappia"],
        knowsAbout: ["software production", "engineering operations", TITLE],
      },
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: `${TITLE}: weekday podcast for decisions in production`,
        description: DESCRIPTION,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#podcast` },
        mainEntity: { "@id": `${SITE_URL}/#podcast` },
        inLanguage: "en-GB",
      },
    ],
  };
}
