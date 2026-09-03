import Image from "next/image";
import Link from "next/link";
import { practiceAreas } from "@/lib/site";
import { Reveal } from "./Reveal";

export function PracticeGrid() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
            How we help
          </p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl text-navy lg:text-5xl">
            Focused bankruptcy practice. No general-practice distractions.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {practiceAreas.map((area, i) => (
            <Reveal key={area.slug} delay={i * 70}>
              <Link
                href={`/practice-areas/${area.slug}`}
                className="group relative flex min-h-[280px] overflow-hidden"
              >
                <Image
                  src={area.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-deep/70 transition group-hover:bg-navy-deep/60" />
                <div className="relative flex w-full flex-col justify-end p-8 text-cream">
                  <p className="text-[0.68rem] uppercase tracking-[0.28em] text-gold">
                    {area.eyebrow}
                  </p>
                  <h3 className="mt-2 font-serif text-3xl">{area.title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/80">
                    {area.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
