import { ReactNode } from "react";
import { Eyebrow } from "./Eyebrow";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  theme?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  theme = "light",
  align = "left",
  className = "",
}: Props) {
  const titleColor = theme === "dark" ? "text-cream" : "text-ink";
  const introColor = theme === "dark" ? "text-cream/70" : "text-ink-soft";
  const eyebrowColor = theme === "dark" ? "!text-cream/60" : "";
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <header className={`max-w-3xl ${alignment} ${className}`}>
      <Reveal>
        <Eyebrow className={eyebrowColor}>{eyebrow}</Eyebrow>
      </Reveal>
      <Reveal delay={80}>
        <h2 className={`display mt-4 text-4xl sm:text-5xl lg:text-6xl ${titleColor}`}>
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed ${introColor}`}>
            {intro}
          </p>
        </Reveal>
      )}
    </header>
  );
}
