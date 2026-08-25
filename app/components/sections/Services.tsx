import { ShieldCheck, Check, X, ArrowDown, ServerCog } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import {
  SERVICES,
  EXTRA_SERVICES,
  MODIFICATIONS,
  MODIFICATIONS_NOTE,
  RECURRING_PLANS,
  type Service,
  type RecurringPlan,
  type Modification,
  type ExtraService,
} from "@/app/data/services";

const HOSTING_INCLUDED = [
  "Hébergement du site offert",
  "Certificat SSL (HTTPS) offert",
  "Nom de domaine mis en ligne",
  "Site publié et visible sur Google",
];

const RGPD_INCLUDED = [
  "Mentions légales",
  "Politique de confidentialité",
  "Bandeau cookies conforme",
  "Conformité de base RGPD",
];

export function Services() {
  return (
    <section
      id="services"
      className="bg-ink py-24 text-cream lg:py-40"
    >
      <Container>
        <SectionHeader
          eyebrow="LES OFFRES · EN DEUX TEMPS"
          title={
            <>
              D&apos;abord le site, ensuite{" "}
              <em className="italic-display">on le fait vivre</em>.
            </>
          }
          intro="Un site vitrine livré clé en main — hébergement et HTTPS offerts —, puis un abonnement mensuel de référencement pour être trouvé sur Google. Tarifs transparents : la création se paie une fois, sans engagement."
          theme="dark"
        />

        {/* =========================================================== */}
        {/* PARTIE 01 — CRÉATION DU SITE (one-shot)                     */}
        {/* =========================================================== */}
        <div id="offre-creation" className="mt-20 scroll-mt-20 lg:mt-28">
          <Reveal>
            <PartHeader
              step="01"
              kind="Création du site"
              title="Un site fait sur-mesure, livré clé en main."
              note="Paiement unique · livraison de 1 à 4 semaines"
            />
          </Reveal>

          {/* 3 packs de création */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {SERVICES.map((service, i) => (
              <Reveal key={service.number} delay={i * 100} as="article">
                <ServiceCard service={service} />
              </Reveal>
            ))}
          </div>

          {/* Hosting banner — offert avec tous les packs */}
          <Reveal>
            <aside
              className="mt-10 flex flex-col gap-5 border border-vermillion/30 bg-vermillion/5 p-6 lg:mt-12 lg:flex-row lg:items-center lg:gap-8 lg:p-7"
              aria-label="Hébergement offert avec tous les packs de création"
            >
              <div className="flex items-center gap-4 lg:shrink-0">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-vermillion text-vermillion">
                  <ServerCog size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="mono-label !text-vermillion">
                    Offert avec tous les packs
                  </p>
                  <p className="font-display mt-1 text-xl text-cream lg:text-2xl">
                    Hébergement &amp; HTTPS inclus
                  </p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-cream/80 lg:ml-auto lg:justify-end">
                {HOSTING_INCLUDED.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span aria-hidden className="text-vermillion">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>

          {/* RGPD guarantee banner — applies to ALL packs */}
          <Reveal>
            <aside
              className="mt-6 flex flex-col gap-5 border border-cream/15 p-6 lg:flex-row lg:items-center lg:gap-8 lg:p-7"
              aria-label="Inclus dans tous les packs de création"
            >
              <div className="flex items-center gap-4 lg:shrink-0">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-cream/40 text-cream">
                  <ShieldCheck size={22} strokeWidth={1.5} />
                </span>
                <div>
                  <p className="mono-label !text-cream/50">
                    Inclus dans tous les packs
                  </p>
                  <p className="font-display mt-1 text-xl text-cream lg:text-2xl">
                    Pack RGPD classique
                  </p>
                </div>
              </div>
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-cream/80 lg:ml-auto lg:justify-end">
                {RGPD_INCLUDED.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span aria-hidden className="text-cream/40">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </Reveal>

          {/* Extras à la carte */}
          {(EXTRA_SERVICES.length > 0 || MODIFICATIONS.length > 0) && (
            <Reveal>
              <div
                id="offre-refonte"
                className="mt-12 scroll-mt-20 border-t border-cream/15 pt-10 lg:mt-16"
              >
                <p className="mono-label !text-cream/50">
                  AUSSI DISPONIBLES — À LA CARTE
                </p>

                {EXTRA_SERVICES.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
                    {EXTRA_SERVICES.map((s) => (
                      <ExtraCard key={s.label} extra={s} />
                    ))}
                  </div>
                )}

                {MODIFICATIONS.length > 0 && (
                  <div
                    className={
                      EXTRA_SERVICES.length > 0 ? "mt-10 lg:mt-12" : "mt-6"
                    }
                  >
                    <p className="mono-label !text-cream/40">
                      MODIFICATIONS PONCTUELLES — TARIFS À L&apos;ACTE
                    </p>
                    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
                      {MODIFICATIONS.map((mod) => (
                        <ModificationCard key={mod.label} modification={mod} />
                      ))}
                    </div>
                    <p className="mt-6 text-xs italic text-cream/55">
                      {MODIFICATIONS_NOTE}
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          )}
        </div>

        {/* =========================================================== */}
        {/* PONT — fortement recommandé                                 */}
        {/* =========================================================== */}
        <Reveal>
          <div className="mt-20 flex flex-col items-center text-center lg:mt-28">
            <span
              className="inline-flex h-10 w-10 items-center justify-center border border-cream/30 text-cream/60"
              aria-hidden
            >
              <ArrowDown size={18} strokeWidth={1.5} />
            </span>
            <p className="mono-label mt-4 !text-vermillion">
              FORTEMENT RECOMMANDÉ AVEC LA CRÉATION
            </p>
            <p className="font-display mt-3 max-w-xl text-2xl text-cream lg:text-3xl">
              Votre site est en ligne, hébergé et sécurisé.{" "}
              <em className="italic-display">Reste à ce qu&apos;on le trouve sur Google.</em>
            </p>
          </div>
        </Reveal>

        {/* =========================================================== */}
        {/* PARTIE 02 — RÉFÉRENCEMENT MENSUEL (abonnement)              */}
        {/* =========================================================== */}
        <div id="offre-maintenance" className="mt-16 scroll-mt-20 lg:mt-20">
          <Reveal>
            <PartHeader
              step="02"
              kind="Référencement mensuel"
              title="Pour que votre site soit trouvé sur Google et attire des clients."
              note="Abonnement mensuel · engagement 3 mois minimum · résiliable ensuite à tout moment"
            />
          </Reveal>

          <div
            id="offre-referencement"
            className="mt-12 grid scroll-mt-20 grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:max-w-6xl"
          >
            {RECURRING_PLANS.map((plan, i) => (
              <Reveal key={plan.italic} delay={i * 100}>
                <RecurringCard plan={plan} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA bottom */}
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-cream/15 pt-8 sm:flex-row sm:items-center lg:mt-28">
          <p className="text-cream/70">
            Pas sûr de votre besoin ? Un devis gratuit, sans engagement.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-vermillion transition-colors hover:text-cream"
          >
            Demander un devis{" "}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}

function PartHeader({
  step,
  kind,
  title,
  note,
}: {
  step: string;
  kind: string;
  title: string;
  note: string;
}) {
  return (
    <div className="flex flex-col gap-4 border-t border-cream/15 pt-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
      <div className="max-w-2xl">
        <p className="mono-label !text-vermillion">
          PARTIE {step} · {kind.toUpperCase()}
        </p>
        <h3 className="display mt-3 text-3xl text-cream lg:text-4xl">
          {title}
        </h3>
      </div>
      <p className="mono-label !text-cream/50 lg:text-right">{note}</p>
    </div>
  );
}

function ExtraCard({ extra }: { extra: ExtraService }) {
  return (
    <article className="flex h-full flex-col border border-cream/15 p-6 transition-colors hover:border-vermillion/40 lg:p-7">
      <div className="flex items-start justify-between gap-4 border-b border-cream/10 pb-4">
        <h5 className="font-display text-xl text-cream lg:text-2xl">
          {extra.label}
        </h5>
        <div className="shrink-0 text-right">
          {extra.pricePrefix && (
            <p className="mono-label !text-cream/45">{extra.pricePrefix}</p>
          )}
          <p className="font-display text-3xl text-vermillion lg:text-4xl">
            {extra.price}
          </p>
        </div>
      </div>

      {extra.description && (
        <p className="mt-4 text-sm text-cream/75">{extra.description}</p>
      )}

      {extra.note && (
        <p className="mt-auto pt-4 text-xs italic text-cream/50">{extra.note}</p>
      )}
    </article>
  );
}

function ModificationCard({ modification }: { modification: Modification }) {
  return (
    <article className="flex h-full flex-col border border-cream/15 p-5 transition-colors hover:border-cream/30 lg:p-6">
      <div className="flex items-baseline justify-between gap-3 border-b border-cream/10 pb-3">
        <h5 className="font-display text-lg text-cream lg:text-xl">
          {modification.label}
        </h5>
        <span className="font-display shrink-0 text-2xl text-vermillion">
          {modification.price}
        </span>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-cream/75">
        {modification.examples.map((ex) => (
          <li key={ex} className="flex gap-2">
            <span aria-hidden className="text-vermillion">
              ·
            </span>
            <span>{ex}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function RecurringCard({ plan }: { plan: RecurringPlan }) {
  const featured = plan.featured;
  return (
    <article
      className={`relative flex h-full flex-col gap-5 p-7 transition-colors lg:p-8 ${
        featured
          ? "border-2 border-vermillion bg-vermillion/5"
          : "border border-cream/15 hover:border-cream/30"
      }`}
    >
      {featured && (
        <span className="absolute -top-3 left-7 inline-flex items-center bg-vermillion px-3 py-1 font-mono text-xs uppercase tracking-wider text-cream">
          Recommandé
        </span>
      )}

      <header>
        <h4 className="font-display text-2xl text-cream lg:text-3xl">
          {plan.name}{" "}
          <em className="italic-display text-vermillion">{plan.italic}</em>
        </h4>
        <p className="mt-1 mono-label !text-cream/50">{plan.tagline}</p>
        <p className="mt-5 font-display text-4xl text-cream lg:text-5xl">
          {plan.price}
        </p>
        {plan.commitment && (
          <p
            className={`mono-label mt-2 ${
              featured ? "!text-vermillion" : "!text-cream/50"
            }`}
          >
            {plan.commitment}
          </p>
        )}
      </header>

      <ul className="space-y-2 text-sm text-cream/85">
        {plan.included.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Check
              size={16}
              strokeWidth={2}
              className="mt-0.5 shrink-0 text-vermillion"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {plan.excluded && plan.excluded.length > 0 && (
        <ul className="space-y-2 border-t border-cream/10 pt-4 text-sm text-cream/40">
          {plan.excluded.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <X
                size={16}
                strokeWidth={2}
                className="mt-0.5 shrink-0"
                aria-hidden
              />
              <span className="line-through decoration-cream/30">{item}</span>
            </li>
          ))}
        </ul>
      )}

      {plan.note && (
        <p className="border-t border-cream/10 pt-4 text-xs italic text-cream/45">
          {plan.note}
        </p>
      )}

      <footer className="mt-auto border-t border-cream/10 pt-5">
        <p className="mono-label !text-cream/50">Objectif</p>
        <p className="mt-2 text-sm italic text-cream/70">{plan.objective}</p>
      </footer>
    </article>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { featured, custom } = service;

  // Tokens couleur selon la variante (cream-fill standard vs transparent pour sur-mesure)
  const containerStyles = custom
    ? "border border-cream/25 bg-transparent text-cream hover:border-cream/45 hover:bg-cream/5"
    : featured
      ? "bg-cream text-ink ring-2 ring-vermillion"
      : "bg-cream text-ink hover:bg-bone";

  const mutedLabel = custom ? "!text-cream/50" : "!text-ash";
  const descriptionColor = custom ? "text-cream/80" : "text-ink-soft";
  const deliverableColor = custom ? "text-cream/70" : "text-ash";
  const divider = custom ? "border-cream/15" : "border-ink/10";
  const ctaHover = custom ? "hover:text-cream" : "hover:text-vermillion-deep";

  const priceLabel = custom ? "Tarification" : "À partir de";
  const ctaText = custom ? "Évaluer mon besoin" : "Choisir";
  const ctaAria = custom
    ? "Évaluer mon besoin pour un projet sur mesure"
    : `Choisir ${service.title} ${service.italic}`;

  return (
    <div
      className={`group relative flex h-full min-h-[520px] flex-col gap-6 p-8 transition-colors lg:p-10 ${containerStyles}`}
    >
      {featured && (
        <span className="absolute -top-3 left-8 inline-flex items-center bg-vermillion px-3 py-1 font-mono text-xs uppercase tracking-wider text-cream">
          Le + populaire
        </span>
      )}

      {custom && (
        <span className="absolute -top-3 left-8 inline-flex items-center border border-vermillion bg-ink px-3 py-1 font-mono text-xs uppercase tracking-wider text-vermillion">
          Sur devis
        </span>
      )}

      <div className="flex items-baseline justify-between">
        <span className={`mono-label ${custom ? "!text-cream/60" : ""}`}>
          {service.number}
        </span>
        <span className={`mono-label ${mutedLabel}`}>{service.delay}</span>
      </div>

      <div>
        <h3 className="display text-3xl lg:text-4xl">
          {service.title}{" "}
          <em className="italic-display text-vermillion">{service.italic}</em>
        </h3>
        <p className={`mono-label mt-2 ${mutedLabel}`}>{service.tagline}</p>
      </div>

      <p className={`text-base ${descriptionColor}`}>{service.description}</p>

      <ul className={`space-y-2 text-sm ${deliverableColor}`}>
        {service.deliverables.map((d) => (
          <li key={d} className="flex gap-2">
            <span className="text-vermillion">·</span>
            <span>{d}</span>
          </li>
        ))}
      </ul>

      <div
        className={`mt-auto flex items-end justify-between gap-4 border-t ${divider} pt-6`}
      >
        <div>
          <p className={`mono-label ${mutedLabel}`}>{priceLabel}</p>
          <p className="font-display text-3xl lg:text-4xl">{service.price}</p>
        </div>
        <a
          href="#contact"
          aria-label={ctaAria}
          className={`group/link inline-flex items-center gap-1 text-vermillion transition-colors ${ctaHover}`}
        >
          {ctaText}{" "}
          <span className="transition-transform group-hover/link:translate-x-1">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
