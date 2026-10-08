import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface CurrentVipCardProps {
  hasVip: boolean;
  vip: {
    level: number;
    name: string;
    depositAmount: number;
    dailyIncome: number;
    dailyTasksRequired: number;
  } | null;
}

export function CurrentVipCard({ hasVip, vip }: CurrentVipCardProps) {
  if (!hasVip || !vip) {
    return (
      <Card variant="glow" className="animate-fade-in relative overflow-hidden">
        <div className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />
        <div className="relative">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">
            Current VIP
          </p>
          <div className="mt-4 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-black bg-white/5 text-3xl shadow-[3px_3px_0px_#000000]">
              💎
            </div>
            <div>
              <h2 className="text-xl font-black tracking-tight text-white/50">
                No Active VIP
              </h2>
              <p className="text-sm font-medium text-white/25">
                Choose a plan to get started.
              </p>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="premium" className="animate-fade-in relative overflow-hidden">
      <div className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-brand-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-brand-700/10 blur-3xl" />

      <div className="relative">
        <div className="flex items-center justify-between">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-300/60">
            Your Current VIP
          </p>
          <Badge variant="success">Active</Badge>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="animate-bounce-subtle flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-black bg-white/10 text-3xl shadow-[3px_3px_0px_#000000]">
            💎
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white">
              {vip.name}
            </h2>
            <p className="text-sm font-medium text-brand-300/60">
              {vip.depositAmount.toLocaleString()} ETB deposit
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-xl border-2 border-black bg-white/5 px-4 py-3 shadow-[3px_3px_0px_#000000]">
          <p className="text-[10px] font-black uppercase tracking-wider text-white/30">
            Daily Income
          </p>
          <p className="mt-0.5 text-2xl font-black text-white">
            +{vip.dailyIncome.toLocaleString()}{" "}
            <span className="text-sm font-bold text-brand-300/60">ETB / day</span>
          </p>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <span className="rounded-md border-2 border-black bg-white/5 px-2 py-1 text-[10px] font-black text-white/40 shadow-[2px_2px_0px_#000000]">
            🎯 {vip.dailyTasksRequired} daily tasks
          </span>
        </div>
      </div>
    </Card>
  );
}
