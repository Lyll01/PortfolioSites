import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "footer" | "header" | "main" | "article";
};

export function Container({ children, className = "", as: Tag = "div" }: Props) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[1920px] px-6 md:px-12 lg:px-20 xl:px-32 2xl:px-48 ${className}`}
    >
      {children}
    </Tag>
  );
}
