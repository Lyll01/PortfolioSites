import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { PROCESS_STEPS, type ProcessStep } from "@/app/data/process";

export function Process() {
  return (
    <section
      id="process"
      className="bg-bone-deep py-24 lg:py-40"
    >
      <Container>
        <SectionHeader
          eyebrow="MÉTHODE · 04 ÉTAPES"
          title={
            <>
              Un process simple,{" "}
              <em className="italic-display">sans surprises</em>.
            </>
          }
          intro="Du premier échange à la mise en ligne, comptez en moyenne 2 à 4 semaines. Vous savez à chaque étape où on en est."
        />

        <ol className="mt-16 lg:mt-24">
          {PROCESS_STEPS.map((step) => (
            <Step key={step.number} step={step} />
          ))}
        </ol>

        <div className="mt-24 flex flex-col items-center gap-6 text-center">
          <p className="text-ink-soft">Prêt à démarrer ?</p>
          <Button href="#contact" variant="primary" size="lg">
            Discuter du projet →
          </Button>
        </div>
      </Container>
    </section>
  );
}

function Step({ step }: { step: ProcessStep }) {
  const num = step.number.toString().padStart(2, "0");
  return (
    <Reveal as="li" className="block">
      <div className="grid grid-cols-1 gap-6 border-t border-ink/15 py-12 lg:grid-cols-[1fr_3fr] lg:gap-12 lg:py-20">
        {/* Big number */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <span
            aria-hidden
            className="font-display text-7xl leading-none text-ash/40 lg:text-[140px] xl:text-[180px]"
            style={{ letterSpacing: "-0.04em" }}
          >
            {num}
          </span>
        </div>

        {/* Content */}
        <div>
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="display text-3xl text-ink lg:text-4xl">
              {step.title}
            </h3>
            <span className="mono-label">{step.duration}</span>
          </div>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {step.description}
          </p>

          <ul className="mt-8 space-y-3">
            {step.deliverables.map((d) => (
              <li key={d} className="flex gap-3 text-sm text-ink-soft">
                <span className="mt-1 inline-block h-px w-4 shrink-0 bg-ash/40" />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
