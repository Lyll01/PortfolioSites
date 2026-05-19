import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type AsButton = BaseProps &
  ComponentProps<"button"> & { href?: undefined };

type AsLink = BaseProps & {
  href: string;
  type?: never;
  onClick?: never;
  disabled?: never;
};

type Props = AsButton | AsLink;

const base =
  "inline-flex items-center justify-center gap-2 font-sans font-medium tracking-tight " +
  "transition-all duration-200 ease-out " +
  "disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-vermillion text-cream hover:bg-vermillion-deep hover:-translate-y-px " +
    "active:translate-y-0",
  secondary:
    "border border-ink text-ink hover:bg-ink hover:text-cream",
  ghost:
    "text-ink hover:text-vermillion bg-transparent",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-base",
  lg: "h-14 px-8 text-base md:h-[56px]",
};

export function Button(props: Props) {
  const {
    children,
    variant = "primary",
    size = "md",
    className = "",
  } = props;

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    // Native <a> for in-page anchors — reliable scroll with App Router
    if (props.href.startsWith("#")) {
      return (
        <a href={props.href} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { type = "button", ...rest } = props as AsButton;
  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
