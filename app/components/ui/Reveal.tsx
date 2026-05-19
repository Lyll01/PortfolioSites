"use client";

import { ReactNode, useEffect, useRef, useState, ElementType } from "react";

type Props = {
  children: ReactNode;
  delay?: number; // ms
  className?: string;
  as?: ElementType;
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${shown ? "in-view" : ""} ${className}`}
      style={{ animationDelay: shown ? `${delay}ms` : undefined }}
    >
      {children}
    </Tag>
  );
}
