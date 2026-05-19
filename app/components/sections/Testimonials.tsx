import { Quote } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { Marquee } from "../ui/Marquee";
import { STATS, TESTIMONIALS, CLIENT_LOGOS } from "@/app/data/testimonials";

export function Testimonials() {
  return (
    <section id="temoignages" className="bg-ink py-24 text-cream lg:py-40">
      <Container>
        <SectionHeader
          eyebrow="ILS EN PARLENT MIEUX QUE MOI"
          title={
            <>
              Quelques{" "}
              <em className="italic-display">chiffres</em> et témoignages.
            </>
          }
          theme="dark"
        />

        {/* Stats */}
        <dl className="mt-16 grid grid-cols-2 gap-8 border-y border-cream/15 py-12 lg:mt-24 lg:grid-cols-4 lg:gap-12 lg:py-16">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div>
                <dt className="mono-label !text-cream/60">{s.label}</dt>
                <dd className="font-display mt-3 text-5xl text-cream lg:text-7xl">
                  {s.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>

        {/* Quotes */}
        <div className="mt-20 grid grid-cols-1 gap-10 lg:mt-24 lg:grid-cols-3 lg:gap-12">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.author} delay={i * 150} as="article">
              <figure className="flex h-full flex-col gap-6">
                <Quote
                  size={32}
                  strokeWidth={1.5}
                  className="text-vermillion"
                  aria-hidden
                />
                <blockquote className="font-display text-2xl leading-snug text-cream lg:text-3xl">
                  « {t.quote} »
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-4 border-t border-cream/15 pt-6">
                  <div>
                    <p className="font-medium text-cream">{t.author}</p>
                    <p className="mono-label !text-cream/50">{t.role}</p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Client logos marquee */}
        <div className="mt-24 lg:mt-32">
          <p className="mono-label text-center !text-cream/50">
            ILS NOUS FONT CONFIANCE
          </p>
          <div className="mt-8">
            <Marquee
              ariaLabel="Liste des clients"
              speed="slow"
              items={CLIENT_LOGOS.map((logo) => (
                <span
                  key={logo}
                  className="font-display text-3xl text-cream/60 lg:text-4xl"
                >
                  {logo}
                </span>
              ))}
              separator={<span className="mx-12 text-cream/20">·</span>}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
