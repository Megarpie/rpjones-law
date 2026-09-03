import { stats } from "@/lib/site";
import { Reveal } from "./Reveal";

export function StatsBar() {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <p className="font-serif text-4xl text-gold-bright lg:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.14em] text-cream/70">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
