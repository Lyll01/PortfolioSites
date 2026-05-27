import { ReactNode } from "react";
import Link from "next/link";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";

type Props = {
  eyebrow: string;
  title: ReactNode;
  updatedAt: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, updatedAt, children }: Props) {
  return (
    <section className="bg-bone py-24 lg:py-32">
      <Container>
        <div className="max-w-3xl">
          <Link
            href="/"
            className="mono-label inline-flex items-center gap-2 text-ash transition-colors hover:text-vermillion"
          >
            ← Retour à l&apos;accueil
          </Link>

          <header className="mt-10 border-b border-ink/15 pb-10">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="display mt-6 text-4xl text-ink sm:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-sm text-ash">
              Dernière mise à jour : {updatedAt}
            </p>
          </header>

          <div className="legal-prose mt-12 space-y-10 text-ink-soft">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function LegalBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-3">
      <h2 className="display text-2xl text-ink">{title}</h2>
      <div className="space-y-3 leading-relaxed">{children}</div>
    </div>
  );
}
