"use client";

import { FEED_URL } from "@/lib/site";
import { useState } from "react";

export function CopyFeed() {
  const [label, setLabel] = useState("Copy feed");

  async function onCopy() {
    try {
      await navigator.clipboard.writeText(FEED_URL);
      setLabel("Copied");
      window.setTimeout(() => setLabel("Copy feed"), 1600);
    } catch {
      const input = document.getElementById("feed-url") as HTMLInputElement | null;
      input?.select();
    }
  }

  return (
    <div className="flex w-full flex-col gap-2 sm:flex-row sm:items-stretch">
      <input
        id="feed-url"
        readOnly
        value={FEED_URL}
        className="min-w-0 flex-1 border border-[#2a2a2a] bg-[#0c0c0c] px-3 py-3 text-base text-cream"
      />
      <button
        type="button"
        onClick={onCopy}
        className="shrink-0 bg-orange px-4 py-3 text-base font-semibold text-ink"
      >
        {label}
      </button>
    </div>
  );
}
