import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  lede,
  showCta = true,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  showCta?: boolean;
}) {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <p className="animate-fade-up text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
          {eyebrow}
        </p>
        <h1 className="animate-fade-up delay-1 mt-4 max-w-4xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="animate-fade-up delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-cream/75">
            {lede}
          </p>
        ) : null}
        {showCta ? (
          <Link
            href="/contact"
            className="animate-fade-up delay-3 mt-8 inline-flex bg-gold px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-gold-bright"
          >
            Request a consultation
          </Link>
        ) : null}
      </div>
    </section>
  );
}
