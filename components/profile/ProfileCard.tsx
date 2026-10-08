"use client";

import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";

interface ProfileCardProps {
  user: {
    username: string;
    status: string;
    createdAt: string;
  };
  hasVip: boolean;
  vipName?: string;
}

export function ProfileCard({ user, hasVip, vipName }: ProfileCardProps) {
  const router = useRouter();
  const { t } = useLanguage();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  const memberSince = new Date(user.createdAt).getFullYear();

  return (
    <Card variant="glow" className="animate-fade-in">
      <div className="flex flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-black bg-brand-500/10 text-3xl font-black text-brand-400 shadow-[4px_4px_0px_#000000]">
          {user.username.charAt(0).toUpperCase()}
        </div>
        <h2 className="mt-3 text-xl font-black text-white">{user.username}</h2>
        <p className="text-sm font-medium text-white/30">@{user.username}</p>

        <div className="mt-3">
          <Badge variant={user.status === "ACTIVE" ? "success" : "danger"}>
            {user.status === "ACTIVE" ? t("active") : t("suspended")}
          </Badge>
        </div>
      </div>

      <div className="mt-5 space-y-3 border-t-2 border-black/20 pt-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-white/30">{t("memberSince")}</span>
          <span className="text-sm font-black text-white">{memberSince}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-white/30">{t("currentVip")}</span>
          <span className="text-sm font-black text-white">
            {hasVip && vipName ? vipName : t("none")}
          </span>
        </div>
      </div>

      <Button
        variant="danger"
        onClick={handleLogout}
        className="mt-5 w-full"
      >
        {t("logout")}
      </Button>
    </Card>
  );
}
