"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GA_ID } from "./consent";

/**
 * Envoie un `page_view` à chaque navigation côté client.
 *
 * `gtag('config')` n'émet la vue de page qu'au premier chargement. Avec l'App
 * Router, passer de / à /mentions-legales ne recharge pas la page : sans ce
 * composant, ces vues ne seraient jamais comptées.
 *
 * Le premier rendu est volontairement ignoré, sinon la page d'entrée serait
 * comptabilisée deux fois (une par `config`, une par cet effet).
 */
export function GaPageViews() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (!GA_ID) return;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag !== "function") return;

    w.gtag("event", "page_view", {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
