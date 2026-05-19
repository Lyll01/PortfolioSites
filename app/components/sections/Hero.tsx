import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Reveal } from "../ui/Reveal";
import { Eyebrow } from "../ui/Eyebrow";
import { ValueProps } from "../ui/ValueProps";
import { Wordmark } from "../ui/Wordmark";
import { STUDIO } from "@/app/data/navigation";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[88vh] flex-col justify-between pt-32 pb-12 lg:min-h-[92vh] lg:pt-40 lg:pb-16"
    >
      <Container className="flex-1">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main content */}
          <div className="lg:col-span-9">
            <Reveal>
              <div className="flex items-center gap-3">
                <Wordmark size="sm" />
                <span className="h-px w-12 bg-ink/20" aria-hidden />
                <Eyebrow className="!mt-0">STUDIO INDÉPENDANT · FR</Eyebrow>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="display mt-8 text-5xl text-ink sm:text-6xl lg:text-[88px] xl:text-[104px]">
                Sites web{" "}
                <em className="italic-display text-ink/95">sur-mesure</em> et
                référencement qui amène{" "}
                <span className="relative inline-block">
                  vraiment
                  <span
                    aria-hidden
                    className="absolute -bottom-1 left-0 right-0 h-[3px] bg-vermillion"
                  />
                </span>{" "}
                des clients.
              </h1>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-10 max-w-[560px] text-lg leading-relaxed text-ink-soft md:text-xl">
                Conception, design, développement et SEO pour artisans,
                indépendants et PME qui veulent un site dont ils sont fiers — et
                qui rapporte.
              </p>
            </Reveal>

            <Reveal delay={440}>
              <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <Button href="#contact" variant="primary" size="lg">
                  Discuter du projet →
                </Button>
                <Button href="#realisations" variant="ghost" size="lg">
                  Voir les réalisations
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Meta column */}
          <aside className="lg:col-span-3 lg:pt-6">
            <Reveal delay={560}>
              <dl className="flex flex-col gap-8 border-t border-ink/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
                <div>
                  <dt className="mono-label">Basé à</dt>
                  <dd className="mt-2 text-sm text-ink">
                    {STUDIO.city}, {STUDIO.region}
                  </dd>
                </div>
                <div>
                  <dt className="mono-label">À distance</dt>
                  <dd className="mt-2 text-sm text-ink">Toute la France</dd>
                </div>
              </dl>
            </Reveal>
          </aside>
        </div>
      </Container>

      {/* 4 value props — visible above the fold */}
      <Reveal delay={680}>
        <Container className="mt-12 lg:mt-16">
          <ValueProps />
        </Container>
      </Reveal>
    </section>
  );
}
