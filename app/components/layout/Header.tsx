"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { Wordmark } from "../ui/Wordmark";
import { NAV_LINKS } from "@/app/data/navigation";

function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

/** Normalise "/tarifs/" → "/tarifs" (trailingSlash activé dans next.config). */
function normalize(path: string) {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>("");
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);
  return active;
}

export function Header() {
  const scrolled = useScrolled(50);
  const pathname = normalize(usePathname() ?? "/");
  const onHome = pathname === "/";
  // Les ancres ne sont observables que sur la home : ailleurs, rien à suivre.
  const anchorIds = useMemo(
    () =>
      onHome
        ? NAV_LINKS.filter((l) => l.kind === "anchor").map((l) => l.id)
        : [],
    [onHome]
  );
  const activeAnchor = useActiveSection(anchorIds);
  const [open, setOpen] = useState(false);

  const isActive = (link: (typeof NAV_LINKS)[number]) =>
    link.kind === "page"
      ? pathname === normalize(link.href)
      : activeAnchor === link.id;

  // Body scroll lock for mobile menu
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ${
          scrolled
            ? "bg-bone/80 backdrop-blur-md border-b border-ink/10"
            : "bg-transparent"
        }`}
      >
        <Container>
          <nav
            aria-label="Principale"
            className="flex h-16 items-center justify-between lg:h-[72px]"
          >
            <Link
              href="/"
              aria-label="AtelierWebFrance — Accueil"
              className="transition-opacity hover:opacity-70"
            >
              <Wordmark size="md" />
            </Link>

            <ul className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => {
                const current = isActive(link);
                const className = `relative text-sm text-ink/80 transition-colors hover:text-vermillion ${
                  current ? "!text-ink" : ""
                }`;
                const content = (
                  <>
                    {link.label}
                    {current && (
                      <span className="absolute -bottom-1.5 left-0 h-0.5 w-full bg-vermillion" />
                    )}
                  </>
                );
                return (
                  <li key={link.id}>
                    {link.kind === "page" ? (
                      <Link
                        href={link.href}
                        aria-current={current ? "page" : undefined}
                        className={className}
                      >
                        {content}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        aria-current={current ? "true" : undefined}
                        className={className}
                      >
                        {content}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="hidden lg:block">
              <Button href="/contact" variant="primary" size="sm">
                Devis gratuit →
              </Button>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center text-ink"
              aria-label="Ouvrir le menu"
              aria-expanded={open}
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </nav>
        </Container>
      </header>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed inset-0 z-[60] bg-bone lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <Container className="flex h-full flex-col">
            <div className="flex h-16 items-center justify-between">
              <Link
                href="/"
                aria-label="AtelierWebFrance — Accueil"
                onClick={() => setOpen(false)}
              >
                <Wordmark size="md" />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center text-ink"
                aria-label="Fermer le menu"
              >
                <X size={24} strokeWidth={1.5} />
              </button>
            </div>

            <ul className="mt-12 flex flex-1 flex-col gap-6">
              {NAV_LINKS.map((link, i) => (
                <li
                  key={link.id}
                  style={{
                    opacity: 0,
                    animation: `rise 0.5s ${0.05 * i + 0.1}s cubic-bezier(0.22, 1, 0.36, 1) forwards`,
                  }}
                >
                  {link.kind === "page" ? (
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      aria-current={isActive(link) ? "page" : undefined}
                      className="display block text-5xl text-ink transition-colors hover:text-vermillion"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="display block text-5xl text-ink transition-colors hover:text-vermillion"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <div className="pb-12">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="w-full"
              >
                Discuter du projet →
              </Button>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
