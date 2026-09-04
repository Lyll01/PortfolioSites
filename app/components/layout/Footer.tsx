import Link from "next/link";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Wordmark } from "../ui/Wordmark";
import { NAV_LINKS, STUDIO } from "@/app/data/navigation";
import { GTM_ID } from "../analytics/consent";

const OFFERS = [
  { label: "Création de sites", href: "/tarifs#offre-creation" },
  { label: "Refonte", href: "/tarifs#offre-refonte" },
  { label: "Référencement local", href: "/tarifs#offre-referencement" },
  { label: "Plaque NFC avis Google", href: "/tarifs#plaque-nfc" },
  { label: "Modifications", href: "/tarifs#offre-modifications" },
  { label: "Questions fréquentes", href: "/tarifs#faq" },
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
              Studio web indépendant — création de sites internet pro, pas chers
              et sur-mesure, et référencement Google pour TPE, PME, indépendants
              et associations.
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-cream/50">
              {STUDIO.city} et alentours · Travaille partout en France
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="mono-label !text-cream/60">Navigation</h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.id}>
                  {link.kind === "page" ? (
                    <Link
                      href={link.href}
                      className="text-sm text-cream/80 transition-colors hover:text-vermillion"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="text-sm text-cream/80 transition-colors hover:text-vermillion"
                    >
                      {link.label}
                    </a>
                  )}
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
                  <Link
                    href={o.href}
                    className="text-sm text-cream/80 transition-colors hover:text-vermillion"
                  >
                    {o.label}
                  </Link>
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
              <Button href="/contact" variant="primary" size="sm">
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
            Le studio web indépendant, basé à {STUDIO.city} et alentours, qui
            crée des sites internet pas chers et sur-mesure pour les TPE, PME,
            indépendants et associations, partout en France.
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
            {/* Retrait du consentement aussi simple que son recueil (CNIL).
                Masqué si aucun traceur n'est configuré : rien à gérer. */}
            {GTM_ID && (
              <li>
                <button
                  type="button"
                  data-cookie-settings
                  className="cursor-pointer transition-colors hover:text-cream"
                >
                  Gérer mes cookies
                </button>
              </li>
            )}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
