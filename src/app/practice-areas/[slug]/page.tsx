import { PageHero } from "@/components/PageHero";
import { practiceAreas } from "@/lib/site";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return { title: area.title, description: area.summary };
}

export default async function PracticeAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  return (
    <>
      <PageHero eyebrow={area.eyebrow} title={area.title} lede={area.summary} />
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <Image
            src={area.image}
            alt=""
            width={1200}
            height={825}
            className="aspect-[16/11] w-full object-cover"
          />
          <div>
            <h2 className="font-serif text-3xl text-navy">
              What this representation includes
            </h2>
            <ul className="mt-6 space-y-4">
              {area.points.map((point) => (
                <li key={point} className="flex gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-gold" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-8 leading-relaxed text-muted">
              We prepare the petition, means-test analysis, exemption schedule,
              and creditor matrix; appear at the meeting of creditors; and stay
              on the matter until the discharge—or confirmed plan—is entered.
              You will know the likely outcome even before we file.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="bg-navy px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-cream"
              >
                Discuss this option
              </Link>
              <Link
                href="/practice-areas"
                className="border border-navy px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-navy"
              >
                All practice areas
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
