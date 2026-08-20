"use client";

import { useState, FormEvent } from "react";
import { Check, Mail, MapPin } from "lucide-react";
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
                  <p className="mono-label">Basé à</p>
                  <p className="mt-2 inline-flex items-center gap-2 text-ink">
                    <MapPin size={16} strokeWidth={1.5} />
                    {STUDIO.city}, {STUDIO.country}
                  </p>
                  <p className="mt-1 text-xs text-ash">
                    Déplacement possible à Toulouse et alentours · sinon en visio
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

type FieldErrors = Record<string, string>;

function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    // Honeypot — champ caché que seuls les bots remplissent.
    // On n'inclut PAS de champ nommé "website"/"email"/etc. que les
    // gestionnaires de mots de passe rempliraient automatiquement.
    if (fd.get("botcheck")) {
      setState("success");
      return;
    }

    // Validation des champs obligatoires
    const nextErrors: FieldErrors = {};
    const name = (fd.get("name") as string)?.trim();
    const email = (fd.get("email") as string)?.trim();
    const type = (fd.get("type") as string)?.trim();
    const message = (fd.get("message") as string)?.trim();

    if (!name) nextErrors.name = "Merci d'indiquer votre nom.";
    if (!email) nextErrors.email = "Merci d'indiquer votre email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      nextErrors.email = "Cet email ne semble pas valide.";
    if (!type) nextErrors.type = "Sélectionnez un type de projet.";
    if (!message) nextErrors.message = "Décrivez votre besoin en quelques mots.";
    else if (message.length < 10)
      nextErrors.message = "Votre message est un peu court (10 caractères min.).";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setState("idle");
      return;
    }

    setState("submitting");

    fd.append("access_key", "17454c38-1863-4ae9-96d5-4d2830e35155");
    fd.append("subject", "Nouveau message depuis le site");
    fd.append("from_name", "Formulaire de contact");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });
      const data = await response.json();
      setState(data.success ? "success" : "error");
    } catch {
      setState("error");
    }
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
      onChange={(e) => {
        const { name } = e.target;
        if (name && errors[name]) {
          setErrors((prev) => {
            const next = { ...prev };
            delete next[name];
            return next;
          });
        }
      }}
      className="flex flex-col gap-7 bg-cream border border-ink/10 p-8 lg:p-12"
      noValidate
    >
      {/* Honeypot — checkbox cachée native Web3Forms (ignorée par l'autofill) */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />

      <Field
        id="name"
        label="Nom complet *"
        required
        type="text"
        error={errors.name}
      />
      <Field
        id="email"
        label="Email *"
        required
        type="email"
        error={errors.email}
      />
      
      <Field id="company" label="Entreprise / Association" type="text" />

      <Select
        id="type"
        label="Type de projet *"
        required
        options={PROJECT_TYPES}
        error={errors.type}
      />
      <Select id="budget" label="Budget envisagé" options={BUDGETS} />

      <Textarea
        id="message"
        label="Votre message *"
        required
        rows={6}
        minLength={20}
        error={errors.message}
      />

      {state === "error" && (
        <p className="text-sm text-vermillion">
          Une erreur est survenue lors de l&apos;envoi. Réessayez, ou
          écrivez-moi directement à {STUDIO.email}.
        </p>
      )}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        className="w-full"
        disabled={state === "submitting"}
      >
        {state === "submitting" ? "Envoi en cours…" : "Envoyer le message →"}
      </Button>

      <details className="text-xs leading-relaxed text-ash">
        <summary className="cursor-pointer underline underline-offset-2 hover:text-ink">
          Que deviennent mes données ?
        </summary>
        <p className="mt-2">
          Vos données sont utilisées uniquement pour traiter votre demande et
          établir un éventuel devis (exécution de mesures précontractuelles,
          art. 6.1.b du RGPD). Elles transitent par Web3Forms jusqu&apos;à notre
          boîte email et sont conservées 3 ans après le dernier contact. Aucun
          spam, aucune liste tierce. Vos droits et le détail du traitement :{" "}
          <a
            href="/confidentialite"
            className="text-vermillion underline underline-offset-2"
          >
            politique de confidentialité
          </a>
          .
        </p>
      </details>
    </form>
  );
}

function Field({
  id,
  label,
  type = "text",
  required = false,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  error?: string;
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
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`border-b bg-transparent pb-2 text-base text-ink outline-none transition-colors focus:border-b-2 ${
          error
            ? "border-vermillion focus:border-vermillion"
            : "border-ink/20 focus:border-vermillion"
        }`}
      />
      {error && <FieldError id={id}>{error}</FieldError>}
    </label>
  );
}

function FieldError({ id, children }: { id: string; children: string }) {
  return (
    <span id={`${id}-error`} className="text-xs text-vermillion">
      {children}
    </span>
  );
}

function Select({
  id,
  label,
  options,
  required = false,
  error,
}: {
  id: string;
  label: string;
  options: SelectItem[];
  required?: boolean;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="mono-label">{label}</span>
      <select
        id={id}
        name={id}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        defaultValue=""
        className={`border-b bg-transparent pb-2 text-base text-ink outline-none transition-colors focus:border-b-2 ${
          error
            ? "border-vermillion focus:border-vermillion"
            : "border-ink/20 focus:border-vermillion"
        }`}
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
      {error && <FieldError id={id}>{error}</FieldError>}
    </label>
  );
}

function Textarea({
  id,
  label,
  rows = 5,
  required = false,
  minLength,
  error,
}: {
  id: string;
  label: string;
  rows?: number;
  required?: boolean;
  minLength?: number;
  error?: string;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="mono-label">{label}</span>
      <textarea
        id={id}
        name={id}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        rows={rows}
        minLength={minLength}
        className={`border-b bg-transparent pb-2 text-base text-ink outline-none transition-colors focus:border-b-2 resize-y ${
          error
            ? "border-vermillion focus:border-vermillion"
            : "border-ink/20 focus:border-vermillion"
        }`}
      />
      {error && <FieldError id={id}>{error}</FieldError>}
    </label>
  );
}
