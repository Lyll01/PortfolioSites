import Script from "next/script";
import { GA_ID } from "./consent";
import { GaPageViews } from "./GaPageViews";

/**
 * Google Analytics 4 (gtag.js) + Consent Mode v2.
 *
 * Ordre d'exécution garanti :
 *  1. `beforeInteractive` — Consent Mode par défaut sur « denied » ; hissé dans
 *     le <head>, donc exécuté AVANT le chargement de gtag.js. Sans cela, GA
 *     déposerait ses cookies dès la première visite, ce qui est interdit.
 *  2. `afterInteractive` — chargement de gtag.js puis `config`.
 *
 * Tant que l'utilisateur n'a pas accepté via la bannière, gtag fonctionne en
 * mode « cookieless pings » : aucun cookie n'est déposé, aucune donnée
 * identifiante n'est envoyée. CookieBanner pousse ensuite un `consent update`.
 */
export function GoogleAnalytics() {
  if (!GA_ID) return null;

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
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

      <Script
        id="ga-loader"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      <Script id="ga-config" strategy="afterInteractive">
        {`
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>

      <GaPageViews />
    </>
  );
}
