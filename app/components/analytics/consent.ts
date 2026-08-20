/**
 * Consentement cookies — logique partagée (RGPD / art. 82 loi Informatique et Libertés).
 *
 * Principes appliqués :
 *  - Aucun traceur non essentiel n'est activé avant un consentement explicite.
 *  - Le retrait du consentement est aussi simple que son recueil (CNIL) :
 *    tout élément portant `data-cookie-settings` rouvre la bannière.
 *  - Le choix est conservé 6 mois maximum, puis redemandé.
 */

export const CONSENT_STORAGE_KEY = "awf_cookie_consent";
export const CONSENT_MAX_AGE_MS = 6 * 30 * 24 * 60 * 60 * 1000; // ~6 mois
export const CONSENT_EVENT = "awf:consent-open";

export type ConsentValue = "granted" | "denied";

type StoredConsent = { v: ConsentValue; t: number };

/**
 * Identifiant de mesure GA4 propre à atelierwebfrance.
 *
 * Ce n'est pas un secret (il est visible dans le HTML public), d'où la valeur
 * par défaut en dur : le site est exporté en statique vers GitHub Pages, où
 * définir une variable d'environnement demanderait de toucher au workflow CI.
 * NEXT_PUBLIC_GA_ID permet malgré tout de la surcharger, ou de la vider en
 * développement pour ne rien envoyer à Google.
 */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-1G0S2BT7EW";

function parse(raw: string | null): StoredConsent | null {
  if (!raw) return null;
  try {
    const data = JSON.parse(raw) as Partial<StoredConsent>;
    if (data?.v !== "granted" && data?.v !== "denied") return null;
    if (typeof data.t !== "number") return null;
    return { v: data.v, t: data.t };
  } catch {
    return null;
  }
}

/** Choix courant, sans tenir compte de l'expiration (pour préremplir la bannière). */
export function readRawConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    return parse(window.localStorage.getItem(CONSENT_STORAGE_KEY))?.v ?? null;
  } catch {
    return null;
  }
}

/** Choix valide : `null` si absent ou périmé (> 6 mois) — on redemande alors. */
export function readConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  let stored: StoredConsent | null = null;
  try {
    stored = parse(window.localStorage.getItem(CONSENT_STORAGE_KEY));
  } catch {
    return null;
  }
  if (!stored) return null;
  if (Date.now() - stored.t > CONSENT_MAX_AGE_MS) return null;
  return stored.v;
}

export function saveConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      JSON.stringify({ v: value, t: Date.now() } satisfies StoredConsent),
    );
  } catch {
    /* stockage indisponible (navigation privée, quota) : on ignore */
  }
}

/**
 * Pousse la mise à jour vers Google Consent Mode v2.
 * Le mode par défaut ("denied") est posé dans le <head>, avant gtag.js.
 */
export function updateGoogleConsent(granted: boolean): void {
  if (typeof window === "undefined") return;
  const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
  if (typeof w.gtag !== "function") return;
  w.gtag("consent", "update", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: granted ? "granted" : "denied",
  });
}

/** Rouvre la bannière de consentement (bouton « Gérer mes cookies »). */
export function openConsentBanner(): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT));
}
