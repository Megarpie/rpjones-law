import Link from "next/link";
import { ContactForm } from "./ContactForm";
import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function ContactBand() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
            Start here
          </p>
          <h2 className="mt-3 font-serif text-4xl text-navy lg:text-5xl">
            Free, confidential consultation.
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Bring what you have—collection letters, paystubs, a foreclosure
            notice. We will tell you what is possible before you spend another
            night worrying about it.
          </p>
          <div className="mt-8 space-y-3 text-navy">
            <a href={site.phoneHref} className="block text-2xl font-serif">
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`} className="block text-navy">
              {site.email}
            </a>
            <p className="text-muted">{site.hours}</p>
          </div>
          <Link
            href="/faq"
            className="mt-8 inline-block text-sm uppercase tracking-[0.16em] text-gold hover:text-navy"
          >
            Read common questions →
          </Link>
        </Reveal>
        <Reveal delay={100}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
