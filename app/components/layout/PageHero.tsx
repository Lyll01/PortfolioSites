import { ReactNode } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  /** Éléments de réassurance affichés sous l'intro (prix, délai, garanties…). */
  meta?: string[];
  children?: ReactNode;
  theme?: "light" | "dark";
};

/**
 * En-tête des pages internes (/tarifs, /realisations, /contact).
 * Porte le <h1> de la page — SectionHeader, lui, rend un <h2>.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  meta,
  children,
  theme = "light",
}: Props) {
  const dark = theme === "dark";

  return (
    <section
      id="top"
      className={`pt-32 pb-16 lg:pt-40 lg:pb-24 ${
        dark ? "bg-ink text-cream" : "bg-bone"
      }`}
    >
      <Container>
        <Link
          href="/"
          className={`mono-label inline-flex items-center gap-2 transition-colors hover:text-vermillion ${
            dark ? "!text-cream/50" : "text-ash"
          }`}
        >
          ← Retour à l&apos;accueil
        </Link>

        <div className="mt-10 max-w-3xl">
          <Reveal>
            <Eyebrow className={dark ? "!text-cream/60" : ""}>{eyebrow}</Eyebrow>
          </Reveal>
          <Reveal delay={80}>
            <h1
              className={`display mt-4 text-4xl sm:text-5xl lg:text-6xl ${
                dark ? "text-cream" : "text-ink"
              }`}
            >
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={160}>
              <p
                className={`mt-6 text-lg leading-relaxed ${
                  dark ? "text-cream/70" : "text-ink-soft"
                }`}
              >
                {intro}
              </p>
            </Reveal>
          )}
        </div>

        {meta && meta.length > 0 && (
          <Reveal delay={240}>
            <ul
              className={`mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t pt-6 text-sm ${
                dark
                  ? "border-cream/15 text-cream/70"
                  : "border-ink/15 text-ink-soft"
              }`}
            >
              {meta.map((m) => (
                <li key={m} className="flex items-center gap-2">
                  <span aria-hidden className="text-vermillion">
                    ·
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {children}
      </Container>
    </section>
  );
}
