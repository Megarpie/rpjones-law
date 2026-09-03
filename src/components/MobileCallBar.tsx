import { site } from "@/lib/site";
import Link from "next/link";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-navy/10 bg-white/95 shadow-[0_-8px_30px_rgba(11,28,44,0.12)] backdrop-blur md:hidden">
      <a
        href={site.phoneHref}
        className="bg-navy py-3.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-cream"
      >
        Call now
      </a>
      <Link
        href="/contact"
        className="bg-gold py-3.5 text-center text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-navy"
      >
        Free consult
      </Link>
    </div>
  );
}
