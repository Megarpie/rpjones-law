import { AboutPreview } from "@/components/AboutPreview";
import { ContactBand } from "@/components/ContactBand";
import { FAQList } from "@/components/FAQList";
import { Hero } from "@/components/Hero";
import { PracticeGrid } from "@/components/PracticeGrid";
import { Process } from "@/components/Process";
import { Reveal } from "@/components/Reveal";
import { StatsBar } from "@/components/StatsBar";
import { Testimonials } from "@/components/Testimonials";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Reveal>
            <div className="grid gap-8 border-y border-navy/10 py-10 md:grid-cols-3">
              {[
                {
                  title: "Stop the chaos today",
                  body: "The automatic stay can halt lawsuits, garnishments, repossessions, and most foreclosure activity the day we file.",
                },
                {
                  title: "Keep what Texas protects",
                  body: "Homestead, vehicles, retirement, and household goods are planned around—not treated as an afterthought.",
                },
                {
                  title: "Counsel, not a mill",
                  body: "You work with R. P. Jones. Strategy is explained in writing. Emergency filings are available when a sale is pending.",
                },
              ].map((item) => (
                <div key={item.title}>
                  <h2 className="font-serif text-2xl text-navy">{item.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
      <PracticeGrid />
      <AboutPreview />
      <Process />
      <Testimonials />
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Reveal>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
              Questions
            </p>
            <h2 className="mt-3 font-serif text-4xl text-navy">
              What clients ask first.
            </h2>
          </Reveal>
          <div className="mt-10">
            <FAQList limit={4} />
          </div>
          <Link
            href="/faq"
            className="mt-8 inline-block text-sm uppercase tracking-[0.16em] text-gold hover:text-navy"
          >
            All frequently asked questions →
          </Link>
        </div>
      </section>
      <ContactBand />
    </>
  );
}
