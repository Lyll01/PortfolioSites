"use client";

import { useState, FormEvent } from "react";
import { Check, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "../ui/Container";
import { Eyebrow } from "../ui/Eyebrow";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { STUDIO } from "@/app/data/navigation";
import {
  PROJECT_TYPES,
  BUDGETS,
  type SelectItem,
} from "@/app/data/contact-options";

type FormState = "idle" | "submitting" | "success" | "error";

const REASSURANCES = [
  "Devis détaillé gratuit",
  "Pas d'engagement avant signature",
  "Échange humain",
];

export function Contact() {
  return (
    <section id="contact" className="bg-bone py-24 lg:py-40">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>CONTACT · RÉPONSE SOUS 48H</Eyebrow>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-6 text-4xl text-ink sm:text-5xl lg:text-6xl">
                Parlons de votre{" "}
                <em className="italic-display">projet</em>.
              </h2>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Décrivez votre besoin en quelques lignes. Je vous réponds
                personnellement sous 48h ouvrées avec un premier retour clair.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <ul className="mt-10 space-y-6 border-t border-ink/15 pt-10">
                <li>
                  <p className="mono-label">Email direct</p>
                  <a
                    href={`mailto:${STUDIO.email}`}
                    className="mt-2 inline-flex items-center gap-2 text-ink hover:text-vermillion"
                  >
                    <Mail size={16} strokeWidth={1.5} />
                    {STUDIO.email}
                  </a>
                </li>
                <li>
                  <p className="mono-label">Téléphone</p>
                  <a
                    href={`tel:${STUDIO.phone.replace(/\s/g, "")}`}
                    className="mt-2 inline-flex items-center gap-2 text-ink hover:text-vermillion"
                  >
                    <Phone size={16} strokeWidth={1.5} />
                    {STUDIO.phone}
                  </a>
                  <p className="mt-1 text-xs text-ash">lun-ven · 9h-18h</p>
                </li>
                <li>
                  <p className="mono-label">Basé à</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-ink">
                    <MapPin size={16} strokeWidth={1.5} />
                    {STUDIO.city}, {STUDIO.region}
                  </p>
                  <p className="mt-1 text-xs text-ash">
                    Rendez-vous en visio par défaut
                  </p>
                </li>
              </ul>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-10 space-y-3">
                {REASSURANCES.map((r) => (
                  <li
                    key={r}
                    className="flex items-center gap-3 text-sm text-ink-soft"
                  >
                    <Check
                      size={16}
                      strokeWidth={2}
                      className="text-vermillion"
                    />
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal delay={200}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Honeypot
    if (fd.get("website")) {
      setState("success");
      return;
    }
    setState("submitting");
    // Simulate request (no API yet)
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  if (state === "success") {
    return (
      <div className="bg-cream border border-ink/10 p-8 lg:p-12">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-vermillion/10">
          <Check className="text-vermillion" size={24} strokeWidth={2} />
        </div>
        <h3 className="display mt-6 text-3xl text-ink lg:text-4xl">
          Message envoyé.
        </h3>
        <p className="mt-4 text-ink-soft">
          Merci ! Je vous réponds personnellement sous 48h ouvrées. En
          attendant, n&apos;hésitez pas à parcourir mes réalisations.
        </p>
        <div className="mt-8">
          <Button href="#realisations" variant="secondary" size="md">
            Voir les réalisations →
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-7 bg-cream border border-ink/10 p-8 lg:p-12"
      noValidate
    >
      {/* Honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <Field id="name" label="Nom complet *" required type="text" />
      <Field id="email" label="Email *" required type="email" />
      <Field id="company" label="Entreprise / Association" type="text" />

      <Select
        id="type"
        label="Type de projet *"
        required
        options={PROJECT_TYPES}
      />
      <Select id="budget" label="Budget envisagé" options={BUDGETS} />

      <Textarea
        id="message"
        label="Votre message *"
        required
        rows={6}
        minLength={20}
      />

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Envoi en cours…" : "Envoyer le message →"}
      </Button>

      <p className="text-xs leading-relaxed text-ash">
        En envoyant ce formulaire, vous acceptez que vos données soient
        utilisées uniquement pour vous répondre. Aucun spam, aucune liste
        tierce.
      </p>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="mono-label">{label}</span>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        aria-required={required}
        className="border-b border-ink/20 bg-transparent pb-2 text-base text-ink outline-none transition-colors focus:border-vermillion focus:border-b-2"
      />
    </label>
  );
}

function Select({
  id,
  label,
  options,
  required = false,
}: {
  id: string;
  label: string;
  options: SelectItem[];
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="mono-label">{label}</span>
      <select
        id={id}
        name={id}
        required={required}
        aria-required={required}
        defaultValue=""
        className="border-b border-ink/20 bg-transparent pb-2 text-base text-ink outline-none transition-colors focus:border-vermillion focus:border-b-2"
      >
        {options.map((item) =>
          "options" in item ? (
            <optgroup key={item.label} label={item.label}>
              {item.options.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </optgroup>
          ) : (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ),
        )}
      </select>
    </label>
  );
}

function Textarea({
  id,
  label,
  rows = 5,
  required = false,
  minLength,
}: {
  id: string;
  label: string;
  rows?: number;
  required?: boolean;
  minLength?: number;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="mono-label">{label}</span>
      <textarea
        id={id}
        name={id}
        required={required}
        aria-required={required}
        rows={rows}
        minLength={minLength}
        className="border-b border-ink/20 bg-transparent pb-2 text-base text-ink outline-none transition-colors focus:border-vermillion focus:border-b-2 resize-y"
      />
    </label>
  );
}
