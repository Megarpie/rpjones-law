import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Schedule a free confidential bankruptcy consultation with R. P. Jones Law by phone or video.",
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
            <h2 className="font-serif text-3xl text-navy">
              Phone and video consultations
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              Get the legal guidance you need from the comfort and convenience of
              your home. We offer confidential phone and video consultations,
              making it easy to discuss your situation, understand your options,
              and determine the best path forward.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              Schedule a consultation at a time that works for you.
            </p>
            <a
              href={site.phoneHref}
              className="mt-6 block leading-relaxed text-muted hover:text-navy"
            >
              {site.phone}
            </a>
            <p className="mt-4 text-muted">{site.hours}</p>
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
