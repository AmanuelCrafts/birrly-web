"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { AuthLoadingOverlay } from "./AuthLoadingOverlay";
import { useLanguage } from "@/context/LanguageContext";

export function RegisterForm() {
  const router = useRouter();
  const { t } = useLanguage();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/");
        router.refresh();
      } else {
        setError(data.error ?? t("somethingWrong"));
        setIsLoading(false);
      }
    } catch {
      setError(t("somethingWrong"));
      setIsLoading(false);
    }
  }

  return (
    <>
      <AuthLoadingOverlay isLoading={isLoading} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          label={t("username")}
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder={t("username")}
          autoComplete="username"
          required
          minLength={3}
          maxLength={20}
        />

        <div className="relative">
          <Input
            label={t("password")}
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={t("password")}
            autoComplete="new-password"
            required
            minLength={8}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[42px] text-[10px] font-black uppercase tracking-wider text-white/40 hover:text-white/60 transition-colors cursor-pointer"
          >
            {showPassword ? "HIDE" : "SHOW"}
          </button>
        </div>

        <p className="text-xs font-medium text-white/30">
          Must be at least 8 characters
        </p>

        {error && (
          <p className="rounded-lg border-2 border-red-500/30 bg-red-500/10 px-3 py-2 text-sm font-bold text-red-400">
            {error}
          </p>
        )}

        <Button type="submit" isLoading={isLoading} className="w-full py-5" size="lg">
          {t("register")}
        </Button>
      </form>
    </>
  );
}
