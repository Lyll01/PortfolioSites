import Link from "next/link";
import { type Service } from "@/app/data/services";

type Props = {
  service: Service;
  /** Cible du CTA : ancre "#contact" sur la home, "/contact" sur les pages internes. */
  ctaHref?: string;
  /** Version courte (home) : masque la liste des livrables. */
  compact?: boolean;
};

export function ServiceCard({
  service,
  ctaHref = "/contact",
  compact = false,
}: Props) {
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
      className={`group relative flex h-full flex-col gap-6 p-8 transition-colors lg:p-10 ${
        compact ? "min-h-[400px]" : "min-h-[520px]"
      } ${containerStyles}`}
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

      {!compact && (
        <ul className={`space-y-2 text-sm ${deliverableColor}`}>
          {service.deliverables.map((d) => (
            <li key={d} className="flex gap-2">
              <span className="text-vermillion">·</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}

      <div
        className={`mt-auto flex items-end justify-between gap-4 border-t ${divider} pt-6`}
      >
        <div>
          <p className={`mono-label ${mutedLabel}`}>{priceLabel}</p>
          <p className="font-display text-3xl lg:text-4xl">{service.price}</p>
        </div>
        <CtaLink
          href={ctaHref}
          aria-label={ctaAria}
          className={`group/link inline-flex items-center gap-1 text-vermillion transition-colors ${ctaHover}`}
        >
          {ctaText}{" "}
          <span className="transition-transform group-hover/link:translate-x-1">
            →
          </span>
        </CtaLink>
      </div>
    </div>
  );
}

/**
 * Les ancres de page (#contact) restent des <a> natifs : le scroll de l'App
 * Router est alors fiable. Les liens de page passent par <Link> (navigation
 * client + slash final géré par Next).
 */
function CtaLink({
  href,
  children,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
} & React.ComponentProps<"a">) {
  if (href.startsWith("#")) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
