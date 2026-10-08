"use client";

import { forwardRef, type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, id, ...props }, ref) => {
    const inputId = id ?? props.name ?? label;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-xs font-black uppercase tracking-wider text-white/60"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full rounded-xl border-2 border-black bg-ink-800 px-4 py-3.5 text-sm font-bold text-white
            placeholder:font-normal placeholder:text-white/30 outline-none transition-all duration-100
            focus:border-brand-500 focus:ring-4 focus:ring-brand-500/20
            disabled:opacity-40
            shadow-[3px_3px_0px_#000000]
            active:translate-x-[1px] active:translate-y-[1px] active:shadow-[2px_2px_0px_#000000]
            ${error ? "border-red-500" : ""}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="mt-2 text-xs font-bold text-red-400">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
