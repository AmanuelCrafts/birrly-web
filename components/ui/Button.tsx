"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger" | "gold";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const variantClasses = {
  primary:
    "bg-brand-500 text-ink-950 border-2 border-black shadow-[4px_4px_0px_#000000] hover:bg-brand-400 hover:shadow-[3px_3px_0px_#000000] active:shadow-none",
  secondary:
    "bg-ink-800 text-white border-2 border-black shadow-[4px_4px_0px_#000000] hover:bg-ink-700 hover:shadow-[3px_3px_0px_#000000] active:shadow-none",
  ghost:
    "bg-transparent text-white/70 border-2 border-transparent shadow-none hover:text-white hover:bg-white/5 active:scale-[0.98]",
  danger:
    "bg-red-500 text-white border-2 border-black shadow-[4px_4px_0px_#000000] hover:bg-red-400 hover:shadow-[3px_3px_0px_#000000] active:shadow-none",
  gold:
    "bg-gold-500 text-ink-950 border-2 border-black shadow-[4px_4px_0px_#000000] hover:bg-gold-400 hover:shadow-[3px_3px_0px_#000000] active:shadow-none",
};

const sizeClasses = {
  sm: "h-10 px-5 text-xs",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "primary", size = "md", isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2 rounded-xl font-black uppercase tracking-wide
          transition-all duration-100 cursor-pointer select-none
          disabled:opacity-40 disabled:pointer-events-none
          active:translate-x-[3px] active:translate-y-[3px]
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${className}
        `}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
