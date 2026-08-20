"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  CONSENT_EVENT,
  ConsentValue,
  GTM_ID,
  readConsent,
  readRawConsent,
  saveConsent,
  updateGoogleConsent,
} from "./consent";

/**
 * Bannière de consentement aux cookies.
 *
 * Conformité CNIL :
 *  - « Refuser » est aussi visible et aussi accessible qu'« Accepter » ;
 *  - le choix est révocable à tout moment via [data-cookie-settings] ;
 *  - rien n'est déposé tant que l'utilisateur n'a pas accepté.
 */
export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [current, setCurrent] = useState<ConsentValue | null>(null);
  const acceptRef = useRef<HTMLButtonElement>(null);
  const reopenedRef = useRef(false);

  const open = useCallback(() => {
    reopenedRef.current = true;
    setCurrent(readRawConsent());
    setVisible(true);
  }, []);

  useEffect(() => {
    if (!GTM_ID) return;

    const choice = readConsent();
    if (choice === "granted") {
      updateGoogleConsent(true);
    } else if (choice === null) {
      // Aucun choix, ou choix périmé (> 6 mois) : on redemande.
      setVisible(true);
    }
  }, []);

  // Réouverture depuis n'importe quel élément [data-cookie-settings].
  useEffect(() => {
    const onOpen = () => open();
    const onClick = (e: MouseEvent) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      if (target.closest("[data-cookie-settings]")) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener(CONSENT_EVENT, onOpen);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener(CONSENT_EVENT, onOpen);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  useEffect(() => {
    if (visible && reopenedRef.current) acceptRef.current?.focus();
  }, [visible]);

  const decide = (granted: boolean) => {
    saveConsent(granted ? "granted" : "denied");
    updateGoogleConsent(granted);
    setVisible(false);
  };

  if (!GTM_ID || !visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Consentement aux cookies"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl border border-ink bg-cream p-5 shadow-[0_18px_50px_rgba(0,0,0,0.25)] sm:inset-x-6 sm:p-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="text-sm leading-relaxed text-ink-soft">
          <p className="font-medium text-ink">Cookies de mesure d&apos;audience</p>
          <p className="mt-1">
            On mesure la fréquentation du site pour l&apos;améliorer. Rien
            n&apos;est déposé sans ton accord, et tu peux changer d&apos;avis
            quand tu veux.{" "}
            <Link
              href="/confidentialite"
              className="text-vermillion underline underline-offset-2"
            >
              En savoir plus
            </Link>
          </p>
          {current && (
            <p className="mt-2 text-xs text-ash">
              Choix actuel :{" "}
              {current === "granted" ? "cookies acceptés" : "cookies refusés"}.
            </p>
          )}
        </div>

        {/* Les deux boutons ont volontairement le même poids visuel. */}
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => decide(false)}
            className="inline-flex h-10 flex-1 items-center justify-center border border-ink px-4 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-cream sm:flex-none"
          >
            Refuser
          </button>
          <button
            ref={acceptRef}
            type="button"
            onClick={() => decide(true)}
            className="inline-flex h-10 flex-1 items-center justify-center border border-ink bg-ink px-4 text-sm font-medium text-cream transition-colors hover:bg-vermillion hover:border-vermillion sm:flex-none"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
