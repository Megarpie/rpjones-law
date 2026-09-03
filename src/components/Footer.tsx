import Link from "next/link";
import { Logo } from "./Logo";
import { nav, practiceAreas, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <Logo inverted />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/70">
            Discreet, trial-ready bankruptcy counsel for individuals and
            families who need the calls to stop and a plan that actually works.
          </p>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Explore
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-gold-bright">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy" className="hover:text-gold-bright">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Practice
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {practiceAreas.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/practice-areas/${area.slug}`}
                  className="hover:text-gold-bright"
                >
                  {area.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-gold">
            Southern California office
          </h2>
          <address className="mt-4 not-italic text-sm leading-relaxed text-cream/75">
            {site.addressLines.map((line) => (
              <div key={line}>{line}</div>
            ))}
            <div className="mt-3">{site.hours}</div>
            <a
              href={site.phoneHref}
              className="mt-3 block text-lg text-cream hover:text-gold-bright"
            >
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-gold-bright">
              {site.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-5 text-center text-xs leading-relaxed text-cream/50 lg:px-8">
        © {new Date().getFullYear()} {site.name}. Attorney advertising. This
        site is for general information and does not create an attorney-client
        relationship. Past results do not guarantee a similar outcome.
      </div>
    </footer>
  );
}
