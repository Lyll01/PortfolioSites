import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Wordmark } from "../ui/Wordmark";
import { NAV_LINKS, STUDIO } from "@/app/data/navigation";

const OFFERS = [
  { label: "Création de sites", href: "/#offre-creation" },
  { label: "Refonte", href: "/#offre-refonte" },
  { label: "Référencement Référencement", href: "/#offre-Référencement" },
  { label: "Maintenance", href: "/#offre-maintenance" },
];

const LEGAL = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Confidentialité", href: "/confidentialite" },
  { label: "CGV", href: "/cgv" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream">
      <Container>
        <div className="grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-24">
          {/* Branding */}
          <div className="lg:col-span-4">
            <a
              href="/#top"
              aria-label="Retour en haut de page"
              className="inline-block transition-opacity hover:opacity-80"
            >
              <Wordmark size="lg" variant="light" />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/70">
              Studio web indépendant — sites sur-mesure et Référencement pour TPE,
              indépendants et associations.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-cream/50">
              {STUDIO.city} · {STUDIO.region} · Travaille partout en France
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mono-label !text-cream/60">Navigation</h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/80 transition-colors hover:text-vermillion"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Offers */}
          <div className="lg:col-span-2">
            <h3 className="mono-label !text-cream/60">Offres</h3>
            <ul className="mt-6 space-y-3">
              {OFFERS.map((o) => (
                <li key={o.label}>
                  <a
                    href={o.href}
                    className="text-sm text-cream/80 transition-colors hover:text-vermillion"
                  >
                    {o.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="mono-label !text-cream/60">Contact</h3>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${STUDIO.email}`}
                  className="text-cream transition-colors hover:text-vermillion"
                >
                  {STUDIO.email}
                </a>
              </li>
            </ul>

            <div className="mt-8">
              <Button href="/#contact" variant="primary" size="sm">
                Prendre RDV →
              </Button>
            </div>
          </div>
        </div>

        {/* Giant brand sign-off */}
        <div className="border-t border-cream/15 pt-12 pb-16 lg:pt-20 lg:pb-24">
          <Wordmark
            size="hero"
            variant="light"
            as="p"
            className="select-none"
          />
          <p className="mt-6 max-w-md font-mono text-xs uppercase tracking-wider text-cream/40">
            Le studio web indépendant, basé à {STUDIO.city}, qui travaille
            pour les TPE et indépendants partout en France.
          </p>
        </div>

        <div className="flex flex-col gap-4 border-t border-cream/15 py-8 text-xs text-cream/60 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} AtelierWebFrance · Tous droits réservés.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {LEGAL.map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="transition-colors hover:text-cream"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
