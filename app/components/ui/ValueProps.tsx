import { BadgeEuro, Sparkles, Zap, Handshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Prop = {
  icon: LucideIcon;
  title: string;
  sub: string;
};

const PROPS: Prop[] = [
  {
    icon: BadgeEuro,
    title: "Prix bas",
    sub: "À partir de 349 €",
  },
  {
    icon: Sparkles,
    title: "Qualité",
    sub: "Design sur-mesure",
  },
  {
    icon: Zap,
    title: "Rapidité",
    sub: "Livraison rapide",
  },
  {
    icon: Handshake,
    title: "Proximité",
    sub: "Échange humain",
  },
];

type Props = {
  className?: string;
};

export function ValueProps({ className = "" }: Props) {
  return (
    <ul
      className={`grid grid-cols-2 divide-x divide-y divide-ink/10 border-y border-ink/10 lg:grid-cols-4 lg:divide-y-0 ${className}`}
      aria-label="Nos engagements"
    >
      {PROPS.map(({ icon: Icon, title, sub }) => (
        <li
          key={title}
          className="group flex items-center gap-4 px-5 py-6 lg:gap-5 lg:px-8 lg:py-8"
        >
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center border border-vermillion/40 text-vermillion transition-colors group-hover:bg-vermillion group-hover:text-cream lg:h-12 lg:w-12">
            <Icon size={20} strokeWidth={1.5} />
          </span>
          <div className="min-w-0">
            <p className="font-display text-xl text-ink lg:text-2xl">
              {title}
            </p>
            <p className="mono-label !text-ash">{sub}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
