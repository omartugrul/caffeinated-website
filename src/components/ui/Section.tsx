type MaxWidth = "xl" | "2xl" | "3xl" | "5xl" | "7xl";
type BgColor = "white" | "cream";

interface SectionProps {
  id?: string;
  maxWidth?: MaxWidth;
  bg?: BgColor;
  className?: string;
  children: React.ReactNode;
}

const maxWidthClasses: Record<MaxWidth, string> = {
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "5xl": "max-w-5xl",
  "7xl": "max-w-7xl",
};

const bgClasses: Record<BgColor, string> = {
  white: "bg-white",
  cream: "bg-cream",
};

export default function Section({
  id,
  maxWidth = "5xl",
  bg = "cream",
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-24 px-6 ${bgClasses[bg]} ${className}`.trim()}
    >
      <div className={`mx-auto ${maxWidthClasses[maxWidth]}`}>{children}</div>
    </section>
  );
}
