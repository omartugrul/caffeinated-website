type LogoVariant = "gradient" | "outline" | "white";
type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

const sizeClasses: Record<LogoSize, string> = {
  sm: "text-[24px]",
  md: "text-[28px]",
  lg: "text-3xl sm:text-4xl",
};

const variantStyles: Record<LogoVariant, React.CSSProperties> = {
  gradient: {
    fontFamily: "var(--font-plus-jakarta)",
    fontWeight: 800,
    fontStyle: "italic",
    background:
      "linear-gradient(to right, #C8773A 0%, #8B4513 40%, #1A1713 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  outline: {
    fontFamily: "var(--font-plus-jakarta)",
    fontWeight: 800,
    fontStyle: "italic",
    color: "transparent",
    WebkitTextStroke: "1.5px #B07840",
  },
  white: {
    fontFamily: "var(--font-plus-jakarta)",
    fontWeight: 800,
    fontStyle: "italic",
    color: "white",
  },
};

export default function Logo({
  variant = "gradient",
  size = "md",
  className = "",
}: LogoProps) {
  return (
    <span
      className={`tracking-[-0.03em] lowercase leading-none ${sizeClasses[size]} ${className}`.trim()}
      style={variantStyles[variant]}
    >
      caffeinated.
    </span>
  );
}
