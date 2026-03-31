"use client";

import { forwardRef, useId } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  optional?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, error, optional, className = "", id, ...rest },
  ref,
) {
  const generatedId = useId();
  const resolvedId = id ?? generatedId;

  const inputClasses = `w-full rounded-lg border bg-white px-4 py-3 text-sm text-espresso placeholder:text-espresso/40 focus:outline-none transition-colors ${
    error
      ? "border-red-400 focus:border-red-400"
      : "border-espresso/20 focus:border-amber"
  } ${className}`.trim();

  return (
    <div>
      {label && (
        <label htmlFor={resolvedId} className="block text-sm font-medium text-espresso mb-1.5">
          {label}
          {optional && (
            <span className="text-espresso/30 font-normal"> (optional)</span>
          )}
        </label>
      )}
      <input ref={ref} id={resolvedId} className={inputClasses} {...rest} />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
});

export default Input;
