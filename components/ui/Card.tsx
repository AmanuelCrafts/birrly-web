import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "glow" | "premium" | "subtle";
}

export function Card({ className = "", variant = "default", children, ...props }: CardProps) {
  const variantClasses = {
    default: "bg-ink-900/80 border border-white/[0.06] backdrop-blur-sm",
    subtle: "bg-white/[0.02] border border-white/[0.04]",
    glow: "bg-ink-900/80 border border-brand-500/20 shadow-[0_0_30px_rgb(139_92_246/0.06)]",
    premium: "bg-gradient-to-br from-ink-800/90 to-ink-900/95 border border-brand-500/25 shadow-[0_0_40px_rgb(139_92_246/0.08)]",
  };

  return (
    <div
      className={`rounded-2xl p-5 transition-all duration-200 ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
