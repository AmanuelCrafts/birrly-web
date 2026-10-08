"use client";

import { useEffect, useState } from "react";

interface AuthLoadingOverlayProps {
  isLoading: boolean;
}

export function AuthLoadingOverlay({ isLoading }: AuthLoadingOverlayProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-10 w-10 animate-spin rounded-full border-[3px] border-brand-500 border-t-transparent" />
        <p className="text-sm font-bold text-white/60">
          Signing you in...
        </p>
      </div>
    </div>
  );
}
