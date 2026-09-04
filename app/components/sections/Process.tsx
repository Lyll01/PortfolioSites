import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { PROCESS_STEPS, type ProcessStep } from "@/app/data/process";

const STEP_COUNT = PROCESS_STEPS.length.toString().padStart(2, "0");

/**
 * Aperçu de la méthode sur la home : les étapes, sans le détail des livrables.
 * Le déroulé complet est sur /contact ("ce qui se passe après votre message").
 */
export function Process() {
  return (
    <section id="process" className="scroll-mt-20 bg-bone-deep py-24 lg:py-40">
      <Container>
        <SectionHeader
          eyebrow={`MÉTHODE · ${STEP_COUNT} ÉTAPES`}
          title={
            <>
              Un process simple,{" "}
              <em className="italic-display">sans surprises</em>.
            </>
          }
          intro="Du premier échange à la mise en ligne, comptez en moyenne 2 à 4 semaines. Vous savez à chaque étape où on en est."
        />

        <ol className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.number} as="li" delay={i * 80} className="block">
              <div className="flex h-full flex-col gap-4 border border-ink/15 p-7 transition-colors hover:border-ink/35 lg:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span
                    aria-hidden
                    className="font-display text-4xl leading-none text-ash/40"
                  >
                    {step.number.toString().padStart(2, "0")}
                  </span>
                  {step.duration && (
                    <span className="mono-label text-right">
                      {step.duration}
                    </span>
                  )}
                </div>
                <h3 className="display text-2xl text-ink">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-soft">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-start justify-between gap-6 border-t border-ink/15 pt-8 sm:flex-row sm:items-center">
          <Link
            href="/contact#process"
            className="group inline-flex items-center gap-2 text-vermillion transition-colors hover:text-vermillion-deep"
          >
            Voir le déroulé détaillé, étape par étape
            <ArrowRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Button href="#contact" variant="primary" size="lg">
            Discuter du projet →
          </Button>
        </div>
      </Container>
    </section>
  );
}

/**
 * Déroulé complet avec les livrables de chaque étape — page /contact.
 */
export function ProcessDetailed() {
  return (
    <section id="process" className="scroll-mt-20 bg-bone-deep py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow={`MÉTHODE · ${STEP_COUNT} ÉTAPES`}
          title={
            <>
              Ce qui se passe{" "}
              <em className="italic-display">après votre message</em>.
            </>
          }
          intro="Du premier échange à la mise en ligne, comptez en moyenne 2 à 4 semaines. Vous savez à chaque étape où on en est, et ce que vous recevez."
        />

        <ol className="mt-16 lg:mt-24">
          {PROCESS_STEPS.map((step) => (
            <Step key={step.number} step={step} />
          ))}
        </ol>
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
