"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

interface AuthLoadingOverlayProps {
  isLoading: boolean;
}

export function AuthLoadingOverlay({ isLoading }: AuthLoadingOverlayProps) {
  const { t } = useLanguage();
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-brand-500 border-t-transparent" />
        <p className="text-sm font-black uppercase tracking-wider text-white/60">
          {t("signingIn")}
        </p>
      </div>
    </div>
  );
}
