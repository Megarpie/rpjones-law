import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a free confidential bankruptcy consultation with R. P. Jones Law in downtown Houston.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us what is hanging over you. We will tell you what we can do."
        lede="Same-day callbacks are the rule. If a foreclosure sale is already set, say so in the first sentence."
      />
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="font-serif text-3xl text-navy">Houston office</h2>
            <address className="mt-4 not-italic leading-relaxed text-muted">
              {site.addressLines.map((line) => (
                <div key={line}>{line}</div>
              ))}
              <div className="mt-4">{site.hours}</div>
            </address>
            <a
              href={site.phoneHref}
              className="mt-6 block font-serif text-3xl text-navy"
            >
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-gold hover:text-navy"
            >
              {site.email}
            </a>
            <a
              href={site.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block text-sm uppercase tracking-[0.16em] text-navy underline decoration-gold underline-offset-4"
            >
              Map &amp; directions
            </a>
            <div className="mt-10 overflow-hidden border border-navy/10">
              <iframe
                title="Office map"
                className="h-64 w-full grayscale"
                loading="lazy"
                src="https://maps.google.com/maps?q=1000%20Louisiana%20Street%20Houston%20TX&t=&z=15&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
          <div className="bg-white p-6 sm:p-8">
            <h2 className="font-serif text-3xl text-navy">Write to the firm</h2>
            <p className="mt-2 mb-6 text-sm text-muted">
              Do not include highly sensitive account numbers in this form.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
