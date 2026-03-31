import type { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "amber" | "outline";
type ButtonSize = "default" | "sm" | "full";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonAsAnchor = ButtonBaseProps &
  ComponentPropsWithoutRef<"a"> & { href: string };

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: never };

export type ButtonProps = ButtonAsAnchor | ButtonAsButton;

const base = "rounded-full font-medium cursor-pointer inline-block";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-accent text-white hover:opacity-90 transition-opacity",
  amber: "bg-amber text-white hover:opacity-90 transition-opacity",
  outline:
    "border border-espresso/15 text-espresso/60 hover:text-espresso transition-colors",
};

const sizes: Record<ButtonSize, string> = {
  default: "px-6 py-3 text-sm",
  sm: "px-4 py-2 text-xs md:px-5 md:py-2.5 md:text-sm",
  full: "block w-full py-3.5 text-sm text-center",
};

export default function Button({
  variant = "primary",
  size = "default",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();

  if ("href" in rest && rest.href) {
    return (
      <a className={classes} {...(rest as ComponentPropsWithoutRef<"a">)}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      {...(rest as ComponentPropsWithoutRef<"button">)}
    >
      {children}
    </button>
  );
}
