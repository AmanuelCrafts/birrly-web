"use client";

import { useLanguage } from "@/context/LanguageContext";
import type { Language } from "@/lib/i18n";

const languages: { code: Language; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇺🇸" },
  { code: "am", label: "አማ", flag: "🇪🇹" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

  return (
    <div className={`flex items-center gap-1 rounded-xl border-2 border-black bg-ink-800 p-1 shadow-[2px_2px_0px_#000000] ${className}`}>
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`
            flex items-center gap-1 rounded-lg border-2 px-2.5 py-1.5 text-[10px] font-black uppercase tracking-wider
            transition-all duration-100 cursor-pointer
            ${
              language === lang.code
                ? "border-black bg-brand-500 text-ink-950 shadow-[1px_1px_0px_#000000]"
                : "border-transparent text-white/40 hover:text-white/60"
            }
          `}
        >
          <span className="text-xs">{lang.flag}</span>
          {lang.label}
        </button>
      ))}
    </div>
  );
}
