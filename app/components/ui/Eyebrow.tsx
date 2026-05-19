import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className = "" }: Props) {
  return (
    <span
      className={`mono-label inline-block text-ash ${className}`}
    >
      {children}
    </span>
  );
}
