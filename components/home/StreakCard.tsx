import { Card } from "@/components/ui/Card";

export function StreakCard() {
  return (
    <Card variant="subtle" className="animate-fade-in">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🔥</span>
        <div>
          <p className="text-sm font-black text-white">Daily Streak</p>
          <p className="text-xs font-medium text-white/30">
            Complete activities to build your streak.
          </p>
        </div>
      </div>
      <div className="mt-3">
        <span className="rounded-md border-2 border-black bg-white/5 px-2 py-1 text-[10px] font-black text-white/30 shadow-[2px_2px_0px_#000000]">
          Coming soon
        </span>
      </div>
    </Card>
  );
}
