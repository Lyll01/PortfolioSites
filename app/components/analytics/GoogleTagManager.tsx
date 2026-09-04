import Script from "next/script";
import { GTM_ID } from "./consent";
import { GtmPageViews } from "./GtmPageViews";

const CONSENT_DEFAULT_JS = `
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
`;

/**
 * Consent Mode v2 — état par défaut « denied ». À placer dans le <head> du
 * layout racine, en tout premier.
 *
 * Volontairement un <script> inline brut et NON un next/script
 * `beforeInteractive` : en export statique, cette stratégie ne hissait pas le
 * script dans le <head>. Il n'apparaissait que dans la charge utile RSC et
 * n'était donc exécuté qu'à l'hydratation — après le HTML de la page, et en
 * déclenchant une erreur d'hydratation React (<script> rendu hors document).
 *
 * Ici, le script est présent dans le HTML servi et s'exécute avant tout le
 * reste, donc avant le conteneur GTM (chargé en `afterInteractive`). Sans
 * cela, les balises déposeraient leurs cookies dès la première visite.
 */
export function GtmConsentDefault() {
  if (!GTM_ID) return null;

  return (
    <script
      id="gtm-consent-default"
      dangerouslySetInnerHTML={{ __html: CONSENT_DEFAULT_JS }}
    />
  );
}

/**
 * Chargeur du conteneur Google Tag Manager. À placer dans <body>.
 *
 * GTM est le seul chargeur d'analytics du site : la balise GA4
 * (G-T2CC1RGQ31) vit dans le conteneur, pas dans le code. Ne jamais ajouter
 * gtag.js en parallèle, sinon chaque visite serait comptée deux fois.
 *
 * Le consentement par défaut est posé en amont par <GtmConsentDefault />.
 * Côté GTM, la balise GA4 doit être conditionnée au consentement :
 * Paramètres de la balise → Consentement supplémentaire requis →
 * `analytics_storage`. CookieBanner pousse le `consent update` au clic.
 */
export function GoogleTagManager() {
  if (!GTM_ID) return null;

  return (
    <>
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
