import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet R. P. Jones, Houston bankruptcy attorney focused on Chapter 7, Chapter 13, and emergency debt relief.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The firm"
        title="Built for people who have already tried everything else."
        lede="R. P. Jones Law is a Houston boutique devoted to consumer bankruptcy. We do not dabble. We file, we appear, and we stay until the discharge is entered."
      />
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-12 lg:px-8">
          <Reveal className="lg:col-span-5">
            <Image
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80"
              alt="Client consultation at a law office"
              width={900}
              height={1125}
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal className="lg:col-span-7" delay={80}>
            <h2 className="font-serif text-4xl text-navy">R. P. Jones</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold">
              Principal attorney · Southern District of Texas
            </p>
            <div className="mt-6 space-y-4 leading-relaxed text-muted">
              <p>
                After two decades in Texas courtrooms, R. P. Jones opened this
                firm for a simple reason: families in financial distress were
                being processed, not represented. Collection mills move fast.
                Your lawyer should move faster—and still know your kids’ names.
              </p>
              <p>
                Practice is limited to bankruptcy and the collection problems
                that surround it: foreclosure notices, wage levies, frozen
                accounts, and lawsuits on old credit cards. That focus is
                deliberate. Depth beats a dozen practice areas on a homepage.
              </p>
              <p>
                Consultations are held in the downtown Houston office or by
                secure video. Emergency filings can be prepared the same day
                when a foreclosure sale or garnishment is already in motion.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {[
                {
                  h: "Admissions",
                  p: "State Bar of Texas; U.S. District Court, Southern District of Texas; U.S. Bankruptcy Court.",
                },
                {
                  h: "Education",
                  p: "J.D., University of Houston Law Center. B.A., Texas A&M University.",
                },
                {
                  h: "Approach",
                  p: "File only when it helps. Quote fees in writing. Return calls the same day.",
                },
                {
                  h: "Community",
                  p: "Pro bono discharge clinics and veteran financial-counseling partnerships in Harris County.",
                },
              ].map((item) => (
                <div key={item.h} className="border-t border-navy/15 pt-4">
                  <h3 className="font-serif text-xl text-navy">{item.h}</h3>
                  <p className="mt-2 text-sm text-muted">{item.p}</p>
                </div>
              ))}
            </div>
            <Link
              href="/contact"
              className="mt-10 inline-flex bg-navy px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-cream hover:bg-navy-mid"
            >
              Speak with counsel
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
