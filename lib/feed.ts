import { FEED_URL } from "./site";

export type LatestEpisode = {
  title: string;
  description: string;
  pubDate: string;
  enclosure: string;
  durationSec: number | null;
  feed: string;
};

function inner(xml: string, tag: string): string {
  const match = xml.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, "i"));
  if (!match) {
    return "";
  }
  return match[1].replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();
}

export function parseLatestEpisode(xml: string): LatestEpisode | null {
  const item = xml.match(/<item>([\s\S]*?)<\/item>/i);
  if (!item) {
    return null;
  }
  const block = item[1];
  const enclosure = (block.match(/<enclosure[^>]*\burl="([^"]+)"/i) || [])[1] || "";
  const duration = inner(block, "itunes:duration");
  return {
    title: inner(block, "title"),
    description: inner(block, "description").split(/\n+/)[0].trim(),
    pubDate: inner(block, "pubDate"),
    enclosure,
    durationSec: duration ? Number(duration) : null,
    feed: FEED_URL,
  };
}

export async function getLatestEpisode(): Promise<LatestEpisode | null> {
  try {
    const response = await fetch(FEED_URL, {
      next: { revalidate: 300 },
      headers: { "User-Agent": "inprod-web" },
    });
    if (!response.ok) {
      return null;
    }
    return parseLatestEpisode(await response.text());
  } catch {
    return null;
  }
}

export function formatPubDate(rfc822: string): string {
  const date = new Date(rfc822);
  if (Number.isNaN(date.getTime())) {
    return "";
  }
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${date.getUTCDate()} ${months[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

export function formatDuration(seconds: number | null): string {
  if (!seconds) {
    return "";
  }
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return rest ? `${minutes} min ${String(rest).padStart(2, "0")}s` : `${minutes} min`;
}
