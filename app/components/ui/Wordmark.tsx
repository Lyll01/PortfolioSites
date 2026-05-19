type Props = {
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  variant?: "light" | "dark";
  className?: string;
  as?: "span" | "div" | "p";
};

const sizes = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-4xl lg:text-5xl",
  xl: "text-5xl sm:text-7xl lg:text-8xl",
  hero: "text-[18vw] sm:text-[15vw] lg:text-[14vw] xl:text-[200px]",
};

export function Wordmark({
  size = "md",
  variant = "dark",
  className = "",
  as: Tag = "span",
}: Props) {
  const color = variant === "light" ? "text-cream" : "text-ink";
  return (
    <Tag
      className={`font-display tracking-tight leading-none ${sizes[size]} ${color} ${className}`}
      aria-label="AtelierWebFrance"
    >
      Atelier<em className="italic-display text-vermillion">Web</em>France
    </Tag>
  );
}
