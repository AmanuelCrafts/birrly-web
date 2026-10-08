"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const navItems = [
  { href: "/", labelKey: "home" as const, icon: "🏠" },
  { href: "/earn", labelKey: "earn" as const, icon: "🔥" },
  { href: "/wallet", labelKey: "wallet" as const, icon: "💰" },
  { href: "/plans", labelKey: "plans" as const, icon: "🎯" },
  { href: "/profile", labelKey: "profile" as const, icon: "👤" },
];

export function BottomNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-md">
        <div className="mx-3 mb-3 rounded-2xl border-2 border-black bg-ink-900 shadow-[0_-4px_0px_#000000]">
          <div className="flex items-center justify-around px-1 py-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative flex flex-col items-center gap-0.5 rounded-xl border-2 px-3 py-1.5
                    transition-all duration-100
                    ${
                      isActive
                        ? "border-black bg-brand-500 text-ink-950 shadow-[2px_2px_0px_#000000]"
                        : "border-transparent text-white/40 hover:border-white/10 hover:text-white/60"
                    }
                  `}
                >
                  <span className="text-lg leading-none">{item.icon}</span>
                  <span className="text-[9px] font-black uppercase tracking-wider">
                    {t(item.labelKey)}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
