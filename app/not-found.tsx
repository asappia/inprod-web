import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24">
      <p>Nothing here.</p>
      <p className="mt-4">
        <Link href="/" className="text-orange">
          Back to In Prod.
        </Link>
      </p>
    </div>
  );
}
