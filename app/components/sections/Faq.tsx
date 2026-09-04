import { Container } from "../ui/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { FAQ_ITEMS } from "@/app/data/faq";

/**
 * FAQ visible — contrepartie obligatoire du balisage JSON-LD FAQPage :
 * Google exige que les questions/réponses balisées soient affichées.
 */
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-bone-deep py-24 lg:py-32">
      <Container>
        <SectionHeader
          eyebrow="QUESTIONS FRÉQUENTES"
          title={
            <>
              Ce qu&apos;on nous demande{" "}
              <em className="italic-display">le plus souvent</em>.
            </>
          }
        />

        <dl className="mt-16 max-w-3xl lg:mt-20">
          {FAQ_ITEMS.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <div className="border-t border-ink/15 py-8 lg:py-10">
                <dt className="display text-xl text-ink lg:text-2xl">
                  {item.question}
                </dt>
                <dd className="mt-4 leading-relaxed text-ink-soft">
                  {item.answer}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}
