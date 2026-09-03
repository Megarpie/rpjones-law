import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { results } from "@/lib/site";
import { Testimonials } from "@/components/Testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Results",
  description:
    "Representative bankruptcy results and client testimonials from R. P. Jones Law in Houston.",
};

export default function ResultsPage() {
  return (
    <>
      <PageHero
        eyebrow="Results"
        title="Outcomes that changed the next decade, not just the next month."
        lede="Every matter is different. These summaries are representative. They are not a promise of a similar result."
      />
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-8">
          {results.map((item, i) => (
            <Reveal key={item.outcome} delay={i * 50}>
              <article className="h-full border-l-2 border-gold bg-white p-8">
                <h2 className="font-serif text-2xl text-navy">{item.outcome}</h2>
                <p className="mt-3 leading-relaxed text-muted">{item.detail}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <Testimonials />
    </>
  );
}
