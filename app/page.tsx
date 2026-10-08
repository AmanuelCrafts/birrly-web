import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/session";
import { BottomNav } from "@/components/navigation/BottomNav";
import { CurrentVipCard } from "@/components/home/CurrentVipCard";
import { BalanceCard } from "@/components/home/BalanceCard";
import { StreakCard } from "@/components/home/StreakCard";
import { DailyTaskCard } from "@/components/home/DailyTaskCard";
import { VipPlanList } from "@/components/vip/VipPlanList";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { connectToDatabase } from "@/lib/mongodb";
import { VIPPlan } from "@/models/VIPPlan";
import { useLanguage } from "@/context/LanguageContext";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  await connectToDatabase();

  const plans = await VIPPlan.find({ isActive: true })
    .sort({ level: 1 })
    .lean();

  const currentVipPlan = user.currentVipPlan
    ? await VIPPlan.findById(user.currentVipPlan).lean() as {
        level: number;
        name: string;
        depositAmount: number;
        dailyIncome: number;
        dailyTasksRequired: number;
      } | null
    : null;

  const formattedPlans = plans.map((p) => ({
    level: p.level,
    name: p.name,
    depositAmount: p.depositAmount,
    dailyIncome: p.dailyIncome,
    dailyTasksRequired: p.dailyTasksRequired,
  }));

  return (
    <div className="mx-auto min-h-[100dvh] w-full max-w-md">
      <div className="flex justify-end px-4 pt-4">
        <LanguageSwitcher />
      </div>
      <main className="space-y-3 px-4 pb-28 pt-3">
        <div className="animate-fade-in">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25">
            Welcome back
          </p>
          <h1 className="mt-1 text-2xl font-black tracking-tight text-white">
            {user.username}
          </h1>
        </div>

        <CurrentVipCard
          hasVip={!!currentVipPlan}
          vip={
            currentVipPlan
              ? {
                  level: currentVipPlan.level,
                  name: currentVipPlan.name,
                  depositAmount: currentVipPlan.depositAmount,
                  dailyIncome: currentVipPlan.dailyIncome,
                  dailyTasksRequired: currentVipPlan.dailyTasksRequired,
                }
              : null
          }
        />

        <div className="grid grid-cols-2 gap-3">
          <BalanceCard />
          <StreakCard />
        </div>

        <DailyTaskCard />

        <div className="space-y-3 pt-1">
          <div className="flex items-center justify-between px-1">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-white/30">
              VIP Plans
            </h2>
            <span className="text-[10px] font-black text-white/20">
              {formattedPlans.length} plans
            </span>
          </div>
          <VipPlanList
            plans={formattedPlans}
            currentVipLevel={currentVipPlan?.level}
          />
        </div>
      </main>

      <BottomNav />
    </div>
  );
}
