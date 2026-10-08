import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/auth/session";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ProfileCard } from "@/components/profile/ProfileCard";
import { connectToDatabase } from "@/lib/mongodb";
import { VIPPlan } from "@/models/VIPPlan";

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  await connectToDatabase();

  const currentVipPlan = user.currentVipPlan
    ? await VIPPlan.findById(user.currentVipPlan).lean() as {
        level: number;
        name: string;
        depositAmount: number;
        dailyIncome: number;
        dailyTasksRequired: number;
      } | null
    : null;

  return (
    <div className="mx-auto min-h-[100dvh] w-full max-w-md">
      <main className="space-y-4 px-4 pb-28 pt-5">
        <div className="animate-fade-in">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/25">
            Your account
          </p>
          <h1 className="mt-1 text-2xl font-black tracking-tight text-white">
            Profile
          </h1>
        </div>

        <ProfileCard
          user={{
            username: user.username,
            status: user.status,
            createdAt: user.createdAt.toISOString(),
          }}
          hasVip={!!currentVipPlan}
          vipName={currentVipPlan?.name}
        />
      </main>

      <BottomNav />
    </div>
  );
}
