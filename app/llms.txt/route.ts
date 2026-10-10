import { DESCRIPTION, FEED_URL, LISTEN, SITE_URL, TAGLINE, TITLE } from "@/lib/site";

const body = `# ${TITLE}

> ${TAGLINE}

${DESCRIPTION}

The show is produced by an autonomous pipeline. The host is Alessandro Sappia. The spoken voice is his, synthesised from a reference recording.

## Site

- [Home](${SITE_URL}/): landing, latest episode, how to subscribe
- [About](${SITE_URL}/about): host and pipeline
- [FAQ](${SITE_URL}/faq): subscribe, length, voice, schedule
- [Privacy](${SITE_URL}/privacy)
- [Sitemap](${SITE_URL}/sitemap.xml)

## Podcast

- [RSS feed](${FEED_URL}): canonical subscribe URL for podcast apps
- [Cover art](https://media.inprod.fm/cover.jpg)
${LISTEN.map((item) => `- [${item.alt}](${item.href})`).join("\n")}

Subscribe by adding \`${FEED_URL}\` in any podcast app that accepts an RSS URL. The home page also links the show on Apple Podcasts, Spotify, YouTube, and Amazon Music.
`;

export function GET() {
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
