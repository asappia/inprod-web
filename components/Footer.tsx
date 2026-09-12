import { FEED_URL, SITE_URL } from "@/lib/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[#1c1a16] px-4 py-8 text-sm text-muted sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:justify-between">
        <p>© 2026 Alessandro Sappia</p>
        <p className="flex flex-wrap gap-x-3 gap-y-1">
          <Link href="/about" className="hover:text-orange">
            About
          </Link>
          <Link href="/faq" className="hover:text-orange">
            FAQ
          </Link>
          <Link href="/privacy" className="hover:text-orange">
            Privacy
          </Link>
          <a href={`${SITE_URL}/llms.txt`} className="hover:text-orange">
            llms.txt
          </a>
          <a href={FEED_URL} className="hover:text-orange">
            RSS
          </a>
        </p>
      </div>
    </footer>
  );
}
