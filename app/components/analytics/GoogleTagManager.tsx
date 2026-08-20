import Script from "next/script";
import { GTM_ID } from "./consent";
import { GtmPageViews } from "./GtmPageViews";

/**
 * Google Tag Manager + Consent Mode v2.
 *
 * GTM est le seul chargeur d'analytics du site : la balise GA4
 * (G-T2CC1RGQ31) vit dans le conteneur, pas dans le code. Ne jamais ajouter
 * gtag.js en parallèle, sinon chaque visite serait comptée deux fois.
 *
 * Ordre d'exécution garanti :
 *  1. `beforeInteractive` — Consent Mode par défaut sur « denied ». Next hisse
 *     ce script dans le <head>, donc il s'exécute AVANT le chargement de GTM.
 *     Sans cela, les balises déposeraient leurs cookies dès la première visite.
 *  2. `afterInteractive` — chargement du conteneur.
 *
 * Côté GTM, la balise GA4 doit être conditionnée au consentement :
 * Paramètres de la balise → Consentement supplémentaire requis →
 * `analytics_storage`. CookieBanner pousse le `consent update` au clic.
 */
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <>
      <Script id="gtm-consent-default" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){ dataLayer.push(arguments); }
          window.gtag = gtag;
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
            wait_for_update: 500
          });
        `}
      </Script>

      <Script id="gtm-loader" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      <GtmPageViews />
    </>
  );
}

/** Fallback <noscript> de GTM, à placer juste après l'ouverture de <body>. */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;

  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
