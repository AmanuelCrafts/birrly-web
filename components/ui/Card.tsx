import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glow" | "premium" | "subtle";
}

export function Card({ className = "", variant = "default", children, ...props }: CardProps) {
  const variantClasses = {
    default: "bg-ink-900 border-2 border-black shadow-[6px_6px_0px_#000000]",
    subtle: "bg-ink-900/50 border-2 border-white/10",
    glow: "bg-ink-900 border-2 border-brand-500/40 shadow-[6px_6px_0px_#000000,0_0_30px_rgb(139_92_246/0.08)]",
    premium: "bg-gradient-to-br from-ink-800 to-ink-900 border-2 border-brand-500/50 shadow-[6px_6px_0px_#000000,0_0_40px_rgb(139_92_246/0.1)]",
  };

  return (
    <div
      className={`rounded-2xl p-5 transition-all duration-150 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
