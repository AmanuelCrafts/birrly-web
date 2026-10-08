import type { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "gold" | "muted" | "success" | "danger";
}

const variantClasses = {
  default: "bg-brand-500/10 text-brand-300 border-brand-500/20",
  gold: "bg-gold-500/10 text-gold-400 border-gold-500/20",
  muted: "bg-white/[0.03] text-white/40 border-white/[0.06]",
  success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  danger: "bg-red-500/10 text-red-400 border-red-500/20",
};

export function Badge({ className = "", variant = "default", children, ...props }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
