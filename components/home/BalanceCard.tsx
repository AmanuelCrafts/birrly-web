import { Card } from "@/components/ui/Card";

export function BalanceCard() {
  return (
    <Card variant="subtle" className="animate-fade-in">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-500/[0.06] text-2xl">
          💰
        </div>
        <div className="flex-1">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">
            Wallet
          </p>
          <p className="mt-0.5 text-sm font-medium text-white/40">
            Your balance and transaction history will appear here.
          </p>
        </div>
      </div>
      <div className="mt-3">
        <span className="rounded-md bg-white/[0.03] px-2 py-1 text-[10px] font-bold text-white/30">
          Coming soon
        </span>
      </div>
    </Card>
  );
}
