import Link from "next/link";
import { ArrowRight, ServerCog, ShieldCheck } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { ServiceCard } from "./ServiceCard";
import {
  SERVICES,
  EXTRA_SERVICES,
  RECURRING_PLANS,
} from "@/app/data/services";

/**
 * Version courte de l'offre, affichée sur la home : les 3 packs de création
 * et un aperçu du reste. Le détail complet (refonte, Google Business,
 * modifications à l'acte, abonnements) vit sur /tarifs.
 */
export function Services() {
  // Aperçu construit depuis les mêmes données que /tarifs — jamais désynchronisé.
  const alsoAvailable = [
    ...EXTRA_SERVICES.map((s) => ({
      label: s.label,
      price: s.pricePrefix ? `${s.pricePrefix} ${s.price}` : s.price,
    })),
    ...RECURRING_PLANS.filter((p) => p.featured).map((p) => ({
      label: `${p.name} ${p.italic}`,
      price: `Dès ${p.price}`,
    })),
  ];

  return (
    <section id="services" className="bg-ink py-24 text-cream lg:py-40">
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

        {/* Les 3 packs de création */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-8">
          {SERVICES.map((service, i) => (
            <Reveal key={service.number} delay={i * 100} as="article">
              <ServiceCard service={service} ctaHref="#contact" />
            </Reveal>
          ))}
        </div>

        {/* Inclus avec tous les packs — version condensée */}
        <Reveal>
          <ul className="mt-10 flex flex-col gap-4 border border-cream/15 p-6 sm:flex-row sm:items-center sm:gap-10 lg:mt-12 lg:p-7">
            <li className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-vermillion text-vermillion">
                <ServerCog size={19} strokeWidth={1.5} />
              </span>
              <span className="text-sm text-cream/85">
                Hébergement &amp; HTTPS{" "}
                <span className="text-vermillion">offerts</span>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-cream/40 text-cream">
                <ShieldCheck size={19} strokeWidth={1.5} />
              </span>
              <span className="text-sm text-cream/85">
                Pack RGPD inclus (mentions légales, cookies)
              </span>
            </li>
          </ul>
        </Reveal>

        {/* Aperçu du reste de l'offre → /tarifs */}
        <Reveal>
          <div className="mt-12 border-t border-cream/15 pt-10 lg:mt-16">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
              <div className="max-w-xl">
                <p className="mono-label !text-cream/50">
                  AUSSI DISPONIBLES
                </p>
                <ul className="mt-5 space-y-3">
                  {alsoAvailable.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-baseline justify-between gap-6 border-b border-cream/10 pb-3 text-sm"
                    >
                      <span className="text-cream/85">{item.label}</span>
                      <span className="font-display shrink-0 text-lg text-vermillion">
                        {item.price}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-cream/55">
                  Refonte, fiche Google Business, modifications à l&apos;acte et
                  abonnements de référencement : tout est détaillé, prix
                  compris.
                </p>
              </div>

              <Link
                href="/tarifs"
                className="group inline-flex shrink-0 items-center gap-3 border border-cream/25 px-6 py-4 text-cream transition-colors hover:border-vermillion hover:text-vermillion"
              >
                Voir tous les tarifs
                <ArrowRight
                  size={18}
                  strokeWidth={1.5}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
