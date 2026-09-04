import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { CASES, type Case, type CaseResult } from "@/app/data/cases";

/**
 * Études de cas détaillées — page /realisations.
 * La home affiche <CasesTeaser /> (aperçu compact).
 */
export function Cases({ showHeader = true }: { showHeader?: boolean }) {
  return (
    <section id="realisations" className="bg-bone py-24 lg:py-32">
      <Container>
        {showHeader && (
          <SectionHeader
            eyebrow={`RÉALISATIONS · ${CASES.length.toString().padStart(2, "0")}`}
            title={
              <>
                Des projets, des chiffres,{" "}
                <em className="italic-display">des humains</em>.
              </>
            }
          />
        )}

        <div
          className={`flex flex-col gap-32 lg:gap-48 ${
            showHeader ? "mt-20 lg:mt-32" : ""
          }`}
        >
          {CASES.map((c, i) => (
            <CaseRow key={c.number} case={c} reverse={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}

/**
 * Aperçu des réalisations pour la home : une carte par projet,
 * le résultat principal, et un lien vers la page complète.
 */
export function CasesTeaser() {
  return (
    <section id="realisations" className="bg-bone py-24 lg:py-40">
      <Container>
        <SectionHeader
          eyebrow={`RÉALISATIONS · ${CASES.length.toString().padStart(2, "0")}`}
          title={
            <>
              Des projets, des chiffres,{" "}
              <em className="italic-display">des humains</em>.
            </>
          }
        />

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mt-20 lg:gap-12">
          {CASES.map((c, i) => (
            <Reveal key={c.number} delay={i * 120} as="article">
              <CaseTeaserCard case={c} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-ink/15 pt-8 sm:flex-row sm:items-center">
            <p className="text-ink-soft">
              Le détail de chaque projet : contexte, chiffres avant/après et
              services mobilisés.
            </p>
            <Link
              href="/realisations"
              className="group inline-flex shrink-0 items-center gap-2 text-vermillion transition-colors hover:text-vermillion-deep"
            >
              Voir toutes les réalisations
              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function CaseTeaserCard({ case: c }: { case: Case }) {
  const headline = c.results[0];

  return (
    <Link href="/realisations" className="group block h-full">
      <div className="relative aspect-[5/4] overflow-hidden bg-cream">
        <Image
          src={c.image.src}
          alt={c.image.alt}
          width={c.image.width}
          height={c.image.height}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <span className="mono-label mt-6 block">
        {c.number} · {c.sector} · {c.year}
      </span>

      <h3 className="display mt-3 text-2xl text-ink transition-colors group-hover:text-vermillion lg:text-3xl">
        {c.title} {c.italic && <em className="italic-display">{c.italic}</em>}
      </h3>

      {headline && (
        <p className="mt-4 flex flex-wrap items-baseline gap-2 text-sm text-ash">
          <span className="mono-label !text-ash">{headline.label}</span>
          <span className="line-through decoration-1">{headline.before}</span>
          <ArrowRight
            size={14}
            strokeWidth={1.5}
            className="text-vermillion"
            aria-hidden
          />
          <span className="font-display text-lg text-ink">
            {headline.after}
          </span>
        </p>
      )}
    </Link>
  );
}

function CaseRow({ case: c, reverse }: { case: Case; reverse: boolean }) {
  return (
    <article
      className={`grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16`}
    >
      {/* Image */}
      <Reveal
        className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
      >
        <div className="group relative aspect-[5/4] overflow-hidden bg-cream">
          <Image
            src={c.image.src}
            alt={c.image.alt}
            width={c.image.width}
            height={c.image.height}
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>
      </Reveal>

      {/* Info */}
      <Reveal
        delay={150}
        className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}
      >
        <span className="mono-label">
          {c.number} · {c.sector} · {c.year}
        </span>

        <h2 className="display mt-4 text-3xl text-ink lg:text-5xl">
          {c.title}{" "}
          {c.italic && (
            <em className="italic-display">{c.italic}</em>
          )}
        </h2>

        <p className="mt-6 text-base leading-relaxed text-ink-soft">
          {c.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {c.services.map((s) => (
            <li
              key={s}
              className="border border-ink/20 px-3 py-1 text-xs text-ink-soft"
            >
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-10 space-y-6 border-t border-ink/15 pt-8">
          {c.results.map((r) => (
            <ResultRow key={r.label} result={r} />
          ))}
        </div>

        {c.link && (
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Voir le site live de ${c.client} (nouvel onglet)`}
            className="group mt-8 inline-flex items-center gap-2 text-vermillion transition-colors hover:text-vermillion-deep"
          >
            Voir le site live{" "}
            <ExternalLink
              size={16}
              strokeWidth={1.5}
              className="transition-transform group-hover:-translate-y-px group-hover:translate-x-px"
            />
          </a>
        )}
      </Reveal>
    </article>
  );
}

function ResultRow({ result }: { result: CaseResult }) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
      <div>
        <p className="mono-label !text-ash">{result.label} · avant</p>
        <p className="font-display mt-2 text-xl text-ash line-through decoration-1 lg:text-2xl">
          {result.before}
        </p>
      </div>
      <ArrowRight
        size={20}
        strokeWidth={1.5}
        className="text-vermillion"
        aria-hidden
      />
      <div>
        <p className="mono-label !text-vermillion">après</p>
        <p className="font-display mt-2 text-2xl text-ink lg:text-3xl">
          {result.after}
        </p>
      </div>
    </div>
  );
}
