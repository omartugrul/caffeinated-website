interface SectionHeadingProps {
  children: React.ReactNode;
  subtitle?: string;
}

export default function SectionHeading({
  children,
  subtitle,
}: SectionHeadingProps) {
  return (
    <>
      <h2 className="text-center text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-center text-espresso/50 max-w-lg mx-auto">
          {subtitle}
        </p>
      )}
    </>
  );
}
