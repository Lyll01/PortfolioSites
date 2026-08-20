"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GTM_ID } from "./consent";

/**
 * Pousse un événement `spa_page_view` dans le dataLayer à chaque navigation.
 *
 * Le déclencheur « All Pages » de GTM ne se déclenche qu'au chargement initial
 * du document. Avec l'App Router, passer de / à /mentions-legales ne recharge
 * pas la page : sans cet événement, ces vues ne remonteraient jamais dans GA4.
 *
 * Côté GTM, créer :
 *  - un déclencheur « Événement personnalisé » nommé `spa_page_view` ;
 *  - une balise « Google Analytics : événement GA4 », nom d'événement
 *    `page_view`, paramètres `page_path` et `page_title` mappés depuis des
 *    variables de couche de données du même nom, avec ce déclencheur.
 *
 * Le premier rendu est ignoré : la vue d'entrée est déjà comptée par la balise
 * de configuration GA4 déclenchée sur « All Pages ».
 */
export function GtmPageViews() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!GTM_ID) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const w = window as typeof window & { dataLayer?: unknown[] };
    if (!Array.isArray(w.dataLayer)) return;

    w.dataLayer.push({
      event: "spa_page_view",
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
