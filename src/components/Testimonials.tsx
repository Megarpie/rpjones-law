import { testimonials } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
            Client voices
          </p>
          <h2 className="mt-3 font-serif text-4xl text-navy lg:text-5xl">
            Relief, in their words.
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 70}>
              <blockquote className="h-full border border-navy/10 bg-white p-8">
                <div className="mb-4 text-gold" aria-hidden="true">
                  ★★★★★
                </div>
                <p className="font-serif text-xl leading-relaxed text-navy">
                  “{t.quote}”
                </p>
                <footer className="mt-6 text-sm">
                  <cite className="not-italic font-semibold text-navy">
                    {t.name}
                  </cite>
                  <span className="mt-0.5 block text-muted">{t.role}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
