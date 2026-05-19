import { ReactNode } from "react";

type Props = {
  items: ReactNode[];
  speed?: "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  separator?: ReactNode;
  ariaLabel?: string;
};

export function Marquee({
  items,
  speed = "normal",
  pauseOnHover = true,
  className = "",
  separator = <span className="mx-8 text-ash/40">·</span>,
  ariaLabel = "Défilement",
}: Props) {
  const animClass =
    speed === "slow" ? "animate-marquee-slow" : "animate-marquee";

  const renderRow = (key: string) => (
    <div
      key={key}
      className={`flex shrink-0 items-center ${animClass}`}
      aria-hidden={key === "dup"}
    >
      {items.map((item, i) => (
        <span key={i} className="flex shrink-0 items-center">
          {item}
          {separator}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`relative overflow-hidden ${pauseOnHover ? "marquee-pause" : ""} ${className}`}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="flex w-max">
        {renderRow("a")}
        {renderRow("dup")}
      </div>
    </div>
  );
}
