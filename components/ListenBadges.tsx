import { LISTEN } from "@/lib/site";

export function ListenBadges() {
  return (
    <ul className="mb-4 flex flex-wrap items-center gap-x-3.5 gap-y-3">
      {LISTEN.map((item) => (
        <li key={item.href}>
          <a href={item.href}>
            <img
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className="h-10 w-auto"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}
