import { Card } from "@/components/ui/Card";
import { useLanguage } from "@/context/LanguageContext";

export function BalanceCard() {
  const { t } = useLanguage();

  return (
    <Card variant="subtle" className="animate-fade-in">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-black bg-gold-500/10 text-2xl shadow-[3px_3px_0px_#000000]">
          💰
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
            {t("walletHome")}
          </p>
          <p className="mt-0.5 text-sm font-medium text-white/40">
            {t("walletSub")}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <span className="rounded-md border-2 border-black bg-white/5 px-2 py-1 text-[10px] font-black text-white/30 shadow-[2px_2px_0px_#000000]">
          {t("comingSoon")}
        </span>
      </div>
    </Card>
  );
}
