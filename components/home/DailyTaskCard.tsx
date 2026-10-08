import { Card } from "@/components/ui/Card";

export function DailyTaskCard() {
  return (
    <Card variant="subtle" className="animate-fade-in">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🎯</span>
        <div>
          <p className="text-sm font-black text-white">Daily Activities</p>
          <p className="text-xs font-medium text-white/30">
            Complete daily activities and build your streak.
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
