import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function AboutPreview() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-full w-full border border-gold/50 lg:block" />
            <Image
              src="/images/ryan-p-jones.jpg"
              alt="Ryan Jones, principal attorney"
              width={626}
              height={1024}
              className="relative aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-navy/95 p-5 text-cream">
              <p className="font-serif text-2xl">Ryan Jones, Esq.</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-gold">
                Principal attorney
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
            A lawyer who still takes the call
          </p>
          <h2 className="mt-3 font-serif text-4xl text-navy lg:text-5xl">
            Protecting Southern California families from financial collapse.
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              Bankruptcy is not a failure. It is a federal legal right written
              for people who have already tried everything else. Ryan Jones
              built this firm around that truth, and around the belief, that you
              should never have to explain your story to different staff every
              week.
            </p>
            <p>
              Every petition is prepared by counsel, filed in the Bankruptcy
              District of California, and argued with the same care we would want
              for our own families. If Chapter 7 or 13 is not right,
              you will hear that in the first meeting.
            </p>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-navy sm:grid-cols-2">
            {[
              "Client focused consumer bankruptcy practice",
              "Same day emergency filings when a sale is pending",
              "Plain English fee agreements, always in writing",
            ].map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-gold" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/about"
            className="mt-10 inline-flex border border-navy px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-navy hover:text-cream"
          >
            Meet the attorney
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
