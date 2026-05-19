import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "footer" | "header" | "main" | "article";
};

export function Container({ children, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1440px] px-6 md:px-12 lg:px-20 ${className}`}
    >
      {children}
    </Tag>
  );
}
