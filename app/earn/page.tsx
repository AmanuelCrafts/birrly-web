import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/session";
import { BottomNav } from "@/components/navigation/BottomNav";
import { Card } from "@/components/ui/Card";

export const dynamic = "force-dynamic";

export default async function EarnPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="mx-auto min-h-[100dvh] w-full max-w-md">
      <main className="space-y-4 px-4 pb-28 pt-5">
        <div className="animate-fade-in">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
            Keep the streak alive
          </p>
          <h1 className="mt-1 text-2xl font-black tracking-tight text-white">
            Earn
          </h1>
        </div>

        <Card variant="glow" className="animate-fade-in">
          <div className="flex flex-col items-center py-10 text-center">
            <div className="animate-bounce-subtle text-6xl">🔥</div>
            <h2 className="mt-5 text-xl font-black text-white">
              Build your streak.
            </h2>
            <p className="mt-2 max-w-[240px] text-sm font-medium leading-relaxed text-white/30">
              Complete daily activities. Earn rewards. Level up your routine.
            </p>
            <div className="mt-5">
              <span className="rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 text-xs font-bold text-white/30">
                Coming soon
              </span>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card variant="subtle" className="animate-fade-in p-4">
            <span className="text-2xl">🎯</span>
            <p className="mt-2 text-xs font-bold text-white/50">Daily Tasks</p>
            <p className="text-[10px] text-white/25">Coming soon</p>
          </Card>
          <Card variant="subtle" className="animate-fade-in p-4">
            <span className="text-2xl">🏆</span>
            <p className="mt-2 text-xs font-bold text-white/50">Achievements</p>
            <p className="text-[10px] text-white/25">Coming soon</p>
          </Card>
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
