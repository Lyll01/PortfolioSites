import Image from "next/image";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { CASES, type Case, type CaseResult } from "@/app/data/cases";

export function Cases() {
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

        <div className="mt-20 flex flex-col gap-32 lg:mt-32 lg:gap-48">
          {CASES.map((c, i) => (
            <CaseRow key={c.number} case={c} reverse={i % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
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

        <h3 className="display mt-4 text-3xl text-ink lg:text-5xl">
          {c.title}{" "}
          {c.italic && (
            <em className="italic-display">{c.italic}</em>
          )}
        </h3>

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
