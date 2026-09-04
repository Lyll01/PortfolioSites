import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "../ui/Reveal";
import { NFC_REVIEW_PLAQUE as PLAQUE } from "@/app/data/services";

/**
 * Bloc produit mis en avant : la plaque NFC d'avis Google.
 *
 * L'objet est représenté par une illustration SVG inline plutôt qu'une photo :
 * fond réellement transparent (elle s'incruste sur le fond ink sans halo),
 * quelques Ko, nette sur tous les écrans, et aucun visuel de tiers réutilisé.
 * À remplacer par une photo maison détourée le jour où l'objet est en stock.
 */
export function NfcPlaque() {
  return (
    <Reveal>
      <article
        id="plaque-nfc"
        className="mt-12 scroll-mt-20 border border-vermillion/30 bg-vermillion/[0.04] lg:mt-16"
      >
        <div className="grid grid-cols-1 gap-10 p-7 lg:grid-cols-12 lg:gap-14 lg:p-10">
          {/* Illustration */}
          <div className="lg:col-span-5">
            <PlaqueIllustration />
          </div>

          {/* Argumentaire */}
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-4 border-b border-cream/15 pb-5">
              <div>
                <p className="mono-label !text-vermillion">NOUVEAU · À LA CARTE</p>
                <h3 className="font-display mt-2 text-3xl text-cream lg:text-4xl">
                  {PLAQUE.name}{" "}
                  <em className="italic-display text-vermillion">
                    {PLAQUE.italic}
                  </em>
                </h3>
              </div>
              <div className="w-full text-left sm:w-auto sm:text-right">
                <p className="font-display text-4xl text-vermillion lg:text-5xl">
                  {PLAQUE.price}
                </p>
                <p className="mono-label mt-1 !text-cream/45">
                  {PLAQUE.priceNote}
                </p>
              </div>
            </div>

            <p className="mt-6 leading-relaxed text-cream/80">{PLAQUE.intro}</p>

            <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {PLAQUE.benefits.map((b) => (
                <div key={b.title}>
                  <dt className="font-display text-lg text-cream">{b.title}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-cream/70">
                    {b.text}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 border-t border-cream/15 pt-6">
              <p className="mono-label !text-cream/50">
                INCLUS DANS LES {PLAQUE.price}
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {PLAQUE.included.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-cream/85"
                  >
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
            </div>

            <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-cream/10 pt-6 sm:flex-row sm:items-end">
              <p className="max-w-md text-xs italic leading-relaxed text-cream/50">
                {PLAQUE.note}
              </p>
              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center gap-2 bg-vermillion px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-vermillion-deep"
              >
                Commander la plaque
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/* Étoile 5 branches, rayon 1, centrée en (0,0) — mise à l'échelle à l'usage. */
const STAR =
  "M 0,-1 L 0.225,-0.309 L 0.951,-0.309 L 0.363,0.118 L 0.588,0.809 " +
  "L 0,0.382 L -0.588,0.809 L -0.363,0.118 L -0.951,-0.309 L -0.225,-0.309 Z";

function PlaqueIllustration() {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-labelledby="plaque-nfc-titre"
      className="h-auto w-full max-w-[380px]"
    >
      <title id="plaque-nfc-titre">
        Un téléphone approché d&apos;une plaque acrylique « Laissez-nous un avis »
        ouvre la page d&apos;avis Google.
      </title>

      <defs>
        {/* Le reflet est découpé sur la face pour épouser les coins arrondis. */}
        <clipPath id="nfc-plaque-face">
          <rect x="30" y="130" width="236" height="222" rx="22" />
        </clipPath>
      </defs>

      {/* Ombre portée au sol */}
      <ellipse cx="148" cy="372" rx="116" ry="13" fill="#faf6ec" opacity="0.07" />

      {/* ---------------- Téléphone ---------------- */}
      <g transform="rotate(17 338 15)">
        <rect
          x="290"
          y="-70"
          width="96"
          height="170"
          rx="17"
          fill="#131311"
          stroke="#faf6ec"
          strokeOpacity="0.45"
          strokeWidth="2"
        />
        {/* Écran : la page d'avis qui vient de s'ouvrir */}
        <rect x="298" y="-62" width="80" height="154" rx="11" fill="#faf6ec" />
        <rect x="308" y="0" width="60" height="6" rx="3" fill="#131311" opacity="0.12" />
        <rect x="308" y="12" width="42" height="6" rx="3" fill="#131311" opacity="0.12" />
        <g transform="translate(338 42)">
          {[-28, -14, 0, 14, 28].map((x) => (
            <path
              key={x}
              d={STAR}
              transform={`translate(${x} 0) scale(5.5)`}
              fill="#e8431c"
            />
          ))}
        </g>
        <rect x="308" y="66" width="60" height="15" rx="7.5" fill="#e8431c" />
      </g>

      {/* ---------------- Plaque acrylique ---------------- */}
      <g transform="rotate(-6 148 250)">
        {/* Tranche : donne l'épaisseur de l'acrylique */}
        <rect x="30" y="142" width="236" height="222" rx="22" fill="#a89e88" />
        <rect x="30" y="137" width="236" height="222" rx="22" fill="#cfc7b3" />
        {/* Face */}
        <rect x="30" y="130" width="236" height="222" rx="22" fill="#faf6ec" />
        {/* Reflet, pour lire le plexi */}
        <path
          d="M 30 130 H 132 L 30 232 Z"
          fill="#ffffff"
          opacity="0.5"
          clipPath="url(#nfc-plaque-face)"
        />

        <g transform="translate(148 0)">
          {/* Étoiles */}
          <g transform="translate(0 180)">
            {[-56, -28, 0, 28, 56].map((x) => (
              <path
                key={x}
                d={STAR}
                transform={`translate(${x} 0) scale(11)`}
                fill="#e8431c"
              />
            ))}
          </g>

          {/* Accroche */}
          <text
            x="0"
            y="230"
            textAnchor="middle"
            className="font-display"
            fontSize="29"
            fill="#131311"
          >
            Laissez-nous
          </text>
          <text
            x="0"
            y="266"
            textAnchor="middle"
            className="italic-display"
            fontSize="34"
            fill="#131311"
          >
            un avis
          </text>

          <line
            x1="-78"
            y1="288"
            x2="78"
            y2="288"
            stroke="#131311"
            strokeOpacity="0.18"
            strokeWidth="1.5"
          />

          {/* Mode d'emploi : téléphone + ondes, puis la consigne */}
          <g transform="translate(-78 300)">
            <rect
              x="0"
              y="0"
              width="22"
              height="30"
              rx="4"
              fill="none"
              stroke="#131311"
              strokeWidth="2"
            />
            <line
              x1="7"
              y1="5"
              x2="15"
              y2="5"
              stroke="#131311"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <g
              stroke="#e8431c"
              strokeWidth="2.2"
              fill="none"
              strokeLinecap="round"
              transform="translate(30 15)"
            >
              <path d="M 0 -5 A 7 7 0 0 1 0 5" />
              <path d="M 6 -9.5 A 12 12 0 0 1 6 9.5" opacity="0.7" />
            </g>
          </g>

          <text
            x="-26"
            y="311"
            className="font-mono"
            fontSize="9"
            letterSpacing="1.4"
            fill="#131311"
            fillOpacity="0.6"
          >
            APPROCHEZ
          </text>
          <text
            x="-26"
            y="325"
            className="font-mono"
            fontSize="9"
            letterSpacing="1.4"
            fill="#131311"
            fillOpacity="0.6"
          >
            VOTRE TÉLÉPHONE
          </text>
        </g>
      </g>

      {/* ---------------- Ondes NFC ----------------
          Tracées APRÈS la plaque : elles doivent passer au-dessus, dans
          l'espace laissé entre le coin de la plaque et le téléphone. */}
      <g stroke="#e8431c" strokeWidth="3" strokeLinecap="round" fill="none">
        <path d="M 254.8 111.8 A 14 14 0 0 1 263.9 127.0" />
        <path d="M 258.9 100.6 A 26 26 0 0 1 275.7 128.6" opacity="0.75" />
        <path d="M 263.0 89.3 A 38 38 0 0 1 287.6 130.3" opacity="0.5" />
      </g>
    </svg>
  );
}
