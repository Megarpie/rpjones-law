import { processSteps } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="bg-navy py-20 text-cream lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Reveal>
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-gold">
            The path forward
          </p>
          <h2 className="mt-3 max-w-xl font-serif text-4xl lg:text-5xl">
            Four steps from chaos to a discharge.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 90}>
              <p className="font-serif text-5xl text-gold/40">{step.step}</p>
              <h3 className="mt-4 font-serif text-2xl">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/70">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
