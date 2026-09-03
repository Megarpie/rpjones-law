import { FAQList } from "@/components/FAQList";
import { PageHero } from "@/components/PageHero";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Chapter 7, Chapter 13, the automatic stay, and bankruptcy consultations in Southern California.",
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straightforward answers before you file."
        lede="Bring remaining questions to the consultation. Nothing here is legal advice for your specific facts."
      />
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <FAQList />
          <Link
            href="/contact"
            className="mt-12 inline-flex bg-navy px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream"
          >
            Ask about your case
          </Link>
        </div>
      </section>
    </>
  );
}
