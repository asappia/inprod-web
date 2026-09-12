import Link from "next/link";

const links = [
  { href: "/#listen", label: "Listen" },
  { href: "/#latest", label: "Latest" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-[#1c1a16] bg-ink/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="font-display text-lg tracking-wide text-cream">
          IN PROD.
        </Link>
        <nav className="flex flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-cream hover:text-orange">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
