import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-navy-deep text-cream">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=2400&q=80"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-35 animate-ken"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/40" />
      </div>

      <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-24 lg:px-8">
        <p className="animate-fade-up text-[0.72rem] font-semibold uppercase tracking-[0.38em] text-gold">
          Houston bankruptcy attorneys
        </p>
        <div className="mt-6 max-w-4xl">
          <h1 className="font-serif leading-[0.92] tracking-tight">
            <span className="animate-fade-up delay-1 block text-4xl text-cream/55 sm:text-6xl lg:text-7xl">
              Over
            </span>
            <span className="animate-fade-up delay-2 -mt-1 block text-5xl text-gold-bright sm:text-7xl lg:text-8xl">
              $52 Million
            </span>
            <span className="animate-fade-up delay-3 block text-4xl text-cream sm:text-6xl lg:text-7xl">
              in debt discharged.
            </span>
          </h1>
          <p className="animate-fade-up delay-4 mt-8 max-w-xl text-lg leading-relaxed text-cream/80">
            When creditors will not wait, you need counsel who files fast,
            explains clearly, and protects the home, car, and paycheck you still
            have.
          </p>
          <div className="animate-fade-up delay-4 mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-cream px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-navy transition hover:bg-gold-bright"
            >
              Schedule consultation
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center border border-cream/30 px-8 py-4 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-cream transition hover:border-gold hover:text-gold-bright"
            >
              Call {site.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
